"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function MediaPreview({ media }) {
    if (!media) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-black/40 text-white/30">
                No Preview
            </div>
        );
    }

    if (media.type === "video") {
        return (
            <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
        );
    }

    return (
        <Image
            src={media.src}
            alt={media.title || "Project preview"}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
    );
}

const ProjectCard = React.memo(({ proj }) => {
    const displayStack = [
        ...(proj.techStack?.frontend || []),
        ...(proj.techStack?.backend || []),
        ...(proj.techStack?.orm || []),
        ...(proj.techStack?.database || []),
        ...(proj.techStack?.services || []),
    ].slice(0, 4);

    const primaryMedia = proj.media?.[0];
    const showGithub = proj.github && proj.github !== "#";
    const showLive = proj.live && proj.live !== "#";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all hover:scale-[1.03]"
        >
            <Link
                href={`/project/${proj.slug}`}
                className="relative block h-[200px] group-hover:h-[260px] transition-all duration-500 bg-black overflow-hidden"
            >
                <MediaPreview media={primaryMedia} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-5">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {proj.title}
                    </h3>
                </div>
            </Link>

            <div className="relative z-10 p-5 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                    {displayStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded bg-white/5 text-white/50 border border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="text-white/70 text-sm mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all">
                    {proj.shortDesc}
                </p>

                {(showGithub || showLive) && (
                    <div className="mt-auto flex gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
                        {showGithub && (
                            <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 text-sm transition"
                            >
                                <Github size={16} /> Code
                            </a>
                        )}

                        {showLive && (
                            <a
                                href={proj.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-sm transition"
                            >
                                <ExternalLink size={16} /> Live
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
});

export default ProjectCard;
