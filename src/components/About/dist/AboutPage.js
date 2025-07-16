"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var AboutPage = function () {
    var values = [
        {
            icon: lucide_react_1.Lightbulb,
            title: "Innovation",
            description: "We stay at the forefront of technology, constantly exploring new AI capabilities and development methodologies to deliver cutting-edge solutions."
        },
        {
            icon: lucide_react_1.Shield,
            title: "Security",
            description: "Every line of code is written with security in mind. We implement industry-leading practices to protect your data and ensure compliance."
        },
        {
            icon: lucide_react_1.Target,
            title: "Customization",
            description: "No two businesses are alike. We craft bespoke solutions that perfectly align with your unique requirements and workflows."
        },
        {
            icon: lucide_react_1.Heart,
            title: "Client Success",
            description: "Your success is our mission. We're committed to delivering solutions that drive real business value and long-term growth."
        },
    ];
    var stats = [
        { number: "50+", label: "Projects Delivered" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" },
        { number: "5+", label: "Years Experience" },
    ];
    var team = [
        {
            name: "Md. Rimon",
            role: "Managing Director & Founder",
            avatar: "https://placehold.co/128x128/8B5CF6/FFFFFF?text=A"
        },
        {
            name: "Abid Ahmad",
            role: "Technical Advisor & Operations Manager",
            avatar: "https://placehold.co/128x128/FFFFFF/0A0F2E?text=S"
        },
        {
            name: "Md. Abu Jafor",
            role: "CTO & Co-Founder",
            avatar: "/teamss/jafor.JPG"
        },
        {
            name: "Mahbub Hasan",
            role: "Tech Lead & Software Engineer(AI and ML)",
            avatar: "https://placehold.co/128x128/EC4899/FFFFFF?text=E"
        },
    ];
    return (React.createElement("div", { className: "bg-[#0A0F2E] text-white pt-16 overflow-hidden" },
        React.createElement("section", { className: "py-24" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "grid lg:grid-cols-2 gap-16 items-center" },
                    React.createElement(framer_motion_1.motion.div, { className: "text-center lg:text-left", initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true } },
                        React.createElement("h1", { className: "text-4xl md:text-6xl font-bold mb-6" },
                            "About",
                            " ",
                            React.createElement("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" }, "Intelix Tech Limited")),
                        React.createElement("p", { className: "text-xl text-slate-300 max-w-xl mx-auto lg:mx-0" }, "We are a team of passionate technologists dedicated to empowering businesses with innovative, secure, and AI-driven software solutions.")),
                    React.createElement("div", { className: "grid grid-cols-2 gap-5" }, stats.map(function (stat, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, className: "bg-black/20 border border-white/10 rounded-xl p-6 text-center shadow-lg", initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { delay: 0.2 + index * 0.1, duration: 0.5 }, viewport: { once: true } },
                        React.createElement("div", { className: "text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" }, stat.number),
                        React.createElement("div", { className: "text-sm text-slate-400 mt-2" }, stat.label))); }))))),
        React.createElement("section", { className: "py-24 bg-black/10" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" },
                    React.createElement(framer_motion_1.motion.div, { className: "relative flex justify-center items-center order-last lg:order-first", initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.8 }, viewport: { once: true } },
                        React.createElement("div", { className: "absolute w-72 h-72 bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-3xl" }),
                        React.createElement("div", { className: "relative w-64 h-64 border-4 border-purple-500/30 rounded-full flex items-center justify-center" },
                            React.createElement(lucide_react_1.Brain, { className: "h-40 w-40 text-purple-400/80" }))),
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true } },
                        React.createElement("h2", { className: "text-3xl md:text-4xl font-bold mb-6" },
                            "Our",
                            " ",
                            React.createElement("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" }, "Mission")),
                        React.createElement("p", { className: "text-lg text-slate-300 mb-8" }, "At Intelix Tech Limited, we believe that every business deserves access to cutting-edge technology solutions that are both powerful and secure. Our mission is to bridge the gap between complex AI capabilities and practical business applications."),
                        React.createElement("div", { className: "space-y-6" }, [
                            {
                                title: "Empowering Innovation",
                                desc: "Leveraging AI to create solutions that drive real business value."
                            },
                            {
                                title: "Ensuring Security",
                                desc: "Building enterprise-grade security into every solution we create."
                            },
                            {
                                title: "Delivering Excellence",
                                desc: "Committed to quality, performance, and client satisfaction."
                            },
                        ].map(function (item, i) { return (React.createElement("div", { key: i, className: "flex items-center space-x-4" },
                            React.createElement("div", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center" },
                                React.createElement(lucide_react_1.CheckCircle, { className: "h-5 w-5 text-white" })),
                            React.createElement("div", null,
                                React.createElement("h3", { className: "font-semibold text-lg text-white" }, item.title),
                                React.createElement("p", { className: "text-slate-400" }, item.desc)))); })))))),
        React.createElement("section", { className: "py-24" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "text-center mb-16" },
                    React.createElement("h2", { className: "text-3xl md:text-4xl font-bold mb-4" },
                        "Our",
                        " ",
                        React.createElement("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" }, "Core Values")),
                    React.createElement("p", { className: "text-lg text-slate-400 max-w-3xl mx-auto" }, "These principles guide everything we do, from initial consultation to final deployment and ongoing support.")),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, values.map(function (value, index) {
                    var Icon = value.icon;
                    return (React.createElement(framer_motion_1.motion.div, { key: index, className: "p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg text-center flex flex-col items-center", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.15, duration: 0.6 }, viewport: { once: true } },
                        React.createElement("div", { className: "w-16 h-16 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/10 mb-6" },
                            React.createElement(Icon, { className: "h-8 w-8 text-purple-400" })),
                        React.createElement("h3", { className: "text-xl font-semibold mb-3 text-white" }, value.title),
                        React.createElement("p", { className: "text-slate-400 text-sm" }, value.description)));
                })))),
        React.createElement("section", { className: "py-24 bg-black/10" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "text-center mb-16" },
                    React.createElement("h2", { className: "text-3xl md:text-4xl font-bold mb-4" },
                        "Meet Our",
                        " ",
                        React.createElement("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" }, "Innovators")),
                    React.createElement("p", { className: "text-lg text-slate-400 max-w-3xl mx-auto" }, "The brilliant minds behind our success, dedicated to pushing the boundaries of technology.")),
                React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" }, team.map(function (member, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, className: "text-center bg-black/20 p-6 rounded-2xl border border-white/10 group relative", initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { delay: index * 0.2, duration: 0.6 }, viewport: { once: true } },
                    React.createElement("div", { className: "absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                    React.createElement(image_1["default"], { src: member.avatar, alt: member.name, width: 240, height: 240, className: "w-64 h-64 rounded-full mx-auto mb-4 border-4 border-purple-500/50 shadow-lg transform group-hover:scale-105 transition-transform duration-300", unoptimized: true }),
                    React.createElement("h3", { className: "text-lg font-semibold text-white mt-4" }, member.name),
                    React.createElement("p", { className: "text-blue-400" }, member.role))); }))))));
};
exports["default"] = AboutPage;
