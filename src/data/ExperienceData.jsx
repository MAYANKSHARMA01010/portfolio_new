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
    <div className="w-full h-full overflow-y-auto pr-2 custom-scrollbar pl-4">
      <div className="relative border-l-2 border-white/10 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-4 border-cyan-400" />

            {/* Content Card */}
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-cyan-400 font-medium">
                  {exp.company} <span className="text-white/40">•</span>{" "}
                  <span className="text-white/60">{exp.location}</span>
                </p>
                <p className="text-sm text-white/40 mt-1">{exp.date}</p>
              </div>
              <p className="text-white/70 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10 mt-2">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
