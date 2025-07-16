"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Self-Contained Components & Icons ---

const ContainerTextFlip = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-block relative h-16 md:h-20 align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const BrainIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.98-3.34 2.5 2.5 0 0 1 .1-4.94 2.5 2.5 0 0 1 2.42-2.16 2.5 2.5 0 0 1 2.5-2.5Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.98-3.34 2.5 2.5 0 0 0-.1-4.94 2.5 2.5 0 0 0-2.42-2.16 2.5 2.5 0 0 0-2.5-2.5Z" /></svg>
);

const ShieldIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

const TargetIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);

const ZapIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);

const StarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);


// --- Page Sections ---

const HeroSection = () => (
    <section className="relative overflow-hidden bg-[#0A0F2E] text-white min-h-screen flex items-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
            <div className="absolute w-[1000px] h-[1000px] -left-[200px] -top-[400px] bg-gradient-radial from-blue-600/30 to-transparent rounded-full animate-pulse-slow"></div>
            <div className="absolute w-[800px] h-[800px] -right-[200px] -bottom-[300px] bg-gradient-radial from-purple-600/30 to-transparent rounded-full animate-pulse-slow animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div className="space-y-8" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
                    <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                        Power Your Business with{' '}
                        <ContainerTextFlip words={["AI-Driven SaaS", "Custom Software", "Secure Solutions"]} />
                    </motion.h1>
                    <motion.p className="text-lg md:text-xl text-slate-300 max-w-2xl" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}>
                        We build intelligent, secure, and scalable software to fuel your business growth and transform your vision into reality.
                    </motion.p>
                    <motion.div className="flex flex-col sm:flex-row gap-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } } }}>
                        <motion.button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-slate-900" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                            Get a Free Quote
                            <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                        <motion.button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-white/5 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                            Explore Solutions
                        </motion.button>
                    </motion.div>
                    <motion.div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } } }}>
                        <div className="flex items-center space-x-2 text-slate-400"><CheckCircleIcon className="h-5 w-5 text-blue-400" /><span>Enterprise Security</span></div>
                        <div className="flex items-center space-x-2 text-slate-400"><CheckCircleIcon className="h-5 w-5 text-blue-400" /><span>AI-Powered</span></div>
                        <div className="flex items-center space-x-2 text-slate-400"><CheckCircleIcon className="h-5 w-5 text-blue-400" /><span>100% Custom</span></div>
                    </motion.div>
                </motion.div>
                <motion.div className="relative flex items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}>
                    <div className="relative w-full max-w-md p-2 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/30">
                        <img src="https://placehold.co/600x450/0A0F2E/8B5CF6?text=IntelixTech.ai" alt="AI-Powered Software Solutions" className="rounded-xl w-full h-auto" width={600} height={450} />
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-blue-400 rounded-tl-2xl animate-pulse-slow"></div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-purple-400 rounded-br-2xl animate-pulse-slow animation-delay-2000"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const ServicesSection = ({ services }) => (
    <section className="py-20 bg-[#0A0F2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Expert Services</span></h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto">Comprehensive software solutions designed to accelerate your business growth through cutting-edge technology and secure development practices.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div key={index} className="h-full" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.2, duration: 0.8 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
                        <div className="h-full p-8 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-500/10 transition-all duration-300">
                            <motion.img src={service.icon} alt={service.title} className="w-16 h-16 rounded-lg shadow-md mb-6" width={64} height={64} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} />
                            <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                            <p className="text-slate-400 mb-6">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <motion.li key={featureIndex} className="flex items-center text-sm" initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: featureIndex * 0.1, duration: 0.5 }} viewport={{ once: true }}>
                                        <CheckCircleIcon className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
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

const BenefitsSection = ({ benefits }) => (
    <section className="py-20 bg-[#0A0F2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">IntelixTech</span></h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto">We combine deep technical expertise with a commitment to innovation, security, and client success.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                        <motion.div key={index} className="text-center group" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1, duration: 0.6 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
                            <motion.div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                                <Icon className="h-8 w-8 text-purple-400" />
                            </motion.div>
                            <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                            <p className="text-slate-400 text-sm">{benefit.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

const TestimonialsSection = ({ testimonials }) => (
    <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Success Stories</span></h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto">Hear from industry leaders who have transformed their businesses with our solutions.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div key={index} className="h-full" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.2, duration: 0.8 }} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -5 }}>
                        <div className="h-full p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-500/10">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.div key={i} initial={{ scale: 0, rotate: 180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ delay: i * 0.1, duration: 0.3 }} viewport={{ once: true }}>
                                        <StarIcon className="h-5 w-5 text-yellow-400" />
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-slate-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
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
    <motion.section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
                Ready to Transform Your Business?
            </motion.h2>
            <motion.p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
                Let's build your next big idea together. Contact us today for a free consultation and discover how our AI-powered solutions can accelerate your growth.
            </motion.p>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} viewport={{ once: true }}>
                 <motion.button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-purple-600 bg-white rounded-lg shadow-lg hover:bg-slate-200 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Contact Us
                </motion.button>
            </motion.div>
        </div>
    </motion.section>
);


// --- Main App Component ---

export default function App() {
    const services = [
        { icon: "/assets/ai-saas-icon.jpg", title: "AI-Powered SaaS Products", description: "Scalable, subscription-based software with AI features like automation, predictive analytics, and natural language processing.", features: ["Machine Learning Integration", "Predictive Analytics", "Automated Workflows", "Real-time Insights"] },
        { icon: "/assets/custom-dev-icon.jpg", title: "Custom Software Development", description: "Bespoke web and mobile applications tailored to your unique business requirements and workflows.", features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"] },
        { icon: "/assets/security-icon.jpg", title: "Secure Software Solutions", description: "Enterprise-grade security with encryption, compliance standards, and robust testing protocols.", features: ["Data Encryption", "GDPR/HIPAA Compliance", "Security Audits", "Penetration Testing"] },
    ];

    const benefits = [
        { icon: BrainIcon, title: "AI Expertise", description: "Deep experience in machine learning, neural networks, and AI-driven automation." },
        { icon: ShieldIcon, title: "Security First", description: "Every solution built with enterprise-grade security and compliance in mind." },
        { icon: TargetIcon, title: "Custom Solutions", description: "Tailored software that perfectly fits your business processes and goals." },
        { icon: ZapIcon, title: "Scalable Architecture", description: "Built to grow with your business, from startup to enterprise scale." },
    ];

    const testimonials = [
        { name: "Sarah Chen", role: "CTO, TechFlow Inc.", content: "IntelixTech transformed our operations with their AI-powered SaaS solution. We've seen a 40% increase in efficiency.", rating: 5 },
        { name: "Michael Rodriguez", role: "CEO, DataVault Systems", content: "Their expertise in secure software development gave us the confidence to handle sensitive financial data. Outstanding work!", rating: 5 },
        { name: "Emily Johnson", role: "Head of IT, MedCore Health", content: "The custom mobile app they developed for our healthcare platform exceeded all expectations. HIPAA compliant and user-friendly.", rating: 5 },
    ];

    // Style injector for animations
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
            
            <ServicesSection services={services} />
            <BenefitsSection benefits={benefits} />
            <TestimonialsSection testimonials={testimonials} />
            <CtaSection />
        </div>
    );
}
