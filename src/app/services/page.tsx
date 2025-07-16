
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Code, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Zap,
  Database,
  Smartphone,
  Globe,
  Lock,
  BarChart3,
  Cpu
} from "lucide-react";
import aiSaasIcon from "@/assets/ai-saas-icon.jpg";
import customDevIcon from "@/assets/custom-dev-icon.jpg";
import securityIcon from "@/assets/security-icon.jpg";
import servicesBackground from "@/assets/services-background.jpg";
import { Metadata } from "next";
import Image from 'next/image';
export const metadata: Metadata = {
  title: "Services",
};
const Services = () => {
  const mainServices = [
    {
      icon: aiSaasIcon,
      title: "AI-Powered SaaS Products",
      description: "Create scalable, subscription-based software with cutting-edge AI capabilities that drive automation, insights, and efficiency.",
      features: [
        "Machine Learning Integration",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Automated Workflows",
        "Real-time Data Processing",
        "AI-driven Recommendations",
        "Intelligent Automation"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "AWS SageMaker", "Google AI"],
      pricing: "Starting from $15,000"
    },
    {
      icon: customDevIcon,
      title: "Custom Software Development",
      description: "Bespoke web and mobile applications designed to perfectly fit your unique business processes and requirements.",
      features: [
        "Web Applications",
        "Mobile Apps (iOS/Android)",
        "Progressive Web Apps",
        "API Development",
        "System Integration",
        "Legacy Modernization",
        "Cloud Migration",
        "Performance Optimization"
      ],
      technologies: ["React", "Node.js", "React Native", "Python", "AWS/Azure"],
      pricing: "Starting from $10,000"
    },
    {
      icon: securityIcon,
      title: "Secure Software Solutions",
      description: "Enterprise-grade security implementations with comprehensive compliance frameworks and robust protection protocols.",
      features: [
        "End-to-end Encryption",
        "GDPR/HIPAA Compliance",
        "Security Audits",
        "Penetration Testing",
        "Identity Management",
        "Access Control",
        "Data Protection",
        "Compliance Reporting"
      ],
      technologies: ["OAuth", "JWT", "SSL/TLS", "AES Encryption", "Multi-factor Auth"],
      pricing: "Starting from $8,000"
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with custom analytics platforms and business intelligence solutions."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance existing applications with speed improvements, scalability enhancements, and efficiency optimizations."
    },
    {
      icon: Cpu,
      title: "AI Consulting",
      description: "Strategic guidance on AI implementation, technology selection, and digital transformation roadmaps."
    }
  ];

  const whyItMatters = [
    {
      icon: Brain,
      title: "AI Advantage",
      description: "Stay ahead of competition with intelligent automation and data-driven decision making."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Protect your business and customers with enterprise-grade security measures."
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description: "Built to grow with your business from startup to enterprise scale."
    },
    {
      icon: BarChart3,
      title: "Measurable ROI",
      description: "Solutions designed to deliver tangible business value and improved efficiency."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src={servicesBackground} 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="text-gradient-tech">Expert Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software solutions designed to accelerate your business growth 
              through cutting-edge technology and secure development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Image 
                    src={service.icon} 
                    alt={service.title}
                    width={200}
                    height={200}
                    className="w-20 h-20 rounded-2xl shadow-lg mb-6"
                  />
                  <h2 className="text-3xl font-heading font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Key Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-gradient-primary">{service.pricing}</p>
                    </div>
                    <Button variant="hero" className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="card-tech h-80">
                    <CardContent className="p-8 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          {index === 0 && <Brain className="h-12 w-12 text-primary" />}
                          {index === 1 && <Code className="h-12 w-12 text-primary" />}
                          {index === 2 && <Shield className="h-12 w-12 text-primary" />}
                        </div>
                        <h3 className="text-lg font-semibold text-gradient-tech">
                          {service.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Additional <span className="text-gradient-accent">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services to enhance and optimize your software ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-elegant hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why It <span className="text-gradient-primary">Matters</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understand the strategic value and competitive advantages our solutions provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItMatters.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Development <span className="text-gradient-tech">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs, goals, and technical requirements" },
              { step: "02", title: "Design", description: "Creating detailed architecture and user experience blueprints" },
              { step: "03", title: "Development", description: "Building with agile methodology and continuous integration" },
              { step: "04", title: "Deployment", description: "Secure launch with monitoring, support, and optimization" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution 
            that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;