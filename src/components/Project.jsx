import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "motion/react";

export default function Project({ project, index }) {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true, amount: 0.5 }}
      href={project.href}
      target="_blank"
      key={project.id}
      className="w-full rounded-xl border border-[var(--text)]/20 hover:translate-y-[-50px] duration-300"
    >
      <img
        src={project.image}
        className="w-full object-cover rounded-t-xl will-change-transform"
        alt={project.title}
        loading="lazy"
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
