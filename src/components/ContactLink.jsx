import { motion } from "framer-motion";
import { RiArrowRightDownLine } from "@remixicon/react";
import { useState } from "react";

export default function ContactLink({ title, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full relative overflow-hidden flex items-center justify-start hover:bg-rich-grey hover:text-night duration-500 text-rich-grey"
    >
      <div className="w-full relative">
        <span className="uppercase font-medium tracking-tighter text-3xl flex items-center">
          {title}{" "}
          <motion.span
            animate={{ rotate: isHovered ? -90 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <RiArrowRightDownLine size={30} />
          </motion.span>
        </span>
      </div>
    </a>
  );
}
