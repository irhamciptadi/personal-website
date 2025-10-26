"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { i18n } from "../../lib/i18n";
import { useLanguage } from "../../lib/LanguageProvider";

export default function Projects() {
  const { language } = useLanguage();
  const t = i18n[language as keyof typeof i18n];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        language === "id"
          ? "Platform e-commerce modern dengan Next.js, TypeScript, dan Stripe payment gateway. Fitur lengkap termasuk admin dashboard dan real-time inventory."
          : "Modern e-commerce platform built with Next.js, TypeScript, and Stripe payment gateway. Features include admin dashboard and real-time inventory management.",
      image: "/project1.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind", "Stripe", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      gradient: "from-blue-400 to-purple-600",
    },
    {
      title: "Task Management App",
      description:
        language === "id"
          ? "Aplikasi manajemen tugas real-time dengan fitur kolaborasi tim, drag & drop, dan notifikasi push. Dibangun dengan React dan Socket.io."
          : "Real-time task management application with team collaboration features, drag & drop functionality, and push notifications. Built with React and Socket.io.",
      image: "/project2.jpg",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Weather Forecast Dashboard",
      description:
        language === "id"
          ? "Dashboard cuaca interaktif dengan visualisasi data real-time, peta interaktif, dan prediksi cuaca 7 hari. Menggunakan API cuaca dan chart.js."
          : "Interactive weather dashboard with real-time data visualization, interactive maps, and 7-day weather forecasts. Uses weather APIs and chart.js.",
      image: "/project3.jpg",
      tech: ["Vue.js", "Chart.js", "Weather API", "Mapbox", "SCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Social Media Analytics",
      description:
        language === "id"
          ? "Platform analitik media sosial dengan dashboard komprehensif, laporan otomatis, dan insights berbasis AI. Mendukung multiple platform sosial."
          : "Social media analytics platform with comprehensive dashboard, automated reporting, and AI-powered insights. Supports multiple social platforms.",
      image: "/project4.jpg",
      tech: ["Python", "Django", "React", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      gradient: "from-pink-400 to-red-500",
    },
    {
      title: "Learning Management System",
      description:
        language === "id"
          ? "Sistem manajemen pembelajaran dengan fitur video streaming, quiz interaktif, progress tracking, dan sertifikat digital."
          : "Learning management system with video streaming, interactive quizzes, progress tracking, and digital certificates.",
      image: "/project5.jpg",
      tech: ["Next.js", "Prisma", "Mux", "Stripe", "Clerk"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      gradient: "from-purple-400 to-indigo-600",
    },
    {
      title: "Restaurant Ordering System",
      description:
        language === "id"
          ? "Sistem pemesanan restoran dengan QR code menu, payment gateway, kitchen dashboard, dan tracking pesanan real-time."
          : "Restaurant ordering system with QR code menu, payment gateway, kitchen dashboard, and real-time order tracking.",
      image: "/project6.jpg",
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      gradient: "from-orange-400 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-200 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`w-full h-full bg-linear-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <div className="w-4/5 h-4/5 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 text-neutral-700 rounded-full hover:bg-white hover:scale-110 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 text-neutral-700 rounded-full hover:bg-white hover:scale-110 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-neutral-800 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-center text-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.projects.viewProject}
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-neutral-300 text-neutral-700 hover:border-purple-500 hover:text-purple-600 rounded-lg font-medium text-center text-sm transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.projects.viewCode}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
