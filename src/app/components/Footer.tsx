"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { i18n } from "../../lib/i18n";
import { useLanguage } from "../../lib/LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  const t = i18n[language as keyof typeof i18n];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/irhamciptadi",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/irhamciptadi",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:iciptadi98@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    // { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 relative">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Irham.dev
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-md">
                {language === "id"
                  ? "Menciptakan pengalaman digital yang memukau dengan teknologi modern dan desain yang thoughtful."
                  : "Creating stunning digital experiences with modern technology and thoughtful design."}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-purple-600 text-neutral-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              {language === "id" ? "Navigasi" : "Navigation"}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              {language === "id" ? "Kontak" : "Contact"}
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-neutral-400">Email</p>
                <a
                  href="mailto:iciptadi98@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  iciptadi98@gmail.com
                </a>
              </div>
              <div>
                <p className="text-neutral-400">Location</p>
                <p className="text-neutral-300">Jakarta, Indonesia</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-neutral-400">
            <span>{t.footer.copyright}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.div>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-neutral-400 hover:text-purple-400 transition-colors group"
            whileHover={{ y: -2 }}
          >
            <span className="text-sm">
              {language === "id" ? "Kembali ke Atas" : "Back to Top"}
            </span>
            <motion.div
              className="p-1 rounded-full bg-neutral-800 group-hover:bg-purple-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUp size={14} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-linear-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-2xl" />
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-linear-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-2xl" />
    </footer>
  );
}
