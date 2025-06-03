import { motion } from "framer-motion";

export default function SmallHeading({ title }) {
  return (
    <div className="w-full overflow-hidden flex items-center">
      <motion.h3 className="font-medium text-6xl tracking-tighter mobile-s:text-5xl mobile-l:text-6xl sm:text-7xl tablet:text-8xl laptop:text-[4.3vw] laptop:leading-[4.3vw] w-max p-1">
        {title}
      </motion.h3>
    </div>
  );
}
