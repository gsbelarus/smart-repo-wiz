import { motion } from "framer-motion";
import { FileText, BookOpen, FileDown, Globe, GitBranch, RefreshCw } from "lucide-react";

const docFeatures = [
  {
    icon: FileText,
    title: "Документация к коду",
    description: "Автоматическое описание функций, классов и модулей с примерами использования и типами параметров.",
  },
  {
    icon: BookOpen,
    title: "Wiki-страницы",
    description: "Генерация структурированных wiki-страниц для внутренней базы знаний команды с навигацией и поиском.",
  },
  {
    icon: FileDown,
    title: "PDF-документы",
    description: "Создание автономных PDF-файлов для передачи заказчикам, аудиторам и внешним командам.",
  },
  {
    icon: Globe,
    title: "API-документация",
    description: "Автоматическая генерация OpenAPI/Swagger спецификаций из кода с интерактивными примерами запросов.",
  },
  {
    icon: GitBranch,
    title: "Changelog",
    description: "Формирование журнала изменений из истории коммитов и PR с группировкой по фичам и исправлениям.",
  },
  {
    icon: RefreshCw,
    title: "Автообновление",
    description: "Документация синхронизируется с кодом — при изменении функций описания обновляются автоматически.",
  },
];

const DocsGenSection = () => {
  return (
    <section id="docs-gen" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-primary mb-6 glow-border">
            <FileText className="h-4 w-4" />
            Техническая документация
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Документация, которая{" "}
            <span className="text-gradient-primary">пишет себя сама</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От описания функций до полноценных wiki-порталов — Coder.AI создаёт и поддерживает документацию в актуальном состоянии
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docFeatures.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-glass p-8 transition-all duration-300 hover:glow-border hover:bg-card/80"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
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

export default DocsGenSection;
