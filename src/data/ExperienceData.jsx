export default function ExperienceData() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Remote Internship",
      desc: "Built dashboards, optimized UI performance, improved accessibility.",
      date: "2023 — Remote",
    },
    {
      role: "Full Stack Developer (Freelance)",
      company: "Self-Employed",
      desc: "Developed responsive web apps using React, Node.js & PostgreSQL.",
      date: "2022 — Present",
    },
  ];

  return (
    <div className="text-white/80 space-y-4">
      {experiences.map((exp) => (
        <div key={exp.role}>
          <p className="font-semibold text-white">{exp.role}</p>
          <p>{exp.company}</p>
          <p className="text-sm text-white/60">{exp.date}</p>
          <p className="text-white/70 text-sm mt-1">{exp.desc}</p>
        </div>
      ))}
    </div>
  );
}
