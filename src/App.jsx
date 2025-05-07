import { ReactLenis, useLenis } from "lenis/react";
import { useRef, useEffect, useState, Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const today = new Date();
  const lenis = useLenis(({ scroll }) => {
    requestAnimationFrame(() => {});
  });

  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  function handleScrollTo(section) {
    if (lenis && section) {
      lenis.scrollTo(section.current, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        offset: -50,
      });
    }
  }

  const storedThemes =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefer-color-scheme: dark)").matches && "dark") ||
    "light" ||
    "red";

  const [theme, setTheme] = useState(storedThemes);

  const toggleTheme = (color) => {
    setTheme(color);
    localStorage.setItem("theme", color);
  };

  useEffect(() => {
    const element = document.querySelector("main");
    element.classList.remove("light", "dark", "red");
    element.classList.add(theme);
  }, [theme]);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smooth: true,
        smoothTouch: false,
        autoRaf: true,
      }}
    >
      <main className="min-h-screen w-full relative bg-[var(--background)] text-[var(--text)] transition-colors duration-500">
        <Navbar
          onClick={(id) => {
            if (id === "projects") handleScrollTo(projectsRef);
            if (id === "about") handleScrollTo(aboutRef);
            if (id === "contact") handleScrollTo(contactRef);
          }}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Hero today={today} />
        <Projects ref={projectsRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
        <Footer today={today} />
      </main>
    </ReactLenis>
  );
}
