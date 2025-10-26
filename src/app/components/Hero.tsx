"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { i18n } from "../../lib/i18n";
import { useLanguage } from "../../lib/LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const t = i18n[language as keyof typeof i18n];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Greeting */}
          <motion.p
            className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl lg:text-7xl xl:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            className="text-2xl lg:text-4xl xl:text-5xl font-semibold text-neutral-700 dark:text-neutral-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t.hero.role}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>{t.hero.cta}</span>
            </motion.a>

            <motion.button
              className="px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Resume</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/irhamciptadi",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/irhamciptadi/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:iciptadi98@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center text-neutral-400 dark:text-neutral-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <span className="text-sm mb-2">Scroll down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
