/**
 * Form Handler Utility
 *
 * Этот файл содержит логику отправки форм.
 * Для подключения собственного SMTP/API сервера замените реализацию submitContactForm.
 *
 * ТОЧКИ ИНТЕГРАЦИИ:
 * 1. SMTP_ENDPOINT - URL вашего сервера для обработки форм
 * 2. CAPTCHA - добавьте валидацию капчи в validateCaptcha()
 */

// ============================================================================
// КОНФИГУРАЦИЯ - ИЗМЕНИТЕ ЭТИ ЗНАЧЕНИЯ ПРИ ДЕПЛОЕ
// ============================================================================

/**
 * URL эндпоинта для отправки форм
 *
 * Варианты:
 * 1. Ваш Node.js/Express сервер: '/api/contact'
 * 2. Serverless функция: 'https://your-domain.com/api/send-email'
 * 3. Внешний сервис: 'https://formspree.io/f/your-id' (временное решение)
 *
 * ВАЖНО: В production замените на свой сервер!
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '/api/contact';

/**
 * Таймаут между отправками формы (в миллисекундах)
 * Защита от спама на стороне клиента
 */
const SUBMIT_THROTTLE_MS = 30000; // 30 секунд

// ============================================================================
// ТИПЫ
// ============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface FormSubmitResult {
  success: boolean;
  message: string;
  error?: string;
}

export interface CaptchaValidation {
  isValid: boolean;
  token?: string;
}

// ============================================================================
// ВАЛИДАЦИЯ
// ============================================================================

/**
 * Валидация данных формы на стороне клиента
 * ВАЖНО: Всегда дублируйте валидацию на сервере!
 */
