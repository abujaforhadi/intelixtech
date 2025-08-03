import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

<Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Intelix Tech Limited",
    url: "https://intelixtech.com",
    logo: "https://intelixtech.com/logo.png",
    description: "AI-powered SaaS & custom software development company.",
    sameAs: [
      "https://www.linkedin.com/company/intelixtech",
      "https://facebook.com/intelixtech",
    ],
  })}
</Script>;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Intelix Tech Limited",
    template: "%s | Intelix Tech Limited ",
  },
  description:
    "Intelix Tech Limited - AI-Powered SaaS & Custom Software Development Company in Bangladesh.",
  metadataBase: new URL("https://intelixtech.com"),
  keywords: [
    "Intelix Tech Limited",
    "AI SaaS company in Bangladesh",
    "Custom software development",
    "Next.js development",
    "React development company",
    "AI solutions Dhaka",
    "Web development Bangladesh",
  ],
  openGraph: {
    title: "Intelix Tech Limited",
    description:
      "We provide cutting-edge AI-powered SaaS and custom software solutions tailored for modern businesses.",
    url: "https://intelixtech.com",
    siteName: "Intelix Tech Limited",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Intelix Tech Limited Website Preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelix Tech Limited",
    description:
      "AI-powered SaaS & software development company in Bangladesh.",
    images: ["/og-image.png"],
    site: "@intelixtech",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="bg-[#0a0f2ef0]">
          {children}
          <SpeedInsights />
        </div>

        <Footer />
      </body>
    </html>
  );
}
