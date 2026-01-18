import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Server } from "lucide-react";

const DevOpsPage = () => {
  return (
    <ServicePageLayout
      title="DevOps и инфраструктура"
      subtitle="Настройка серверов, CI/CD, контейнеризация и облачная архитектура"
      description="Проектируем и внедряем надёжную инфраструктуру для ваших проектов. От настройки серверов до автоматизации деплоя — обеспечиваем стабильную работу и масштабируемость приложений любой сложности."
      price="от 100 000 ₽"
      priceNote="или 2 750 ₽/час"
      icon={<Server className="w-8 h-8" />}
      features={[
        "Проектирование архитектуры проекта",
        "Настройка и администрирование серверов",
        "Контейнеризация (Docker, Docker Compose)",
        "Оркестрация контейнеров (Kubernetes, K8s)",
        "Настройка CI/CD пайплайнов",
        "Мониторинг и логирование",
        "Облачная инфраструктура (AWS, GCP, Yandex Cloud)",
        "Балансировка нагрузки и отказоустойчивость",
      ]}
      steps={[
        {
          title: "Аудит",
          description: "Анализируем текущую инфраструктуру, выявляем узкие места и риски",
        },
        {
          title: "Архитектура",
          description: "Проектируем целевую архитектуру с учётом нагрузки и масштабирования",
        },
        {
          title: "Внедрение",
          description: "Настраиваем серверы, контейнеры, CI/CD и мониторинг",
        },
        {
          title: "Сопровождение",
          description: "Поддержка, обновления и оперативное реагирование на инциденты",
        },
      ]}
      technologies={[
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "GitLab CI/CD",
        "Nginx",
        "Traefik",
        "Prometheus",
        "Grafana",
        "AWS",
        "Yandex Cloud",
        "Terraform",
        "Ansible",
      ]}
      benefits={[
        {
          title: "Стабильность",
          description: "Отказоустойчивая архитектура и автоматическое восстановление",
        },
        {
          title: "Масштабируемость",
          description: "Инфраструктура растёт вместе с вашим бизнесом",
        },
        {
          title: "Автоматизация",
          description: "CI/CD сокращает время деплоя с часов до минут",
        },
        {
          title: "Безопасность",
          description: "Настройка firewall, SSL, изоляция сервисов",
        },
      ]}
    />
  );
};

export default DevOpsPage;
