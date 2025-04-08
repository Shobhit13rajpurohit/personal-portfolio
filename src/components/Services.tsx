import React, { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Environment } from "@react-three/drei";
import {
  Code,
  Database,
  Layout,
  Box,
  Terminal,
  PenTool,
  Rocket,
  GitBranch,
} from "lucide-react";

// Service data
const services = [
  {
    id: 1,
    title: "Full Stack Web App Development",
    description: "React.js + FastAPI solutions",
    icon: Code,
    color: "#61DAFB",
  },
  {
    id: 2,
    title: "AI-Integrated Frontend Development",
    description: "Modern AI-powered interfaces",
    icon: Layout,
    color: "#FF6B6B",
  },
  {
    id: 3,
    title: "API & Backend Development",
    description: "Python-based backend solutions",
    icon: Database,
    color: "#4CAF50",
  },
  {
    id: 4,
    title: "3D Web Interfaces",
    description: "Using React Three Fiber (R3F)",
    icon: Box,
    color: "#9C27B0",
  },
  {
    id: 5,
    title: "UI/UX Prototyping",
    description: "Using AI tools like ChatGPT & Claude",
    icon: PenTool,
    color: "#FF9800",
  },
  {
    id: 6,
    title: "Prompt Engineering",
    description: "For development automation",
    icon: Terminal,
    color: "#03A9F4",
  },
  {
    id: 7,
    title: "Live Deployment",
    description: "Vercel, Railway, Render",
    icon: Rocket,
    color: "#F44336",
  },
  {
    id: 8,
    title: "Git-based Version Control",
    description: "Collaboration & code management",
    icon: GitBranch,
    color: "#795548",
  },
];

// 3D Floating Icon
const FloatingIcon = ({ active, position, size, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      if (active) {
        meshRef.current.scale.set(1.2, 1.2, 1.2);
      } else {
        meshRef.current.scale.set(1, 1, 1);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={active ? 0.8 : 0.3}
      />
    </mesh>
  );
};

// Background 3D animation
const BackgroundAnimation = () => {
  const particlesRef = useRef([]);
  const count = 20;

  // Initialize particles
  if (particlesRef.current.length === 0) {
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        position: [
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
        ],
        speed: Math.random() * 0.02 + 0.01,
        size: Math.random() * 0.1 + 0.05,
      });
    }
  }

  useFrame(() => {
    particlesRef.current.forEach((particle) => {
      particle.position[0] += particle.speed;
      if (particle.position[0] > 5) particle.position[0] = -5;
    });
  });

  return (
    <>
      {particlesRef.current.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
        </mesh>
      ))}
    </>
  );
};

// Service card component
const ServiceCard = ({ service, isActive, setActive }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg p-6 cursor-pointer backdrop-blur-sm transition-all duration-300 ${
        isActive ? "bg-black/30 shadow-lg" : "bg-black/10"
      }`}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      onClick={() => setActive(isActive ? null : service.id)}
      style={{
        boxShadow: isActive ? `0 0 15px ${service.color}` : "none",
        border: `1px solid ${
          isActive ? service.color : "rgba(255,255,255,0.1)"
        }`,
      }}
    >
      <div className="flex flex-col items-center text-center gap-2">
        <div
          className="p-3 rounded-full mb-4 transition-all duration-300"
          style={{
            backgroundColor: `${service.color}20`,
            boxShadow: isActive ? `0 0 20px ${service.color}` : "none",
          }}
        >
          <service.icon
            size={32}
            style={{
              color: service.color,
              filter: isActive
                ? "drop-shadow(0 0 8px ${service.color})"
                : "none",
            }}
          />
        </div>
        <h3 className="text-lg font-bold text-white">{service.title}</h3>
        <p className="text-sm text-gray-300">{service.description}</p>
      </div>
    </motion.div>
  );
};

// Main component
const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-black min-h-screen">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.7} />
            <BackgroundAnimation />
            {services.map((service, i) => (
              <Float
                key={i}
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={0.5}
              >
                <FloatingIcon
                  active={activeService === service.id}
                  position={[(i % 4) * 2 - 3, Math.floor(i / 4) * -2 + 1, -2]}
                  size={0.3}
                  color={service.color}
                />
              </Float>
            ))}
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Services
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="text-lg text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specialized expertise to bring your digital vision to life with
            cutting-edge technologies.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              setActive={setActiveService}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
