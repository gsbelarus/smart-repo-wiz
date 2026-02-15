import { motion } from "framer-motion";
import { Shield, GraduationCap, GitPullRequest, Lightbulb } from "lucide-react";

const features = [
  {
    icon: GitPullRequest,
    title: "Ревью пул реквестов",
    description:
      "Автоматический анализ каждого PR: выявление ошибок, нарушений практик, уязвимостей безопасности и неоптимального кода.",
  },
  {
    icon: Lightbulb,
    title: "Умные исправления",
    description:
      "Не просто находим проблемы — предлагаем конкретные исправления с объяснением, почему это решение лучше.",
  },
  {
    icon: GraduationCap,
    title: "Обучающий режим",
    description:
      "Оценка уровня кода и персональные рекомендации: что изучить, какие навыки прокачать для роста.",
  },
  {
    icon: Shield,
    title: "Учебный процесс",
    description:
      "Автоматическая оценка работ студентов с античитинговой системой для выявления плагиата.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Всё, что нужно для{" "}
            <span className="text-gradient-primary">идеального кода</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От автоматического ревью до обучения разработчиков — единая платформа
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-glass p-8 transition-all duration-300 hover:glow-border hover:bg-card/80"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
