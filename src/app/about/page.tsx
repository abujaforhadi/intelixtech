
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Shield, 
  Target, 
  Users,
  CheckCircle,
  Lightbulb,
  Heart
} from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
};
const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new AI capabilities and development methodologies to deliver cutting-edge solutions."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Every line of code is written with security in mind. We implement industry-leading practices to protect your data and ensure compliance."
    },
    {
      icon: Target,
      title: "Customization",
      description: "No two businesses are alike. We craft bespoke solutions that perfectly align with your unique requirements and workflows."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our mission. We&aposre committed to delivering solutions that drive real business value and long-term growth."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & AI Architect",
      bio: "15+ years in AI and machine learning, former Principal Engineer at Google AI. PhD in Computer Science from Stanford.",
      expertise: ["Machine Learning", "Neural Networks", "System Architecture"]
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Security Expert",
      bio: "Former cybersecurity lead at major financial institutions. Expert in secure software development and compliance frameworks.",
      expertise: ["Cybersecurity", "GDPR/HIPAA Compliance", "DevSecOps"]
    },
    {
      name: "Michael Johnson",
      role: "Lead Full-Stack Developer",
      bio: "10+ years building scalable web and mobile applications. Specialist in modern frameworks and cloud architectures.",
      expertise: ["React/Node.js", "Cloud Architecture", "Mobile Development"]
    },
    {
      name: "Emily Zhang",
      role: "UX/UI Design Director",
      bio: "Award-winning designer with expertise in creating intuitive interfaces for complex enterprise software systems.",
      expertise: ["User Experience", "Interface Design", "Design Systems"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-gradient-primary">IntelixTech</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We are a team of passionate technologists dedicated to empowering businesses 
              with innovative, secure, and AI-driven software solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-md min-w-[120px]">
                  <div className="text-2xl font-bold text-gradient-tech">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our <span className="text-gradient-tech">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At IntelixTech, we believe that every business deserves access to cutting-edge 
                technology solutions that are both powerful and secure. Our mission is to bridge 
                the gap between complex AI capabilities and practical business applications.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We specialize in creating AI-powered SaaS products and custom software solutions 
                that not only meet today&aposs needs but are built to scale with your future growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Empowering Innovation</h3>
                    <p className="text-muted-foreground">Leveraging AI to create solutions that drive real business value</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Ensuring Security</h3>
                    <p className="text-muted-foreground">Building enterprise-grade security into every solution we create</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Delivering Excellence</h3>
                    <p className="text-muted-foreground">Committed to quality, performance, and client satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Brain className="h-32 w-32 text-primary opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our <span className="text-gradient-accent">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from initial consultation to final deployment 
              and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-elegant hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our <span className="text-gradient-primary">Expert Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              software development, security, and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-tech hover-lift group text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md mr-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let&aposs discuss how our expertise can help transform your business with 
            innovative AI-powered solutions.
          </p>
          <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">
            Start a Conversation
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;