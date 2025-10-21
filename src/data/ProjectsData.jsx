export default function ProjectsData() {
  const projects = [
    {
      title: "CosmoShop",
      desc: "E-commerce UI for space gear — React, Tailwind, Stripe.",
    },
    {
      title: "StellarMap",
      desc: "Interactive star map built with WebGL and Canvas.",
    },
    {
      title: "Portfolio Galaxy",
      desc: "Animated portfolio built with Next.js & Framer Motion.",
    },
    {
      title: "AI TaskFlow",
      desc: "AI-powered productivity manager using Node.js & Prisma.",
    },
  ];

  return (
    <div className="space-y-4 text-white/80">
      {projects.map((proj) => (
        <div key={proj.title}>
          <h4 className="font-semibold text-white">{proj.title}</h4>
          <p className="text-sm text-white/70">{proj.desc}</p>
        </div>
      ))}
    </div>
  );
}
