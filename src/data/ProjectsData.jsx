"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsData() {
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Web Dev", "Mobile Dev", "Python", "Figma"];

  const projects = [
    {
      title: "CosmoShop",
      desc: "A full-featured e-commerce site for futuristic space gear with cart, checkout, and Stripe payments.",
      shortDesc: "E-commerce UI for space gear.",
      video: "/videos/cosmoshop.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/CosmoShop",
      live: "https://cosmoshop.vercel.app",
      stack: ["React", "Tailwind", "Stripe", "Node.js"],
      category: "Web Dev",
    },
    {
      title: "StellarMap",
      desc: "3D star visualization app using WebGL and Three.js to explore constellations in real time.",
      shortDesc: "3D interactive star map.",
      video: "/videos/stellarmap.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/StellarMap",
      live: "https://stellarmap.vercel.app",
      stack: ["WebGL", "Three.js", "React", "Canvas"],
      category: "Web Dev",
    },
    {
      title: "Portfolio Galaxy",
      desc: "Animated portfolio with smooth transitions using Framer Motion and Next.js.",
      shortDesc: "Animated portfolio site.",
      video: "/videos/portfolio_galaxy.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/Portfolio-Galaxy",
      live: "https://mayanksharma.vercel.app",
      stack: ["Next.js", "Framer Motion", "Tailwind"],
      category: "Web Dev",
    },
    {
      title: "AI TaskFlow",
      desc: "AI-powered task management using OpenAI API for smart suggestions, built on Node.js & Prisma.",
      shortDesc: "AI-based productivity manager.",
      video: "/videos/aitaskflow.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/AI-TaskFlow",
      live: "#",
      stack: ["Node.js", "Prisma", "OpenAI API"],
      category: "Python",
    },
    {
      title: "SpaceChat",
      desc: "Real-time chat app with Socket.io and React — includes typing indicators and custom avatars.",
      shortDesc: "Realtime chat app.",
      video: "/videos/spacechat.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/SpaceChat",
      live: "#",
      stack: ["React", "Socket.io", "Node.js"],
      category: "Mobile Dev",
    },
    {
      title: "FigmaFlow",
      desc: "A modern Figma UI prototype system built for design collaboration with component libraries.",
      shortDesc: "Figma component system.",
      video: "/videos/figmaflow.mp4",
      repo: "#",
      live: "#",
      stack: ["Figma", "Design System"],
      category: "Figma",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="w-full max-h-[80vh] overflow-y-auto pr-2 scroll-smooth custom-scrollbar">
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? "bg-cyan-500 text-black shadow-md"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-4 shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <motion.video
                  src={proj.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-56 object-cover rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-semibold rounded-xl"
                >
                  View Project ✨
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {proj.title}
              </h3>

              <p
                className="text-white/70 text-sm mb-3 cursor-pointer transition hover:text-white"
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
              >
                {expanded === index
                  ? proj.desc
                  : proj.shortDesc + " (Click to read more...)"}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {proj.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg text-sm text-white/80 hover:bg-cyan-500/90 hover:text-black transition"
                >
                  <Github size={16} /> Repo
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg text-sm text-white/80 hover:bg-cyan-500/90 hover:text-black transition"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
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
