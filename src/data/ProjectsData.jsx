"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsData() {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "CosmoShop",
      desc: "CosmoShop is an e-commerce web app built for selling futuristic space gear. It supports cart, checkout, and secure payments using Stripe API integration.",
      shortDesc: "E-commerce UI for space gear.",
      video: "/videos/cosmoshop.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/CosmoShop",
      live: "https://cosmoshop.vercel.app",
      stack: ["React", "Tailwind", "Stripe", "Node.js"],
    },
    {
      title: "StellarMap",
      desc: "An interactive 3D star visualization built using WebGL and Three.js. Users can explore constellations and galaxies in real-time with smooth camera transitions.",
      shortDesc: "3D interactive star map.",
      video: "/videos/stellarmap.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/StellarMap",
      live: "https://stellarmap.vercel.app",
      stack: ["WebGL", "Three.js", "React", "Canvas"],
    },
    {
      title: "Portfolio Galaxy",
      desc: "A personal portfolio with animated transitions, responsive design, and motion effects powered by Framer Motion — showcasing my work, skills, and experience.",
      shortDesc: "Animated portfolio site.",
      video: "/videos/portfolio_galaxy.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/Portfolio-Galaxy",
      live: "https://mayanksharma.vercel.app",
      stack: ["Next.js", "Framer Motion", "Tailwind"],
    },
    {
      title: "AI TaskFlow",
      desc: "AI TaskFlow helps users manage daily tasks efficiently. Uses OpenAI API for smart suggestions and auto task prioritization with Prisma ORM backend.",
      shortDesc: "AI-based productivity manager.",
      video: "/videos/aitaskflow.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/AI-TaskFlow",
      live: "#",
      stack: ["Node.js", "Prisma", "OpenAI API", "Express"],
    },
    {
      title: "SpaceChat",
      desc: "A real-time chat platform with typing indicators, online status, and custom avatars — all built using Socket.io and React for instant communication.",
      shortDesc: "Real-time chat app.",
      video: "/videos/spacechat.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/SpaceChat",
      live: "#",
      stack: ["React", "Socket.io", "Node.js", "Express"],
    },
    {
      title: "LaunchTracker",
      desc: "A space mission tracker fetching live launch data from public APIs. Users can explore upcoming and past launches with search and filter functionality.",
      shortDesc: "Rocket launch tracker.",
      video: "/videos/launchtracker.mp4",
      repo: "https://github.com/MAYANKSHARMA01010/LaunchTracker",
      live: "#",
      stack: ["React", "API Integration", "Tailwind", "REST"],
    },
  ];

  return (
    <div className="w-full max-h-[70vh] overflow-y-auto pr-2 scroll-smooth custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
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

            <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>

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
