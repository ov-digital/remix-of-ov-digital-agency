import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import bitrixLogo from "@/assets/bitrix-logo.svg";
import modxLogo from "@/assets/modx-logo.png";
import cscartLogo from "@/assets/cscart-logo.png";

const technologies = [
  // Top 12 - наиболее популярные (будут показаны первыми)
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", category: "CMS" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", category: "Backend" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Frontend" },
  { name: "1С-Битрикс", icon: bitrixLogo, category: "CMS" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "Mobile" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", category: "DevOps" },
  
  // Остальные технологии
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "Backend" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", category: "Backend" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "Backend" },
  { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg", category: "Backend" },
  { name: "Yii2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg", category: "Backend" },
  { name: "Nest.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", category: "Backend" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", category: "Backend" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend" },
  { name: "Nuxt.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg", category: "Frontend" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Frontend" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Mobile" },
  { name: "Drupal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg", category: "CMS" },
  { name: "MODX", icon: modxLogo, category: "CMS" },
  { name: "CS-Cart", icon: cscartLogo, category: "CMS" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Database" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "DevOps" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", category: "DevOps" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "DevOps" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "DevOps" },
  { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", category: "DevOps" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", category: "DevOps" },
  { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", category: "DevOps" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "DevOps" },
  { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", category: "DevOps" },
  { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", category: "DevOps" },
];

const INITIAL_COUNT = 12;

export const TechnologiesSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  
  // На десктопе показываем все, на мобильном — с раскрытием
  const visibleTechnologies = !isMobile || isExpanded ? technologies : technologies.slice(0, INITIAL_COUNT);
  const hiddenCount = technologies.length - INITIAL_COUNT;

  return (
    <section id="technologies" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Технологии
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Используем современный стек технологий для решения задач любой сложности
          </p>
        </div>

        <div 
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 overflow-hidden transition-all duration-500 ease-in-out"
        >
          {visibleTechnologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="group flex flex-col items-center gap-2 p-3 md:p-4 bg-background rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: isMobile && index >= INITIAL_COUNT && isExpanded ? `fade-in 0.3s ease-out ${(index - INITIAL_COUNT) * 0.03}s forwards` : undefined,
                opacity: isMobile && index >= INITIAL_COUNT && !isExpanded ? 0 : 1
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Кнопка только для мобильных устройств */}
        {isMobile && hiddenCount > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:shadow-md"
            >
              {isExpanded ? (
                <>
                  Свернуть
                  <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                </>
              ) : (
                <>
                  Ещё {hiddenCount} технологий
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
