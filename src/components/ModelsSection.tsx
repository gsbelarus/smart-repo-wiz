import { motion } from "framer-motion";

const models = [
  { name: "ChatGPT", subtitle: "OpenAI" },
  { name: "Claude", subtitle: "Anthropic" },
  { name: "GigaChat", subtitle: "Сбер" },
  { name: "DeepSeek", subtitle: "DeepSeek AI" },
];

const ModelsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Выбирайте свою{" "}
            <span className="text-gradient-primary">AI-модель</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Подключайте лучшие языковые модели под ваши задачи
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-glass p-6 text-center transition-all hover:glow-border cursor-default"
            >
              <div className="text-3xl font-bold font-mono text-gradient-primary mb-1">
                {model.name}
              </div>
              <div className="text-sm text-muted-foreground">{model.subtitle}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-6 text-sm"
        >
          …и другие модели по вашему выбору
        </motion.p>
      </div>
    </section>
  );
};

export default ModelsSection;
