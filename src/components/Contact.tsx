import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Terminal, CheckCircle, Wifi, Phone, Code, ExternalLink, Lock, X } from 'lucide-react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('message');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const progressInterval = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ((activeTab === 'message' && !message.trim()) || 
        (activeTab === 'email' && !email.trim())) return;
    
    // Start connecting animation
    setIsConnecting(true);
    setConnectionProgress(0);
    
    // Simulate progress
    progressInterval.current = setInterval(() => {
      setConnectionProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval.current);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
    
    // Complete after animation
    setTimeout(() => {
      clearInterval(progressInterval.current);
      setConnectionProgress(100);
      setIsConnecting(false);
      setIsSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setMessage('');
        setEmail('');
        setShowForm(false);
      }, 4000);
    }, 3000);
  };

  // Terminal typing effect for command output
  const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    React.useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 50 + Math.random() * 50);
        
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text]);
    
    return (
      <div className="font-mono text-xs text-green-400">
        {displayText}
        {currentIndex < text.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="ml-1 inline-block w-2 h-4 bg-green-400"
          />
        )}
      </div>
    );
  };

  const CommandOutput = () => {
    const commands = [
      'Initializing communication protocols...',
      'Setting up secure channel...',
      'Establishing connection to server...',
      'Encrypting payload data...',
      'Preparing for transmission...'
    ];
    
    return (
      <div className="text-left font-mono text-xs space-y-1 mb-4">
        {isConnecting && commands.map((cmd, i) => (
          <div key={i} className={`${connectionProgress < i * 20 ? 'hidden' : 'block'}`}>
            <TypewriterText text={cmd} />
          </div>
        ))}
        
        {connectionProgress >= 100 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 mt-2"
          >
            <CheckCircle className="inline-block w-4 h-4 mr-2" />
            Connection established. Message delivered.
          </motion.div>
        )}
      </div>
    );
  };

  // Form Modal Component
  const FormModal = () => {
    return (
      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-lg w-full mx-4"
            >
              {/* Futuristic terminal */}
              <div className="backdrop-blur-sm bg-black/80 border border-blue-900/50 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                {/* Terminal header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-blue-900/50 p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="text-sm text-blue-400 font-mono flex items-center">
                    <Lock className="w-3 h-3 mr-1" />
                    <span>SECURE-CHANNEL</span>
                    <motion.div 
                      className="ml-2 w-2 h-2 bg-green-500 rounded-full"  
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  <div className="text-xs text-gray-400 flex items-center">
                    <motion.div
                      animate={{
                        color: isSubmitted ? "#10b981" : isConnecting ? "#f59e0b" : "#3b82f6"
                      }}
                      className="flex items-center"
                    >
                      <Wifi className="w-3 h-3 mr-1" />
                      <span>
                        {isSubmitted ? "CONNECTED" : isConnecting ? "CONNECTING..." : "STANDBY"}
                      </span>
                    </motion.div>
                  </div>
                </div>
                
                {/* Close button */}
                <button
                  onClick={() => !isConnecting && !isSubmitted && setShowForm(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white"
                  disabled={isConnecting || isSubmitted}
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Tab navigation */}
                <div className="flex border-b border-blue-900/50">
                  {[
                    { id: 'message', label: 'Message', icon: <Terminal className="w-4 h-4 mr-1" /> },
                    { id: 'email', label: 'Contact Info', icon: <Mail className="w-4 h-4 mr-1" /> },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => !isConnecting && !isSubmitted && setActiveTab(tab.id)}
                      className={`flex items-center px-4 py-2 text-sm transition-colors ${
                        activeTab === tab.id 
                          ? 'text-blue-400 border-b-2 border-blue-500' 
                          : 'text-gray-400 hover:text-blue-300'
                      }`}
                      disabled={isConnecting || isSubmitted}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                {/* Terminal content */}
                <div className="p-6 relative">
                  {/* Connection animation overlay */}
                  <AnimatePresence>
                    {isConnecting && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 backdrop-blur-sm bg-black/70 p-6"
                      >
                        <div className="h-full flex flex-col justify-center">
                          <CommandOutput />
                          
                          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                              style={{ width: `${Math.min(connectionProgress, 100)}%` }}
                            />
                          </div>
                          <div className="mt-2 text-right text-xs text-blue-400">
                            {Math.min(Math.round(connectionProgress), 100)}%
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Success message overlay */}
                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                        >
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              type: "spring",
                              damping: 10,
                              stiffness: 200,
                            }}
                            className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center"
                          >
                            <CheckCircle className="w-8 h-8 text-white" />
                          </motion.div>
                          <h3 className="text-lg text-green-400 font-bold text-center mb-2">
                            Transmission Complete
                          </h3>
                          <p className="text-gray-300 text-center mb-0 text-sm">
                            Your message has been successfully delivered to Shobhit
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Form content */}
                  <div className="min-h-[200px]">
                    <form onSubmit={handleSubmit}>
                      {activeTab === 'message' && (
                        <div className="space-y-4">
                          <div className="flex items-center text-cyan-500 text-sm font-mono mb-1">
                            <Code className="w-4 h-4 mr-1" />
                            <span>Enter your message</span>
                          </div>
                          
                          <div className="relative">
                            <textarea
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              disabled={isConnecting || isSubmitted}
                              className="w-full bg-gray-900 text-blue-300 border border-blue-900/50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm h-32"
                              placeholder="Type your transmission here..."
                            />
                            
                            {/* Code line decorations */}
                            <div className="absolute left-4 top-4 flex flex-col items-end mr-2 text-gray-600 font-mono text-xs">
                              {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="h-8 select-none">
                                  {i + 1}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'email' && (
                        <div className="space-y-4">
                          <div className="flex items-center text-cyan-500 text-sm font-mono mb-1">
                            <Mail className="w-4 h-4 mr-1" />
                            <span>Your email</span>
                          </div>
                          
                          <div className="relative">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              disabled={isConnecting || isSubmitted}
                              className="w-full bg-gray-900 text-blue-300 border border-blue-900/50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-6 flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          type="submit"
                          disabled={isConnecting || isSubmitted || (activeTab === 'message' && !message.trim()) || (activeTab === 'email' && !email.trim())}
                          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                        >
                          {/* Button background animation */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20"
                            animate={{
                              x: ["0%", "100%"],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "mirror",
                            }}
                          />
                          
                          <Send className="w-4 h-4 mr-2" />
                          <span>Submit</span>
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section 
      id="contact" 
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      {/* 3D Floating Elements - Matching Projects section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-500 opacity-10 rounded-full blur-xl"></div>
      </div>
      
      {/* Form Modal */}
      <FormModal />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <div className="relative flex justify-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              Get in Touch
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </motion.div>
          </div>
          
          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center font-medium text-lg shadow-[0_0_30px_rgba(59,130,246,0.3)] relative overflow-hidden group"
            >
              {/* Button background animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20"
                animate={{
                  x: ["0%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              
              <Send className="w-5 h-5 mr-2" />
              <span>  Terminal </span>
            </motion.button>
          </motion.div>
          
          {/* Social connection nodes */}
          <div className="relative">
            <div className="text-center mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-1 bg-blue-900/20 border border-blue-800/50 rounded-full text-blue-400 text-sm"
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                <span>Connection Channels</span>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex justify-center space-x-3 md:space-x-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { 
                  href: "mailto:shobhit13rajpurohit@gmail.com", 
                  icon: <Mail className="w-5 h-5" />, 
                  label: "Email",
                  color: "from-blue-600 to-blue-800",
                  delay: 0 
                },
                { 
                  href: "tel:8503939500", 
                  icon: <Phone className="w-5 h-5" />, 
                  label: "WhatsApp",
                  color: "from-green-600 to-green-800",
                  delay: 0.1 
                },
                { 
                  href: "https://github.com/Shobhit13rajpurohit", 
                  icon: <Github className="w-5 h-5" />, 
                  label: "GitHub",
                  color: "from-purple-600 to-purple-800",
                  delay: 0.2 
                },
                { 
                  href: "https://www.linkedin.com/in/shobhit-rajpurohit-308174216", 
                  icon: <Linkedin className="w-5 h-5" />, 
                  label: "LinkedIn",
                  color: "from-cyan-600 to-cyan-800",
                  delay: 0.3 
                }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -10, 
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: link.delay,
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15 
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex flex-col items-center">
                    <div className={`h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br ${link.color} p-0.5 shadow-lg relative`}>
                      {/* Inner glow effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-md bg-white"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      <div className="h-full w-full rounded-xl bg-gray-900 flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                        {link.icon}
                      </div>
                    </div>
                    <div className="mt-2 text-blue-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {link.label}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
     
      </div>
    </section>
  );
}