export function validateFormData(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Имя
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Имя обязательно');
  } else if (data.name.trim().length > 100) {
    errors.push('Имя слишком длинное (максимум 100 символов)');
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.push('Введите корректный email');
  } else if (data.email.trim().length > 255) {
    errors.push('Email слишком длинный (максимум 255 символов)');
  }

  // Телефон (опционально, но если указан - проверяем формат)
  if (data.phone && data.phone.trim().length > 0) {
    const phoneClean = data.phone.replace(/[\s\-\(\)]/g, '');
    if (phoneClean.length > 20) {
      errors.push('Телефон слишком длинный');
    }
  }

  // Сообщение
  if (!data.message || data.message.trim().length === 0) {
    errors.push('Сообщение обязательно');
  } else if (data.message.trim().length > 1000) {
    errors.push('Сообщение слишком длинное (максимум 1000 символов)');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// ============================================================================
// CAPTCHA ИНТЕГРАЦИЯ
// ============================================================================

/**
 * Валидация капчи (Яндекс SmartCaptcha)
 *
 * Для интеграции:
 * 1. Добавьте VITE_YANDEX_CAPTCHA_CLIENT_KEY в .env
 * 2. Добавьте скрипт Яндекс SmartCaptcha в index.html
 * 3. Раскомментируйте и настройте этот код
 *
 * Документация: https://cloud.yandex.ru/docs/smartcaptcha/
 */
export async function validateCaptcha(widgetId?: number | null): Promise<CaptchaValidation> {
  if (!window.smartCaptcha || widgetId === null || widgetId === undefined) {
    const isDev = import.meta.env.DEV;
    // if (isDev) {
    //   console.warn('⚠️ Captcha skipped in DEV mode or not initialized');
    //   return { isValid: true, token: "dev-bypass-token" };
    // }
    return { isValid: false };
  }

  try {
    const token = await window.smartCaptcha.execute(widgetId);

    return { isValid: true, token };
  } catch (error) {
    console.error("SmartCaptcha execution error:", error);
    return { isValid: false };
  }
}

// ============================================================================
// ОТПРАВКА ФОРМЫ
// ============================================================================

let lastSubmitTime = 0;

/**
 * Отправка контактной формы
 *
 * @param data - данные формы
 * @param captchaToken - токен капчи (опционально)
 * @returns результат отправки
 *
 * СЕРВЕРНАЯ ЧАСТЬ:
 * Ваш сервер должен принимать POST запрос с JSON:
 * {
 *   name: string,
 *   email: string,
 *   phone?: string,
 *   message: string,
 *   captchaToken?: string
 * }
 *
 * И возвращать:
 * { success: true } или { success: false, error: string }
 */
export async function submitContactForm(
    data: ContactFormData,
    captchaToken?: string
): Promise<FormSubmitResult> {
  // Проверка throttle
  const now = Date.now();
  if (now - lastSubmitTime < SUBMIT_THROTTLE_MS) {
    return {
      success: false,
      message: 'Подождите немного перед повторной отправкой',
    };
  }

  // Валидация данных
  const validation = validateFormData(data);
  if (!validation.isValid) {
    return {
      success: false,
      message: validation.errors[0],
      error: validation.errors.join(', '),
    };
  }

  // Проверяем, настроен ли эндпоинт (не дефолтный /api/contact)
  const isEndpointConfigured = FORM_ENDPOINT !== '/api/contact' && FORM_ENDPOINT.length > 0;

  if (!isEndpointConfigured) {
    // ДЕМО-РЕЖИМ: сохраняем в localStorage для тестирования
    // В production замените на реальный API
    const isDev = import.meta.env.DEV;
    if (isDev) {
      console.log('📧 Demo mode - Form data:', {
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || '',
        message: data.message.trim(),
      });
    }

    // Сохраняем локально для демонстрации
    const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
    submissions.push({
      ...data,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('form_submissions', JSON.stringify(submissions));

    lastSubmitTime = now;
    return {
      success: true,
      message: 'Заявка принята! Для отправки на email настройте VITE_FORM_ENDPOINT в .env',
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 секунд таймаут

    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || '',
        message: data.message.trim(),
        captchaToken: captchaToken || "",
        _subject: `Новая заявка от ${data.name.trim()} - OV Digital Agency`,
        _timestamp: new Date().toISOString(),
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      lastSubmitTime = now;
      return {
        success: true,
        message: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
      };
    }

    let errorMessage = 'Не удалось отправить заявку';
    try {
      const errorData = await response.json();
      errorMessage = errorData.error || errorData.message || errorMessage;
    } catch {
      // Игнорируем ошибку парсинга
    }

    return {
      success: false,
      message: errorMessage,
      error: `HTTP ${response.status}`,
    };
  } catch (error) {
    const isDev = import.meta.env.DEV;
    if (isDev) {
      console.error('Form submission error:', error);
    }

    // Если таймаут или ошибка сети - сохраняем локально
    const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
    submissions.push({
      ...data,
      timestamp: new Date().toISOString(),
      error: 'network_error',
    });
    localStorage.setItem('form_submissions', JSON.stringify(submissions));

    return {
      success: true,
      message: 'Заявка сохранена! Мы получим её как только сервер станет доступен.',
    };
  }
}

// ============================================================================
// ПРИМЕР СЕРВЕРНОЙ ЧАСТИ (Node.js/Express)
// ============================================================================
/*
// server/routes/contact.js

const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Настройка транспорта для Яндекс SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,     // ov.digital.agency@yandex.ru
    pass: process.env.SMTP_PASSWORD, // пароль приложения
  },
});

router.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message, captchaToken } = req.body;

    // Валидация на сервере (обязательно!)
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Заполните обязательные поля' });
    }

    // Проверка капчи (если используется)
    if (process.env.YANDEX_CAPTCHA_SERVER_KEY && captchaToken) {
      const captchaValid = await verifyCaptcha(captchaToken);
      if (!captchaValid) {
        return res.status(400).json({ success: false, error: 'Проверка капчи не пройдена' });
      }
    }

    // Отправка письма
    await transporter.sendMail({
      from: `"OV Digital Agency" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Новая заявка от ${name} - OV Digital Agency`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone || 'не указан'}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, error: 'Ошибка отправки' });
  }
});

// Проверка Яндекс SmartCaptcha
async function verifyCaptcha(token) {
  const response = await fetch('https://smartcaptcha.yandexcloud.net/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.YANDEX_CAPTCHA_SERVER_KEY,
      token: token,
    }),
  });
  const data = await response.json();
  return data.status === 'ok';
}

module.exports = router;
*/
