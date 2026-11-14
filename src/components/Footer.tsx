"use client";

import React from "react";
import { ArrowUp, Heart, Mail, MessageSquare, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070b12] py-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2 text-white font-bold text-base">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold">
                S
              </span>
              <span>Sivakumar M</span>
            </a>
            <p className="text-xs text-slate-400 mt-1">
              Frontend Engineer • React.js • Next.js • React Native • WebSockets
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <a 
              href={PERSONAL_INFO.resumePath} 
              download="Sivakumar_M_Resume.pdf"
              className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors text-xs font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Bar: Copyright & Tech credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Sivakumar M. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          <div className="font-mono text-[11px] text-slate-400">
            Built with <span className="text-cyan-400">Next.js</span> &amp; <span className="text-blue-400">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
