"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { i18n } from "../../lib/i18n";
import { useLanguage } from "../../lib/LanguageProvider";

export default function Contact() {
  const { language } = useLanguage();
  const t = i18n[language as keyof typeof i18n];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setErrorMessage(
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "iciptadi98@gmail.com",
      href: "mailto:iciptadi98@gmail.com",
    },
    {
      icon: Phone,
      label: language === "id" ? "LinkedIn" : "LinkedIn",
      value: "linkedin.com/in/irhamciptadi",
      href: "https://www.linkedin.com/in/irhamciptadi/",
    },
    {
      icon: MapPin,
      label: language === "id" ? "Lokasi" : "Location",
      value: "Indonesia",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 px-6 lg:px-12 bg-neutral-50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg border border-neutral-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="p-3 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 text-white">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-700">
                      {info.label}
                    </div>
                    {info.href === "#" ? (
                      <div className="text-neutral-600">{info.value}</div>
                    ) : (
                      <a
                        href={info.href}
                        className="text-purple-600 hover:underline"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              className="p-6 rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 border border-purple-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-purple-800">
                {language === "id"
                  ? "Siap untuk Berkolaborasi!"
                  : "Ready to Collaborate!"}
              </h3>
              <p className="text-purple-700 leading-relaxed">
                {language === "id"
                  ? "Saya selalu terbuka untuk peluang menarik dan proyek-proyek menantang. Mari kita ciptakan sesuatu yang luar biasa bersama!"
                  : "I'm always open to exciting opportunities and challenging projects. Let's create something amazing together!"}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  placeholder={
                    language === "id" ? "Masukkan nama Anda" : "Enter your name"
                  }
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  placeholder={
                    language === "id"
                      ? "Masukkan email Anda"
                      : "Enter your email"
                  }
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                  placeholder={
                    language === "id"
                      ? "Tulis pesan Anda di sini..."
                      : "Write your message here..."
                  }
                />
              </motion.div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300"
                >
                  <CheckCircle size={20} />
                  <span className="font-medium">
                    {language === "id"
                      ? "Pesan berhasil dikirim! Terima kasih telah menghubungi saya."
                      : "Message sent successfully! Thank you for reaching out."}
                  </span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-start space-x-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300"
                >
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <span className="font-medium">{errorMessage}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className={`w-full px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                  status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                }`}
                whileHover={status !== "loading" ? { scale: 1.02, y: -2 } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>
                      {language === "id" ? "Mengirim..." : "Sending..."}
                    </span>
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={20} />
                    <span>{language === "id" ? "Terkirim!" : "Sent!"}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t.contact.send}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
