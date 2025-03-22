import { useState, useRef, useEffect } from "react";

const themes = [
  { value: "light", label: "Light" },
  { value: "red", label: "Red" },
  { value: "dark", label: "Dark" },
];

export default function ThemeSelect({ toggleTheme, themeColor }) {
  const selected = themes.find((theme) => theme.value === themeColor);
  const [selectedTheme, setSelectedTheme] = useState(selected);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSelect = (theme) => {
    toggleTheme(theme.value);
    setSelectedTheme(theme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 border border-[var(--text)]/20 hover:bg-rich-grey/5 transition-colors duration-500 cursor-pointer"
      >
        {selectedTheme.label}
      </button>

      {isOpen && (
        <ul className="absolute bg-[var(--background)] mt-1 w-full border border-[var(--text)]/20 overflow-hidden">
          {themes.map((theme) => (
            <li
              key={theme.value}
              onClick={() => handleSelect(theme)}
              className="px-4 py-2 cursor-pointer hover:bg-rich-grey/10 transition-colors duration-500"
            >
              {theme.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
