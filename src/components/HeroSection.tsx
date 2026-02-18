import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onLearnMore: () => void;
}

const codeLines = [
  { color: "text-muted-foreground", text: "// Analyzing pull request #142..." },
  { color: "text-primary", text: "function processPayment(amount) {" },
  { color: "text-destructive", text: "  // ⚠ Security: unsanitized input" },
  { color: "text-muted-foreground", text: "  const total = eval(amount);" },
  { color: "text-green-400", text: "  // ✓ Fix: use parseFloat(amount)" },
  { color: "text-primary", text: "  return db.charge(total);" },
  { color: "text-primary", text: "}" },
  { color: "text-muted-foreground", text: "" },
  { color: "text-muted-foreground", text: "// Performance issue detected" },
  { color: "text-primary", text: "const users = data.map(u => {" },
  { color: "text-destructive", text: "  // ⚠ N+1 query inside loop" },
  { color: "text-primary", text: "  return fetchProfile(u.id);" },
  { color: "text-green-400", text: "  // ✓ Use batch: fetchProfiles(ids)" },
  { color: "text-primary", text: "});" },
];

const HeroSection = ({ onLearnMore }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[hsl(260_80%_60%/0.05)] rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-primary mb-8 glow-border"
            >
              <Sparkles className="h-4 w-4" />
              AI-Powered Code Review
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Код без{" "}
              <span className="text-gradient-primary glow-text">ошибок.</span>
              <br />
              Разработка без{" "}
              <span className="text-gradient-primary glow-text">границ.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              Подключите GitHub или GitLab — и получите мгновенное AI-ревью
              каждого пул реквеста, автоматическую генерацию тестов и техническую
              документацию. Находим баги, уязвимости и антипаттерны до того, как
              код попадёт в продакшн.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onLearnMore}
                className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(187_100%_50%/0.5)] hover:brightness-110"
              >
                Узнать подробнее
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#features"
                className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/30"
              >
                Возможности
              </a>
            </motion.div>
          </div>

          {/* Right: Code animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl bg-glass glow-border overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">review.ts — Coder.AI</span>
              </div>
              <div className="p-5 h-80 overflow-hidden relative">
                <div className="animate-code-scroll">
                  {[...codeLines, ...codeLines].map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.05 }}
                      className={`font-mono text-sm leading-7 ${line.color}`}
                    >
                      {line.text || "\u00A0"}
                    </motion.div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
