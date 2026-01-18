import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, X } from "lucide-react";
import blogImage1 from "@/assets/blog-cms.jpg";
import blogImage2 from "@/assets/blog-seo.jpg";
import blogImage3 from "@/assets/blog-telegram.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Как выбрать CMS для бизнеса",
    excerpt: "Советы по выбору платформы для сайта: сравнение популярных CMS и их возможностей",
    date: "15 января 2026",
    image: blogImage1,
    content: `
# Как выбрать CMS для бизнеса: полное руководство

Выбор системы управления контентом (CMS) — один из ключевых этапов при создании сайта. От правильного выбора зависит удобство работы с сайтом, его производительность и возможности масштабирования.

## Основные критерии выбора

### 1. Цели и задачи проекта

Прежде всего, определите, для чего вам нужен сайт:
- **Корпоративный сайт** — подойдут WordPress, 1С-Битрикс, MODX
- **Интернет-магазин** — CS-Cart, OpenCart, 1С-Битрикс, Saleor
- **Контентный портал** — WordPress, Joomla
- **Высоконагруженный проект** — headless CMS (Saleor, Strapi)

### 2. Бюджет

CMS делятся на бесплатные (WordPress, Joomla, OpenCart) и платные (1С-Битрикс, CS-Cart). Помните, что бесплатная CMS требует затрат на хостинг, шаблоны и доработки.

### 3. Техническая поддержка

Для бизнеса важна стабильность. 1С-Битрикс и коммерческие решения предоставляют официальную поддержку, тогда как для open-source проектов придется искать подрядчиков.

## Популярные CMS в 2026 году

### WordPress
- Доля рынка: более 40%
- Плюсы: огромное сообщество, тысячи плагинов, простота
- Минусы: требует оптимизации для высоких нагрузок

### 1С-Битрикс
- Идеален для российского рынка
- Плюсы: интеграция с 1С, безопасность, техподдержка
- Минусы: высокая стоимость лицензии

### Headless CMS (Saleor, Strapi)
- Современный подход: backend отделен от frontend
- Плюсы: гибкость, производительность, масштабируемость
- Минусы: требует квалифицированной разработки

## Наши рекомендации

Для малого бизнеса начните с WordPress или MODX. Для среднего бизнеса с фокусом на российский рынок — 1С-Битрикс. Для масштабных e-commerce проектов — рассмотрите headless-решения.

Нужна помощь с выбором? Обратитесь к нам — проведем бесплатную консультацию и подберем оптимальное решение для вашего бизнеса.
    `,
  },
  {
    id: 2,
    title: "SEO-стратегии для 2026 года",
    excerpt: "Советы и проверенные практики продвижения сайтов в современных реалиях",
    date: "10 января 2026",
    image: blogImage2,
    content: `
# SEO-стратегии для 2026 года: что работает сегодня

Поисковая оптимизация продолжает эволюционировать. В 2026 году алгоритмы стали еще умнее, а конкуренция — жестче. Рассказываем, какие стратегии действительно работают.

## Главные тренды SEO в 2026

### 1. E-E-A-T остается ключевым

Google продолжает оценивать:
- **Experience (Опыт)** — автор должен иметь реальный опыт в теме
- **Expertise (Экспертиза)** — глубокие знания в нише
- **Authoritativeness (Авторитетность)** — признание в отрасли
- **Trustworthiness (Надежность)** — достоверность информации

### 2. AI-контент под контролем

Поисковики научились распознавать низкокачественный AI-контент. Важно:
- Редактировать и дополнять AI-тексты экспертизой
- Добавлять уникальные данные и исследования
- Проверять фактическую точность

### 3. Core Web Vitals критичны

Скорость и UX напрямую влияют на ранжирование:
- LCP (Largest Contentful Paint) < 2.5 сек
- FID (First Input Delay) < 100 мс
- CLS (Cumulative Layout Shift) < 0.1

## Практические рекомендации

### Техническая оптимизация
- Внедрите lazy loading для изображений
- Используйте CDN для статики
- Оптимизируйте JavaScript и CSS
- Настройте кеширование

### Контентная стратегия
- Создавайте экспертный контент на основе реального опыта
- Обновляйте старые статьи актуальной информацией
- Используйте структурированные данные (Schema.org)
- Оптимизируйте под голосовой поиск

### Ссылочное продвижение
- Фокус на качество, а не количество
- Гостевые публикации в авторитетных изданиях
- PR-активности и упоминания бренда
- Работа с отзывами и репутацией

## Локальное SEO

Для бизнеса с оффлайн-присутствием:
- Оптимизируйте профиль в Яндекс.Картах и Google Maps
- Собирайте отзывы клиентов
- Указывайте NAP (Name, Address, Phone) единообразно
- Создавайте локальный контент

Нужна SEO-стратегия для вашего бизнеса? Мы проведем аудит сайта и разработаем план продвижения с гарантией результата.
    `,
  },
  {
    id: 3,
    title: "Как автоматизировать бизнес в Telegram",
    excerpt: "Внедрение ботов и Mini Apps для повышения эффективности бизнес-процессов",
    date: "5 января 2026",
    image: blogImage3,
    content: `
# Как автоматизировать бизнес в Telegram: боты и Mini Apps

Telegram давно перестал быть просто мессенджером. Сегодня это полноценная бизнес-платформа с огромными возможностями для автоматизации. Рассказываем, как использовать их эффективно.

## Возможности Telegram для бизнеса

### Telegram-боты

Боты могут автоматизировать:
- **Клиентский сервис** — ответы на FAQ, статус заказа
- **Продажи** — каталог товаров, оформление заказов
- **Уведомления** — напоминания, статусы, рассылки
- **Внутренние процессы** — отчеты, согласования, задачи

### Telegram Mini Apps

Полноценные веб-приложения внутри Telegram:
- Интернет-магазины с оплатой
- Сервисы бронирования
- Личные кабинеты клиентов
- Игры и развлечения

## Примеры автоматизации

### Интернет-магазин в Telegram

**Функционал:**
- Каталог товаров с фильтрами
- Корзина и оформление заказа
- Оплата через Telegram Pay или внешние системы
- Уведомления о статусе заказа
- Интеграция с CRM и складом

**Результат:** рост конверсии на 30-40% за счет простоты покупки.

### Бот для записи на услуги

**Функционал:**
- Выбор услуги и мастера
- Календарь с доступными слотами
- Напоминания клиентам
- Интеграция с Google Calendar

**Результат:** сокращение времени администратора на 70%.

### Корпоративный бот

**Функционал:**
- Подача заявок на отпуск/командировки
- Согласование документов
- Отчеты по задачам
- Уведомления о событиях

**Результат:** ускорение внутренних процессов в 3 раза.

## Интеграции

Telegram-решения легко интегрируются с:
- CRM-системами (Bitrix24, AmoCRM)
- Платежными системами (ЮKassa, CloudPayments)
- Службами доставки (СДЭК, Boxberry)
- 1С и учетными системами

## Стоимость разработки

- Простой бот: от 50 000 ₽
- Бот с интеграциями: от 100 000 ₽
- Mini App: от 150 000 ₽

## Почему стоит начать сейчас

Аудитория Telegram в России — более 80 млн пользователей. Люди привыкли решать вопросы в мессенджерах. Бизнес, который приходит туда первым, получает конкурентное преимущество.

Хотите автоматизировать бизнес через Telegram? Мы разработаем решение под ваши задачи — от простого бота до полноценного Mini App.
    `,
  },
];

