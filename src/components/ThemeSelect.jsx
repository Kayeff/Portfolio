import { useState, useEffect } from "react";
import { RiMoonFill, RiSunFill, RiTriangleFill } from "@remixicon/react";
import { twMerge } from "tailwind-merge";

const themes = [
  { value: "light", Icon: RiSunFill },
  { value: "red", Icon: RiTriangleFill },
  { value: "dark", Icon: RiMoonFill },
];

export default function ThemeSelect({}) {
  const storedTheme =
    localStorage.getItem("theme") ||
    window.matchMedia("(prefer-color-scheme: dark)").matches
      ? "dark"
      : "light";
  const [theme, setTheme] = useState(storedTheme);

  function handleSetTheme(clickedTheme) {
    setTheme(clickedTheme);
    localStorage.setItem("theme", clickedTheme);
  }

  useEffect(() => {
    const element = document.querySelector("main");
    element.classList.remove("light", "dark", "red");

    if (theme === "light") {
      element.classList.add("light");
    } else if (theme === "red") {
      element.classList.add("red");
    } else {
      element.classList.add("dark");
    }
  }, [theme]);

  return (
    <div className="text-[var(--text)] p-0.5 flex items-center justify-center gap-1 border border-[var(--text)]/20 rounded-full">
      {themes.map(({ Icon, value }) => (
        <button
          key={value}
          onClick={() => handleSetTheme(value)}
          className={twMerge(
            "p-2 rounded-full hover:text-[var(--background] duration-300 text-[var(--text)]/60 cursor-pointer",
            theme === value && "bg-[var(--text)] text-[var(--background)]"
          )}
        >
          <Icon size={15} />
        </button>
      ))}
    </div>
  );
}
