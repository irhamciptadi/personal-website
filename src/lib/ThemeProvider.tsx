"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "night";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light"); // Default to light
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("irham.theme") as Theme;
      if (savedTheme && ["light", "night"].includes(savedTheme)) {
        setTheme(savedTheme);
      } else {
        // Set default to light if no saved theme and save it
        setTheme("light");
        localStorage.setItem("irham.theme", "light");
      }
    } catch (error) {
      console.log("Error loading theme from localStorage:", error);
      setTheme("light"); // Fallback to light
      try {
        localStorage.setItem("irham.theme", "light");
      } catch (e) {
        console.log("Error saving fallback theme:", e);
      }
    }
    setMounted(true);
  }, []);

  // Apply theme changes
  const applyTheme = (currentTheme: Theme) => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const isNight = currentTheme === "night";

    console.log(`🎨 Applying theme: ${currentTheme}, isNight: ${isNight}`);
    console.log(`📋 Current html classes before:`, root.classList.toString());

    // Always remove first, then add if needed to ensure clean state
    root.classList.remove("dark");

    if (isNight) {
      root.classList.add("dark");
    }

    console.log(
      `✅ After applying theme, html classes:`,
      root.classList.toString()
    );
    console.log(`🌙 Body background should change now`);
  };

  // Save theme to localStorage and apply
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    // Apply theme immediately
    applyTheme(newTheme);
    try {
      localStorage.setItem("irham.theme", newTheme);
    } catch (error) {
      console.log("Error saving theme to localStorage:", error);
    }
  };

  // Apply theme on mount and theme change
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "night" : "light";
    console.log(`🔄 Toggling theme from ${theme} to ${nextTheme}`);
    console.log(`📱 Current theme state:`, { theme, mounted });
    updateTheme(nextTheme);
  };

  const contextValue: ThemeContextType = {
    theme,
    setTheme: updateTheme,
    toggleTheme,
    mounted,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
