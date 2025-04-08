import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projects = [
   
    
    {
      title: "Medical Patient Booking System",
      description: "Real world impact.",
      tags: ["Vite.js", "FASTAPi", "MySQL"],
      github: "https://github.com/Shobhit13rajpurohit/patient-booking",
      live: "https://patient-booking-shobhit.netlify.app",
      color: "#10B981" // Green
    },
    {
      title: "Face recognition & Detaction ",
      description: "Final Year Project",
      tags: ["Vite.js", "Open CV", "python","Numpy"],
      github: "https://github.com/Shobhit13rajpurohit/temperature-converter",
      live: "https://temperature-converter-shobhit.netlify.app",
      color: "#F59E0B" // Amber
    },
    {
      title: "Portfolio Page",
      description: "A clean and responsive blog layout for publishing articles or posts.",
      tags: ["React", "Tailwind CSS","R3F"],
      github: "https://github.com/Shobhit13rajpurohit/blog-page",
      live: "https://blog-page-shobhit.netlify.app",
      color: "#8B5CF6" // Purple
    },
    {
      title: "Travel Booking Website",
      description: "A travel booking UI for searching and booking flights, hotels, and tours.",
      tags: ["React.js"],
      github: "https://github.com/Shobhit13rajpurohit/travel-booking",
      live: "https://wander-git-main-shobhits-projects-3b5979eb.vercel.app/",
      color: "#4F46E5" // Indigo
    },
    {
      title: "Netflix Clone",
      description: "A responsive UI replica of Netflix's homepage using React",
      tags: ["react.js", "Responsive Design"],
      github: "https://github.com/Shobhit13rajpurohit/netflix-clone",
      live: "https://netflix-clone-shobhit.netlify.app",
      color: "#E50914" // Netflix red
    },
    {
      title: "Live-interview-assist",
      description: "AI Model coming soon ",
      tags: ["FastAPI", "Ollama", "AI"],
      github: "https://github.com/Shobhit13rajpurohit/netflix-clone",
      live: "https://netflix-clone-shobhit.netlify.app",
      color: "#38B2AC" // Teal
    },
 
    {
      title: "Medical Website",
      description: "A responsive medical service landing page for clinics or medical shops.",
      tags: ["React", "Tailwind CSS"],
      github: "https://github.com/Shobhit13rajpurohit/medical-landing",
      live: "https://medical-landing-shobhit.netlify.app",
      color: "#06B6D4" // Cyan
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-500 opacity-10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-3">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Crafting digital experiences through code and creativity</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div 
                className={`rounded-xl overflow-hidden transform transition-all duration-500 ${
                  hoveredIndex === index ? "scale-105" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Card Background with Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl"
                  style={{
                    boxShadow: hoveredIndex === index 
                      ? `0 20px 25px -5px rgba(0,0,0,0.3), 0 0 25px -5px ${project.color}30` 
                      : "0 10px 15px -3px rgba(0,0,0,0.3)",
                  }}
                ></div>
                
                {/* Glowing Border */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, transparent 50%, ${project.color}40 100%)`,
                  }}
                ></div>
                
                {/* Content Container */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Floating 3D Icon - Different for each project */}
                  <div 
                    className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-all duration-500"
                    style={{
                      transform: hoveredIndex === index ? "translateZ(20px) rotate(10deg)" : "translateZ(0) rotate(0deg)",
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${project.color}20` }}
                    >
                      <Star className="w-6 h-6" style={{ color: project.color }} />
                    </div>
                  </div>
                  
                  {/* Title with 3D effect */}
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4"
                    style={{
                      transform: hoveredIndex === index ? "translateZ(30px)" : "translateZ(0)",
                      textShadow: hoveredIndex === index ? `0 0 10px ${project.color}60` : "none",
                      transition: "all 0.5s ease-out",
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  {/* Description with 3D effect */}
                  <motion.p 
                    className="text-gray-300 mb-6 flex-grow"
                    style={{
                      transform: hoveredIndex === index ? "translateZ(20px)" : "translateZ(0)",
                      transition: "all 0.5s ease-out",
                    }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Tags with hover effect */}
                  <div 
                    className="flex flex-wrap gap-2 mb-6"
                    style={{
                      transform: hoveredIndex === index ? "translateZ(15px)" : "translateZ(0)",
                      transition: "all 0.5s ease-out",
                    }}
                  >
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300"
                        style={{ 
                          backgroundColor: hoveredIndex === index ? `${project.color}30` : "rgba(255,255,255,0.1)",
                          color: hoveredIndex === index ? project.color : "rgba(255,255,255,0.7)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links with 3D effect */}
                  <div 
                    className="flex space-x-4 mt-auto"
                    style={{
                      transform: hoveredIndex === index ? "translateZ(25px)" : "translateZ(0)",
                      transition: "all 0.5s ease-out",
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                      style={{ 
                        backgroundColor: hoveredIndex === index ? project.color : "rgba(255,255,255,0.1)",
                        color: hoveredIndex === index ? "#000" : "#fff",
                      }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}