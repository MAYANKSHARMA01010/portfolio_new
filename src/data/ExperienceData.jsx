"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceData() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Plug Seal Innovation Pvt. Ltd.",
      desc: "Worked on building and optimizing full-stack web applications. Contributed to frontend development using React.js and backend services with Node.js and PostgreSQL. Enhanced app performance and improved code quality through refactoring and testing.",
      date: "Apr 2025 — Jul 2025 (3 Months)",
      location: "Remote",
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      desc: "Currently working on freelance projects involving scalable and responsive web apps using React, Node.js, Prisma, and PostgreSQL. Collaborating with clients to design custom solutions, integrate APIs, and deploy applications on cloud platforms.",
      date: "Nov 2025 — Present",
      location: "Remote",
    },
  ];

  return (
    <div className="w-full max-h-[85vh] overflow-y-auto pr-3 custom-scrollbar scroll-smooth rounded-2xl">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-cyan-400 mb-6 text-center"
      >
        Professional Experience
      </motion.h2>

      <div className="relative border-l border-white/10 space-y-8 pl-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[10px] top-1 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black" />

            <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 shadow-md transition-all hover:shadow-cyan-500/20">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <Briefcase size={18} className="text-cyan-400" />
              </div>
              <p className="text-white/80 text-sm font-medium">
                {exp.company} — <span className="text-white/60">{exp.location}</span>
              </p>
              <p className="text-xs text-white/50 mb-2">{exp.date}</p>
              <p className="text-white/70 text-sm leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #22d3ee80, #22d3ee20);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #22d3ee;
        }
      `}</style>
    </div>
  );
}
