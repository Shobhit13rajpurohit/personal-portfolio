import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-xl opacity-30"
            />
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">SR</span>
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Shobhit Rajpurohit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Full Stack Developer | Building Innovative Digital Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center space-x-6 pt-6"
          >
            {[
              {
                Icon: GitHub,
                href: "https://github.com/Shobhit13rajpurohit",
                aria: "GitHub Profile"
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/shobhit-rajpurohit-308174216",
                aria: "LinkedIn Profile"
              },
              {
                Icon: Mail,
                href: "mailto:shobhit13rajpurohit@gmail.com",
                aria: "Email"
              }
            ].map(({ Icon, href, aria }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={aria}
                whileHover={{ 
                  scale: 1.2,
                  rotate: index % 2 === 0 ? 5 : -5
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
              >
                <Icon className="w-7 h-7" strokeWidth={1.5} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
}