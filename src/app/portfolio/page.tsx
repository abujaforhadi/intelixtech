import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Brain,
  Code,
  Shield,
  TrendingUp,
  Users,
  Star,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

const Portfolio = () => {
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
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
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
      image: "bg-gradient-to-br from-green-500 to-teal-600",
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
      image: "bg-gradient-to-br from-yellow-500 to-orange-600",
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
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
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
      image: "bg-gradient-to-br from-red-500 to-rose-600",
    },
  ];

  const stats = [
    { icon: TrendingUp, number: "150%", label: "Average ROI Increase" },
    { icon: Users, number: "50+", label: "Satisfied Clients" },
    { icon: Star, number: "4.9/5", label: "Client Rating" },
    { icon: CheckCircle, number: "100%", label: "Project Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="text-gradient-tech">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how we&apos;ve helped businesses transform with AI-powered solutions,
              custom software, and secure development practices.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gradient-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h2 className="text-3xl font-heading font-bold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground">Client: {project.client}</p>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Challenge</h3>
                      <p className="text-muted-foreground text-sm">{project.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Solution</h3>
                      <p className="text-muted-foreground text-sm">{project.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">Key Results</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.timeline}
                      </div>
                      <Button variant="outline" className="group">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card className="card-tech hover-lift overflow-hidden">
                    <CardContent className="p-0">
                      <div
                        className={`h-64 ${project.image} flex items-center justify-center relative`}
                      >
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative text-center text-white">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                            {project.category.includes("AI") && <Brain className="h-8 w-8" />}
                            {project.category.includes("Custom") && <Code className="h-8 w-8" />}
                            {project.category.includes("Secure") && <Shield className="h-8 w-8" />}
                          </div>
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                        </div>
                      </div>

                      <div className="p-6">
                        <blockquote className="border-l-4 border-secondary pl-4 italic">
                          <p className="text-muted-foreground mb-2">
                            &ldquo;{project.testimonial.quote}&rdquo;
                          </p>
                          <footer className="text-sm font-medium">
                            &mdash; {project.testimonial.author}
                          </footer>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Technologies We <span className="text-gradient-accent">Master</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and innovative
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "Python", "TensorFlow", "AWS", "PostgreSQL",
              "React Native", "MongoDB", "Docker", "Kubernetes", "Redis", "Apache Kafka",
              "TypeScript", "GraphQL", "Elasticsearch", "Apache Spark", "OAuth", "JWT",
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our roster of satisfied clients and transform your business with innovative
            AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
