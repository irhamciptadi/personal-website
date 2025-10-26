"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Users,
  Trophy,
  Briefcase,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { i18n } from "../../lib/i18n";
import { useLanguage } from "../../lib/LanguageProvider";

export default function About() {
  const { language } = useLanguage();
  const [expandedJobs, setExpandedJobs] = useState<number[]>([0]); // First job expanded by default

  const t = i18n[language as keyof typeof i18n];

  const toggleJob = (index: number) => {
    setExpandedJobs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isJobExpanded = (index: number) => expandedJobs.includes(index);

  const stats = [
    {
      icon: Code,
      number: "7+",
      label: t.about.stats.experience,
    },
    {
      icon: Trophy,
      number: "50+",
      label: t.about.stats.projects,
    },
    {
      icon: Users,
      number: "20+",
      label: t.about.stats.clients,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {t.about.body.map((paragraph: string, index: number) => (
              <motion.p
                key={index}
                className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="inline-flex p-4 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 text-white mb-4">
                <stat.icon size={32} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Technical Highlights */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.about.highlightsTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {t.about.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-6 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle size={20} className="text-green-500 shrink-0" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold mb-8 text-center text-neutral-700 dark:text-neutral-300">
            {t.about.technologiesIntro}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {t.about.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50/80 dark:hover:bg-purple-900/20 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-12 text-center bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.about.experienceTitle}
          </h3>

          <div className="space-y-4">
            {t.about.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-700/60 overflow-hidden hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Experience Header - Clickable */}
                <button
                  onClick={() => toggleJob(index)}
                  className="w-full px-6 py-5 text-left hover:bg-white/30 dark:hover:bg-neutral-700/20 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg lg:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 truncate">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center space-x-2 text-xs text-neutral-500 dark:text-neutral-400">
                        <Calendar size={14} />
                        <span className="font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isJobExpanded(index) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown
                          size={20}
                          className="text-neutral-500 dark:text-neutral-400"
                        />
                      </motion.div>
                    </div>
                  </div>
                </button>

                {/* Experience Description - Collapsible */}
                <AnimatePresence initial={false}>
                  {isJobExpanded(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-2 space-y-2 border-t border-neutral-200/50 dark:border-neutral-700/50">
                        {exp.desc.map((item, descIndex) => (
                          <motion.div
                            key={descIndex}
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: descIndex * 0.05,
                            }}
                          >
                            <CheckCircle
                              size={14}
                              className="text-green-500 shrink-0 mt-0.5"
                            />
                            <span className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
