import React from "react";

const skills = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Prisma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Zoho", img: "https://static.cdnlogo.com/logos/z/58/zoho.svg" },
  { name: "Strapi", img: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg" },
  { name: "Shiprocket", img: "https://cdn.brandfetch.io/shiprocket.in/w/512" },
  { name: "Data Structures", img: "https://img.icons8.com/fluency/96/data-configuration.png" },
  { name: "Algorithms", img: "https://api.iconify.design/flat-color-icons:flow-chart.svg" },
  { name: "OOPs", img: "https://img.icons8.com/fluency/96/class.png" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Expo", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
];

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
