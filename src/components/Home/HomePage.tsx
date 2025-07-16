"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Shield,
  CheckCircle,
  Star,
  Zap,
  Target,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import heroImage from "@/assets/hero-ai-tech.jpg";
import aiSaasIcon from "@/assets/ai-saas-icon.jpg";
import customDevIcon from "@/assets/custom-dev-icon.jpg";
import securityIcon from "@/assets/security-icon.jpg";
import { ContainerTextFlip } from "../ui/container-text-flip";

const HomePage = () => {
  const services = [
    {
      icon: aiSaasIcon,
      title: "AI-Powered SaaS Products",
      description:
        "Scalable, subscription-based software with AI features like automation, predictive analytics, and natural language processing.",
      features: [
        "Machine Learning Integration",
        "Predictive Analytics",
        "Automated Workflows",
        "Real-time Insights",
      ],
    },
    {
      icon: customDevIcon,
      title: "Custom Software Development",
      description:
        "Bespoke web and mobile applications tailored to your unique business requirements and workflows.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "System Integration",
      ],
    },
    {
      icon: securityIcon,
      title: "Secure Software Solutions",
      description:
        "Enterprise-grade security with encryption, compliance standards, and robust testing protocols.",
      features: [
        "Data Encryption",
        "GDPR/HIPAA Compliance",
        "Security Audits",
        "Penetration Testing",
      ],
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: "AI Expertise",
      description:
        "Deep experience in machine learning, neural networks, and AI-driven automation.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every solution built with enterprise-grade security and compliance in mind.",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description:
        "Tailored software that perfectly fits your business processes and goals.",
    },
    {
      icon: Zap,
      title: "Scalable Architecture",
      description:
        "Built to grow with your business, from startup to enterprise scale.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      content:
        "IntelixTech transformed our operations with their AI-powered SaaS solution. We&apos;ve seen a 40% increase in efficiency across all departments.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, DataVault Systems",
      content:
        "Their expertise in secure software development gave us the confidence to handle sensitive financial data. Outstanding work!",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Head of IT, MedCore Health",
      content:
        "The custom mobile app they developed for our healthcare platform exceeded all expectations. HIPAA compliant and user-friendly.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Assuming Navbar is your converted Navigation component */}

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 opacity-10">
          {/* Using next/image for background image with fill and sizes for responsiveness */}
          <Image
            src={heroImage}
            alt="AI Technology Background"
            layout="fill" // Makes the image fill its parent container
            objectFit="cover" // Covers the area without distortion
            quality={100} // High quality for background
            priority // Preload this image as it's above the fold
            sizes="(max-width: 768px) 100vw, 100vw" // Responsive sizes
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Power Your Business with 
                  
                  
                  <ContainerTextFlip
                    words={["AI-Driven SaaS", "Custom Software Solutions"]}
                  />
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Secure. Scalable. Intelligent. Built for You.
                </motion.p>
                <motion.p
                  className="text-base text-muted-foreground max-w-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Transform your business with innovative AI-powered software
                  solutions designed for maximum security, scalability, and
                  customization.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="group">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg">
                    Explore Our Solutions
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-8 pt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">
                    Enterprise Security
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">
                    AI-Powered
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">
                    100% Custom
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div
                className="animate-float"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Using next/image for the main hero image */}
                <Image
                  src={heroImage}
                  alt="AI-Powered Software Solutions"
                  className="rounded-2xl shadow-[var(--shadow-elegant)] hover-glow"
                  width={600} // Provide appropriate width
                  height={400} // Provide appropriate height
                  quality={90} // Adjust quality as needed
                  priority // Preload this image
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our <span className="text-gradient-tech">Expert Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software solutions designed to accelerate your
              business growth through cutting-edge technology and secure
              development practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="card-tech hover-lift group h-full">
                  <CardContent className="p-8">
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Using next/image for service icons */}
                      <Image
                        src={service.icon}
                        alt={service.title}
                        className="w-16 h-16 rounded-lg shadow-md"
                        width={64} // Corresponds to w-16 (16 * 4 = 64px)
                        height={64} // Corresponds to h-16 (16 * 4 = 64px)
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-sm"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: featureIndex * 0.1,
                            duration: 0.5,
                          }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose{" "}
              <span className="text-gradient-primary">IntelixTech</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine deep technical expertise with a commitment to
              innovation, security, and client success.
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
                    className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Client{" "}
              <span className="text-gradient-accent">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their businesses
              with our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="card-elegant hover-lift h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: 180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <p className="text-muted-foreground mb-4 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-primary to-primary-light"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
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
            <Button size="lg" variant="outline" className="mx-auto">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
