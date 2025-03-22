import { motion } from "framer-motion";
import ThemeSelect from "./ThemeSelect";

const links = [
  { id: 1, title: "Projects", sectionID: "projects" },
  { id: 2, title: "About", sectionID: "about" },
  { id: 3, title: "Contact", sectionID: "contact" },
];

function NavbarLinks({ onClick, title, idx, sectionID }) {
  return (
    <li className="py-2 overflow-hidden">
      <button className="link laptop:text-lg flex items-center justify-center relative text-lg font-normal cursor-pointer">
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: idx * 0.1 }}
          onClick={() => onClick(sectionID)}
        >
          {title}
        </motion.span>
      </button>
    </li>
  );
}

export default function Navbar({ onClick, toggleTheme, theme }) {
  return (
    <nav className="w-full bg-[var(--background)] text-[var(--text)] sticky z-40 top-0 left-0 border-b border-[var(--text)]/20 px-6 transition-all duration-300">
      <motion.div
        initial={{ height: "0px", opacity: 0 }}
        animate={{ height: "70px", opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full flex items-center justify-between"
      >
        <button
          onClick={() => onClick("hero")}
          className="overflow-hidden cursor-pointer"
        >
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-xl tracking-tight laptop:text-2xl"
          >
            Kaif Saiyed
          </motion.h1>
        </button>
        <ul className="flex items-center justify-center gap-4">
          {links.map((link, index) => (
            <NavbarLinks
              key={`nav-link-${link.id}`}
              title={link.title}
              href={link.href}
              idx={index}
              sectionID={link.sectionID}
              onClick={onClick}
            />
          ))}
        </ul>
        <ThemeSelect toggleTheme={toggleTheme} themeColor={theme} />
      </motion.div>
    </nav>
  );
}
