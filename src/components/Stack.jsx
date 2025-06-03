import { motion } from "motion/react";

export default function Stack({ stack, index }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
          delay: index * 0.1,
        },
      }}
      whileHover={{
        y: -50,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full border border-[var(--text)]/15 rounded-xl flex justify-between flex-col gap-4 p-4 h-[50vh] group"
    >
      <h1 className="tracking-tight text-4xl font-medium">{stack.title}</h1>
      <img
        className="w-1/2 place-self-center object-cover dark:grayscale group-hover:grayscale-0"
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
