"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "../lib/allProjectData";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsData() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const scrollRef = useRef(null);
  const loadMoreRef = useRef(null);

  const filters = ["All", "Web Dev", "Mobile Dev", "Python", "Figma"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  useEffect(() => {
    setVisibleCount(6);
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setVisibleCount((prev) => prev + 4);
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <div
      ref={scrollRef}
      className="w-full h-full overflow-y-auto pr-2 custom-scrollbar"
    >
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === f
              ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((proj) => (
            <ProjectCard key={proj.slug} proj={proj} />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div
          ref={loadMoreRef}
          className="h-20 w-full flex items-center justify-center"
        >
          <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
