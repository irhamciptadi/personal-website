"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { i18n } from "../../lib/i18n";
import { useLanguage } from "../../lib/LanguageProvider";
import { useState } from "react";

export default function Projects() {
  const { language } = useLanguage();
  const t = i18n[language as keyof typeof i18n];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        language === "id"
          ? "Platform e-commerce modern dengan Next.js, TypeScript, dan Stripe payment gateway. Fitur lengkap termasuk admin dashboard dan real-time inventory."
          : "Modern e-commerce platform built with Next.js, TypeScript, and Stripe payment gateway. Features include admin dashboard and real-time inventory management.",
      image: "/project1.jpg",
      screenshots: [
        "/project1-ss1.jpg",
        "/project1-ss2.jpg",
        "/project1-ss3.jpg",
      ],
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
      screenshots: [
        "/project2-ss1.jpg",
        "/project2-ss2.jpg",
        "/project2-ss3.jpg",
      ],
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
      screenshots: [
        "/project3-ss1.jpg",
        "/project3-ss2.jpg",
        "/project3-ss3.jpg",
      ],
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
      screenshots: [
        "/project4-ss1.jpg",
        "/project4-ss2.jpg",
        "/project4-ss3.jpg",
      ],
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
      screenshots: [
        "/project5-ss1.jpg",
        "/project5-ss2.jpg",
        "/project5-ss3.jpg",
      ],
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
      screenshots: [
        "/project6-ss1.jpg",
        "/project6-ss2.jpg",
        "/project6-ss3.jpg",
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      gradient: "from-orange-400 to-red-600",
    },
  ];

  // Slide pagination logic
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);
  const startIndex = currentSlide * projectsPerSlide;
  const endIndex = startIndex + projectsPerSlide;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const openProjectDetail = (index: number) => {
    const projectIndex = startIndex + index;
    setSelectedProject(projectIndex);
    setCurrentScreenshot(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    setCurrentScreenshot(0);
    document.body.style.overflow = "unset";
  };

  const nextScreenshot = () => {
    if (selectedProject !== null) {
      const screenshotsLength = projects[selectedProject].screenshots.length;
      setCurrentScreenshot((prev) => (prev + 1) % screenshotsLength);
    }
  };

  const prevScreenshot = () => {
    if (selectedProject !== null) {
      const screenshotsLength = projects[selectedProject].screenshots.length;
      setCurrentScreenshot(
        (prev) => (prev - 1 + screenshotsLength) % screenshotsLength
      );
    }
  };

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

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {currentProjects.map((project: any, index: number) => (
            <motion.div
              key={project.title}
              className={`group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-500 ${
                index === 1 && currentProjects.length === 3
                  ? "md:scale-110 md:z-10 md:shadow-xl" 
                  : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden ${
                index === 1 && currentProjects.length === 3 ? "h-64" : "h-48"
              }`}>
                <div
                  className={`w-full h-full bg-linear-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <div className="w-4/5 h-4/5 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className={`text-white font-bold ${
                      index === 1 && currentProjects.length === 3 ? "text-6xl" : "text-4xl"
                    }`}>
                      {startIndex + index + 1}
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
                <h3 className="text-xl font-bold mb-3 text-neutral-800 dark:text-neutral-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <motion.button
                    onClick={() => openProjectDetail(index)}
                    className="w-full px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-center text-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.projects.viewDetails}
                  </motion.button>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg font-medium text-center text-sm transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t.projects.viewProject}
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg font-medium text-center text-sm transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t.projects.viewCode}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slide Navigation */}
        {totalSlides > 1 && (
          <motion.div
            className="flex justify-center items-center mt-12 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </motion.button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }, (_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === i 
                      ? "bg-blue-500" 
                      : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </motion.button>
          </motion.div>
        )}



        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectDetail}
            >
              <motion.div
                className="relative bg-white dark:bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeProjectDetail}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-all duration-200"
                >
                  <X size={24} />
                </button>

                {/* Screenshot Carousel */}
                <div className="relative h-96 bg-neutral-100 dark:bg-neutral-800">
                  <div
                    className={`w-full h-full bg-linear-to-br ${projects[selectedProject].gradient} flex items-center justify-center`}
                  >
                    <div className="text-white text-6xl font-bold">
                      {selectedProject + 1}
                    </div>
                  </div>

                  {/* Screenshot Navigation */}
                  {projects[selectedProject].screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevScreenshot}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-all duration-200"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextScreenshot}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-all duration-200"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Screenshot Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {projects[selectedProject].screenshots.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentScreenshot(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              currentScreenshot === idx
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    {projects[selectedProject].title}
                  </h2>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {projects[selectedProject].description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-100">
                      {language === "id" ? "Teknologi" : "Technologies"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={projects[selectedProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} />
                      {t.projects.viewProject}
                    </motion.a>
                    <motion.a
                      href={projects[selectedProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg font-medium text-center transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={18} />
                      {t.projects.viewCode}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
