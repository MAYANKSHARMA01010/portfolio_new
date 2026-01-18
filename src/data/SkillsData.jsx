import React from "react";
import { skills } from "../lib/allSkillData";
import Image from "next/image";

const SkillsData = React.memo(() => {
  return (
    <div className="w-full h-full overflow-y-auto pr-2 custom-scrollbar">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 hover:border-cyan-500/30"
          >
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center p-2 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
              <Image
                src={skill.img}
                alt={skill.name}
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>
            <p className="text-white/70 font-medium text-sm text-center group-hover:text-white transition-colors">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

SkillsData.displayName = "SkillsData";

export default SkillsData;
