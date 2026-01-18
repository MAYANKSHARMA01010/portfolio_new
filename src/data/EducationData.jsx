"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EducationData() {
  const education = [
    {
      id: 1,
      title: "B.Tech in Artificial Intelligence",
      institution: "Newton School of Technology, Rishihood University",
      duration: "2024 — 2028 (Present)",
      grade: "CGPA: 6.6 (1st Year)",
      image: "/rishihood-university.webp",
    },
    {
      id: 2,
      title: "Senior Secondary (Class XII)",
      institution: "BLM Academy, Haldwani",
      duration: "2023",
      grade: "Percentage: 77%",
      image: "/blm-academy-12.webp",
    },
    {
      id: 3,
      title: "Secondary (Class X)",
      institution: "BLM Academy, Haldwani",
      duration: "2021",
      grade: "Percentage: 70%",
      image: "/blm-academy-10.webp",
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto pr-2 custom-scrollbar space-y-6">
      {education.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col md:flex-row items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
        >
          <div className="w-full md:w-1/3 shrink-0">
            <img
              src={edu.image}
              alt={edu.title}
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-2/3">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {edu.title}
            </h3>
            <p className="text-cyan-400 font-medium text-lg mb-2">
              {edu.institution}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {edu.duration}
              </span>
              <span className="bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-300">
                {edu.grade}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
