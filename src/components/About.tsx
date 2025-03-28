import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function About() {
  const handleDownload = () => {

    const link = document.createElement('a');
    link.href = '/Shobhit_Rajpurohit_Resume.pdf';
    link.download = 'Shobhit_Rajpurohit_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-gray-800 dark:bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white dark:text-gray-900 mb-8 text-center">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-4">
                I'm a passionate Full Stack Developer and IT student at Rajasthan Technical University, specializing in web technologies. My expertise spans frontend and backend development, with skills in React.js, Python, Django, and FastAPI. I've completed internships at Octanet and Bharat Intern, developing web applications and demonstrating strong project management abilities. My portfolio includes diverse projects like a Netflix clone, patient booking system, and an AI-powered interview assistance tool. I'm committed to creating innovative, user-friendly digital solutions and continuously expanding my technical skills.
              </h3>
            </div>
            
            {/* Download Resume Button */}
            <div className="flex justify-center">
              <button 
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}