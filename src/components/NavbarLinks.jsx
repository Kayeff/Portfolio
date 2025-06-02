import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

export default function NavbarLinks({ link, idx }) {
  return (
    <li className="py-2 overflow-hidden">
      <NavLink
        to={link.to}
        className="link laptop:text-lg flex items-center justify-center relative text-lg font-normal cursor-pointer tracking-tighter"
        end
      >
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: idx * 0.1 }}
        >
          {link.title}
        </motion.span>
      </NavLink>
    </li>
  );
}
