import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Terminal className="h-5 w-5 text-primary" />
        <span className="font-bold text-gradient-primary">Coder.AI</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Coder.AI. Все права защищены.
      </p>
    </div>
  </footer>
);

export default Footer;
