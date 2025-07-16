"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BrainIcon,
  ShieldIcon,
  CodeIcon,
  TrendingUpIcon,
  SearchIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
  XCircleIcon,
} from "lucide-react";
// --- Data for the page ---
const featuredPost = {
  id: 1,
  title: "How AI Can Transform Your SaaS Product in 2024",
  excerpt:
    "Discover the latest AI technologies that are revolutionizing SaaS applications and learn how to implement them in your business to drive growth and efficiency.",
  author: "Alex Chen",
  role: "CEO & AI Architect",
  date: "July 15, 2025",
  readTime: "8 min read",
  category: "AI & Machine Learning",
  tags: ["AI", "SaaS", "Machine Learning", "Business Growth"],
  image: "https://placehold.co/800x600/1e3a8a/ffffff?text=AI+Transformation",
};

const allBlogPosts = [
  {
    id: 2,
    title: "Top 5 Security Practices for Web Applications",
    excerpt:
      "Essential security measures every web application should implement to protect against modern cyber threats and ensure data privacy.",
    author: "Sarah Rodriguez",
    role: "CTO & Security Expert",
    date: "July 12, 2025",
    readTime: "6 min read",
    category: "Cybersecurity",
    tags: ["Security", "Web Development", "Best Practices"],
    image: "https://placehold.co/600x400/be123c/ffffff?text=Web+Security",
  },
  {
    id: 3,
    title: "Why Custom Software Beats Off-the-Shelf Solutions",
    excerpt:
      "Understanding when to invest in custom software development and how it can provide competitive advantages for your business.",
    author: "Michael Johnson",
    role: "Lead Full-Stack Developer",
    date: "July 10, 2025",
    readTime: "5 min read",
    category: "Software Development",
    tags: ["Custom Dev", "Strategy", "ROI"],
    image: "https://placehold.co/600x400/059669/ffffff?text=Custom+Software",
  },
  {
    id: 4,
    title: "Building Scalable SaaS Architecture with Microservices",
    excerpt:
      "A comprehensive guide to designing microservices architecture for SaaS applications that can scale to millions of users.",
    author: "Alex Chen",
    role: "CEO & AI Architect",
    date: "July 8, 2025",
    readTime: "12 min read",
    category: "Architecture",
    tags: ["Microservices", "SaaS", "Scalability"],
    image: "https://placehold.co/600x400/5b21b6/ffffff?text=Microservices",
  },
  {
    id: 5,
    title: "The Future of Mobile App Development: React Native vs Native",
    excerpt:
      "Comparing development approaches for mobile applications and when to choose React Native over native development.",
    author: "Emily Zhang",
    role: "UX/UI Design Director",
    date: "July 5, 2025",
    readTime: "7 min read",
    category: "Mobile Development",
    tags: ["React Native", "Mobile", "Strategy"],
    image: "https://placehold.co/600x400/d97706/ffffff?text=Mobile+Dev",
  },
  {
    id: 6,
    title: "Data Privacy and GDPR Compliance in SaaS Applications",
    excerpt:
      "Essential steps to ensure your SaaS application meets GDPR requirements and maintains user trust through privacy-first design.",
    author: "Sarah Rodriguez",
    role: "CTO & Security Expert",
    date: "July 2, 2025",
    readTime: "10 min read",
    category: "Compliance",
    tags: ["GDPR", "Privacy", "SaaS"],
    image: "https://placehold.co/600x400/0891b2/ffffff?text=GDPR",
  },
  {
    id: 7,
    title: "Implementing AI-Powered Analytics in Business Applications",
    excerpt:
      "Learn how to integrate machine learning algorithms into your business applications for better insights and automated decision-making.",
    author: "Michael Johnson",
    role: "Lead Full-Stack Developer",
    date: "June 28, 2025",
    readTime: "9 min read",
    category: "AI & Machine Learning",
    tags: ["Analytics", "AI", "BI"],
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=AI+Analytics",
  },
];

