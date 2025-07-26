import {
  BrainIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0A0F2E] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="Intelix Tech Limited"
              />
            </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Intelix Tech Limited
              </span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Empowering businesses with innovative, secure, and AI-driven software
              solutions tailored to their unique needs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/intelixtech"
                className="text-slate-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center">
                <MailIcon className="h-4 w-4 mr-2 text-blue-400" />
                info@intelixtech.com
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-blue-400" />
                +880 1306-080440
              </li>
              <li className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2 text-blue-400" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Intelix Tech Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-slate-500 hover:text-purple-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-500 hover:text-purple-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-slate-500 hover:text-purple-400 text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
