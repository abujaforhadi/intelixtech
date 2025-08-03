"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  BrainIcon,
  DatabaseIcon,
  CpuIcon,
  ZapIcon,
  ShieldIcon,
  BarChart3Icon,
  CodeIcon,
} from "lucide-react";

type ServiceType = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
};

const mainServices: ServiceType[] = [
  {
    icon: BrainIcon,
    title: "AI-Powered SaaS Products",
    description:
      "We build intelligent software platforms with AI at the core—capable of automating tasks, delivering predictive insights, and personalizing user experiences. Designed to scale, built for performance.",
    features: [
      "AI-Powered Automation",
      "Real-time Data Processing",
      "Customizable Dashboards",
      "Machine Learning Recommendations",
    ],
    technologies: [
      "TensorFlow (AI modeling)",
      "OpenAI (Natural Language Processing)",
      "AWS SageMaker (Managed ML services)",
    ],
  },
  {
    icon: CodeIcon,
    title: "Custom Software Development",
    description:
      "Whether you're a startup or enterprise, we develop robust web and mobile apps tailored to your unique business goals—from design to deployment, and beyond.",
    features: [
      "Cross-platform Mobile Apps",
      "Scalable Web Applications",
      "API Integrations",
      "Agile Development Process",
    ],
    technologies: [
      "React (Frontend UI)",
      "Node.js (Backend)",
      "PostgreSQL (Database)",
      "React Native (Mobile)",
    ],
  },
  {
    icon: ShieldIcon,
    title: "Secure Software Solutions",
    description:
      "We ensure your applications are compliant, protected, and resilient against cyber threats with built-in encryption, secure access control, and penetration-tested code.",
    features: [
      "GDPR/HIPAA Compliance",
      "Advanced Encryption (AES, TLS)",
      "Two-Factor Authentication",
      "Secure Data Storage",
    ],
    technologies: ["OAuth2 (Auth Flow)", "JWT (Token-based Auth)", "OWASP Practices"],
  },
];

const additionalServices = [
  {
    icon: DatabaseIcon,
    title: "Data Analytics & BI",
    description: "Make confident decisions with real-time data dashboards and actionable insights.",
  },
  {
    icon: ZapIcon,
    title: "Performance Optimization",
    description: "Improve page load time, lower server costs, and boost user satisfaction.",
  },
  {
    icon: CpuIcon,
    title: "AI Consulting",
    description:
      "Discover how AI can improve your business processes, customer experience, and cost-efficiency.",
  },
];

const whyItMatters = [
  {
    icon: BrainIcon,
    title: "AI Advantage",
    description:
      "Stay ahead of competition with intelligent automation and data-driven decision making.",
  },
  {
    icon: ShieldIcon,
    title: "Security First",
    description: "Protect your business and customers with enterprise-grade security measures.",
  },
  {
    icon: ZapIcon,
    title: "Scalable Solutions",
    description: "Built to grow with your business from startup to enterprise scale.",
  },
  {
    icon: BarChart3Icon,
    title: "Measurable ROI",
    description: "Solutions designed to deliver tangible business value and improved efficiency.",
  },
];

export const ServicesPage = () => {
  return (
    <div className="bg-[#0a0f2ef0] text-white min-h-screen">
      <section className="relative py-24 overflow-hidden text-center px-6 md:px-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-[#0a0f2ef0] to-[#0a0f2ef0] -z-10"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0a0f2ef0] to-transparent -z-10"></div>
        <motion.h1
          className="text-5xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer at <br />
          <span className="text-6xl block font-black text-white">Intelix Tech Ltd.</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At Intelix Tech Ltd., we deliver high-performance, secure, and AI-driven software solutions tailored to meet your unique business needs. Partner with us to accelerate innovation and growth.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 space-y-20">
        {mainServices.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={!isEven ? "lg:order-2" : ""}>
                <div className="w-24 h-24 rounded-xl shadow-lg mb-8 bg-black/30 p-4 border border-white/10 flex items-center justify-center">
                  <Icon className="w-14 h-14 text-purple-400/70" />
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-white">{service.title}</h2>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Key Features:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-300 text-sm">
                        <CheckCircleIcon className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-black/30 text-slate-300 text-xs px-3 py-1 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <motion.button
                    className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
              <div className={`flex items-center justify-center p-12 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-3xl border border-white/10 shadow-lg shadow-purple-700/20 ${!isEven ? "lg:order-1" : ""}`}>
                <Icon className="w-28 h-28 text-purple-400/70" />
              </div>
            </motion.div>
          );
        })}
      </section>

      <section className="bg-black/20 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Additional Capabilities
            </h2>
            <p className="text-lg text-slate-400">Comprehensive support services to enhance and optimize your software ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {additionalServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-black/30 backdrop-blur-md rounded-2xl p-10 text-center border border-white/10 shadow-lg shadow-purple-700/10 hover:shadow-purple-500/30 transition-shadow duration-300 cursor-default"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-700/20 to-purple-700/20 flex items-center justify-center border border-white/10">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Why It Matters
          </h2>
          <p className="text-lg text-slate-400">Understand the strategic value and competitive advantages our solutions provide.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {whyItMatters.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="text-center cursor-default group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-700/20 to-purple-700/20 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <motion.section
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center px-6 md:px-0"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Ready to Partner with <span className="text-purple-200">Intelix Tech Ltd.</span>?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Let’s turn your ideas into smart, scalable, and secure digital solutions. Schedule a free consultation with our experts today.
        </p>
        <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} tabIndex={-1}>
          <button
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-bold text-purple-600 bg-white rounded-lg shadow-lg hover:bg-slate-200 transition-all duration-300"
            aria-label="Get Free Consultation"
          >
            Get Free Consultation
          </button>
        </motion.a>
      </motion.section>
    </div>
  );
};

export default function App() {
  const StyleInjector = () => {
    useEffect(() => {
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes pulse-slow { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: -2s; }
        .bg-gradient-radial { background-image: radial-gradient(circle, var(--tw-gradient-stops)); }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, []);
    return null;
  };

  return (
    <div className="bg-[#0a0f2ef0]">
      <StyleInjector />
      <ServicesPage />
    </div>
  );
}
