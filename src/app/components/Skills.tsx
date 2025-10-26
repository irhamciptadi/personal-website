"use client";
import { motion } from "framer-motion";
import { i18n } from "../../lib/i18n";
import usePersistedState from "../../lib/usePersistedState";

export default function Skills() {
  const [language] = usePersistedState(
    "irham.lang",
    typeof window !== "undefined" && navigator.language.startsWith("id")
      ? "id"
      : "en"
  );

  const t = i18n[language as keyof typeof i18n];

  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
        {
          name: "Framer Motion",
          level: 85,
          color: "from-purple-400 to-purple-600",
        },
      ],
    },
    {
      title: t.skills.backend,
      skills: [
        { name: "Node.js", level: 87, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Python", level: 82, color: "from-yellow-400 to-yellow-600" },
        { name: "PostgreSQL", level: 80, color: "from-blue-600 to-blue-800" },
        { name: "MongoDB", level: 78, color: "from-green-500 to-green-700" },
      ],
    },
    {
      title: t.skills.tools,
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          color: "from-orange-400 to-orange-600",
        },
        { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 70, color: "from-yellow-500 to-orange-500" },
        { name: "Figma", level: 85, color: "from-pink-400 to-pink-600" },
        { name: "VS Code", level: 95, color: "from-blue-500 to-blue-700" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 px-6 lg:px-12 bg-neutral-50 dark:bg-neutral-900/50"
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
            {t.skills.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl lg:text-2xl font-bold mb-8 text-center bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-linear-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "JavaScript",
              "HTML5",
              "CSS3",
              "Sass",
              "Redux",
              "GraphQL",
              "REST API",
              "Jest",
              "Cypress",
              "Webpack",
              "Vite",
              "Firebase",
              "Supabase",
              "Vercel",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
