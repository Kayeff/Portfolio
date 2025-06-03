import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import Section from "./Section";
import sparkleLight from "/sparkle-light.svg";
import sparkleDark from "/sparkle-dark.svg";
import { use, useRef } from "react";
import { ThemeContext } from "../store/ThemeContext";

export default function Seek() {
  const sectionRef = useRef(null);
  const { theme } = use(ThemeContext);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const isInView = useInView(sectionRef, {
    margin: "-10% 0px -20% 0px",
    once: false,
  });

  return (
    <Section
      ref={sectionRef}
      headingText={
        <>
          What <span className="font-ephasis font-normal">I seek</span>
        </>
      }
      className="grid-cols-2 relative overflow-x-hidden"
      smallHeadingText="I love bold design solutions that not only tackle the problem, but add a little bit of beauty to our world. The beauty of crafting narratives is neither just a job or a hobby - It's simply something I love to do."
    >
      <AnimatePresence>
        {isInView && (
          <div className="w-full flex items-center justify-center flex-col gap-5 relative">
            <motion.img
              className="object-cover h-60 text-[var(--text)] absolute right-0 top-0"
              style={{ rotate }}
              exit={{ opacity: 0 }}
              src={theme === "dark" ? sparkleLight : sparkleDark}
              alt="sparkle"
              loading="lazy"
            />
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
