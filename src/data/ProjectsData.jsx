"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

import { projects } from "../lib/allProjectData";

const ProjectCard = React.memo(({ proj }) => {
  const displayStack = [
    ...(proj.techStack.frontend || []),
    ...(proj.techStack.backend || []),
    ...(proj.techStack.orm || []),
    ...(proj.techStack.database || []),
    ...(proj.techStack.services || []),
  ].slice(0, 4);

  const primaryMedia = proj.media[0];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors"
    >
      <Link href={`/project/${proj.slug}`} className="block relative h-48 bg-black/50 overflow-hidden cursor-pointer">
        {primaryMedia && primaryMedia.type === "video" ? (
          <video
            src={primaryMedia.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-white/30">No Preview</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
          <h3 className="text-xl font-bold text-white leading-none group-hover:text-cyan-400 transition-colors">
            {proj.title}
          </h3>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {displayStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-white/50 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-white/70 text-sm mb-6 line-clamp-3">
          {proj.shortDesc}
        </p>

        <div className="flex items-center gap-3 mt-auto">
          {proj.github !== "#" && (
            <a
              href={proj.github}
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
  );
});

ProjectCard.displayName = "ProjectCard";

export default function ProjectsData() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const scrollRef = useRef(null);
  const loadMoreRef = useRef(null);

  const filters = ["All", "Web Dev", "Mobile Dev", "Python", "Figma"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  useEffect(() => {
    setVisibleCount(6);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setVisibleCount((prev) => prev + 4);
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [hasMore]);

  return (
    <div
      ref={scrollRef}
      className="w-full h-full overflow-y-auto pr-2 custom-scrollbar"
    >
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((proj) => (
            <ProjectCard key={proj.slug} proj={proj} />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div ref={loadMoreRef} className="h-20 w-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
