import { motion } from "framer-motion";

export default function Heading({ title, delay = 0 }) {
  return (
    <div className="w-full overflow-hidden flex items-center">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 150, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: delay }}
        className="uppercase text-6xl tracking-tighter mobile-s:text-5xl mobile-l:text-6xl sm:text-7xl tablet:text-8xl laptop:text-[10vw] laptop:leading-[10vw] w-max px-0.5"
      >
        {title}
      </motion.h1>
    </div>
  );
}
