import { motion } from "framer-motion";

const links = [
  { id: 1, title: "Projects", href: "#" },
  { id: 2, title: "About", href: "#" },
  { id: 3, title: "Contact", href: "#" },
];

function NavbarLinks({ href, title, idx }) {
  return (
    <li className="py-2 overflow-hidden">
      <a
        href={href}
        className="link laptop:text-lg flex items-center justify-center transition-all relative hover:text-light-gray text-lg font-normal"
      >
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: idx * 0.1 }}
        >
          {title}
        </motion.span>
      </a>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="w-full sticky z-40 top-0 left-0 bg-night border-b border-rich-grey/20 px-6">
      <motion.div
        initial={{ height: "0px", opacity: 0 }}
        animate={{ height: "70px", opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full flex items-center justify-between"
      >
        <a href="#" className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-xl tracking-tight text-rich-grey laptop:text-2xl"
          >
            Kaif Saiyed
          </motion.h1>
        </a>
        <ul className="flex items-center justify-center gap-6">
          {links.map((link, index) => (
            <NavbarLinks
              title={link.title}
              key={`nav-link-${link.id}`}
              href={link.href}
              idx={index}
            />
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
