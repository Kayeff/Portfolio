import { motion } from "motion/react";

export default function Stack({ stack, index }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full border border-[var(--text)]/15 rounded-lg flex justify-between flex-col gap-4 p-4 h-[50vh] group hover:translate-y-[-50px] duration-300"
    >
      <h1 className="tracking-tight text-4xl font-medium">{stack.title}</h1>
      <motion.img
        animate={stack.rotate ? { rotate: "180deg" } : {}}
        className="w-1/2 place-self-center object-cover grayscale group-hover:grayscale-0"
        alt={`${stack.title}-image`}
        src={stack.image}
        loading="lazy"
      />
      <p className="tracking-tighter text-lg font-medium">
        {stack.description}
      </p>
    </motion.div>
  );
}
