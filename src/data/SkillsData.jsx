import React from "react";

const skills = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Prisma", img: "/prisma_orm.webp" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Zoho", img: "/zoho_img.webp" },
  { name: "Strapi", img: "/strapi_img.webp" },
  { name: "Shiprocket", img: "/Shiprocket_img.webp" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "NumPy", img: "/numpy_img.webp" },
  { name: "Pandas", img: "/pandas_img.webp" },
  { name: "DSA", img: "/dsa_img.webp" },
  { name: "Tailwind CSS", img: "/tailwind-css_img.webp" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Expo", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
];

export default function SkillsData() {
  return (
    <div className="w-full h-full overflow-y-auto pr-2 custom-scrollbar">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 hover:border-cyan-500/30"
          >
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center p-2 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-full h-full object-contain"
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
}
