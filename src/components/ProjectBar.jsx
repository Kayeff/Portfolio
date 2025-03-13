import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectBar({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full relative overflow-hidden flex items-center justify-start border-b nth-[1]:border-t border-rich-grey"
    >
      <div className="p-2 w-full relative">
        <span className="text-[5vw] leading-[5vw] font-medium uppercase text-rich-grey tracking-tighter">
          Project {project.id}
        </span>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full absolute left-1/2 -translate-x-1/2 bg-rich-grey flex items-center justify-between overflow-hidden px-2"
      >
        <span className="text-[5vw] leading-[5vw] font-medium uppercase text-night flex justify-center tracking-tighter">
          {project.title}{" "}
        </span>
      </motion.div>
    </motion.a>
  );
}
