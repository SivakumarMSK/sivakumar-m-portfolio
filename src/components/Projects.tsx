"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  Radio, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Smartphone, 
  Lock, 
  ArrowUpRight 
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS, Project } from "@/data/portfolio-data";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "realtime" | "enterprise">("all");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "realtime") return proj.category === "realtime" || proj.technologies.includes("WebSockets");
    if (activeFilter === "enterprise") return proj.category === "enterprise";
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Engineering Work
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            From high-concurrency WebSocket bidding platforms to multi-step engineering wizards and mobile apps.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter("realtime")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "realtime"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Real-Time & WebSockets
            </button>
            <button
              onClick={() => setActiveFilter("enterprise")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "enterprise"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Enterprise & Wizards
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-full font-semibold border ${
                      project.status === "live"
                        ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
                        : project.status === "in-development"
                        ? "bg-amber-950/60 border-amber-500/40 text-amber-300"
                        : "bg-slate-900 border-slate-700 text-slate-300"
                    }`}
                  >
                    {project.badge || "Project"}
                  </span>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <Lock className="w-3 h-3" />
                      <span>Enterprise</span>
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-cyan-300/90 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] uppercase font-mono tracking-wider text-slate-500">
                    Key Engineering Highlights:
                  </div>
                  {project.keyHighlights.slice(0, 3).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack Pills & CTA */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-slate-700/80 hover:border-transparent transition-all shadow-sm"
                  >
                    <span>Visit Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="w-full text-center py-2 px-3 rounded-xl text-[11px] font-mono text-slate-500 bg-slate-900/60 border border-slate-800/60">
                    Proprietary Production System • Confidential
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
