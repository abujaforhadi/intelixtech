"use client";

import React, {  useEffect } from 'react';
import { motion } from 'framer-motion';
import {
 
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  CodeIcon,ShieldIcon,CheckCircleIcon,
  CalendarIcon,ArrowRightIcon,BrainIcon
} from "lucide-react";
import Image from "next/image";

const projects = [
    {
      id: 1,
      title: "AI-Powered CRM SaaS Platform",
      category: "AI-Powered SaaS",
      client: "TechFlow Inc.",
      description:
        "Developed a comprehensive AI-powered CRM system that uses machine learning to predict customer behavior, automate follow-ups, and optimize sales processes.",
      challenge:
        "The client needed a solution to manage 10,000+ customers while providing personalized experiences and predictive analytics.",
      solution:
        "Built a scalable SaaS platform with ML-powered lead scoring, automated workflow engine, and real-time analytics dashboard.",
      results: [
        "40% increase in sales efficiency",
        "60% reduction in manual data entry",
        "95% customer satisfaction rate",
        "3x faster customer onboarding",
      ],
      technologies: ["React", "Node.js", "TensorFlow", "AWS", "PostgreSQL", "Redis"],
      timeline: "6 months",
      testimonial: {
        quote:
          "IntelixTech transformed our sales process completely. The AI recommendations are incredibly accurate.",
        author: "Sarah Chen, CTO at TechFlow Inc.",
      },
      image: "/assets/custom-dev-icon.jpg",
    },
    {
      id: 2,
      title: "Secure Healthcare Mobile App",
      category: "Custom Development",
      client: "MedCore Health",
      description:
        "Created a HIPAA-compliant mobile application for patient management, appointment scheduling, and secure communication between healthcare providers.",
      challenge:
        "Building a mobile solution that meets strict healthcare compliance requirements while maintaining excellent user experience.",
      solution:
        "Developed native iOS and Android apps with end-to-end encryption, biometric authentication, and comprehensive audit trails.",
      results: [
        "100% HIPAA compliance achieved",
        "50% reduction in appointment no-shows",
        "90% patient satisfaction score",
        "Zero security incidents",
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "AWS", "OAuth", "AES Encryption"],
      timeline: "8 months",
      testimonial: {
        quote:
          "The app exceeded our expectations. Security and usability perfectly balanced.",
        author: "Dr. Emily Johnson, CTO at MedCore Health",
      },
      image: "/assets/custom-dev-icon.jpg",
    },
    {
      id: 3,
      title: "Financial Data Analytics Platform",
      category: "Secure Solutions",
      client: "DataVault Systems",
      description:
        "Built a real-time financial analytics platform with advanced security features for processing sensitive trading data and generating investment insights.",
      challenge:
        "Processing massive volumes of financial data in real-time while maintaining bank-level security and regulatory compliance.",
      solution:
        "Implemented a microservices architecture with advanced encryption, real-time data processing, and comprehensive compliance reporting.",
      results: [
        "99.9% system uptime achieved",
        "500% faster data processing",
        "Full SOC 2 compliance",
        "$2M cost savings annually",
      ],
      technologies: ["Python", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
      timeline: "10 months",
      testimonial: {
        quote:
          "Their expertise in secure financial systems is unmatched. Outstanding results.",
        author: "Michael Rodriguez, CEO at DataVault Systems",
      },
      image: "/assets/custom-dev-icon.jpg",
    },
    {
      id: 4,
      title: "E-commerce AI Recommendation Engine",
      category: "AI-Powered SaaS",
      client: "ShopSmart Platform",
      description:
        "Developed an AI-powered recommendation system that personalizes product suggestions and optimizes pricing strategies for e-commerce platforms.",
      challenge:
        "Creating personalized shopping experiences for millions of users with diverse preferences and behaviors.",
      solution:
        "Built a machine learning system using collaborative filtering, deep learning, and real-time personalization algorithms.",
      results: [
        "25% increase in conversion rates",
        "35% boost in average order value",
        "80% improvement in user engagement",
        "15% reduction in cart abandonment",
      ],
      technologies: ["Python", "TensorFlow", "Apache Spark", "Elasticsearch", "Redis", "AWS"],
      timeline: "5 months",
      testimonial: {
        quote:
          "The AI recommendations have revolutionized our customer experience and sales.",
        author: "Lisa Zhang, VP of Technology at ShopSmart",
      },
      image: "/assets/custom-dev-icon.jpg",
    },
    {
      id: 5,
      title: "Enterprise Security Management System",
      category: "Secure Solutions",
      client: "SecureCorps Enterprise",
      description:
        "Implemented a comprehensive security management system with threat detection, incident response, and compliance monitoring for large enterprises.",
      challenge:
        "Managing security across multiple locations and systems while providing real-time threat detection and response capabilities.",
      solution:
        "Created an integrated security platform with AI-powered threat detection, automated response systems, and comprehensive reporting.",
      results: [
        "90% reduction in security incidents",
        "75% faster threat response time",
        "100% compliance audit success",
        "60% reduction in security costs",
      ],
      technologies: ["React", "Python", "Elasticsearch", "Apache Kafka", "Docker", "PostgreSQL"],
      timeline: "12 months",
      testimonial: {
        quote:
          "This system has transformed our security posture. Highly recommended.",
        author: "James Wilson, CISO at SecureCorps",
      },
      image: "/assets/custom-dev-icon.jpg",
    },
  ];

const stats = [
  { icon: TrendingUp, number: "150%", label: "Average ROI Increase" },
  { icon: Users, number: "50+", label: "Satisfied Clients" },
  { icon: Star, number: "4.9/5", label: "Client Rating" },
  { icon: CheckCircle, number: "100%", label: "Project Success Rate" },
];

const allTechnologies = ["React", "Node.js", "Python", "TensorFlow", "AWS", "PostgreSQL", "React Native", "MongoDB", "Docker", "Kubernetes", "Redis", "Apache Kafka", "TypeScript", "GraphQL", "Elasticsearch", "Apache Spark", "OAuth", "JWT"];

 const PortfolioPage = () => {
  return (
    <div className="bg-[#0A0F2E] text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 text-center px-6 md:px-0">
        <motion.h1 className="text-5xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6 text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Success Stories</span>
        </motion.h1>
        <motion.p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Discover how we&apos;ve helped businesses transform with AI-powered solutions, custom software, and secure development practices.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700/20 to-purple-700/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/10">
                  <Icon className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>
       <section className="py-20 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                <div className="mb-4">
                                    <span className="inline-block bg-purple-600/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full mb-2 border border-purple-500/30">{project.category}</span>
                                    <h2 className="text-3xl font-bold mb-2 text-white">{project.title}</h2>
                                    <p className="text-slate-400">Client: {project.client}</p>
                                </div>
                                <p className="text-lg text-slate-300 mb-6">{project.description}</p>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-semibold mb-2 text-purple-300">Challenge</h3>
                                        <p className="text-slate-400 text-sm">{project.challenge}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2 text-purple-300">Solution</h3>
                                        <p className="text-slate-400 text-sm">{project.solution}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-3 text-purple-300">Key Results</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {project.results.map((result, resultIndex) => (
                                                <div key={resultIndex} className="flex items-center">
                                                    <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                                                    <span className="text-sm text-slate-300">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-3 text-purple-300">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="bg-black/30 text-slate-300 text-xs px-3 py-1 rounded-full border border-white/10">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <div className="flex items-center text-sm text-slate-400">
                                            <CalendarIcon className="h-4 w-4 mr-2" />
                                            {project.timeline}
                                        </div>
                                        <motion.button className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            View Details <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                <div className="rounded-2xl bg-black/20 p-2 border border-white/10 shadow-2xl shadow-purple-500/20">
                                    <div className="relative overflow-hidden rounded-xl">
                                        <Image src={project.image} alt={project.title} className="w-full h-80 object-cover" width={500} height={320} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                                                {project.category.includes("AI") && <BrainIcon className="h-6 w-6" />}
                                                {project.category.includes("Custom") && <CodeIcon className="h-6 w-6" />}
                                                {project.category.includes("Secure") && <ShieldIcon className="h-6 w-6" />}
                                            </div>
                                            <h3 className="text-lg font-semibold">{project.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <blockquote className="border-l-4 border-purple-500 pl-4 italic">
                                            <p className="text-slate-300 mb-2">&ldquo;{project.testimonial.quote}&rdquo;</p>
                                            <footer className="text-sm font-medium text-slate-400">&mdash; {project.testimonial.author}</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Master</span></h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {allTechnologies.map((tech, index) => (
              <motion.div key={index} className="bg-black/20 border border-white/10 rounded-lg px-4 py-2 shadow-sm hover:shadow-md hover:border-purple-500/50 transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05, duration: 0.5 }} viewport={{ once: true }}>
                <p className="text-sm font-medium text-slate-300">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center px-6 md:px-0" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Create Your Success Story?</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Join our roster of satisfied clients and transform your business with innovative AI-powered solutions.</p>
        <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} tabIndex={-1}>
          <button className="inline-flex items-center justify-center px-10 py-3 text-lg font-bold text-purple-600 bg-white rounded-lg shadow-lg hover:bg-slate-200 transition-all duration-300" aria-label="Start Your Project">
            Start Your Project
          </button>
        </motion.a>
      </motion.section>
    </div>
  );
};

export default function Portfolios() {
  const StyleInjector = () => {
    useEffect(() => {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes pulse-slow { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: -2s; }
        .bg-gradient-radial { background-image: radial-gradient(circle, var(--tw-gradient-stops)); }
      `;
      document.head.appendChild(style);
      return () => { document.head.removeChild(style); };
    }, []);
    return null;
  };

  return (
    <div className="bg-[#0A0F2E]">
      <StyleInjector />
      <PortfolioPage />
    </div>
  );
}
