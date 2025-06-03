import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  return <ThemeContext.Provider></ThemeContext.Provider>;
}
