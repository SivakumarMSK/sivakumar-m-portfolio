"use client";

import React from "react";
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Education() {
  const coursework = [
    "Advanced Web Technologies",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Software Design",
    "Computer Networks & Protocols",
    "Mobile & Cloud Computing"
  ];

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Master&apos;s degree combining theoretical computer science foundations with modern application development.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto glass-panel glass-panel-hover rounded-3xl p-6 sm:p-10 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
            
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {PERSONAL_INFO.degree}
                </h3>
                <p className="text-slate-300 font-medium text-sm sm:text-base mt-1">
                  {PERSONAL_INFO.college}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{PERSONAL_INFO.graduationYear}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Sivakasi, Tamil Nadu</span>
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="flex flex-col items-start md:items-end p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                <Award className="w-4 h-4" />
                <span>Academic Distinction</span>
              </div>
              <div className="text-3xl font-black text-white mt-1">
                {PERSONAL_INFO.cgpa} <span className="text-sm font-normal text-slate-400">/ 10</span>
              </div>
            </div>

          </div>

          {/* Key Coursework */}
          <div className="mt-8">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Core Computer Science Foundation:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

