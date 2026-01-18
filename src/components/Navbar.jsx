"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "universe", label: "Universe" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-3xl px-8 py-3">
        <ul className="flex items-center justify-center gap-10 text-white font-medium text-lg">
          {navItems.map((item) => (
            <motion.li key={item.id} className="relative">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-1 transition-colors ${active === item.id ? "text-cyan-400" : "hover:text-cyan-300"
                  }`}
              >
                {item.label}
              </button>

              {active === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        nav {
          backdrop-filter: blur(12px);
        }
      `}</style>
    </motion.nav>
  );
}
