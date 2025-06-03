import { motion, useInView, useScroll, useTransform } from "motion/react";
import Section from "./Section";
import sparkleLight from "/sparkle-light.svg";
import sparkleDark from "/sparkle-dark.svg";
import { useRef } from "react";

export default function Seek({ theme }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const isInView = useInView(sectionRef, {
    margin: "-20% 0px -20% 0px",
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
      className="grid-cols-2"
      smallHeadingText="I love bold design solutions that not only tackle the problem, but add a little bit of beauty to our world. The beauty of crafting narratives is neither just a job or a hobby - It's simply something I love to do."
    >
      {isInView && (
        <div className="w-full flex items-center justify-center flex-col gap-5 relative">
          <h1 className="text-5xl tracking-tight font-semibold">Ambition</h1>
          <div className="w-full flex items-center justify-center relative">
            <motion.img
              style={{ rotate }}
              className="object-cover h-60 text-[var(--text)]"
              src={theme === "dark" ? sparkleDark : sparkleLight}
              alt="sparkle"
              loading="lazy"
            />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--background)] z-20 text-3xl font-medium">
              &
            </p>
          </div>
        </div>
      )}
    </Section>
  );
}
