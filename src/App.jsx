import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ReactLenis } from "lenis/react";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2, // Adjust for smoothness
        easing: (t) => 1 - Math.pow(1 - t, 3), // Custom ease-out curve
        smooth: true,
        smoothTouch: false, // Disable for touch devices
        autoRaf: true,
      }}
    >
      <main className="font-general-sans min-h-screen w-full bg-night">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}
