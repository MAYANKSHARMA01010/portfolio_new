import React from "react";

export default function UniverseMiniNavbar({ sections, active, setActive }) {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mb-8">
      <div className="flex gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-white/10 shadow-md">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              active === s.id
                ? "bg-cyan-500/90 text-black font-semibold"
                : "hover:bg-white/10 text-white/80"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <button
        onClick={() => setActive(null)}
        className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition"
      >
        ✕ Close
      </button>
    </div>
  );
}
