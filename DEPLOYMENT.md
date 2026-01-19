# OV Digital Agency - Руководство по развертыванию

## Содержание

1. [Требования](#требования)
2. [Локальный запуск](#локальный-запуск)
3. [Сборка для production](#сборка-для-production)
4. [Prerendering (SEO)](#prerendering-seo)
5. [Деплой на сервер](#деплой-на-сервер)
6. [Настройка форм (SMTP)](#настройка-форм-smtp)
7. [Настройка капчи](#настройка-капчи)
8. [Структура проекта](#структура-проекта)
9. [Безопасность](#безопасность)
10. [Рекомендации](#рекомендации)

---

## Требования

### Системные требования

- **Node.js**: 18.x или 20.x (LTS рекомендуется)
- **Менеджер пакетов**: npm, yarn, pnpm или bun
- **ОС**: Linux, macOS, Windows

### Проверка версий

```bash
node --version  # v18.x.x или v20.x.x
npm --version   # 9.x.x или выше
```

---

## Локальный запуск

### 1. Клонирование репозитория

```bash
git clone https://github.com/your-username/ov-digital-agency.git
cd ov-digital-agency
```

### 2. Установка зависимостей

```bash
npm install
# или
yarn install
# или
pnpm install
```

### 3. Настройка environment variables

```bash
cp .env.example .env
# Отредактируйте .env файл
```

### 4. Запуск в режиме разработки

```bash
npm run dev
```

Сайт будет доступен по адресу: `http://localhost:8080`

---

## Сборка для production

### Создание production build

```bash
npm run build
```

Результат сборки будет в папке `dist/`.

**Важно:** При сборке автоматически выполняется:
- Оптимизация изображений (WebP)
- **Prerendering всех страниц** (генерация статического HTML для SEO)
- Минификация кода
- Удаление console.log и debugger

### Предпросмотр production сборки

```bash
npm run preview
```

### Проверка типов

```bash
npm run build
# TypeScript проверка выполняется автоматически
```

### Линтинг

```bash
npm run lint
```

---

## Prerendering (SEO)

### Что это такое

Prerendering — это генерация статического HTML для каждой страницы сайта во время сборки. Это позволяет поисковым системам (Яндекс, Google) видеть полный контент страницы без выполнения JavaScript.

### Как это работает

1. При запуске `npm run build` плагин `vite-prerender-plugin` рендерит каждую страницу
2. Для каждого маршрута создаётся HTML-файл с полным контентом
3. Meta-теги (title, description, OG) генерируются индивидуально для каждой страницы
4. При открытии страницы пользователем React "гидратирует" статический HTML

### Преимущества

- ✅ **SEO**: Поисковые боты видят полный контент
- ✅ **Скорость**: Первый контент показывается мгновенно (FCP)
- ✅ **Social Sharing**: OG-теги корректно отображаются при шеринге
- ✅ **Совместимость**: Сайт работает даже без JavaScript

### Конфигурация

Файлы prerendering:

| Файл | Назначение |
|------|------------|
| `src/prerender.tsx` | Скрипт prerendering с маршрутами и мета-тегами |
| `vite.config.ts` | Конфигурация плагина |

### Добавление новой страницы

При добавлении новой страницы:

1. **Создайте компонент** в `src/pages/`

2. **Добавьте маршрут** в `src/App.tsx`:
```tsx
<Route path="/new-page" element={<NewPage />} />
```

3. **Добавьте в prerender** (`src/prerender.tsx`):

```tsx
// Импорт страницы
import NewPage from "./pages/NewPage";

// Добавьте в массив ROUTES
const ROUTES = [
  // ... существующие маршруты
  "/new-page",
];

// Добавьте мета-данные
const PAGE_META: Record<string, PageMeta> = {
  // ... существующие страницы
  "/new-page": {
    title: "Новая страница | OV Digital Agency",
    description: "Описание новой страницы для SEO.",
  },
};

// Добавьте в Routes внутри PrerenderApp
<Route path="/new-page" element={<NewPage />} />
```

4. **Пересоберите проект**:
```bash
npm run build
```

### Проверка prerendering

После сборки проверьте содержимое `dist/`:

```bash
# Должны быть HTML-файлы для каждой страницы
ls -la dist/
ls -la dist/about/
ls -la dist/services/

# Проверьте содержимое HTML
cat dist/index.html | head -50
cat dist/about/index.html | head -50
```

В HTML должен быть полный контент страницы, а не пустой `<div id="root"></div>`.

### Отладка

Если prerendering не работает:

1. Проверьте, что все страницы импортированы в `src/prerender.tsx`
2. Убедитесь, что нет ошибок при сборке
3. Проверьте консоль на ошибки SSR (некоторые библиотеки не работают на сервере)

---

## Деплой на сервер

### Вариант 1: VPS с Nginx (рекомендуется)

#### 1. Установка Node.js и Nginx

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install -y nginx nodejs npm
```

#### 2. Сборка проекта

```bash
npm install
npm run build
```

#### 3. Копирование файлов

```bash
sudo mkdir -p /var/www/ov-digital.ru
sudo cp -r dist/* /var/www/ov-digital.ru/
sudo chown -R www-data:www-data /var/www/ov-digital.ru
```

#### 4. Настройка Nginx

Создайте файл `/etc/nginx/sites-available/ov-digital.ru`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name ov-digital.ru www.ov-digital.ru;
    
    # Редирект на HTTPS (раскомментируйте после настройки SSL)
    # return 301 https://$server_name$request_uri;
    
    root /var/www/ov-digital.ru;
    index index.html;
    
    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml image/svg+xml;
    
    # Кеширование статики
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA роутинг - все запросы на index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Прокси для API (если сервер на том же хосте)
    # location /api {
    #     proxy_pass http://localhost:3001;
    #     proxy_http_version 1.1;
    #     proxy_set_header Upgrade $http_upgrade;
    #     proxy_set_header Connection 'upgrade';
    #     proxy_set_header Host $host;
    #     proxy_set_header X-Real-IP $remote_addr;
    #     proxy_cache_bypass $http_upgrade;
    # }
    
    # Безопасность
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### 5. Активация конфигурации

```bash
sudo ln -s /etc/nginx/sites-available/ov-digital.ru /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 6. Настройка SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d ov-digital.ru -d www.ov-digital.ru
```

---

### Вариант 2: Docker

#### Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf для Docker

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Запуск

```bash
docker build -t ov-digital-agency .
docker run -p 80:80 ov-digital-agency
```

---

### Вариант 3: Docker Compose (с API сервером)

```yaml
version: '3.8'

services:
  frontend:
    build: .
    ports:
      - "80:80"
    depends_on:
      - api
    
  api:
    build: ./server
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - SMTP_HOST=smtp.yandex.ru
      - SMTP_PORT=465
      - SMTP_USER=${SMTP_USER}
      - SMTP_PASSWORD=${SMTP_PASSWORD}
      - CONTACT_EMAIL=${CONTACT_EMAIL}
    restart: unless-stopped
```

---

## Настройка форм (SMTP)

### Точка интеграции

Файл: `src/lib/form-handler.ts`

Формы отправляют POST запрос на `VITE_FORM_ENDPOINT` (по умолчанию `/api/contact`).

### Формат запроса

```json
{
  "name": "Имя клиента",
  "email": "client@example.com",
  "phone": "+7 999 123-45-67",
  "message": "Текст сообщения",
  "captchaToken": "токен_капчи",
  "_subject": "Новая заявка от Имя клиента - OV Digital Agency",
  "_timestamp": "2026-01-19T12:00:00.000Z"
}
```

### Пример серверной части (Node.js/Express)

Создайте папку `server/` с файлами:

#### server/package.json

```json
{
  "name": "ov-digital-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "nodemailer": "^6.9.7",
    "helmet": "^7.1.0",
    "express-rate-limit": "^7.1.5"
  }
}
```

#### server/index.js

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://ov-digital.ru',
  methods: ['POST'],
}));
app.use(express.json({ limit: '10kb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 минута
  max: 5, // 5 запросов в минуту
  message: { success: false, error: 'Слишком много запросов. Попробуйте позже.' },
});

// SMTP транспорт
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.yandex.ru',
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Проверка капчи
async function verifyCaptcha(token) {
  if (!process.env.YANDEX_CAPTCHA_SERVER_KEY || !token) {
    return true; // Пропускаем если не настроено
  }
  
  try {
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
  } catch (error) {
    console.error('Captcha verification error:', error);
    return false;
  }
}

// API endpoint
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { name, email, phone, message, captchaToken } = req.body;
    
    // Валидация
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Заполните обязательные поля' 
      });
    }
    
    // Проверка email формата
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Некорректный email' 
      });
    }
    
    // Проверка капчи
    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return res.status(400).json({ 
        success: false, 
        error: 'Проверка капчи не пройдена' 
      });
    }
    
    // Отправка письма
    await transporter.sendMail({
      from: `"OV Digital Agency" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Новая заявка от ${name} - OV Digital Agency`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <table style="border-collapse: collapse;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Имя:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Телефон:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone || 'Не указан'}</td></tr>
        </table>
        <h3>Сообщение:</h3>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Отправлено: ${new Date().toLocaleString('ru-RU')}</p>
      `,
    });
    
    // Успех (не логируем данные для безопасности)
    console.log(`Contact form submitted from ${email.split('@')[1]}`);
    
    res.json({ success: true });
    
  } catch (error) {
    // Логируем только тип ошибки, не детали
    console.error('Email error:', error.code || 'Unknown');
    res.status(500).json({ 
      success: false, 
      error: 'Ошибка отправки. Попробуйте позже.' 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
```

---

## Настройка капчи

### Яндекс SmartCaptcha

1. Перейдите в [Yandex Cloud Console](https://console.cloud.yandex.ru/)
2. Создайте капчу в разделе SmartCaptcha
3. Укажите домен сайта
4. Получите `client_key` и `server_key`

### Интеграция на фронтенде

#### 1. Добавьте скрипт в `index.html`:

```html
<script src="https://smartcaptcha.yandexcloud.net/captcha.js" defer></script>
```

#### 2. Обновите `src/lib/form-handler.ts`:

Раскомментируйте код в функции `validateCaptcha()` и добавьте `VITE_YANDEX_CAPTCHA_CLIENT_KEY` в `.env`.

### Интеграция на сервере

Добавьте `YANDEX_CAPTCHA_SERVER_KEY` в environment variables сервера.

---

## Структура проекта

```
ov-digital-agency/
├── public/                 # Статические файлы
│   ├── favicon.png
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/            # Изображения и медиа
│   ├── components/        # React компоненты
│   │   ├── ui/           # UI компоненты (shadcn/ui)
│   │   └── cases/        # Превью кейсов
│   ├── data/             # Статические данные
│   ├── hooks/            # React хуки
│   ├── lib/              # Утилиты
│   │   ├── utils.ts      # Общие утилиты
│   │   └── form-handler.ts  # Обработка форм ⚡
│   ├── pages/            # Страницы приложения
│   │   ├── services/     # Страницы услуг
│   │   ├── cases/        # Страницы кейсов
│   │   └── blog/         # Страницы блога
│   ├── App.tsx           # Главный компонент (маршруты)
│   ├── main.tsx          # Точка входа (с hydration)
│   ├── prerender.tsx     # Скрипт prerendering (SEO) ⚡
│   └── index.css         # Глобальные стили
├── .env.example          # Шаблон environment variables
├── DEPLOYMENT.md         # Это руководство
├── vite.config.ts        # Конфигурация Vite + prerendering
└── tailwind.config.ts    # Конфигурация Tailwind
```

### Ключевые файлы для модификации

| Файл | Назначение |
|------|------------|
| `src/prerender.tsx` | **Prerendering: маршруты и мета-теги для SEO** |
| `src/lib/form-handler.ts` | Логика отправки форм |
| `vite.config.ts` | Конфигурация сборки и плагинов |
| `.env` | Environment variables |
| `index.html` | Базовый HTML шаблон |
| `public/robots.txt` | Настройки индексации |
| `public/sitemap.xml` | Карта сайта |

---

## Безопасность

### ✅ Реализовано

- HTTPS-ready конфигурация
- Валидация форм на клиенте
- Защита от повторных отправок (throttle)
- Согласие на обработку данных (GDPR)
- Отсутствие секретов в коде
- XSS защита (React по умолчанию)
- CORS настройки в примере сервера
- Rate limiting в примере сервера
- Удаление console.log в production

### ⚠️ Требуется настроить на сервере

- SSL сертификат (Let's Encrypt)
- Серверная валидация форм
- CAPTCHA проверка
- Безопасные HTTP заголовки (Nginx)
- Регулярные обновления зависимостей

### Рекомендации по безопасности

1. **Никогда** не храните SMTP пароли в коде
2. Используйте пароли приложений для Яндекс почты
3. Настройте rate limiting на сервере
4. Регулярно обновляйте зависимости: `npm audit`

---

## Рекомендации

### Производительность

- ✅ Изображения конвертированы в WebP
- ✅ Lazy loading для изображений
- ✅ Code splitting (React.lazy)
- ✅ Критический CSS inline
- ✅ Gzip сжатие (настроить в Nginx)

### SEO

- ✅ Meta title/description на всех страницах
- ✅ Open Graph теги
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Семантическая HTML структура
- ⏳ Рекомендуется добавить Яндекс.Метрику

### Масштабирование

При росте проекта рекомендуется:

1. **CDN** - Cloudflare или Yandex CDN для статики
2. **Кеширование** - Redis для API ответов
3. **Мониторинг** - Sentry для отслеживания ошибок
4. **CI/CD** - GitHub Actions для автодеплоя

### Потенциальные улучшения

1. Добавить Яндекс.Метрику и Google Analytics
2. Реализовать серверный рендеринг (SSR) для SEO
3. Добавить PWA поддержку
4. Интегрировать CRM для лидов
5. Добавить многоязычность (i18n)

---

## Поддержка

При возникновении вопросов:
- Email: ov.digital.agency@yandex.ru
- Telegram: @ov_digital_agency

---

*Документация обновлена: Январь 2026*
