import { RiMoonFill, RiSunFill } from "@remixicon/react";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { ThemeContext } from "../store/ThemeContext";

const themes = [
  { value: "light", Icon: RiSunFill },
  { value: "dark", Icon: RiMoonFill },
];

export default function ThemeSelect() {
  const { theme, handleSetTheme } = useContext(ThemeContext);

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
