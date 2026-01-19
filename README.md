# OV Digital Agency

Сайт digital-агентства. React + TypeScript + Tailwind CSS + Vite.

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для production
npm run build
```

## Требования

- Node.js 18+ или 20+
- npm / yarn / pnpm

## Environment Variables

Скопируйте `.env.example` в `.env` и настройте переменные:

```bash
cp .env.example .env
```

Ключевые переменные:
- `VITE_FORM_ENDPOINT` — URL для отправки форм

## Деплой

Полное руководство по развертыванию: **[DEPLOYMENT.md](./DEPLOYMENT.md)**

### Краткая инструкция

1. `npm run build` — создаёт папку `dist/`
2. Загрузите содержимое `dist/` на сервер
3. Настройте Nginx для SPA (все запросы → `index.html`)
4. Настройте API-сервер для обработки форм

## Структура

```
src/
├── components/     # React компоненты
├── pages/          # Страницы
├── lib/            # Утилиты (form-handler.ts — точка интеграции форм)
├── assets/         # Изображения
└── data/           # Статические данные
```

## Технологии

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

## Контакты

- Email: ov.digital.agency@yandex.ru
- Telegram: @ov_digital_agency
