import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext({
  theme: null,
  handleSetTheme: () => {},
});

const preferredTheme =
  localStorage.getItem("theme") ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export default function ThemeContextProvider({ children }) {
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

  const ctxValue = {
    theme,
    handleSetTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
