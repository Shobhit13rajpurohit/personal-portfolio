import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      description: "A responsive UI replica of Netflix's homepage using React",
      tags: ["react.js", "Responsive Design"],
      github: "https://github.com/Shobhit13rajpurohit/netflix-clone",
      live: "https://netflix-clone-shobhit.netlify.app"
    },
    {
      title: "Live-interview-assit",
      description: "AI Model",
      tags: ["FastApl, Oallama"],
      github: "https://github.com/Shobhit13rajpurohit/netflix-clone",
      live: "https://netflix-clone-shobhit.netlify.app"
    },
    {
      title: "Travel Booking Website",
      description: "A travel booking UI for searching and booking flights, hotels, and tours.",
      tags: ["React", "Node.js", ],
      github: "https://github.com/Shobhit13rajpurohit/travel-booking",
      live: "https://wander-git-main-shobhits-projects-3b5979eb.vercel.app/"
    },
    {
      title: "Patient Booking System",
      description: "A Django-based system for managing doctor appointments and patient records.",
      tags: ["Python", "Django", "MySQL"],
      github: "https://github.com/Shobhit13rajpurohit/patient-booking",
      live: "https://patient-booking-shobhit.netlify.app"
    },
    {
      title: "Temperature Converter App",
      description: "A JavaScript tool to convert temperatures between Celsius and Fahrenheit.",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Shobhit13rajpurohit/temperature-converter",
      live: "https://temperature-converter-shobhit.netlify.app"
    },
    {
      title: "portfolio Page",
      description: "A clean and responsive blog layout for publishing articles or posts.",
      tags: ["React", "Tailwind CSS"],
      github: "https://github.com/Shobhit13rajpurohit/blog-page",
      live: "https://blog-page-shobhit.netlify.app"
    },
    {
      title: "Car Landing Page",
      description: "A stylish, mobile-friendly landing page for showcasing automobiles.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shobhit13rajpurohit/car-landing",
      live: "https://car-landing-shobhit.netlify.app"
    },
    {
      title: "Medical website ",
      description: "A responsive medical service landing page for clinics or medical shops.",
      tags: ["React", "Tailwind CSS"],
      github: "https://github.com/Shobhit13rajpurohit/medical-landing",
      live: "https://medical-landing-shobhit.netlify.app"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 dark:bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white dark:text-gray-900 mb-8 text-center">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-20">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Live Demo</span>
                    </a>
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