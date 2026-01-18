"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function UniverseLayout({ children }) {
    const pathname = usePathname();

    const navItems = [
        { id: "education", label: "Education" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
    ];

    return (
        <div className="relative w-full min-h-screen bg-black text-white">
            {/* Background Video */}
            <div className="fixed inset-0 z-0">
                <video
                    src="/HomeSectionBG_Video.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 flex flex-col h-screen">
                {/* Navbar */}
                <header className="flex-none p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 bg-black/20 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <ArrowLeft className="w-6 h-6 text-cyan-400" />
                        </Link>
                        <h1 className="text-2xl md:text-3xl font-bold">
                            My <span className="text-cyan-400">Universe</span>
                        </h1>
                    </div>

                    <nav className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10">
                        {navItems.map((item) => {
                            const isActive = pathname.includes(`/universe/${item.id}`);
                            return (
                                <Link
                                    key={item.id}
                                    href={`/universe/${item.id}`}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${isActive
                                            ? "bg-cyan-500 text-black font-bold"
                                            : "text-white/70 hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-12">
                    <div className="max-w-7xl mx-auto w-full">{children}</div>
                </main>
            </div>
        </div>
    );
}
