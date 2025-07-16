"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var Navbar_1 = require("@/components/Navbar");
var Footer_1 = require("@/components/Footer");
var script_1 = require("next/script");
React.createElement(script_1["default"], { id: "ld-json", type: "application/ld+json", strategy: "afterInteractive" }, JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Intelix Tech Limited",
    url: "https://intelixtech.com",
    logo: "https://intelixtech.com/logo.png",
    description: "AI-powered SaaS & custom software development company.",
    sameAs: [
        "https://www.linkedin.com/company/intelixtech",
        "https://facebook.com/intelixtech"
    ]
}));
var geistSans = google_1.Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});
var geistMono = google_1.Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});
exports.metadata = {
    title: {
        "default": "Intelix Tech Limited",
        template: "Intelix Tech Limited | %s"
    },
    description: "Intelix Tech Limited - AI-Powered SaaS & Custom Software Development Company in Bangladesh.",
    metadataBase: new URL("https://intelixtech.com"),
    keywords: [
        "Intelix Tech Limited",
        "AI SaaS company in Bangladesh",
        "Custom software development",
        "Next.js development",
        "React development company",
        "AI solutions Dhaka",
        "Web development Bangladesh"
    ],
    openGraph: {
        title: "Intelix Tech Limited",
        description: "We provide cutting-edge AI-powered SaaS and custom software solutions tailored for modern businesses.",
        url: "https://intelixtech.com",
        siteName: "Intelix Tech Limited",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Intelix Tech Limited Website Preview"
            },
        ],
        locale: "en_US"
    },
    twitter: {
        card: "summary_large_image",
        title: "Intelix Tech Limited",
        description: "AI-powered SaaS & software development company in Bangladesh.",
        images: ["/og-image.png"],
        site: "@intelixtech"
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    },
    manifest: "/manifest.json"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: geistSans.variable + " " + geistMono.variable + " antialiased" },
            React.createElement(Navbar_1["default"], null),
            React.createElement("div", { className: "bg-[#0A0F2E]" }, children),
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = RootLayout;
