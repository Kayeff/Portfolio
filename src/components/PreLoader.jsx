import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useAnimate } from "framer-motion";

export default function Preloader({ onFinish }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const enterAnimation = async () => {
      // Animate the preloader to full height
      await animate(
        scope.current,
        { height: "100%" },
        { duration: 1.2, ease: "easeOut" }
      );

      // Animate the "Welcome" text
      await animate(
        "#heading",
        { y: [100, 0, -100], opacity: [0, 1, 0] },
        { duration: 1.3, ease: "easeInOut" }
      );

      // Animate the preloader to collapse
      await animate(
        scope.current,
        { height: 0, top: "0%" },
        { duration: 1.2, ease: "easeOut" }
      );
    };

    enterAnimation();
  }, [animate, scope, onFinish]);

  return createPortal(
    <motion.div
      ref={scope}
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center flex-col bg-night z-50"
    >
      <div className="px-0.5 overflow-hidden">
        <motion.h1
          id="heading"
          className="text-white text-[4vw] font-medium tracking-tight font-general-sans"
        >
          Welcome
        </motion.h1>
      </div>
    </motion.div>,
    document.getElementById("preloader")
  );
}
