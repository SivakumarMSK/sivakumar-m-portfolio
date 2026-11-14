"use client";

import React from "react";
import { 
  Code2, 
  Radio, 
  Palette, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Cpu 
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export default function Skills() {
  const categoryIcons = [Code2, Radio, Palette, Wrench];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Modern tools, frameworks, and engineering patterns used daily to deliver scalable frontend applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const IconComponent = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                          skill.highlight
                            ? "bg-slate-900 border border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-500/10 hover:border-cyan-400 hover:scale-105"
                            : "bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <span className="font-semibold text-white">{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Footer for Category */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Production verified & integrated in real-world apps</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Engineering Superpower Callout */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-violet-500/30 bg-gradient-to-r from-violet-950/20 via-slate-900/40 to-cyan-950/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-400 shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                AI-Accelerated Engineering Workflow
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-0.5">
                Leveraging Claude, Cursor, and ChatGPT for rapid debugging, test case authoring, complex state refactoring, and delivering robust production features 2x faster.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-violet-300 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/40 shrink-0">
            <span>Velocity + Code Quality</span>
          </div>
        </div>

      </div>
    </section>
  );
}
