import { motion, useScroll, useTransform } from "motion/react";

export default function CircularText({ circleText }) {
  const text = circleText.split("").map((letter, index) => (
    <span
      style={{ rotate: `${10 * index}deg`, transformOrigin: "0 100px" }}
      className="absolute left-1/2"
      key={index}
    >
      {letter}
    </span>
  ));

  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1200], [0, 360]);

  return (
    <motion.h1
      style={{ rotate }}
      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      className="relative size-[200px] font-inter tracking-tighter"
    >
      {text}
    </motion.h1>
  );
}
