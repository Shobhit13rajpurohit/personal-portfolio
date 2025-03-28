import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 dark:bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white dark:text-gray-900 mb-8">
            Get In Touch
          </h2>
          
          <div className="space-y-4">
            <a
              href="mailto:shobhit13rajpurohit@gmail.com"
              className="flex items-center justify-center space-x-2 text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-gray-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>shobhit13rajpurohit@gmail.com</span>
            </a>
            
            <a
              href="tel:8503939500"
              className="flex items-center justify-center space-x-2 text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-gray-900 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://github.com/Shobhit13rajpurohit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shobhit-rajpurohit-308174216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}