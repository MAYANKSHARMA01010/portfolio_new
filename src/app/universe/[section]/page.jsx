"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import EducationData from "../../../data/EducationData";
import SkillsData from "../../../data/SkillsData";
import ProjectsData from "../../../data/ProjectsData";
import ExperienceData from "../../../data/ExperienceData";

const sections = {
    education: {
        title: "Education",
        component: <EducationData />,
        description: "My academic journey and qualifications.",
    },
    skills: {
        title: "Skills",
        component: <SkillsData />,
        description: "Technologies and tools I work with.",
    },
    projects: {
        title: "Projects",
        component: <ProjectsData />,
        description: "Showcase of my recent work and experiments.",
    },
    experience: {
        title: "Experience",
        component: <ExperienceData />,
        description: "My professional career and internships.",
    },
};

export default function SectionPage() {
    const { section: sectionKey } = useParams();
    const section = sections[sectionKey];

    if (!section) {
        return notFound();
    }

    return (
        <div className="w-full pb-20">
            <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {section.title}
                </h2>
                <p className="text-white/60 text-lg">{section.description}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
                {section.component}
            </div>
        </div>
    );
}
