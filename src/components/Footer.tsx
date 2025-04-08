import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-8 overflow-hidden bg-gradient-to-b from-gray-900 to-black">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-5 right-20 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-500 opacity-10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-blue-400 text-bm"
        >
          "Made with caffeine, crazy ideas, and a pinch of code magic — by Shobhit Rajpurohit"
        </motion.p>
      </div>
    </footer>
  );
}