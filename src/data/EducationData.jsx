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
    <div className="w-full max-h-[70vh] overflow-y-auto pr-2 scroll-smooth custom-scrollbar">
      <div className="flex flex-col gap-10 w-full">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8 bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-cyan-500/10 transition-all`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={edu.image}
                alt={edu.title}
                className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full md:w-1/2 text-white/80">
              <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
              <p className="text-lg">{edu.institution}</p>
              <p className="text-sm text-white/60 mt-1">{edu.duration}</p>
              <p className="text-sm text-cyan-400 mt-1">{edu.grade}</p>
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
