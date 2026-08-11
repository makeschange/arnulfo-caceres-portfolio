"use client";

import { Calendar, Briefcase, ChevronRight, Award } from "lucide-react";

const experienceData = [
  {
    company: "Proweaver, Inc.",
    position: "Full-Stack Web Developer",
    duration: "2024 - Present",
    responsibilities:
      "Develop and maintain modern full-stack web applications using Laravel, React, Next.js, and TypeScript. Build RESTful APIs, business management systems, AI-powered features, and responsive user interfaces while focusing on performance, scalability, and maintainable code.",

    technologies: [
      "Laravel",
      "React",
      "Next.js",
      "TypeScript",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "WordPress",
      "REST API",
    ],

    achievements: [
      "Developed and maintained scalable business applications used for daily operations.",
      "Designed reusable frontend components to improve development efficiency and consistency.",
      "Collaborated with designers, QA specialist, and backend developers to deliver production-ready features.",
    ],
  },

  {
    company: "Proweaver, Inc.",
    position: "Lead Front-End Developer",
    duration: "2022 - 2024",
    responsibilities:
      "Led frontend development across multiple projects, transforming UI/UX designs into responsive, accessible, and high-performing web applications while ensuring code quality and consistency across the team.",

    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "HTML5",
      "CSS3",
    ],

    achievements: [
      "Led frontend implementation for multiple client websites and business applications.",
      "Built reusable UI components to improve consistency and reduce development time.",
      "Worked closely with designers to deliver responsive, pixel-perfect user interfaces.",
    ],
  },

  {
    company: "Proweaver, Inc.",
    position: "Front-End Web Developer",
    duration: "2020 - 2022",
    responsibilities:
      "Started my professional career developing responsive websites and custom WordPress projects while strengthening my skills in JavaScript, React, responsive design, and modern frontend development.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "WordPress",
      "PHP",
      "Git",
    ],

    achievements: [
      "Developed responsive websites from Figma and Adobe XD designs.",
      "Customized WordPress themes and implemented client-requested functionality.",
      "Built a strong foundation in frontend development and collaborative workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-[#0B1120]"
    >
      {/* Glow overlay */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            My Experience
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Professional Experience
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-slate-800 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-16">
          {experienceData.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className="relative group"
              data-aos="fade-up"
            >
              {/* Timeline marker icon */}
              <div className="absolute -left-[43px] sm:-left-[59px] top-1 flex items-center justify-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-slate-950 transition-all duration-300">
                  <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111827]/60 border border-slate-800/80 backdrop-blur-sm shadow-xl hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.position}
                    </h3>
                    <div className="text-sm font-semibold text-slate-400 mt-1">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-850 rounded-full text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {exp.duration}
                  </div>
                </div>

                {/* Role description */}
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.responsibilities}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-350 flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-cyan-400" /> Key Achievements
                  </h4>
                  <ul className="space-y-2.5 pl-1.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li
                        key={aIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 leading-relaxed"
                      >
                        <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2.5">
                    Technologies Employed
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-xs px-3 py-1 bg-slate-950 text-slate-400 border border-slate-800 rounded-full font-medium transition-colors hover:text-white hover:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
