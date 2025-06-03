import ReactLenis from "lenis/react";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.0,
        easing: (t) => t * (2 - t),
        smooth: true,
        smoothTouch: false,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
