
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  ArrowRight,
  Brain,
  Shield,
  Code,
  TrendingUp,
  Search,
  User
} from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
};
const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "How AI Can Transform Your SaaS Product in 2024",
    excerpt: "Discover the latest AI technologies that are revolutionizing SaaS applications and learn how to implement them in your business to drive growth and efficiency.",
    content: "Artificial Intelligence is no longer a futuristic concept—it&aposs a present reality that&aposs transforming businesses across industries...",
    author: "Alex Chen",
    role: "CEO & AI Architect",
    date: "December 10, 2024",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "SaaS", "Machine Learning", "Business Growth"],
    image: "bg-gradient-to-br from-blue-500 to-purple-600"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Top 5 Security Practices for Web Applications",
      excerpt: "Essential security measures every web application should implement to protect against modern cyber threats and ensure data privacy.",
      author: "Sarah Rodriguez",
      role: "CTO & Security Expert",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Cybersecurity",
      tags: ["Security", "Web Development", "Best Practices"],
      image: "bg-gradient-to-br from-red-500 to-pink-600"
    },
    {
      id: 3,
      title: "Why Custom Software Beats Off-the-Shelf Solutions",
      excerpt: "Understanding when to invest in custom software development and how it can provide competitive advantages for your business.",
      author: "Michael Johnson",
      role: "Lead Full-Stack Developer",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Software Development",
      tags: ["Custom Development", "Business Strategy", "ROI"],
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "Building Scalable SaaS Architecture with Microservices",
      excerpt: "A comprehensive guide to designing microservices architecture for SaaS applications that can scale to millions of users.",
      author: "Alex Chen",
      role: "CEO & AI Architect",
      date: "December 3, 2024",
      readTime: "12 min read",
      category: "Architecture",
      tags: ["Microservices", "Scalability", "SaaS", "Architecture"],
      image: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      id: 5,
      title: "The Future of Mobile App Development: React Native vs Native",
      excerpt: "Comparing development approaches for mobile applications and when to choose React Native over native development.",
      author: "Emily Zhang",
      role: "UX/UI Design Director",
      date: "November 30, 2024",
      readTime: "7 min read",
      category: "Mobile Development",
      tags: ["React Native", "Mobile Apps", "Development Strategy"],
      image: "bg-gradient-to-br from-yellow-500 to-orange-600"
    },
    {
      id: 6,
      title: "Data Privacy and GDPR Compliance in SaaS Applications",
      excerpt: "Essential steps to ensure your SaaS application meets GDPR requirements and maintains user trust through privacy-first design.",
      author: "Sarah Rodriguez",
      role: "CTO & Security Expert",
      date: "November 28, 2024",
      readTime: "10 min read",
      category: "Compliance",
      tags: ["GDPR", "Privacy", "Compliance", "SaaS"],
      image: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      id: 7,
      title: "Implementing AI-Powered Analytics in Business Applications",
      excerpt: "Learn how to integrate machine learning algorithms into your business applications for better insights and automated decision-making.",
      author: "Michael Johnson",
      role: "Lead Full-Stack Developer",
      date: "November 25, 2024",
      readTime: "9 min read",
      category: "AI & Machine Learning",
      tags: ["Analytics", "AI", "Business Intelligence", "Machine Learning"],
      image: "bg-gradient-to-br from-violet-500 to-purple-600"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", count: 8, icon: Brain },
    { name: "Cybersecurity", count: 6, icon: Shield },
    { name: "Software Development", count: 12, icon: Code },
    { name: "Business Strategy", count: 5, icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              IntelixTech <span className="text-gradient-tech">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights on AI, software development, 
              security, and the latest technology trends.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-bold mb-4">Featured Article</h2>
          </div>
          
          <Card className="card-tech hover-lift overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={`${featuredPost.image} h-64 lg:h-auto flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative text-center text-white">
                  <Brain className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{featuredPost.author}</p>
                      <p className="text-xs text-muted-foreground">{featuredPost.role}</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold">Latest Articles</h2>
                <select className="px-4 py-2 border border-border rounded-lg text-sm">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Most Viewed</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="card-elegant hover-lift group">
                    <div className={`${post.image} h-48 rounded-t-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 left-4 bg-white/90 text-gray-800"
                      >
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-xs">{post.author}</p>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="group">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => {
                      const Icon = category.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                          <div className="flex items-center space-x-3">
                            <Icon className="h-4 w-4 text-primary" />
                            <span className="text-sm">{category.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {category.count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="card-tech">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get the latest insights delivered to your inbox
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                    />
                    <Button variant="outline" size="sm" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AI", "SaaS", "Security", "React", "Mobile", "Cloud", "Analytics", "GDPR", "Performance", "Architecture"].map((tag, index) => (
                      <span key={index} className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our expertise guide your next project. Contact us for a free consultation 
            and discover how we can help you achieve your goals.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Start Your Project Today
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Blog;