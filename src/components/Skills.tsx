import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdvancedSkills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef(null);
  
  const skillData = [
    {
      category: "frontend",
      label: "Frontend",
      skills: [
        { name: "React", level: 90, description: "Component architecture, hooks, state management" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first styling with responsive design" },
        { name: "JSX", level: 60, description: "Declarative UI composition" },
        { name: "Responsive UI", level: 85, description: "Mobile-first design principles" },
        { name: "Framer Motion", level: 75, description: "UI animations and transitions" },
        { name: "CSS3", level: 80, description: "Advanced styling and animations" },
        { name: "HTML5", level: 95, description: "Semantic markup and accessibility" }
      ],
      color: "blue"
    },
    {
      category: "backend",
      label: "Backend",
      skills: [
        { name: "FastAPI", level: 80, description: "High-performance Python API framework" },
        { name: "Django", level: 75, description: "Full-stack Python web framework" },
        { name: "Python", level: 85, description: "Server-side scripting and automation" },
        { name: "MYSQL", level: 70, description: "Database queries and schema design" }
      ],
      color: "green"
    },
    {
      category: "ai",
      label: "AI Tools",
      skills: [
        { name: "ChatGPT", level: 90, description: "Conversational AI content generation" },
        { name: "Claude", level: 85, description: "Nuanced AI assistance and research" },
        { name: "Prompt Engineering", level: 90, description: "Effective AI communication techniques" },
        { name: "AI Debugging", level: 75, description: "Troubleshooting AI-generated code" },
        { name: "Context-Aware Prompting", level: 85, description: "Advanced AI interaction strategies" }
      ],
      color: "purple"
    },
    {
      category: "tools",
      label: "Version Control",
      skills: [
        { name: "Git", level: 85, description: "Version control and collaboration" },
        { name: "GitHub", level: 90, description: "Repository management and CI/CD" },
        { name: "Vercel", level: 80, description: "Frontend deployment platform" },
        { name: "Railway", level: 75, description: "Full-stack deployment solutions" },
        
      ],
      color: "amber"
    },
    {
      category: "creative",
      label: "Creative 3D/UI",
      skills: [
        { name: "React Three Fiber", level: 65, description: "3D graphics within React" },
        { name: "AI-Generated 3D", level: 70, description: "Leveraging AI for asset creation" },
        { name: "UI/UX Design", level: 75, description: "User experience optimization" },
        { name: "3D Modeling", level: 60, description: "Basic object creation and manipulation" },
        { name: "Animation", level: 70, description: "Keyframe and procedural animations" }
      ],
      color: "rose"
    }
  ];

  // Filter skills based on active category
  const filteredSkills = activeCategory === "all" 
    ? skillData.flatMap(category => category.skills.map(skill => ({ ...skill, categoryColor: category.color, category: category.category })))
    : skillData
        .filter(category => category.category === activeCategory)
        .flatMap(category => category.skills.map(skill => ({ ...skill, categoryColor: category.color, category: category.category })));

  // Animation variants for the particles/skills
  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.15,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.3
      },
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
    }
  };

  const getSkillColor = (color, level) => {
    // Base color mapping
    const colorMap = {
      blue: `bg-gradient-to-br from-blue-500 to-cyan-400`,
      green: `bg-gradient-to-br from-green-500 to-emerald-400`,
      purple: `bg-gradient-to-br from-purple-500 to-fuchsia-400`,
      amber: `bg-gradient-to-br from-amber-500 to-yellow-400`,
      rose: `bg-gradient-to-br from-rose-500 to-pink-400`
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900 bg-opacity-95">
      {/* Ambient Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-32 rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
              transformOrigin: "center"
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              width: [`${20 + Math.random() * 30}%`, `${25 + Math.random() * 35}%`, `${20 + Math.random() * 30}%`],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div ref={containerRef} className="container relative mx-auto px-4 py-20 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-200 mb-12"
        >
          Technical Expertise
        </motion.h2>

        {/* Category Filter Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <CategoryButton 
            label="All Skills" 
            isActive={activeCategory === "all"} 
            onClick={() => setActiveCategory("all")}
          />
          {skillData.map(category => (
            <CategoryButton 
              key={category.category}
              label={category.label} 
              isActive={activeCategory === category.category}
              onClick={() => setActiveCategory(category.category)}
            />
          ))}
        </motion.div>

        {/* Skills Display Area */}
        <motion.div 
          className="relative min-h-[60vh] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.category}-${skill.name}`}
                custom={index}
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
                className={`absolute cursor-pointer backdrop-blur-sm ${getSkillColor(skill.categoryColor, skill.level)}`}
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${10 + Math.random() * 80}%`,
                  borderRadius: "999px",
                  padding: "8px 16px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  zIndex: 10
                }}
                drag
                dragConstraints={containerRef}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-white">{skill.name}</span>
                  <div className="w-2 h-2 rounded-full bg-white opacity-75"></div>
                </div>
                
                {/* Tooltip on hover */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 rounded-lg shadow-lg w-48 z-20 bg-gray-800 text-gray-200"
                >
                  <p className="font-medium">{skill.name}</p>
                  <div className="w-full bg-gray-300 h-1.5 rounded-full mt-1.5 mb-1">
                    <div 
                      className={`h-full rounded-full ${getSkillColor(skill.categoryColor)}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs mt-1 opacity-80">{skill.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </div>
  );
}

// Category Button Component
function CategoryButton({ label, isActive, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-all duration-300 ${
        isActive 
          ? `bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium shadow-md` 
          : `bg-gray-800 text-gray-400 hover:shadow-md`
      }`}
    >
      {label}
    </motion.button>
  );
}