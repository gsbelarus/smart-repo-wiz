import { motion } from "framer-motion";
import { Check, CreditCard } from "lucide-react";

const plans = [
  {
    name: "Бесплатная",
    subtitle: "Основы для частных лиц и организаций",
    price: "0 ₽",
    priceSuffix: "",
    features: [
      "1 публичный репозиторий",
      "Анализ пул-реквестов",
      "Поиск ошибок",
      "Поиск уязвимостей",
    ],
  },
  {
    name: "Индивидуальная",
    subtitle: "Безопасность, соответствие, и гибкое развёртывание",
    price: "1999 ₽",
    priceSuffix: "",
    highlighted: true,
    features: [
      "10 публичных репозиториев",
      "10 приватных репозиториев",
      "Анализ пул-реквестов",
      "Поиск ошибок",
      "Поиск уязвимостей",
      "Исправление ошибок",
      "Оптимизация кода",
    ],
  },
  {
    name: "Корпоративная",
    subtitle: "Расширенное сотрудничество для частных лиц и организаций",
    price: "3999 ₽",
    priceSuffix: " / рабочее место",
    features: [
      "Неограниченное количество публичных репозиториев",
      "Неограниченное количество приватных репозиториев",
      "Анализ пул-реквестов",
      "Поиск ошибок",
      "Поиск уязвимостей",
      "Исправление ошибок",
      "Оптимизация кода",
      "Рекомендации по повышению квалификации",
      "Интеграция с JIRA",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-primary mb-6 glow-border">
            <CreditCard className="h-4 w-4" />
            Тарифы
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Стоимость месячной подписки{" "}
            <span className="text-gradient-primary">Кодер.AI</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-2xl bg-glass p-8 flex flex-col transition-all duration-300 hover:glow-border hover:bg-card/80 ${
                plan.highlighted ? "glow-border ring-1 ring-primary/30" : ""
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">
                {plan.subtitle}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-black text-gradient-primary">
                  {plan.price}
                </span>
                {plan.priceSuffix && (
                  <span className="text-muted-foreground text-sm">
                    {plan.priceSuffix}
                  </span>
                )}
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
