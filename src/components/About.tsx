"use client";

import React from "react";
import { 
  Radio, 
  Layers, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  FileCode2, 
  CheckCircle2 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function About() {
  const pillars = [
    {
      icon: Radio,
      title: "Real-Time WebSockets & APIs",
      description:
        "Deep hands-on experience building bidirectional streaming architectures, automatic reconnections, live bidding engines, and integrating 15+ backend endpoints.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform React & Native",
      description:
        "Building unified user experiences across web (React, Next.js) and mobile (React Native with Expo), ensuring smooth transitions, responsive grids, and clean component hierarchies.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Dev Acceleration",
      description:
        "Leveraging Claude, Cursor, and ChatGPT to solve complex logic roadblocks, generate robust unit/functional test scenarios, and multiply development velocity.",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Reliable & Production-Ready",
      description:
        "Strict adherence to clean code, Git pull request workflows, functional UI testing, JWT authentication flows, and client-side reporting engines (jsPDF).",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Fast, Interactive & Scalable User Interfaces
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Bridging pixel-perfect visual design with complex state architecture and real-time network streams.
          </p>
        </div>

        {/* Narrative & Bio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a dedicated <strong className="text-white font-semibold">Frontend Developer</strong> with over a year of production experience designing and building high-traffic web and mobile applications at <span className="text-cyan-400 font-medium">Milliontech Pvt Ltd</span>.
              </p>
              
              <p>
                My core expertise centers around the <strong className="text-slate-100 font-semibold">React ecosystem (React.js, React Native, Next.js)</strong>, combined with real-time bidirectional communication using <strong className="text-slate-100 font-semibold">WebSockets</strong> while integrating extensive <strong className="text-slate-100 font-semibold">REST APIs</strong>. From building live property auction modules with sub-second bid updates to multi-step engineering wizards with client-side PDF generators, I thrive on turning complex business workflows into smooth, accessible user interfaces.
              </p>

              <p>
                I completed my <strong className="text-white font-semibold">Master of Computer Applications (MCA)</strong> at <span className="text-slate-200">Ayya Nadar Janaki Ammal College</span> with an academic distinction of <span className="text-emerald-400 font-mono font-bold">8.6 CGPA</span>. This strong computer science foundation empowers me to write clean, maintainable code with great performance and architectural clarity.
              </p>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-cyan-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Current Employment & Joining Availability</span>
                  </div>
                  <p className="text-slate-400">
                    Currently employed at Milliontech with a standard <span className="text-white font-medium">60-day notice period</span>. Open to buyout negotiations and immediate discussion for compelling full-time frontend roles.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div>📍 Tamil Nadu, India</div>
              <div>🎓 MCA (8.6 CGPA)</div>
              <div>💼 1+ Year Industry Exp.</div>
              <div>⚡ AI-Accelerated Dev</div>
            </div>
          </div>

          {/* Core Pillars / Strengths */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel glass-panel-hover rounded-2xl p-5 border ${pillar.border} transition-all`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${pillar.bg} ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
