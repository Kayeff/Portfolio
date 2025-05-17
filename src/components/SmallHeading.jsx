import { motion } from "framer-motion";

export default function SmallHeading({ title, delay }) {
  return (
    <div className="overflow-hidden">
      <motion.h3
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: delay }}
        className="font-medium uppercase text-xs tracking-tighter laptop:text-base text-end"
      >
        {title}
      </motion.h3>
    </div>
  );
}
