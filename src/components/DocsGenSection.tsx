import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import docCode from "@/assets/doc-code.jpg";
import docWiki from "@/assets/doc-wiki.jpg";
import docPdf from "@/assets/doc-pdf.jpg";
import docApi from "@/assets/doc-api.jpg";
import docChangelog from "@/assets/doc-changelog.jpg";
import docAutoupdate from "@/assets/doc-autoupdate.jpg";

const docFeatures = [
  {
    image: docCode,
    title: "Документация к коду",
    description: "Автоматическое описание функций, классов и модулей с примерами использования и типами параметров.",
  },
  {
    image: docWiki,
    title: "Wiki-страницы",
    description: "Генерация структурированных wiki-страниц для внутренней базы знаний команды с навигацией и поиском.",
  },
  {
    image: docPdf,
    title: "PDF-документы",
    description: "Создание автономных PDF-файлов для передачи заказчикам, аудиторам и внешним командам.",
  },
  {
    image: docApi,
    title: "API-документация",
    description: "Автоматическая генерация OpenAPI/Swagger спецификаций из кода с интерактивными примерами запросов.",
  },
  {
    image: docChangelog,
    title: "Changelog",
    description: "Формирование журнала изменений из истории коммитов и PR с группировкой по фичам и исправлениям.",
  },
  {
    image: docAutoupdate,
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
      </div>
    </section>
  );
};

export default DocsGenSection;
