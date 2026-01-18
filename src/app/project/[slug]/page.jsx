"use client";

import React from "react";
import { notFound, useRouter } from "next/navigation";
import { projects } from "../../../lib/allProjectData";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Server, Database, Layers, Code, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectPage({ params }) {
    const router = useRouter();
    const { slug } = React.use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    const primaryMedia = project.media[0];

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
            <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#050505] to-[#050505] pointer-events-none" />

            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/50 border-b border-white/5">
                <Link
                    href="/universe/projects"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back to Universe</span>
                </Link>
                <h1 className="text-sm font-bold tracking-wider text-cyan-500 uppercase">
                    {project.title}
                </h1>
            </nav>

            <main className="relative z-10 pt-24 px-6 pb-20 max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row gap-12 mb-20">
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-cyan-400 bg-cyan-900/30 border border-cyan-800 rounded-full tracking-wide uppercase">
                                {project.category}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                                {project.shortDesc}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-4"
                        >
                            {project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all font-medium group"
                                >
                                    <Github size={20} className="group-hover:rotate-12 transition-transform" />
                                    View Source
                                </a>
                            )}
                            {project.live !== "#" && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all transform hover:-translate-y-1"
                                >
                                    <ExternalLink size={20} />
                                    Live Demo
                                </a>
                            )}
                        </motion.div>
                    </div>

                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20 group"
                        >
                            {primaryMedia && primaryMedia.type === "video" ? (
                                <video
                                    src={primaryMedia.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                    <Play size={48} className="text-white/20" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-cyan-500 rounded-full" /> Overview
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed whitespace-pre-line">
                                {project.overview}
                            </p>
                        </section>

                        {project.features && project.features.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-cyan-500 rounded-full" /> Key Features
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                                            <span className="text-white/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {project.apiEndpoints && project.apiEndpoints.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-cyan-500 rounded-full" /> API Endpoints
                                </h2>
                                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/5 border-b border-white/10">
                                                <th className="p-4 font-semibold text-white/70">Method</th>
                                                <th className="p-4 font-semibold text-white/70">Endpoint</th>
                                                <th className="p-4 font-semibold text-white/70">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {project.apiEndpoints.map((ep, i) => (
                                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                                    <td className="p-4">
                                                        <span className={`px-2 py-1 rounded text-xs font-bold ${ep.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                                                                ep.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                                                                    ep.method === 'DELETE' ? 'bg-red-500/20 text-red-400' :
                                                                        'bg-yellow-500/20 text-yellow-400'
                                                            }`}>
                                                            {ep.method}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 font-mono text-sm text-cyan-300">{ep.endpoint}</td>
                                                    <td className="p-4 text-white/60 text-sm">{ep.desc}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="space-y-8">

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Layers className="text-cyan-400" size={20} /> Tech Stack
                            </h3>

                            <div className="space-y-6">
                                {Object.entries(project.techStack).map(([category, techs]) => (
                                    <div key={category}>
                                        <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                                            {category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {techs.map((tech) => (
                                                <span key={tech} className="px-3 py-1.5 text-sm rounded bg-white/10 border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {project.backendArchitecture && Object.keys(project.backendArchitecture).length > 0 && (
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Server className="text-purple-400" size={20} /> Backend Structure
                                </h3>

                                {project.backendArchitecture.pattern && (
                                    <div className="mb-4">
                                        <span className="text-white/50 text-sm block mb-1">Architecture Pattern</span>
                                        <span className="font-semibold text-white">{project.backendArchitecture.pattern}</span>
                                    </div>
                                )}

                                {project.backendArchitecture.folders && (
                                    <div>
                                        <span className="text-white/50 text-sm block mb-2">Key Directories</span>
                                        <ul className="space-y-2">
                                            {project.backendArchitecture.folders.map(folder => (
                                                <li key={folder} className="flex items-center gap-2 font-mono text-sm text-white/80">
                                                    <span className="text-cyan-500/50">/</span> {folder}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>

            </main>
        </div>
    );
}
