import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ReactLenis, useLenis } from "lenis/react";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

export default function App() {
  const today = new Date();
  const lenis = useLenis();

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
      <main className="font-general-sans min-h-screen w-full bg-night relative">
        <Navbar
          onClick={(id) => {
            if (id === "projects") handleScrollTo(projectsRef);
            if (id === "about") handleScrollTo(aboutRef);
            if (id === "contact") handleScrollTo(contactRef);
          }}
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
