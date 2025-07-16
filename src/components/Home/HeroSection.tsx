"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContainerTextFlip } from "../ui/container-text-flip";
import Image from 'next/image';
// --- Helper Components & Icons (Self-contained) ---

// Icon for ArrowRight to avoid external dependency
const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// Icon for CheckCircle to avoid external dependency
const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// The main Hero Section component
const HeroSection = () => {
  const primaryColor = "#8B5CF6"; 

  return (
    <section className="relative overflow-hidden  text-white min-h-screen flex items-center">
      {/* Animated Aurora Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
          <div className="absolute w-[1000px] h-[1000px] -left-[200px] -top-[400px] bg-gradient-radial from-blue-600/40 to-transparent rounded-full animate-pulse-slow"></div>
          <div className="absolute w-[800px] h-[800px] -right-[200px] -bottom-[300px] bg-gradient-radial from-purple-600/40 to-transparent rounded-full animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            >
              Power Your Business with{' '}
              <ContainerTextFlip
                words={["AI-Driven SaaS", "Custom Software", "Secure Solutions"]}
              />
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-slate-300 max-w-2xl"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
            >
              We build intelligent, secure, and scalable software to fuel your business growth and transform your vision into reality.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } } }}
            >
              <motion.button 
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-slate-900"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <motion.button 
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-white/5 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solutions
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } } }}
            >
              <div className="flex items-center space-x-2 text-slate-400">
                <CheckCircleIcon className="h-5 w-5 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <CheckCircleIcon className="h-5 w-5 text-blue-400" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <CheckCircleIcon className="h-5 w-5 text-blue-400" />
                <span>100% Custom</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
          >
            <div className="relative w-full max-w-md p-2 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/30">
              <Image
                src={'/assets/hero-ai-tech.jpg'}
                alt="AI-Powered Software Solutions"
                className="rounded-xl w-full h-auto"
                width={600}
                height={450}
              />
               <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-blue-400 rounded-tl-2xl animate-pulse-slow"></div>
               <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-purple-400 rounded-br-2xl animate-pulse-slow animation-delay-2000"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Add keyframes for animations to the document head
const StyleInjector = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes pulse-slow {
                0%, 100% { opacity: 0.6; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.05); }
            }
            .animate-pulse-slow {
                animation: pulse-slow 8s infinite ease-in-out;
            }
            .animation-delay-2000 {
                animation-delay: -2s;
            }
            .bg-gradient-radial {
                background-image: radial-gradient(circle, var(--tw-gradient-stops));
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);
    return null;
};


// Default export for the app
export default function App() {
  return (
    <>
      <StyleInjector />
      <HeroSection />
    </>
  );
}
