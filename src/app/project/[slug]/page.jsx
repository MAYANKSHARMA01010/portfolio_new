"use client";

import React from "react";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/allProjectData";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Github,
    ExternalLink,
    Layers,
    List,
} from "lucide-react";
import Link from "next/link";
import ProjectGallery from "../../../components/ProjectGallery";

const TECH_LABELS = {
    frontend: "Frontend",
    backend: "Backend",
    orm: "ORM",
    database: "Database",
    deployment: "Deployment",
    services: "Services",
    payments: "Payments",
    notifications: "Notifications",
    packageManager: "Package Manager",
};

export default function ProjectPage({ params }) {
    const { slug } = React.use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/50 border-b border-white/5">
                <Link
                    href="/universe/projects"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition"
                >
                    <ArrowLeft size={20} />
                    Back to Universe
                </Link>

                <span className="text-sm font-bold tracking-wider text-cyan-500 uppercase">
                    {project.title}
                </span>
            </nav>

            <main className="pt-24 px-6 pb-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-cyan-400 bg-cyan-900/30 border border-cyan-800 rounded-full uppercase">
                                {project.category}
                            </span>

                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                                {project.title}
                            </h1>

                            <p className="text-lg text-white/70">
                                {project.shortDesc}
                            </p>
                        </motion.div>

                        <div className="flex flex-wrap gap-4">
                            {project.github && project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center gap-2"
                                >
                                    <Github size={18} /> View Source
                                </a>
                            )}

                            {project.live && project.live !== "#" && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="px-5 py-3 rounded-full bg-cyan-500 text-black font-bold flex items-center gap-2"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <ProjectGallery media={project.media || []} />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-12">
                        {project.overview && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Overview</h2>
                                <p className="text-lg text-white/80 whitespace-pre-line">
                                    {project.overview}
                                </p>
                            </section>
                        )}

                        {Array.isArray(project.features) && project.features.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <List size={20} className="text-cyan-400" />
                                    Features
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.features.map((f, i) => (
                                        <div
                                            key={i}
                                            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition"
                                        >
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {Array.isArray(project.apiEndpoints) && project.apiEndpoints.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6">API Endpoints</h2>

                                <div className="rounded-xl border border-white/10 overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-white/5">
                                            <tr>
                                                <th className="p-3 text-left">Method</th>
                                                <th className="p-3 text-left">Endpoint</th>
                                                <th className="p-3 text-left">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {project.apiEndpoints.map((ep, i) => (
                                                <tr key={i} className="border-t border-white/5">
                                                    <td className="p-3 font-mono text-cyan-400">
                                                        {ep.method}
                                                    </td>
                                                    <td className="p-3 font-mono text-white/80">
                                                        {ep.endpoint}
                                                    </td>
                                                    <td className="p-3 text-white/60">
                                                        {ep.desc}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="space-y-8">
                        {project.techStack && (
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Layers size={20} className="text-cyan-400" />
                                    Tech Stack
                                </h3>

                                <div className="space-y-6">
                                    {Object.entries(project.techStack)
                                        .filter(([_, v]) => Array.isArray(v) && v.length > 0)
                                        .map(([key, techs]) => (
                                            <div key={key}>
                                                <h4 className="text-sm text-white/50 uppercase mb-3">
                                                    {TECH_LABELS[key] || key}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {techs.map((t) => (
                                                        <span
                                                            key={t}
                                                            className="px-3 py-1.5 text-sm rounded bg-white/10 border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 transition"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
