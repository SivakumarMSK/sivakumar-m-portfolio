"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Download, 
  ArrowRight, 
  Mail, 
  Phone, 
  MessageSquare, 
  Radio, 
  Cpu, 
  Sparkles, 
  Check, 
  Copy,
  GraduationCap
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO, METRICS } from "@/data/portfolio-data";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden tech-grid">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-300 mb-6 shadow-sm shadow-cyan-500/5 hover:border-cyan-500/40 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-200">Open to Work</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-300 font-medium">60-Day Notice (Negotiable)</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Sivakumar M
              </span>
            </h1>

            {/* Professional Sub-heading */}
            <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 tracking-tight">
              Frontend Engineer{" "}
              <span className="text-cyan-400 font-normal">|</span>{" "}
              <span className="text-slate-400 font-mono text-base sm:text-lg">
                React • Next.js • React Native
              </span>
            </p>

            {/* Concise Bio */}
            <p className="mt-5 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              1+ year of production experience engineering real-time WebSockets, robust REST API integrations, and scalable responsive web and mobile interfaces at <span className="text-slate-200 font-medium">Milliontech</span>. MCA Graduate (8.6 CGPA) proficient in leveraging AI-accelerated workflows (Claude, Cursor) to deliver clean, production-ready code.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Sivakumar_M_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800 hover:text-white shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-400 text-sm">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Connect:</span>
              
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image & Floating Floating Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            <div className="relative w-64 sm:w-72 md:w-80 aspect-square">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl blur-md opacity-40 animate-pulse" />
              
              {/* Main photo container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl">
                <Image
                  src={PERSONAL_INFO.profilePhoto}
                  alt={PERSONAL_INFO.name}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <p className="text-white text-sm font-semibold tracking-wide drop-shadow-md">
                    {PERSONAL_INFO.name}
                  </p>
                  <p className="text-cyan-400 text-xs font-mono">
                    Frontend Engineer • Milliontech
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Real-time WebSockets */}
              <div className="absolute -top-4 -left-6 sm:-left-8 bg-slate-900/90 border border-cyan-500/40 rounded-xl px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Radio className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Specialty</div>
                  <div className="text-xs font-bold text-white">Live WebSockets</div>
                </div>
              </div>

              {/* Floating Badge 2: Academic CGPA */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-slate-900/90 border border-blue-500/40 rounded-xl px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">MCA Degree</div>
                  <div className="text-xs font-bold text-emerald-400">8.6 CGPA</div>
                </div>
              </div>

              {/* Floating Badge 3: AI-Assisted Dev */}
              <div className="hidden sm:flex absolute top-1/2 -right-10 transform -translate-y-1/2 bg-slate-900/90 border border-violet-500/40 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-xs font-semibold text-slate-200">Claude & Cursor</span>
              </div>

            </div>

          </div>

        </div>

        {/* Metrics Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 flex flex-col justify-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
