import { motion, useScroll, useTransform } from "motion/react";

export default function CircularText({ circleText }) {
  const text = circleText.split("").map((letter, index) => (
    <span
      style={{ rotate: `${11 * index}deg`, transformOrigin: "0 100px" }}
      className="absolute left-1/2 text-[1.2em]"
      key={index}
    >
      {letter}
    </span>
  ));

  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1200], [0, 360]);

  return (
    <div className="relative size-[300px]">
      <div className="w-full h-full absolute">
        <motion.p
          style={{ rotate }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          className="font-inter"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
}
