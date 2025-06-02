import { useState, useEffect } from "react";
import { RiMoonFill, RiSunFill } from "@remixicon/react";
import { twMerge } from "tailwind-merge";

const themes = [
  { value: "light", Icon: RiSunFill },
  { value: "dark", Icon: RiMoonFill },
];

const preferredTheme =
  localStorage.getItem("theme") ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export default function ThemeSelect() {
  const [theme, setTheme] = useState(preferredTheme);

  function handleSetTheme(selectedTheme) {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  }

  useEffect(() => {
    const element = document.documentElement;
    element.classList.remove("light", "dark");

    element.classList.add(theme);
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
