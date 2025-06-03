import { motion } from "motion/react";
import ThemeSelect from "./ThemeSelect";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  return (
    <nav className="w-full text-[var(--text)] sticky z-40 top-0 left-0 px-10 py-3 transition-all duration-300 bg-[var(--background)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full flex items-center justify-between"
      >
        <Link
          to=""
          className="overflow-y-hidden py-1.5 pr-1.5 cursor-pointer"
          viewTransition
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-xl tracking-tighter laptop:text-4xl font-ephasis"
          >
            Kaif Saiyed
          </motion.h1>
        </Link>
        <div className="flex items-center gap-5">
          <NavLink
            to="contact"
            viewTransition
            className={({ isActive }) =>
              twMerge(
                "tracking-tighter text-lg text-[var(--text)]/80",
                isActive && "text-[var(--text)]"
              )
            }
          >
            Contact
          </NavLink>
          <ThemeSelect />
        </div>
      </motion.div>
    </nav>
  );
}
