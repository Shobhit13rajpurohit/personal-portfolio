import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: "Octanet Company",
      position: "Internship",
      period: "June 2023 to July 2023",
      achievements: [
        "Developed a Netflix web page, showcasing proficiency in web designing",
        "Designed and implemented a temperature converter, demonstrating versatility in coding"
      ]
    },
    {
      company: "Bharat Intern",
      position: "Internship",
      period: "July 2023 to August 2023",
      achievements: [
        "Created a captivating blog page, highlighting content creation skills",
        "Developed a professional portfolio website, showcasing expertise in web design",
        "Demonstrated remote collaboration and project management abilities"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 dark:bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white dark:text-gray-900 mb-8 text-center">
            Work Experience
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 dark:bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">
                  {exp.company}
                </h3>
                <p className="text-gray-300 dark:text-gray-600 mb-2">
                  {exp.position} • {exp.period}
                </p>
                <ul className="list-disc list-inside text-gray-300 dark:text-gray-600 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}