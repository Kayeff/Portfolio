import About from "../components/About";
import Hero from "../components/Hero";
import Seek from "../components/Seek";

export default function Home() {
  const today = new Date();

  return (
    <>
      <Hero today={today} />
      <About />
      <Seek />
    </>
  );
}
