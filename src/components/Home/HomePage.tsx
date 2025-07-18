"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Target,
  Zap,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
};
const ServicesSection = ({ services }: { services: Service[] }) => (
  <section className="py-20 bg-[#0A0F2E]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Expert Services
          </span>
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
          Comprehensive software solutions designed to accelerate your business
          growth through cutting-edge technology and secure development
          practices.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="h-full"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="h-full p-8 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-500/10 transition-all duration-300">
              <motion.img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 rounded-lg shadow-md mb-6"
                width={64}
                height={64}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-sm"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    <span className="text-slate-400">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsSection = ({ benefits }: { benefits: Benefit[] }) => (

  <section className="py-20 bg-[#0A0F2E]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            IntelixTech
          </span>
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
          We combine deep technical expertise with a commitment to innovation,
          security, and client success.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-8 w-8 text-purple-400" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-sm">{benefit.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const TestimonialsSection = ({ testimonials }: { testimonials: Testimonial[] }) => (
  <section className="py-20 bg-black/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Client{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Success Stories
          </span>
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
          Hear from industry leaders who have transformed their businesses with
          our solutions.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="h-full"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="h-full p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-500/10">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <motion.section
    className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Ready to Transform Your Business?
      </motion.h2>
      <motion.p
        className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let&apos;s build your next big idea together. Contact us today for a
        free consultation and discover how our AI-powered solutions can
        accelerate your growth.
      </motion.p>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href="/contact" >
  <motion.button
    className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-purple-600 bg-white rounded-lg shadow-lg hover:bg-slate-200 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
  </motion.button>
</Link>
      </motion.div>
    </div>
  </motion.section>
);

// --- Main App Component ---
export default function App() {
  const services = [
    {
      icon: "/assets/ai-saas-icon.jpg",
      title: "AI-Powered SaaS Products",
      description:
        "Scalable, subscription-based software with AI features like automation, predictive analytics, and natural language processing.",
      features: [
        "Machine Learning Integration",
        "Predictive Analytics",
        "Automated Workflows",
        "Real-time Insights"
      ]
    },
    {
      icon: "/assets/custom-dev-icon.jpg",
      title: "Custom Software Development",
      description:
        "Bespoke web and mobile applications tailored to your unique business requirements and workflows.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"]
    },
    {
      icon: "/assets/security-icon.jpg",
      title: "Secure Software Solutions",
      description:
        "Enterprise-grade security with encryption, compliance standards, and robust testing protocols.",
      features: ["Data Encryption", "GDPR/HIPAA Compliance", "Security Audits", "Penetration Testing"]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "AI Expertise",
      description:
        "Deep experience in machine learning, neural networks, and AI-driven automation."
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every solution built with enterprise-grade security and compliance in mind."
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description:
        "Tailored software that perfectly fits your business processes and goals."
    },
    {
      icon: Zap,
      title: "Scalable Architecture",
      description:
        "Built to grow with your business, from startup to enterprise scale."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      content:
        "IntelixTech transformed our operations with their AI-powered SaaS solution. We've seen a 40% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, DataVault Systems",
      content:
        "Their expertise in secure software development gave us the confidence to handle sensitive financial data. Outstanding work!",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Head of IT, MedCore Health",
      content:
        "The custom mobile app they developed for our healthcare platform exceeded all expectations. HIPAA compliant and user-friendly.",
      rating: 5
    }
  ];

  return (
    <div className="bg-[#0A0F2E]">
      <ServicesSection services={services} />
      <BenefitsSection benefits={benefits} />
      <TestimonialsSection testimonials={testimonials} />
      <CtaSection />
    </div>
  );
}
