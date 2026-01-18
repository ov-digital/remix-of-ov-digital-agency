import { Smartphone } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const MobileAppsPage = () => {
  return (
    <ServicePageLayout
      title="Мобильные приложения"
      subtitle="Кроссплатформенные приложения для iOS и Android"
      description="Разрабатываем мобильные приложения на React Native и Flutter — один код для двух платформ. Экономия бюджета до 40% без потери качества. От MVP до масштабных продуктов."
      price="от 300 000 ₽"
      priceNote="или 2 750 ₽/час"
      icon={<Smartphone className="w-8 h-8 text-primary" />}
      features={[
        "Проектирование UX под мобильные устройства",
        "Кроссплатформенная разработка (iOS + Android)",
        "Нативная производительность",
        "Push-уведомления и геолокация",
        "Интеграция с камерой, NFC, биометрией",
        "Офлайн-режим и синхронизация данных",
        "Публикация в App Store и Google Play",
        "Поддержка и обновления после запуска",
      ]}
      steps={[
        {
          title: "Аналитика",
          description: "Изучаем рынок, конкурентов, целевую аудиторию. Формируем требования к MVP.",
        },
        {
          title: "UX/UI дизайн",
          description: "Проектируем пользовательские сценарии, создаём дизайн под гайдлайны iOS и Android.",
        },
        {
          title: "Разработка",
          description: "Пишем код на React Native или Flutter. Интегрируем backend и внешние сервисы.",
        },
        {
          title: "Релиз",
          description: "Тестируем на устройствах, публикуем в магазины приложений, настраиваем аналитику.",
        },
      ]}
      technologies={[
        "React Native", "Flutter", "Expo", "TypeScript", "Dart",
        "Firebase", "Supabase", "Redux", "MobX", "REST API", "GraphQL",
      ]}
      benefits={[
        {
          title: "Один код — две платформы",
          description: "React Native и Flutter позволяют создать приложение для iOS и Android одновременно.",
        },
        {
          title: "Экономия до 40%",
          description: "Кроссплатформенный подход снижает затраты на разработку и поддержку.",
        },
        {
          title: "Нативный опыт",
          description: "Приложения неотличимы от нативных — плавные анимации, быстрый отклик.",
        },
        {
          title: "Быстрый выход на рынок",
          description: "MVP за 2-3 месяца. Быстро проверяете гипотезы и собираете обратную связь.",
        },
        {
          title: "Масштабируемость",
          description: "Архитектура готова к росту. Легко добавлять новый функционал.",
        },
        {
          title: "Публикация под ключ",
          description: "Берём на себя весь процесс — от разработки до модерации в App Store и Google Play.",
        },
      ]}
    />
  );
};

export default MobileAppsPage;
