"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FolderOpen, X } from "lucide-react";
import UniverseMiniNavbar from "../components/UniverseMiniNavbar";

import SkillsData from "../data/SkillsData";
import EducationData from "../data/EducationData";
import ProjectsData from "../data/ProjectsData";
import ExperienceData from "../data/ExperienceData";

export default function UniverseSection() {
  const [active, setActive] = useState(null);

  const sections = [
    {
      id: "education",
      title: "Education",
      color: "from-purple-500/30 to-purple-800/10",
      content: <EducationData />,
    },
    {
      id: "skills",
      title: "Skills",
      color: "from-cyan-500/30 to-cyan-800/10",
      content: <SkillsData />,
    },
    {
      id: "projects",
      title: "Projects",
      color: "from-pink-500/30 to-pink-800/10",
      content: <ProjectsData />,
    },
    {
      id: "experience",
      title: "Experience",
      color: "from-amber-500/30 to-amber-800/10",
      content: <ExperienceData />,
    },
  ];

  const activeData = sections.find((s) => s.id === active);

  return (
    <section
      id="universe"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#020202] to-[#080808] text-white overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-10">My Universe</h2>

      <AnimatePresence>
        {!active && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl"
          >
            {sections.map((sec) => (
              <motion.div
                key={sec.id}
                layout
                onClick={() => setActive(sec.id)}
                className={`rounded-2xl border border-white/10 backdrop-blur-md cursor-pointer transition-all shadow-lg hover:scale-105 bg-gradient-to-br ${sec.color}`}
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <Folder className="w-7 h-7 text-cyan-400" />
                    <h3 className="text-xl font-semibold">{sec.title}</h3>
                  </div>
                </div>
                <div className="px-6 pb-6 text-white/70">
                  <p className="text-sm">Click to explore</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-start px-6 py-10 bg-black/60 backdrop-blur-2xl z-50"
          >
            <UniverseMiniNavbar
              sections={sections}
              active={active}
              setActive={setActive}
            />

            <motion.div
              layout
              className={`w-full max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br ${activeData.color} p-8 shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <FolderOpen className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-semibold">{activeData.title}</h3>
              </div>
              <div className="text-white/80">{activeData.content}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
