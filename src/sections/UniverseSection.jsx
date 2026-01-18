"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Folder } from "lucide-react";

export default function UniverseSection() {
  const sections = [
    {
      id: "education",
      title: "Education",
      color: "from-purple-500/30 to-purple-800/10",
    },
    {
      id: "skills",
      title: "Skills",
      color: "from-cyan-500/30 to-cyan-800/10",
    },
    {
      id: "projects",
      title: "Projects",
      color: "from-pink-500/30 to-pink-800/10",
    },
    {
      id: "experience",
      title: "Experience",
      color: "from-amber-500/30 to-amber-800/10",
    },
  ];

  return (
    <section
      id="universe"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#020202] to-[#080808] text-white overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-10">My Universe</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl"
      >
        {sections.map((sec) => (
          <Link href={`/universe/${sec.id}`} key={sec.id} className="block group">
            <motion.div
              className={`rounded-2xl border border-white/10 backdrop-blur-md cursor-pointer transition-all shadow-lg group-hover:scale-105 bg-gradient-to-br ${sec.color}`}
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <Folder className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-semibold">{sec.title}</h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-white/70">
                <p className="text-sm group-hover:text-white transition-colors">
                  Click to explore
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
