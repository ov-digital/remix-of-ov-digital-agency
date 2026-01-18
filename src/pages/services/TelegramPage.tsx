import { MessageSquare } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const TelegramPage = () => {
  return (
    <ServicePageLayout
      title="Telegram-решения"
      subtitle="Боты, Mini Apps и автоматизация в Telegram"
      description="Разрабатываем Telegram-ботов и Mini Apps для бизнеса. Автоматизация продаж, клиентского сервиса и внутренних процессов. 80+ млн пользователей Telegram в России — ваши потенциальные клиенты."
      price="от 50 000 ₽"
      priceNote="или 2 750 ₽/час"
      icon={<MessageSquare className="w-8 h-8 text-primary" />}
      features={[
        "Telegram-боты любой сложности",
        "Mini Apps с интерфейсом внутри Telegram",
        "Интеграция с CRM и платёжными системами",
        "Уведомления и рассылки",
        "Каталоги товаров и оформление заказов",
        "Системы бронирования и записи",
        "Админ-панель для управления ботом",
        "Аналитика и статистика использования",
      ]}
      steps={[
        {
          title: "Проектирование",
          description: "Определяем сценарии использования, структуру команд и логику бота.",
        },
        {
          title: "Разработка",
          description: "Программируем бота, создаём интерфейс Mini App, подключаем интеграции.",
        },
        {
          title: "Тестирование",
          description: "Проверяем все сценарии, нагрузку, корректность интеграций.",
        },
        {
          title: "Запуск",
          description: "Размещаем на сервере, настраиваем мониторинг. Передаём управление.",
        },
      ]}
      technologies={[
        "Python", "aiogram", "Telegraf.js", "Node.js",
        "React", "Telegram Bot API", "Telegram Mini Apps",
        "PostgreSQL", "Redis", "ЮKassa", "CloudPayments",
      ]}
      benefits={[
        {
          title: "80+ млн аудитория",
          description: "Telegram — самый популярный мессенджер в России. Ваши клиенты уже там.",
        },
        {
          title: "Мгновенный доступ",
          description: "Пользователям не нужно устанавливать приложение. Бот работает сразу.",
        },
        {
          title: "Автоматизация 24/7",
          description: "Бот отвечает клиентам круглосуточно. Принимает заказы пока вы спите.",
        },
        {
          title: "Push-уведомления",
          description: "Высокий Open Rate — до 80%. Клиенты видят ваши сообщения.",
        },
        {
          title: "Низкая стоимость",
          description: "Telegram-бот дешевле мобильного приложения в 5-10 раз.",
        },
        {
          title: "Быстрый запуск",
          description: "MVP бота за 2-3 недели. Быстро проверяете гипотезы.",
        },
      ]}
    />
  );
};

export default TelegramPage;
