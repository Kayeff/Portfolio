import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollDown from "./components/ScrollDown";

const storedThemes =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefer-color-scheme: dark)").matches && "dark") ||
  "light";

export default function App() {
  const today = new Date();

  const [theme, setTheme] = useState(storedThemes);
  const toggleTheme = (color) => {
    setTheme(color);
    localStorage.setItem("theme", color);
  };

  useEffect(() => {
    const element = document.querySelector("main");
    element.classList.remove("light", "dark");
    element.classList.add(theme);
  }, [theme]);

  return (
    <main className="min-h-screen w-full relative bg-[var(--background)] text-[var(--text)] transition-colors duration-500 antialiased">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <ScrollDown />
      <div className="w-full px-10 flex flex-col gap-10">
        <Outlet />
      </div>
      <Footer today={today} />
    </main>
  );
}
