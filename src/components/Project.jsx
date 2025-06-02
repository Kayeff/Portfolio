import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "motion/react";

export default function Project({ project }) {
  return (
    <motion.a
      whileHover={{ y: -40 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      href={project.href}
      target="_blank"
      key={project.id}
      className="w-full rounded-xl border border-[var(--text)]/20"
    >
      <img
        src={project.image}
        className="w-full object-cover rounded-t-xl"
        alt={project.title}
      />
      <div className="w-full p-4 flex gap-2 flex-col">
        <div className="w-full flex items-center justify-between">
          <h1 className="tracking-tighter font-medium text-xl flex gap-1 items-center">
            {project.title}
            <RiArrowRightUpLine />
          </h1>
          <h4 className="text-sm tracking-tight text-[var(--text)]/80">
            {project.year}
          </h4>
        </div>
        <p className="tracking-tight text-[var(--text)]/80">{project.desc}</p>
      </div>
    </motion.a>
  );
}