const categories = [
  { name: "AI & Machine Learning", count: 8, icon: BrainIcon },
  { name: "Cybersecurity", count: 6, icon: ShieldIcon },
  { name: "Software Development", count: 12, icon: CodeIcon },
  { name: "Business Strategy", count: 5, icon: TrendingUpIcon },
  { name: "Mobile Development", count: 4, icon: TrendingUpIcon },
  { name: "Architecture", count: 3, icon: TrendingUpIcon },
  { name: "Compliance", count: 2, icon: TrendingUpIcon },
];

const popularTags = [
  "AI",
  "SaaS",
  "Security",
  "React",
  "Mobile",
  "Cloud",
  "Analytics",
  "GDPR",
  "Performance",
  "Architecture",
];

// --- Blog Page Component ---
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);

  useEffect(() => {
    let posts = allBlogPosts;

    if (selectedCategory) {
      posts = posts.filter((post) => post.category === selectedCategory);
    }

    if (searchTerm) {
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(posts);
  }, [searchTerm, selectedCategory]);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchTerm("");
  };

  return (
    <div className="bg-[#0A0F2E] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-center px-6 md:px-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-[#0A0F2E] to-[#0A0F2E] -z-10"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0A0F2E] to-transparent -z-10"></div>
        <motion.h1
          className="text-5xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          IntelixTech{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Insights
          </span>
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stay ahead of the curve with expert insights on AI, software
          development, security, and the latest technology trends.
        </motion.p>
        <motion.div
          className="max-w-md mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-slate-400"
          />
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
          </motion.div>

          <motion.div
            className="bg-black/20 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-4">
                    <span className="bg-purple-600/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-sm text-slate-400">
                      <CalendarIcon className="h-4 w-4 mr-1.5" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <ClockIcon className="h-4 w-4 mr-1.5" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white hover:text-purple-300 transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-300 mb-6">{featuredPost.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-black/30 text-slate-300 text-xs px-2 py-1 rounded-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full flex items-center justify-center border border-white/10">
                      <UserIcon className="h-5 w-5 text-purple-300" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-white">
                        {featuredPost.author}
                      </p>
                      <p className="text-xs text-slate-400">
                        {featuredPost.role}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Article{" "}
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                <h2 className="text-3xl font-bold">
                  {selectedCategory
                    ? `Category: ${selectedCategory}`
                    : "Latest Articles"}
                </h2>
                {(selectedCategory || searchTerm) && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center text-sm text-blue-400 hover:text-blue-300"
                  >
                    <XCircleIcon className="h-4 w-4 mr-1.5" />
                    Clear Filters
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      className="bg-black/30 border border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <span className="absolute top-4 left-4 bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-3 text-xs text-slate-400">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1.5" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-1.5" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full flex items-center justify-center border border-white/10">
                              <UserIcon className="h-4 w-4 text-purple-300" />
                            </div>
                            <div>
                              <p className="font-medium text-xs text-white">
                                {post.author}
                              </p>
                            </div>
                          </div>
                          <button className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center">
                            Read More{" "}
                            <ArrowRightIcon className="ml-1 h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="md:col-span-2 text-center py-16">
                    <p className="text-slate-400 text-lg">No articles found.</p>
                  </div>
                )}
              </div>

              <div className="text-center mt-12">
                <motion.button
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-white/5 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Load More Articles
                </motion.button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="p-6 rounded-2xl bg-black/30 border border-white/10">
                <h3 className="font-semibold mb-4 text-white">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleCategorySelect(category.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors ${
                          selectedCategory === category.name
                            ? "bg-purple-600/20"
                            : ""
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-5 w-5 text-purple-400" />
                          <span className="text-sm text-slate-300">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 bg-black/30 px-2 py-1 rounded-full border border-white/10">
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-black/30 border border-white/10 text-center">
                <h3 className="font-semibold mb-2 text-white">Stay Updated</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Get the latest insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-slate-500"
                  />
                  <motion.button
                    className="w-full group relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-black/30 border border-white/10">
                <h3 className="font-semibold mb-4 text-white">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-black/20 text-slate-300 text-xs px-3 py-1 rounded-full border border-white/10 hover:bg-purple-600/30 hover:text-purple-200 hover:border-purple-500/50 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App Component ---
export default function Bloges() {
  // Style injector for animations
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
    <div className="bg-[#0A0F2E]">
      <StyleInjector />
      <BlogPage />
    </div>
  );
}
