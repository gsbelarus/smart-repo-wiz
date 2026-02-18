import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import testUnit from "@/assets/test-unit.jpg";
import testIntegration from "@/assets/test-integration.jpg";
import testLoad from "@/assets/test-load.jpg";
import testSecurity from "@/assets/test-security.jpg";
import testE2e from "@/assets/test-e2e.jpg";
import testProject from "@/assets/test-project.jpg";

const testTypes = [
  {
    image: testUnit,
    title: "Юнит-тесты",
    description: "Автоматическая генерация модульных тестов для отдельных функций и методов с покрытием граничных случаев.",
  },
  {
    image: testIntegration,
    title: "Интеграционные тесты",
    description: "Проверка взаимодействия между модулями, сервисами и API — без ручного написания сценариев.",
  },
  {
    image: testLoad,
    title: "Нагрузочные тесты",
    description: "Генерация сценариев для стресс-тестирования: определение предельной нагрузки и узких мест системы.",
  },
  {
    image: testSecurity,
    title: "Тесты безопасности",
    description: "Автоматическое создание тестов на уязвимости: SQL-инъекции, XSS, CSRF и другие атаки.",
  },
  {
    image: testE2e,
    title: "E2E-тесты",
    description: "Сквозные тесты пользовательских сценариев — от логина до оплаты, включая UI-взаимодействия.",
  },
  {
    image: testProject,
    title: "Тесты на уровне проекта",
    description: "Анализ архитектуры проекта и генерация комплексного набора тестов для всей кодовой базы.",
  },
];

const TestGenSection = () => {
  return (
    <section id="test-gen" className="relative py-32">
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
            <FlaskConical className="h-4 w-4" />
            Генерация тестов
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Тесты за{" "}
            <span className="text-gradient-primary">секунды,</span> не за дни
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите файл, функцию или весь проект — Coder.AI сгенерирует полный набор тестов нужного типа с учётом бизнес-логики
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testTypes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-glass overflow-hidden transition-all duration-300 hover:glow-border hover:bg-card/80 flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/60" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-glass glow-border p-8 md:p-10"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-gradient-primary mb-2">90%</p>
              <p className="text-muted-foreground text-sm">Покрытие кода тестами при первом запуске</p>
            </div>
            <div>
              <p className="text-4xl font-black text-gradient-primary mb-2">10×</p>
              <p className="text-muted-foreground text-sm">Быстрее ручного написания тестов</p>
            </div>
            <div>
              <p className="text-4xl font-black text-gradient-primary mb-2">24/7</p>
              <p className="text-muted-foreground text-sm">Непрерывная генерация при каждом коммите</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestGenSection;
