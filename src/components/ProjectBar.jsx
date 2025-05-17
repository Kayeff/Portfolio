import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectBar({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.href}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full relative overflow-hidden flex items-center justify-start border-b nth-[1]:border-t border-[var(--text)]/20"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          delay: project.id * 0.05,
        }}
        viewport={{ once: true }}
        className="p-2 w-full relative text-[5vw] leading-[5vw] uppercase text-[var(--text)] tracking-tighter"
      >
        Project {project.id}
      </motion.span>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full absolute left-1/2 -translate-x-1/2 bg-[var(--text)] overflow-hidden px-2"
      >
        <span className="text-[5vw] leading-[5vw] uppercase text-[var(--background)] tracking-tighter fixed top-1/2 -translate-y-1/2">
          {project.title}{" "}
        </span>
      </motion.div>
    </motion.a>
  );
}