export const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <>
      <section id="blog" className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Блог
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полезные материалы о digital-разработке, маркетинге и автоматизации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                    Читать статью
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-background rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
              <h2 className="font-semibold text-lg">{selectedPost.title}</h2>
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full aspect-video object-cover rounded-lg mb-6"
              />
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span>{selectedPost.date}</span>
              </div>
              <div className="prose prose-sm max-w-none">
                {selectedPost.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={i} className="text-2xl font-bold mt-6 mb-4">{line.slice(2)}</h1>;
                  } else if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-xl font-semibold mt-6 mb-3">{line.slice(3)}</h2>;
                  } else if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-lg font-semibold mt-4 mb-2">{line.slice(4)}</h3>;
                  } else if (line.startsWith('- **')) {
                    const match = line.match(/- \*\*(.+?)\*\* — (.+)/);
                    if (match) {
                      return <p key={i} className="ml-4 mb-1"><strong>{match[1]}</strong> — {match[2]}</p>;
                    }
                    return <p key={i} className="ml-4 mb-1">{line.slice(2)}</p>;
                  } else if (line.startsWith('- ')) {
                    return <p key={i} className="ml-4 mb-1">• {line.slice(2)}</p>;
                  } else if (line.startsWith('**')) {
                    return <p key={i} className="font-semibold mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
                  } else if (line.trim()) {
                    return <p key={i} className="mb-3 text-muted-foreground">{line}</p>;
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
