import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Code, Server } from 'lucide-react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

// Typewriter effect hook
const useTypewriter = (text, speed = 100, delay = 500) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    
    setTimeout(() => {
      const type = () => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(type, speed);
        }
      };
      type();
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  
  return displayText;
};

// Glitch component
const GlitchText = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative inline-block">
        <span className="absolute top-0 left-0 text-blue-400 opacity-70 animate-glitch-1 clip-text">
          {children}
        </span>
        <span className="absolute top-0 left-0 text-indigo-400 opacity-70 animate-glitch-2 clip-text">
          {children}
        </span>
        <span className="relative">{children}</span>
      </div>
    </div>
  );
};

// Star component for galaxy background
const Star = ({ delay, size, x, y, duration }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.7, 0.3, 0.7, 0],
        scale: [0, 1, 0.8, 0.5, 0],
        x: [x, x - 20],
        y: [y, y - 10],
      }}
      transition={{
        duration: duration || Math.random() * 8 + 4,
        delay: delay || Math.random() * 5,
        repeat: Infinity,
        repeatType: "loop"
      }}
      className="absolute bg-white rounded-full"
      style={{ 
        width: size || Math.random() * 3 + 1, 
        height: size || Math.random() * 3 + 1,
        boxShadow: `0 0 ${Math.random() * 5 + 2}px rgba(255, 255, 255, 0.8)`
      }}
    />
  );
};

// Galaxy arm particle
const GalaxyParticle = ({ index, total, armIndex, numArms, color }) => {
  // Calculate spiral position
  const angleOffset = (armIndex / numArms) * Math.PI * 2;
  const distanceFromCenter = index / total * 400; // Max radius
  const spiralTightness = 0.3;
  const angle = index / total * Math.PI * 6 + angleOffset;
  
  const x = Math.cos(angle + spiralTightness * distanceFromCenter) * distanceFromCenter;
  const y = Math.sin(angle + spiralTightness * distanceFromCenter) * distanceFromCenter;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.8, 0.4],
        rotate: [0, 360],
      }}
      transition={{
        duration: 100 + Math.random() * 50,
        delay: Math.random() * 2,
        repeat: Infinity,
        repeatType: "loop"
      }}
      className={`absolute ${color} rounded-full`}
      style={{ 
        left: `calc(50% + ${x}px)`, 
        top: `calc(50% + ${y}px)`,
        width: Math.max(1, Math.random() * 3),
        height: Math.max(1, Math.random() * 3),
        boxShadow: `0 0 ${Math.random() * 4 + 1}px currentColor`
      }}
    />
  );
};

// Main Hero component
export default function Hero() {
  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const name = useTypewriter("Shobhit Rajpurohit", 100, 800);
  const tagline = useTypewriter("I build digital experiences that feel like magic", 70, 2000);
  
  // Cursor glow effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [controls]);

  // Follow effects for mouse-reactive galaxy core
  const glowX = useTransform(mouseX, val => val / 15);
  const glowY = useTransform(mouseY, val => val / 15);

  // Generate array for stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 4,
    size: Math.random() * 2 + 1
  }));

  // Generate galaxy arm particles
  const numArms = 3;
  const particlesPerArm = 80;
  const galaxyArms = [];
  
  const colors = ['text-blue-500', 'text-indigo-400', 'text-purple-400', 'text-cyan-400', 'text-white'];
  
  for (let arm = 0; arm < numArms; arm++) {
    for (let i = 0; i < particlesPerArm; i++) {
      galaxyArms.push({
        id: `arm-${arm}-particle-${i}`,
        index: i,
        total: particlesPerArm,
        armIndex: arm,
        numArms,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden"
    >
      {/* Galaxy Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Galaxy core */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-indigo-500/30 via-blue-700/10 to-transparent rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.8, 0.9, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror"
          }}
          style={{ 
            transform: `translate(calc(-50% + ${glowX.get() / 10}px), calc(-50% + ${glowY.get() / 10}px))` 
          }}
        />
        
        {/* Dust band overlay */}
        <div className="absolute inset-0 bg-dust-band opacity-20" />
        
        {/* Galaxy arms */}
        <div className="absolute inset-0 opacity-80">
          {galaxyArms.map((arm) => (
            <GalaxyParticle key={arm.id} {...arm} />
          ))}
        </div>
        
        {/* Stars in background */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <Star key={star.id} {...star} />
          ))}
        </div>
        
        {/* Distant nebula effects */}
        <motion.div 
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-purple-600/5 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-cyan-600/5 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Avatar with glow */}
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-xl opacity-30 animate-pulse"
            />
            <motion.div 
              className="relative w-28 h-28 mx-auto mb-8 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center overflow-hidden"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)", 
                borderColor: "#4f46e5" 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span 
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                SR
              </motion.span>
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-sm"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>

          {/* Name with glitch effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <GlitchText className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              {name}
            </GlitchText>
          </motion.div>

          {/* Title with code bracket decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-center text-xl text-blue-400 space-x-2"
          >
            <span className="text-gray-500">&lt;</span>
            <span className="typing-cursor">Full Stack Developer</span>
            <span className="text-gray-500">/&gt;</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            {tagline}
            <span className="inline-block ml-1 animate-blink">|</span>
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center space-x-8 pt-8"
          >
            {[
              {
                Icon: Github,
                href: "https://github.com/Shobhit13rajpurohit",
                aria: "GitHub Profile",
                color: "hover:text-blue-400"
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/shobhit-rajpurohit-308174216",
                aria: "LinkedIn Profile",
                color: "hover:text-blue-500"
              },
              {
                Icon: Mail,
                href: "mailto:shobhit13rajpurohit@gmail.com",
                aria: "Email",
                color: "hover:text-indigo-400"
              }
            ].map(({ Icon, href, aria, color }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={aria}
                whileHover={{ 
                  scale: 1.2,
                  rotate: index % 2 === 0 ? 5 : -5,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${color} transition-all duration-300 ease-in-out p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50`}
              >
                <Icon className="w-6 h-6" strokeWidth={1.5} />
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-md"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Add global CSS for custom animations and galaxy effects */}
      <style jsx global>{`
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }
        
        .bg-dust-band {
          background-image: 
            linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%),
            linear-gradient(45deg, transparent 0%, rgba(99, 102, 241, 0.05) 50%, transparent 100%);
        }
        
        .animate-glitch-1 {
          animation: glitch1 4s infinite linear alternate-reverse;
        }
        
        .animate-glitch-2 {
          animation: glitch2 3s infinite linear alternate-reverse;
        }
        
        @keyframes glitch1 {
          0%, 100% { transform: translate(0); opacity: 0.5; }
          20% { transform: translate(-2px, 1px); opacity: 0.7; }
          40% { transform: translate(-1px, -1px); opacity: 0.6; }
          60% { transform: translate(1px, 1px); opacity: 0.3; }
          80% { transform: translate(2px, -1px); opacity: 0.8; }
        }
        
        @keyframes glitch2 {
          0%, 100% { transform: translate(0); opacity: 0.5; }
          25% { transform: translate(2px, 1px); opacity: 0.6; }
          50% { transform: translate(1px, -1px); opacity: 0.8; }
          75% { transform: translate(-1px, 2px); opacity: 0.4; }
        }
        
        .clip-text {
          clip-path: inset(0 0 0 0);
        }
        
        .typing-cursor::after {
          content: '|';
          animation: cursor 1s infinite step-start;
        }
        
        @keyframes cursor {
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}