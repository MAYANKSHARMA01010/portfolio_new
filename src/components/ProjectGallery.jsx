"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function ProjectGallery({ media }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);
    const timeoutRef = useRef(null);

    const currentMedia = media[currentIndex];
    const isVideo = currentMedia.type === "video";

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % media.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (!isPlaying) return;

        if (!isVideo) {
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, 2000);
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, isPlaying, isVideo]);

    useEffect(() => {
        if (isVideo && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }
    }, [currentIndex, isVideo]);

    const handleVideoEnded = () => {
        if (isPlaying) {
            nextSlide();
        }
    };

    const handleMouseEnter = () => setIsPlaying(false);
    const handleMouseLeave = () => setIsPlaying(true);

    return (
        <div
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)] group bg-black"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                    {isVideo ? (
                        <video
                            ref={videoRef}
                            src={currentMedia.src}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnded}
                            controls={false}
                        />
                    ) : (
                        <div className="relative w-full h-full">
                            <Image
                                src={currentMedia.src}
                                alt={currentMedia.title || "Project visual"}
                                fill
                                className="object-cover"
                                priority={currentIndex === 0}
                            />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={currentIndex}
                    className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full"
                >
                    <span className="text-sm font-medium text-white/90">
                        {currentMedia.title}
                    </span>
                </motion.div>
            </div>

            {media.length > 1 && (
                <>
                    <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-cyan-500/20 text-white/70 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/50 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-20"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-cyan-500/20 text-white/70 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/50 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-20"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                        {media.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? "w-8 bg-cyan-500 shadow-[0_0_8px_#22d3ee]"
                                    : "w-2 bg-white/30 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
