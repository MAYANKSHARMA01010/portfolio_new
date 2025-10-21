"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function HomeSection() {
  const router = useRouter();

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Mobile App Developer",
    "Web Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseTime = 1500;

    const handleTyping = () => {
      const fullText = roles[currentRole];
      setDisplayText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/mayanksharma3369" },
    { icon: <FaGithub />, url: "https://github.com/MAYANKSHARMA01010" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        src="/HomeSectionBG_Video.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl w-full px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white"
        >
          <p className="text-lg mb-2">Hi, Myself</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Mayank Sharma
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
            I am a <span>{displayText}</span>
            <span className="blinking-cursor">|</span>
          </h2>

          <p className="text-white/70 mb-6">
            Passionate about building beautiful and functional web applications
            with modern technologies. I love crafting user experiences that are
            intuitive, engaging, and visually appealing.
          </p>

          <div className="flex items-center gap-4 mb-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-cyan-400 text-2xl transition-transform transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <button
            onClick={() => router.push("/about")}
            className="px-6 py-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 transition-transform transform hover:scale-105 text-black font-semibold shadow-lg"
          >
            Know More About Me
          </button>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="absolute -inset-8 flex justify-center items-center pointer-events-none">
            {[...Array(8)].map((_, idx) => (
              <motion.div
                key={idx}
                className="w-2 h-2 bg-cyan-400 rounded-full opacity-50 absolute"
                initial={{
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                }}
                animate={{
                  x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                  y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="overflow-hidden w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 shadow-lg hover:shadow-cyan-400 transition-all duration-500 z-10">
            <img
              src="/ProfilePhoto.jpeg"
              alt="Mayank Sharma"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 2px;
          background-color: #22d3ee;
          margin-left: 2px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
