import { motion } from "framer-motion";
import { Code2, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Terminal className="h-7 w-7 text-primary" />
            <div className="absolute inset-0 blur-lg bg-primary/30" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gradient-primary">
            Coder.AI
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Войти
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(187_100%_50%/0.4)] hover:brightness-110"
          >
            Создать аккаунт
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
