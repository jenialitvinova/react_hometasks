import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Theme } from "./ThemeContext.types";
import { ThemeContextType } from "./ThemeContext.types";

const defaultTheme: Theme =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || defaultTheme,
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
