import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function ContactLink({ title, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full relative overflow-hidden flex items-center justify-start"
    >
      <div className="w-full relative p-1">
        <span className="uppercase font-medium tracking-tighter text-3xl text-rich-grey flex items-start">
          {title}{" "}
          <span>
            <RiArrowRightUpLine size={30} />
          </span>
        </span>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full absolute left-1/2 -translate-x-1/2 bg-rich-grey flex items-center justify-between overflow-hidden"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full absolute left-1/2 -translate-x-1/2 bg-rich-grey flex items-center justify-between overflow-hidden p-1"
        >
          <span className="text-3xl font-medium uppercase text-night flex justify-center tracking-tighter">
            {title}{" "}
          </span>
        </motion.div>
      </motion.div>
    </motion.a>
  );
}
