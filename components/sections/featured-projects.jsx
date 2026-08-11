"use client";

import Image from "next/image";
import { Github, ExternalLink, ShieldCheck, Cpu, Code } from "lucide-react";

const projectsData = [
  {
    title: "CyberLearn.AI",
    type: "Professional Client Project",
    description:
      "Contributed to the development of an AI-powered learning platform built with Laravel and React. Worked on implementing frontend interfaces, backend features, REST API integration, and AI-assisted functionality to deliver a responsive and engaging learning experience.",
    thumbnail: "/featured/f-cyberlearn.webp",
    tags: [
      "Laravel",
      "React",
      "TypeScript",
      "MySQL",
      "Tailwind CSS",
      "REST API",
      "OpenAI API",
    ],
    features: [
      "AI-powered learning features",
      "Interactive course and lesson management",
      "Secure authentication and authorization",
      "Responsive student dashboard",
      "REST API integration between Laravel and React",
    ],
    challenges:
      "Contributed to building reusable frontend components and scalable backend features while integrating AI services and maintaining smooth communication between the Laravel backend and React frontend in a collaborative development environment.",
    demo: "https://www.cyberlearn.ai/",
  },

  {
    title: "Delightful Philippines",
    type: "Professional Client Project",
    description:
      "Contributed to the development of a modern headless website using WordPress as the CMS with a Laravel and React frontend. Implemented dynamic content integration through GraphQL to provide a fast, maintainable, and content-driven user experience.",
    thumbnail: "/featured/f-delightful.webp",
    tags: ["Laravel", "React", "WordPress", "GraphQL", "MySQL", "Tailwind CSS"],
    features: [
      "Headless WordPress CMS",
      "GraphQL content integration",
      "Responsive React frontend",
      "Dynamic CMS-driven pages",
      "SEO-friendly architecture",
    ],
    challenges:
      "Worked on integrating GraphQL data into reusable React components while ensuring dynamic content from WordPress rendered efficiently across different sections of the website.",
    demo: "https://www.delightful.ph/",
  },

  {
    title: "Taki E-Commerce Pet Shop",
    type: "Personal Project",
    description:
      "A React-based e-commerce application created to strengthen my frontend development skills. The project demonstrates client-side state management, reusable component architecture, and a responsive shopping experience without relying on a backend.",
    thumbnail: "/featured/f-taki-pet-shop.jpg",
    tags: ["React", "React Router", "React Hooks", "CSS"],
    features: [
      "Browse products",
      "Shopping cart management",
      "Quantity updates",
      "Real-time cart total calculation",
      "Client-side checkout flow",
    ],
    challenges:
      "Implemented cart management and checkout functionality entirely with React state while keeping the application modular, responsive, and easy to maintain without using a backend database.",
    github: "https://github.com/makeschange/Taki-Pet-Store",
    demo: "https://taki-pet-store.vercel.app/",
  },

  {
    title: "Proweaver Website",
    type: "Professional Client Project",
    description:
      "Served as the primary developer for Proweaver's corporate website, building custom WordPress templates, implementing responsive user interfaces, and developing CMS-driven pages for seamless content management.",
    thumbnail: "/featured/f-proweaver.jpg",
    tags: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    features: [
      "Responsive website development",
      "Custom WordPress theme customization",
      "Reusable page templates",
      "Content management through WordPress",
      "Cross-browser compatibility",
    ],
    challenges:
      "Customized WordPress themes and components while maintaining responsive layouts, clean code organization, and consistent user experience across different devices and browsers.",
    demo: "https://www.proweaver.com/",
  },

  {
    title: "TakiMe",
    type: "Personal Project",
    description:
      "An anime discovery web application built with React and TypeScript that consumes a public Anime API. The project focuses on API integration, asynchronous data fetching, responsive UI design, and efficient state management.",
    thumbnail: "/featured/f-takime.jpg",
    tags: [
      "React",
      "TypeScript",
      "React Query",
      "Axios",
      "Vite",
      "Tailwind CSS",
    ],
    features: [
      "Browse trending anime",
      "Search anime titles",
      "View detailed anime information",
      "API caching with React Query",
      "Responsive user interface",
    ],
    challenges:
      "Built an efficient API-driven application by handling asynchronous requests, loading states, caching, and error handling while keeping the codebase modular and reusable through component-based architecture.",
    github: "https://github.com/makeschange/Takime/",
    demo: "https://takime.vercel.app/",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-[#0B1120]"
    >
      {/* Background radial gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            My Work
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Featured Projects Showcase
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                {/* Project Image Container */}
                <div
                  className={`lg:col-span-6 relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-2 overflow-hidden group shadow-2xl ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="object-cover w-full h-full transform group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs border border-slate-800 rounded-lg transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            Codebase
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Badge & Title */}
                  <div className="flex items-center gap-2 mb-3 text-cyan-400 font-semibold text-xs tracking-wider uppercase">
                    <Cpu className="w-3.5 h-3.5" />
                    Project #{index + 1}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs px-3 py-1 bg-slate-900/80 text-slate-300 border border-slate-800/80 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-blue-400" /> Key Features
                    </h4>
                    <ul className="text-xs text-slate-400 space-y-1 pl-6 list-disc">
                      {project.features.map((feat) => (
                        <li key={feat}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges Solved */}
                  <div className="mb-6 p-4 rounded-xl bg-blue-950/20 border border-blue-500/10 backdrop-blur-sm">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />{" "}
                      Challenge Solved
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      {project.challenges}
                    </p>
                  </div>

                  {/* Action Buttons (visible always for touch support) */}
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-black text-xs font-semibold uppercase tracking-wider rounded-xl hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      Live Demo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                      >
                        Source Code
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
