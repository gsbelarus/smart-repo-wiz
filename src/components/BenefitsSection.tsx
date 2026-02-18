import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, Users, DollarSign, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Экономия времени",
    description: "Сокращение времени на код-ревью на 80%. Разработчики фокусируются на создании продукта, а не на рутинных проверках.",
    metric: "–80%",
    metricLabel: "времени на ревью",
  },
  {
    icon: DollarSign,
    title: "Снижение затрат",
    description: "Автоматизация тестирования и документирования позволяет сократить расходы на QA и технических писателей.",
    metric: "–40%",
    metricLabel: "расходов на QA",
  },
  {
    icon: Shield,
    title: "Безопасность кода",
    description: "Уязвимости обнаруживаются до попадания в продакшн. Снижение количества инцидентов безопасности в разы.",
    metric: "95%",
    metricLabel: "уязвимостей найдено до продакшна",
  },
  {
    icon: TrendingUp,
    title: "Качество продукта",
    description: "Единые стандарты кода во всей команде. Снижение технического долга и количества багов в релизах.",
    metric: "3×",
    metricLabel: "меньше багов в релизе",
  },
  {
    icon: Users,
    title: "Рост команды",
    description: "Обучающий режим ускоряет онбординг новых разработчиков и повышает квалификацию всей команды.",
    metric: "2×",
    metricLabel: "быстрее онбординг",
  },
  {
    icon: BarChart3,
    title: "Прозрачность процессов",
    description: "Метрики качества кода, покрытия тестами и актуальности документации — всё в одном дашборде.",
    metric: "100%",
    metricLabel: "прозрачность для менеджмента",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative py-32">
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
            <TrendingUp className="h-4 w-4" />
            Преимущества
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Выгода для{" "}
            <span className="text-gradient-primary">бизнеса</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Coder.AI — это инвестиция, которая окупается с первого месяца использования
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-glass p-8 transition-all duration-300 hover:glow-border hover:bg-card/80"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-gradient-primary">{item.metric}</p>
                  <p className="text-xs text-muted-foreground">{item.metricLabel}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
