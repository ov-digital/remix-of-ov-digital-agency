const technologies = [
  {
    category: "Backend",
    items: ["Python", "Django", "FastAPI", "Saleor", "PHP", "Laravel", "Yii2", "Symfony", "Node.js", "Nest.js", "Golang"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Vue.js", "Nuxt.js", "React.js", "Next.js", "Angular"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter"],
  },
  {
    category: "CMS / E-commerce",
    items: ["1C-Битрикс", "WordPress", "OpenCart", "Joomla", "MODX", "CS-Cart", "Saleor"],
  },
  {
    category: "Telegram / Web3",
    items: ["Telegram Bots", "Telegram Mini Apps", "Func", "Tact", "Tolk"],
  },
  {
    category: "CRM",
    items: ["Bitrix24", "AmoCRM"],
  },
  {
    category: "AI / ML",
    items: ["AI-проекты", "Чат-боты", "Аналитика", "Автоматизация"],
  },
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

        <div className="grid gap-6 md:gap-8">
          {technologies.map((tech) => (
            <div key={tech.category} className="bg-background rounded-xl p-6 card-shadow">
              <h3 className="font-semibold text-lg mb-4 text-primary">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
