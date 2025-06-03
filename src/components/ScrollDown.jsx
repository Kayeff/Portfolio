import { motion, useScroll, useTransform } from "motion/react";
import { RiArrowDownLongLine } from "@remixicon/react";
import { useLenis } from "lenis/react";

export default function ScrollDown() {
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 180]);

  function handleClick() {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1 });
    }
  }

  return (
    <motion.button
      style={{ rotate }}
      onClick={handleClick}
      className="fixed right-5 bottom-10 z-30 p-4 border-[1.5px] border-[var(--text)]/20 rounded-full flex items-center justify-center bg-[var(--background)] cursor-pointer"
    >
      <RiArrowDownLongLine />
    </motion.button>
  );
}
