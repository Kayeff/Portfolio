import { motion } from "motion/react";
import ThemeSelect from "./ThemeSelect";
import { Link } from "react-router-dom";

export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="w-full text-[var(--text)] sticky z-40 top-0 left-0 px-10 py-3 transition-all duration-300 bg-[var(--background)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full flex items-center justify-between"
      >
        <Link to="" className="overflow-y-hidden py-1.5 pr-1.5 cursor-pointer">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-xl tracking-tighter laptop:text-4xl font-ephasis"
          >
            Kaif Saiyed
          </motion.h1>
        </Link>
        <ThemeSelect toggleTheme={toggleTheme} themeColor={theme} />
      </motion.div>
    </nav>
  );
}
