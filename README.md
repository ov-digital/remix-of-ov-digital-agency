# OV Digital Agency

Сайт digital-агентства. React + TypeScript + Tailwind CSS + Vite.

**SEO-оптимизация:** Проект использует prerendering для генерации статического HTML всех страниц при сборке — поисковые системы видят полный контент без выполнения JavaScript.

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для production (с prerendering)
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

1. `npm run build` — создаёт папку `dist/` с prerendered HTML
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
├── data/           # Статические данные
├── prerender.tsx   # ⚡ Конфигурация prerendering (SEO)
└── main.tsx        # Точка входа с hydration
```

## Prerendering (SEO)

При добавлении новой страницы обновите:
1. `src/App.tsx` — маршрут
2. `src/prerender.tsx` — импорт, маршрут в ROUTES, мета-данные в PAGE_META

Подробнее: [DEPLOYMENT.md → Prerendering](./DEPLOYMENT.md#prerendering-seo)

## Технологии

- React 18
- TypeScript
- Vite + vite-prerender-plugin
- Tailwind CSS
- shadcn/ui
- React Router

## Контакты

- Email: ov.digital.agency@yandex.ru
- Telegram: @ov_digital_agency
