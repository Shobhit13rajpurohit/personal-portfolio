import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (Basic)", "Responsive Bootstrap", "ReactJS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "FastAPI"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      skills: ["MySQL"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 dark:bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white dark:text-gray-900 mb-8 text-center">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${category.color} p-[2px] rounded-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="bg-gray-800 dark:bg-white rounded-lg p-6 h-full">
                  <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 dark:bg-gray-100 text-gray-300 dark:text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-600 dark:hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}