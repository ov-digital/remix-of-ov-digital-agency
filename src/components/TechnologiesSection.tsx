const technologies = [
  // Backend
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", category: "Backend" },
  { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20", category: "Backend" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688", category: "Backend" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4", category: "Backend" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20", category: "Backend" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", category: "Backend" },
  { name: "Nest.js", icon: "https://cdn.simpleicons.org/nestjs/E0234E", category: "Backend" },
  { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8", category: "Backend" },
  
  // Frontend
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", category: "Frontend" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6", category: "Frontend" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", category: "Frontend" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "Frontend" },
  { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D", category: "Frontend" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", category: "Frontend" },
  { name: "Nuxt.js", icon: "https://cdn.simpleicons.org/nuxtdotjs/00DC82", category: "Frontend" },
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031", category: "Frontend" },
  
  // Mobile
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "Mobile" },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B", category: "Mobile" },
  
  // CMS
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B", category: "CMS" },
  { name: "1С-Битрикс", icon: "https://cdn.simpleicons.org/1c/FFCC00", category: "CMS" },
  
  // Database
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", category: "Database" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", category: "Database" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", category: "Database" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D", category: "Database" },
  
  // DevOps
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", category: "DevOps" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5", category: "DevOps" },
  { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639", category: "DevOps" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", category: "DevOps" },
  { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF", category: "DevOps" },
  { name: "GitLab CI", icon: "https://cdn.simpleicons.org/gitlab/FC6D26", category: "DevOps" },
  { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/7B42BC", category: "DevOps" },
  { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible/EE0000", category: "DevOps" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/232F3E", category: "DevOps" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624", category: "DevOps" },
  { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana/F46800", category: "DevOps" },
  { name: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus/E6522C", category: "DevOps" },
];

export const TechnologiesSection = () => {
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

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="group flex flex-col items-center gap-2 p-3 md:p-4 bg-background rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
