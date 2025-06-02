import { motion } from "framer-motion";

export default function Heading({ title, delay = 0 }) {
  return (
    <div className="w-full overflow-hidden flex items-center">
      <motion.h1
        transition={{ duration: 1, ease: "easeInOut", delay: delay }}
        className="font-semibold text-6xl tracking-tight mobile-s:text-5xl mobile-l:text-6xl sm:text-7xl tablet:text-8xl laptop:text-[5vw] laptop:leading-[5vw] w-max p-1 flex items-center gap-2"
      >
        {title}
      </motion.h1>
    </div>
  );
}
