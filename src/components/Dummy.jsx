"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SpacePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState(null) // null | 'projects' | 'education' | 'experience'

  const quickTabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
  ]

  const sampleData = {
    projects: [
      { title: 'CosmoShop', desc: 'E‑commerce UI for space gear — React, Tailwind, Stripe.' },
      { title: 'StellarMap', desc: 'Interactive star map using canvas & WebGL.' },
    ],
    education: [
      { title: 'B.Tech in AI', desc: 'Newton School of Technology — 2024 — Present' },
    ],
    experience: [
      { title: 'Frontend Intern', desc: 'Built dashboards, improved performance.' },
    ],
  }

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-b from-[#050715] via-[#07122a] to-[#02121b] text-white overflow-x-hidden font-sans">
      {/* Space background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="stars" />
        <div className="stars--slow" />
        <div className="nebula" />
      </div>

      {/* Sticky header */}
      <header className="w-full sticky top-4 z-50">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center justify-center">
            <ul className="flex gap-10 bg-white/4 backdrop-blur-sm rounded-3xl px-6 py-3 shadow-lg items-center">
              {/* Centered 3 items only */}
              <li>
                <a href="#home" onClick={() => setSelected(null)} className="px-3 py-1 text-lg font-semibold rounded-lg hover:bg-white/6 transition">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => setSelected('projects')} className="cursor-pointer px-3 py-1 text-lg font-semibold rounded-lg hover:bg-white/6 transition">
                  Universe
                </a>
              </li>
              <li>
                <a onClick={() => setSelected('education')} className="cursor-pointer px-3 py-1 text-lg font-semibold rounded-lg hover:bg-white/6 transition">
                  Orbit
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        {/* HOME / HERO */}
        <section id="home" className="min-h-[60vh] flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Mayank — I build immersive web experiences</h1>
              <p className="mt-4 text-white/75 max-w-xl">A space‑themed portfolio starter. Use the selector below to preview Projects, Education or Experience without leaving the page.</p>

              <div className="mt-6 flex gap-3">
                <button onClick={() => setSelected('projects')} className="rounded-full px-5 py-2 bg-cyan-500/90 hover:scale-105 transform transition">View Projects</button>
                <a href="#contact" className="rounded-full px-4 py-2 border border-white/10">Contact</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
              {/* Decorative card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/4 to-transparent border border-white/6 shadow-2xl">
                <h3 className="text-xl font-semibold">Quick Preview</h3>
                <p className="text-white/70 mt-2">Pick a category below to load its content inline and reveal the mini-switcher.</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {quickTabs.map((t) => (
                    <button key={t.id} onClick={() => setSelected(t.id)} className="py-2 rounded-lg bg-white/3 hover:bg-white/5 transition">{t.label}</button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Selector area: shows three options; clicking shows content inline */}
        <section aria-label="selector" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickTabs.map((t) => (
              <motion.button
                key={t.id}
                onClick={() => setSelected(t.id)}
                whileHover={{ scale: 1.03 }}
                className={`p-6 rounded-2xl text-left shadow-lg border ${selected === t.id ? 'bg-cyan-600/10 border-cyan-500/30' : 'bg-white/3 border-white/6'} transition`}
              >
                <h4 className="font-semibold text-lg">{t.label}</h4>
                <p className="mt-2 text-white/70">Tap to preview {t.label.toLowerCase()} right here — no page navigation.</p>
              </motion.button>
            ))}
          </div>

          {/* Mini navbar that appears when a selection is active */}
          <AnimatePresence>
            {selected && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="mt-6 sticky top-28 z-40">
                <div className="flex items-center justify-between gap-4 bg-white/4 backdrop-blur-sm rounded-2xl p-3 border border-white/6 shadow-md">
                  <div className="flex gap-2 items-center">
                    {quickTabs.map((t) => (
                      <button key={t.id} onClick={() => setSelected(t.id)} className={`px-3 py-1 rounded-md ${selected === t.id ? 'bg-cyan-500/90 text-black font-semibold' : 'hover:bg-white/6'}`}>
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2 items-center">
                    <button onClick={() => setSelected(null)} className="px-3 py-1 rounded-md border border-white/10">Close</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content area: renders the selected content without navigation */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div key={selected} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="p-6 rounded-2xl bg-white/4 border border-white/6 shadow-lg">
                  <h3 className="text-2xl font-semibold capitalize">{selected}</h3>
                  <div className="mt-4 space-y-4">
                    {sampleData[selected].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-gradient-to-br from-white/3 to-transparent border border-white/5">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-white/70 mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <p className="text-white/70">React · Next.js · TypeScript · Prisma · PostgreSQL · Tailwind · Framer Motion · WebGL</p>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-white/70">Email: <a className="underline" href="mailto:you@example.com">you@example.com</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-white/60">© {new Date().getFullYear()} Mayank — Space theme portfolio</div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        :global(html) { scroll-behavior: smooth; }

        .stars, .stars--slow { position: absolute; inset: 0; background-repeat: repeat; pointer-events: none; }

        .stars {
          background-image: radial-gradient(2px 2px at 10% 20%, rgba(255,255,255,0.9), rgba(255,255,255,0) 30%),
            radial-gradient(1px 1px at 20% 60%, rgba(255,255,255,0.8), rgba(255,255,255,0) 30%);
          background-size: 700px 700px, 400px 400px;
          animation: moveStars 18s linear infinite;
          opacity: 0.9;
          mix-blend-mode: screen;
        }

        .stars--slow {
          background-image: radial-gradient(1px 1px at 30% 30%, rgba(255,255,255,0.6), rgba(255,255,255,0) 30%), radial-gradient(1px 1px at 80% 80%, rgba(255,255,255,0.6), rgba(255,255,255,0) 30%);
          background-size: 1200px 1200px, 900px 900px;
          animation: moveStars 40s linear infinite;
          opacity: 0.5;
          mix-blend-mode: screen;
        }

        @keyframes moveStars {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: -1200px 600px, 800px -600px; }
        }

        .nebula {
          position: absolute; inset: 0; mix-blend-mode: screen; pointer-events: none;
          background: radial-gradient(ellipse at 10% 10%, rgba(56,189,248,0.06), transparent 8%), radial-gradient(ellipse at 85% 70%, rgba(139,92,246,0.05), transparent 12%), radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.03), transparent 8%);
          animation: breathe 10s ease-in-out infinite; opacity: 0.9;
        }

        @keyframes breathe { 0%{ transform: scale(1); } 50%{ transform: scale(1.02);} 100%{ transform: scale(1);} }

      `}</style>
    </div>
  )
}

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'

// export default function SpacePortfolio() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'projects', label: 'Projects' },
//   ]

//   const extraLinks = [
//     { id: 'about', label: 'About' },
//     { id: 'education', label: 'Education' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'contact', label: 'Contact' },
//   ]

//   return (
//     <div className="min-h-screen w-full relative bg-black text-white overflow-x-hidden">
//       {/* Animated space background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="stars" />
//         <div className="stars--slow" />
//         <div className="nebula" />
//       </div>

//       {/* NAVBAR */}
//       <header className="w-full sticky top-0 z-40 backdrop-blur-sm bg-black/40 border-b border-white/5">
//         <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//           <a href="#home" className="flex items-center gap-3 text-xl font-semibold tracking-wide">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg">
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12 2v20M2 12h20" stroke="#001" strokeWidth="1.2" opacity="0.9" />
//               </svg>
//             </div>
//             Mayank
//           </a>

//           <ul className="hidden md:flex gap-8 items-center">
//             {navItems.map((n) => (
//               <li key={n.id}>
//                 <a href={`#${n.id}`} className="hover:text-cyan-300 transition-colors">
//                   {n.label}
//                 </a>
//               </li>
//             ))}

//             {/* Menu button (3rd item) */}
//             <li>
//               <button
//                 onClick={() => setMenuOpen((s) => !s)}
//                 aria-expanded={menuOpen}
//                 className="px-3 py-1 rounded-full border border-white/10 hover:bg-white/5 transition"
//               >
//                 Menu
//               </button>
//             </li>
//           </ul>

//           {/* mobile */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMenuOpen((s) => !s)}
//               aria-label="Toggle menu"
//               className="p-2 rounded-md border border-white/10"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//               </svg>
//             </button>
//           </div>
//         </nav>

//         {/* Floating panel for extra links (desktop & mobile) */}
//         <div className={`max-w-6xl mx-auto px-6 transition-all ${menuOpen ? 'py-4' : 'py-0'} overflow-hidden`}>
//           <div className={`rounded-xl backdrop-blur-md bg-gradient-to-b from-white/3 to-transparent border border-white/5 shadow-lg ${menuOpen ? 'max-h-96 p-4' : 'max-h-0 p-0'}`}>
//             <div className="grid md:grid-cols-3 gap-4">
//               <div>
//                 <h4 className="text-sm text-white/80 mb-2">Explore</h4>
//                 <ul className="flex flex-col gap-2">
//                   {extraLinks.map((l) => (
//                     <li key={l.id}>
//                       <a href={`#${l.id}`} onClick={() => setMenuOpen(false)} className="block py-2 hover:text-cyan-300 transition">{l.label}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-sm text-white/80 mb-2">Quick Actions</h4>
//                 <div className="flex flex-col gap-2">
//                   <a className="py-2 px-3 rounded-md bg-cyan-600/10 hover:bg-cyan-600/20 transition" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
//                   <a className="py-2 px-3 rounded-md border border-white/10 hover:bg-white/5 transition" href="#contact">Contact Me</a>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-sm text-white/80 mb-2">Social</h4>
//                 <div className="flex gap-3 items-center">
//                   <a href="#" aria-label="github" className="hover:text-cyan-300 transition">GitHub</a>
//                   <a href="#" aria-label="linkedin" className="hover:text-cyan-300 transition">LinkedIn</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* MAIN CONTENT */}
//       <main className="max-w-6xl mx-auto px-6 py-16">
//         {/* HOME */}
//         <section id="home" className="min-h-[70vh] flex items-center">
//           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
//             <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">Hi, I’m Mayank —<br /> I build immersive web experiences.</h1>
//             <p className="max-w-2xl text-lg text-white/80">A space-themed portfolio starter with smooth animations, responsive navbar, and sections ready for your content. Scroll down to explore.</p>
//             <div className="flex gap-4 items-center">
//               <a href="#projects" className="inline-block px-5 py-3 rounded-full bg-cyan-500/90 hover:scale-105 transform transition">View Projects</a>
//               <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-full border border-white/10">Resume</a>
//             </div>
//           </motion.div>
//         </section>

//         {/* ABOUT */}
//         <section id="about" className="py-12">
//           <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-4">About</motion.h2>
//           <p className="text-white/80">Write a short intro about yourself here. Keep it friendly and concise — 2–4 short paragraphs or bullets work well.</p>
//         </section>

//         {/* PROJECTS */}
//         <section id="projects" className="py-12">
//           <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-6">Projects</motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Example project cards (replace with your list) */}
//             <article className="p-6 rounded-2xl bg-white/3 border border-white/5">Project 1</article>
//             <article className="p-6 rounded-2xl bg-white/3 border border-white/5">Project 2</article>
//           </div>
//         </section>

//         {/* Education */}
//         <section id="education" className="py-12">
//           <h3 className="text-2xl font-semibold mb-3">Education</h3>
//           <p className="text-white/80">Add your degrees, institutions and years here.</p>
//         </section>

//         {/* Experience */}
//         <section id="experience" className="py-12">
//           <h3 className="text-2xl font-semibold mb-3">Experience</h3>
//           <p className="text-white/80">Short bullets about your roles and technologies.</p>
//         </section>

//         {/* Skills */}
//         <section id="skills" className="py-12">
//           <h3 className="text-2xl font-semibold mb-3">Skills</h3>
//           <p className="text-white/80">List skills e.g. React, TypeScript, Prisma, PostgreSQL, Tailwind, Framer Motion.</p>
//         </section>

//         {/* Contact */}
//         <section id="contact" className="py-12">
//           <h3 className="text-2xl font-semibold mb-3">Contact</h3>
//           <p className="text-white/80">Email: <a href="mailto:you@example.com" className="underline">you@example.com</a></p>
//         </section>
//       </main>

//       {/* FOOTER */}
//       <footer id="footer" className="py-8 border-t border-white/5 mt-12">
//         <div className="max-w-6xl mx-auto px-6 text-center text-white/70">© {new Date().getFullYear()} Mayank — Built with ❤️ · Space theme starter</div>
//       </footer>

//       {/* Styles (styled-jsx used so this file is self-contained) */}
//       <style jsx>{`
//         :global(html) { scroll-behavior: smooth; }

//         .stars, .stars--slow {
//           position: absolute;
//           inset: 0;
//           background-repeat: repeat;
//           pointer-events: none;
//         }

//         /* fast stars */
//         .stars {
//           background-image: radial-gradient(2px 2px at 10% 20%, rgba(255,255,255,0.9), rgba(255,255,255,0) 30%),
//             radial-gradient(1px 1px at 20% 60%, rgba(255,255,255,0.8), rgba(255,255,255,0) 30%),
//             radial-gradient(1.2px 1.2px at 70% 40%, rgba(255,255,255,0.85), rgba(255,255,255,0) 30%);
//           background-size: 600px 600px, 400px 400px, 800px 800px;
//           animation: moveStars 10s linear infinite;
//           opacity: 0.9;
//         }

//         /* slow twinkling stars */
//         .stars--slow {
//           background-image: radial-gradient(1px 1px at 30% 30%, rgba(255,255,255,0.6), rgba(255,255,255,0) 30%),
//             radial-gradient(1px 1px at 80% 80%, rgba(255,255,255,0.6), rgba(255,255,255,0) 30%);
//           background-size: 1200px 1200px, 1000px 1000px;
//           animation: moveStars 30s linear infinite;
//           opacity: 0.6;
//           mix-blend-mode: screen;
//         }

//         @keyframes moveStars {
//           0% { background-position: 0 0, 0 0, 0 0; }
//           100% { background-position: -1000px 500px, -400px -800px, 800px -600px; }
//         }

//         .nebula {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(ellipse at 20% 10%, rgba(56,189,248,0.06), transparent 10%),
//                       radial-gradient(ellipse at 80% 70%, rgba(139,92,246,0.04), transparent 15%);
//           mix-blend-mode: screen;
//           opacity: 0.9;
//           animation: breathe 8s ease-in-out infinite;
//           pointer-events: none;
//         }

//         @keyframes breathe {
//           0% { transform: scale(1); opacity: 0.85 }
//           50% { transform: scale(1.02); opacity: 0.95 }
//           100% { transform: scale(1); opacity: 0.85 }
//         }
//       `}</style>
//     </div>
//   )
// }
