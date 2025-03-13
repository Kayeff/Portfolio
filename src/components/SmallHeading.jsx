import { motion } from "framer-motion";

export default function SmallHeading({ title }) {
  return (
    <div className="overflow-hidden">
      <motion.h3
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        className="font-medium uppercase text-xs tracking-normal laptop:text-base text-end"
      >
        {title}
      </motion.h3>
    </div>
  );
}
