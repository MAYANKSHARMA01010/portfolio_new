"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsData() {
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("All");
  const scrollRef = useRef(null);

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
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [filter]);

  return (
    <div
      ref={scrollRef}
      className="w-full h-full overflow-y-auto pr-2 custom-scrollbar"
    >
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj, index) => (
            <motion.div
              layout
              key={proj.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors"
            >
              {/* Media Section */}
              <div className="relative h-48 bg-black/50 overflow-hidden">
                <video
                  src={proj.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white leading-none">
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-white/50 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-white/70 text-sm mb-6 line-clamp-3">
                  {proj.desc}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  {proj.repo !== "#" && (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 text-sm transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {proj.live !== "#" && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-sm transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
