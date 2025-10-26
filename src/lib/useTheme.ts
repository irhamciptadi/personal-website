"use client";
import { useEffect, useState } from "react";
import usePersistedState from "./usePersistedState";

type Theme = "light" | "dark" | "system";

export default function useTheme() {
  const [theme, setTheme] = usePersistedState<Theme>("irham.theme", "system");
  const [mounted, setMounted] = useState(false);

  // Apply theme changes
  const applyTheme = (currentTheme: Theme) => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const isDark =
      currentTheme === "dark" ||
      (currentTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  // Handle component mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme on mount and theme change
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted || theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return { theme, setTheme, toggleTheme, mounted };
}
