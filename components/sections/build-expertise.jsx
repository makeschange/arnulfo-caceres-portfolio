"use client";

import {
  Globe,
  Layers,
  LayoutDashboard,
  Users,
  GraduationCap,
  Cpu,
  Smartphone,
  ShoppingCart,
  Building,
} from "lucide-react";

const expertiseData = [
  {
    title: "Business Websites",
    desc: "Develop responsive company websites and landing pages that effectively showcase services, strengthen brand presence, and provide an excellent user experience across all devices.",
    icon: Globe,
    techs: ["WordPress", "React", "Next.js", "Tailwind CSS"],
  },

  {
    title: "Business Management Systems",
    desc: "Build custom web applications that help businesses manage daily operations, organize workflows, and improve overall productivity through intuitive dashboards and tools.",
    icon: Building,
    techs: ["Laravel", "React", "MySQL", "REST API"],
  },

  {
    title: "Admin Dashboards",
    desc: "Create modern dashboard interfaces with responsive layouts, data tables, charts, filtering, and management tools for administrators and internal teams.",
    icon: LayoutDashboard,
    techs: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },

  {
    title: "AI Web Applications",
    desc: "Develop AI-powered applications by integrating OpenAI APIs to build intelligent chat experiences, automation tools, and business assistants.",
    icon: Cpu,
    techs: ["Laravel", "React", "OpenAI API", "REST API"],
  },

  {
    title: "REST API Development",
    desc: "Build secure RESTful APIs that connect frontend applications with backend services while maintaining clean architecture and scalable code organization.",
    icon: Layers,
    techs: ["Laravel", "PHP", "MySQL", "Postman"],
  },

  {
    title: "Mobile Applications",
    desc: "Build cross-platform mobile applications with React Native and Expo while focusing on responsive layouts, API integration, and smooth user experiences.",
    icon: Smartphone,
    techs: ["React Native", "Expo", "NativeWind", "REST API"],
  },

  {
    title: "API Integration",
    desc: "Integrate third-party APIs to display dynamic content, process data, and create interactive user experiences across web and mobile applications.",
    icon: Users,
    techs: ["Axios", "React Query", "REST API", "JSON"],
  },

  {
    title: "Frontend Development",
    desc: "Build clean, responsive, and accessible user interfaces using modern JavaScript frameworks while following reusable component-based architecture.",
    icon: GraduationCap,
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function BuildExpertise() {
  return (
    <section
      id="expertise-list"
      className="py-24 relative overflow-hidden bg-[#0B1120]"
    >
      {/* Background glowing blobs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Areas of Expertise
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Solutions I Build
          </p>

          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl bg-[#111827]/60 border border-slate-800/80 backdrop-blur-sm shadow-xl hover:border-slate-700/80 hover:bg-[#111827]/90 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-cyan-500/20 transition-all">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/50">
                  {item.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] sm:text-[10px] px-2 py-0.5 bg-slate-950 text-slate-400 rounded border border-slate-850"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Ambient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
