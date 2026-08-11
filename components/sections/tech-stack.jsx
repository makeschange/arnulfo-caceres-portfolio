"use client";

import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiExpo,
  SiRedux,
  SiGit,
  SiVite,
  SiPostman,
  SiWordpress,
} from "react-icons/si";
import {
  Code,
  Server,
  Database,
  Smartphone,
  Layers,
  Wrench,
} from "lucide-react";

// Categorized Skills Data
const skillCategories = [
  { id: "all", name: "All Skills", icon: null },
  { id: "frontend", name: "Frontend", icon: Code },
  { id: "backend", name: "Backend", icon: Server },
  { id: "database", name: "Database", icon: Database },
  { id: "mobile", name: "Mobile Dev", icon: Smartphone },
  { id: "state", name: "State Mgmt", icon: Layers },
  { id: "tools", name: "Tools & DevOps", icon: Wrench },
];

const skillsData = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    level: "95%",
    icon: SiReact,
    color: "text-[#61DAFB]",
  },
  {
    name: "WordPress",
    category: "frontend",
    level: "90%",
    icon: SiWordpress,
    color: "text-[#21759B]",
  },
  {
    name: "Next.js",
    category: "frontend",
    level: "92%",
    icon: SiNextdotjs,
    color: "text-white",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "90%",
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "95%",
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
  },
  {
    name: "Shadcn UI",
    category: "frontend",
    level: "90%",
    icon: SiReact,
    color: "text-white",
  },

  {
    name: "Inertia.js",
    category: "frontend",
    level: "88%",
    icon: SiReact,
    color: "text-cyan-400",
  },

  // Backend
  {
    name: "Laravel",
    category: "backend",
    level: "95%",
    icon: SiLaravel,
    color: "text-[#FF2E21]",
  },
  {
    name: "PHP",
    category: "backend",
    level: "92%",
    icon: SiPhp,
    color: "text-[#777BB4]",
  },
  {
    name: "REST API",
    category: "backend",
    level: "92%",
    icon: Server,
    color: "text-cyan-400",
  },
  {
    name: "OpenAI API",
    category: "backend",
    level: "85%",
    icon: Code,
    color: "text-emerald-400",
  },
  {
    name: "Eloquent ORM",
    category: "backend",
    level: "92%",
    icon: Database,
    color: "text-orange-400",
  },

  // Database
  {
    name: "MySQL",
    category: "database",
    level: "93%",
    icon: SiMysql,
    color: "text-[#4479A1]",
  },

  // Mobile
  {
    name: "React Native",
    category: "mobile",
    level: "85%",
    icon: SiReact,
    color: "text-[#61DAFB]",
  },
  {
    name: "Expo",
    category: "mobile",
    level: "85%",
    icon: SiExpo,
    color: "text-white",
  },
  {
    name: "Expo Router",
    category: "mobile",
    level: "82%",
    icon: SiExpo,
    color: "text-cyan-300",
  },
  {
    name: "NativeWind",
    category: "mobile",
    level: "85%",
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
  },

  // State Management
  {
    name: "Zustand",
    category: "state",
    level: "90%",
    icon: SiReact,
    color: "text-cyan-300",
  },
  {
    name: "Redux",
    category: "state",
    level: "80%",
    icon: SiRedux,
    color: "text-[#764ABC]",
  },
  {
    name: "React Query",
    category: "state",
    level: "88%",
    icon: SiReact,
    color: "text-[#FF4154]",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    level: "92%",
    icon: SiGit,
    color: "text-[#F05032]",
  },
  {
    name: "Vite",
    category: "tools",
    level: "90%",
    icon: SiVite,
    color: "text-[#646CFF]",
  },
  {
    name: "Postman",
    category: "tools",
    level: "90%",
    icon: SiPostman,
    color: "text-[#FF6C37]",
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Background gradients */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Tech Stack
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Technologies & Tools I Dominate
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8" />
        </div>

        {/* Filter Navigation */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          data-aos="fade-up"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 border-transparent text-black font-bold shadow-lg shadow-cyan-500/10 scale-105"
                    : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5"
          data-aos="fade-up"
        >
          {filteredSkills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="group relative p-5 rounded-2xl bg-[#111827]/60 border border-slate-800/80 backdrop-blur-sm shadow-md hover:border-slate-700 hover:bg-[#111827]/90 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Tech Icon and Name */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`p-3 rounded-xl bg-slate-900 border border-slate-800 mb-4 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}
                  >
                    <SkillIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-medium text-sm mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>

                {/* Ambient glow inside card on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
