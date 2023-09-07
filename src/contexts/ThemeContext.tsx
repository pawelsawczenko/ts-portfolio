import { createContext, useEffect, useState } from "react";
import { ThemeContextType } from "./theme";

const ThemeContext = createContext<ThemeContextType>([
  { themeName: "light", toggleTheme: () => {} },
]);

type ThemeProviderProps = { children: React.ReactNode };

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setThemeName(darkMediaQuery.matches ? "dark" : "light");
    darkMediaQuery.addEventListener("change", (e) => {
      setThemeName(e.matches ? "dark" : "light");
    });
    console.log(darkMediaQuery);
  }, []);

  const toggleTheme = () => {
    console.log("click");
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
