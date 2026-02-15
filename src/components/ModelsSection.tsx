import { motion } from "framer-motion";

const ChatGPTLogo = () => (
  <svg viewBox="0 0 2406 2406" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 578.4C1 259.5 259.5 1 578.4 1h1249.1c319 0 577.5 258.5 577.5 577.4V2406H578.4C259.5 2406 1 2147.5 1 1828.6V578.4z" fill="#74aa9c"/>
    <path d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.5V833.3h.1v-27.9L1372.7 604c33.7-19.5 70.4-32.9 108.5-39.8l-33.6-114.8c-86.6-96.8-210.5-151.8-340.3-151.2zm0 117.5-.6.6c79.7 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.1 151.6-338.9 339-339.2z" fill="#fff"/>
    <use href="#chatgpt-a" transform="rotate(60 1203 1203)"/>
    <use href="#chatgpt-a" transform="rotate(120 1203 1203)"/>
    <use href="#chatgpt-a" transform="rotate(180 1203 1203)"/>
    <use href="#chatgpt-a" transform="rotate(240 1203 1203)"/>
    <use href="#chatgpt-a" transform="rotate(300 1203 1203)"/>
    <defs>
      <path id="chatgpt-a" d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.5V833.3h.1v-27.9L1372.7 604c33.7-19.5 70.4-32.9 108.5-39.8l-33.6-114.8c-86.6-96.8-210.5-151.8-340.3-151.2zm0 117.5-.6.6c79.7 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.1 151.6-338.9 339-339.2z" fill="#fff"/>
    </defs>
  </svg>
);

const ClaudeLogo = () => (
  <svg viewBox="0 0 256 256" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" rx="60" fill="#D97757"/>
    <path d="M148.24 84.37l-45.87 87.26h-20.53L127.71 84.37h20.53zm-40.08 87.26l45.87-87.26h20.53l-45.87 87.26h-20.53z" fill="#FDFAF3"/>
  </svg>
);

const GigaChatLogo = () => (
  <svg viewBox="0 0 256 256" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" rx="60" fill="#21A038"/>
    <circle cx="128" cy="120" r="50" stroke="#fff" strokeWidth="10" fill="none"/>
    <path d="M155 120a27 27 0 00-27-27" stroke="#fff" strokeWidth="10" strokeLinecap="round"/>
    <circle cx="128" cy="170" r="4" fill="#fff"/>
    <path d="M120 162l8 16 8-16" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DeepSeekLogo = () => (
  <svg viewBox="0 0 256 256" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" rx="60" fill="#4D6BFE"/>
    <path d="M128 60c-37.6 0-68 30.4-68 68s30.4 68 68 68 68-30.4 68-68-30.4-68-68-68zm0 20c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48z" fill="#fff"/>
    <path d="M128 100c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm0 16c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z" fill="#fff"/>
    <path d="M80 128h16M160 128h16M128 80v16M128 160v16" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

const models = [
  { name: "ChatGPT", subtitle: "OpenAI", Logo: ChatGPTLogo },
  { name: "Claude", subtitle: "Anthropic", Logo: ClaudeLogo },
  { name: "GigaChat", subtitle: "Сбер", Logo: GigaChatLogo },
  { name: "DeepSeek", subtitle: "DeepSeek AI", Logo: DeepSeekLogo },
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
              className="rounded-2xl bg-glass p-6 text-center transition-all hover:glow-border cursor-default flex flex-col items-center gap-4"
            >
              <model.Logo />
              <div>
                <div className="text-xl font-bold mb-1">
                  {model.name}
                </div>
                <div className="text-sm text-muted-foreground">{model.subtitle}</div>
              </div>
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
