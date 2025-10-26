"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { i18n } from "../../lib/i18n";
import { useLanguage } from "../../lib/LanguageProvider";
import { useThemeContext } from "../../lib/ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme, mounted } = useThemeContext();
  const t = i18n[language as keyof typeof i18n];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  const getThemeIcon = () => {
    // Show appropriate icon based on current theme
    switch (theme) {
      case "light":
        return <Sun size={16} />;
      case "night":
        return <Moon size={16} />;
      default:
        return <Sun size={16} />; // Default to sun icon for light mode
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="font-bold text-xl lg:text-2xl bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            ICIP
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium cursor-pointer"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              key={`theme-${theme}`}
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={`Current theme: ${theme}`}
            >
              {getThemeIcon()}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={16} />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <motion.button
              key={`mobile-theme-${theme}`}
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              whileTap={{ scale: 0.95 }}
              title={`Current theme: ${theme}`}
            >
              {getThemeIcon()}
            </motion.button>

            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={12} />
              <span className="text-xs font-medium">
                {language.toUpperCase()}
              </span>
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isOpen ? "block" : "hidden"}`}
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 border-t border-neutral-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-b-lg">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10 rounded-lg transition-colors font-medium cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
