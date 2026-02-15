import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2"
          >
            <div className="rounded-2xl bg-card border border-border p-8 glow-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Свяжитесь с нами</h3>
                <button
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-8 text-center"
                >
                  <div className="text-4xl mb-3">✓</div>
                  <p className="text-lg font-medium text-primary">Спасибо! Мы свяжемся с вами.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Имя
                    </label>
                    <input
                      required
                      type="text"
                      maxLength={100}
                      className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      maxLength={255}
                      className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Компания
                    </label>
                    <input
                      type="text"
                      maxLength={100}
                      className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Название компании"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Сообщение
                    </label>
                    <textarea
                      maxLength={1000}
                      rows={3}
                      className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Расскажите о вашем проекте"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(187_100%_50%/0.5)] hover:brightness-110"
                  >
                    Отправить
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
