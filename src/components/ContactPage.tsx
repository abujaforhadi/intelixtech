"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, CheckCircleIcon, SendIcon, ChevronDownIcon } from 'lucide-react';
// interface ContactFormInputs {
//   name: string
//   email: string
//   subject: string
//   message: string
// }
// --- Data for the page ---
const contactInfo = [
    { icon: MailIcon, title: "Email Us", details: ["info@intelixtech.com"], description: "Get in touch for detailed inquiries" },
    { icon: PhoneIcon, title: "Call Us", details: ["+880 1306080440"], description: "Speak directly with our team" },
    { icon: MapPinIcon, title: "Visit Us", details: ["Dhaka, Bangladesh"], description: "Schedule an in-person meeting" },
    { icon: ClockIcon, title: "Business Hours", details: ["Mon - Fri: 9:00 AM - 6:00 PM"], description: "We&apos;re here when you need us" },
];

// const services = ["AI-Powered SaaS Development", "Custom Web Applications", "Mobile App Development", "Security Consulting", "Data Analytics Solutions", "Legacy System Modernization", "Cloud Migration", "Performance Optimization"];

const faqs = [
    { question: "How long does a typical project take?", answer: "Project timelines vary based on complexity. Simple projects can take 2-4 months, while more complex enterprise-level solutions may take up to 12 months. We provide a detailed timeline after the initial consultation." },
    { question: "Do you provide ongoing support and maintenance?", answer: "Yes, we offer flexible support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally post-launch." },
    { question: "Can you work with our existing technology stack?", answer: "Absolutely. Our team is experienced with a wide range of technologies and can seamlessly integrate with your existing systems and infrastructure." },
    { question: "How do you ensure data security and compliance?", answer: "Security is at the core of our development process. We follow industry best practices, conduct regular security audits, and ensure compliance with standards like GDPR, HIPAA, and SOC 2." },
    { question: "What&apos;s included in your free consultation?", answer: "Our free consultation includes a deep dive into your project requirements, a discussion of potential technology solutions, and a preliminary estimate of the project timeline and budget." },
];

// --- Contact Page Component ---
const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    const form = e.target as HTMLFormElement;
    form.reset();

    setTimeout(() => setIsSubmitted(false), 5000);
};


    return (
        <div className="bg-[#0A0F2E] text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden text-center px-6 md:px-0">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-[#0A0F2E] to-[#0A0F2E] -z-10"></div>
                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0A0F2E] to-transparent -z-10"></div>
                <motion.h1 
                    className="text-5xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                >
                    Let&apos;s Build Your Next <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">Big Idea</span>
                </motion.h1>
                <motion.p 
                    className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Ready to transform your business with AI-powered solutions? Contact us today for a free consultation and discover the possibilities.
                </motion.p>
            </section>

            {/* Contact Form and Info */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <div className="bg-black/20 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-500/10 h-full">
                                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                                <p className="text-slate-400 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input id="name" placeholder="Your Name" required className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-slate-500"/>
                                        <input id="email" type="email" placeholder="Your Email" required className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-slate-500"/>
                                    </div>
                                    <input id="subject" placeholder="Subject" required className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-slate-500"/>
                                    <textarea id="message" placeholder="Your Message" required rows={6} className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-slate-500"/>
                                    <div className="text-right">
                                        <motion.button type="submit" disabled={isSubmitting || isSubmitted} className="w-full md:w-auto group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            {isSubmitting ? (
                                                <><div className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full"></div> Sending...</>
                                            ) : isSubmitted ? (
                                                <><CheckCircleIcon className="mr-2 h-5 w-5" /> Message Sent!</>
                                            ) : (
                                                <><SendIcon className="mr-2 h-5 w-5" /> Send Message</>
                                            )}
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <div key={index} className="p-6 rounded-2xl bg-black/20 border border-white/10 shadow-lg shadow-purple-500/10">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                                                <Icon className="h-6 w-6 text-purple-300" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1 text-white">{info.title}</h3>
                                                {info.details.map((detail, detailIndex) => (<p key={detailIndex} className="text-sm font-medium text-slate-300">{detail}</p>))}
                                                <p className="text-slate-400 text-xs mt-1">{info.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-black/20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Questions</span></h2>
                        <p className="text-lg text-slate-400">Get quick answers to common questions about our services and process.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div key={index} className="overflow-hidden rounded-xl bg-black/30 border border-white/10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }}>
                                <button
                                    className="w-full flex justify-between items-center text-left p-6"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <h3 className="font-semibold text-white">{faq.question}</h3>
                                    <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                        <ChevronDownIcon className="h-5 w-5 text-purple-400" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <p className="text-slate-400 text-sm px-6 pb-6">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- Main App Component ---
export default function App() {
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
            <StyleInjector />
            <ContactPage />
        </div>
    );
}
