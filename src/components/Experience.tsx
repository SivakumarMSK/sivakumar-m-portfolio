"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Track record of shipping production-grade React, React Native, and API-driven interfaces.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline marker with glow */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#090d16] shadow-sm shadow-cyan-400/50 group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8">
                
                {/* Header row: Role, Company & Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-slate-300 font-medium">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>{exp.company}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative description */}
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights Bullet Points */}
                <div className="mt-5 space-y-2.5">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
