"use client";

import {
  Search,
  Map,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    phase: "Discovery",
    desc: "Understand the project goals, gather requirements, identify user needs, and define the best technical approach before development begins.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/10",
  },
  {
    step: "02",
    phase: "Planning",
    desc: "Plan the application structure, user flows, database relationships, API endpoints, and overall project architecture.",
    icon: Map,
    color: "from-cyan-500 to-teal-500",
    shadow: "shadow-cyan-500/10",
  },
  {
    step: "03",
    phase: "UI Development",
    desc: "Build responsive and user-friendly interfaces using React, Next.js, Tailwind CSS, and modern component-based development practices.",
    icon: Palette,
    color: "from-violet-500 to-indigo-500",
    shadow: "shadow-violet-500/10",
  },
  {
    step: "04",
    phase: "Full-Stack Development",
    desc: "Develop frontend and backend features, integrate REST APIs, manage databases, and build scalable business logic using Laravel and modern JavaScript frameworks.",
    icon: Code2,
    color: "from-purple-500 to-fuchsia-500",
    shadow: "shadow-purple-500/10",
  },
  {
    step: "05",
    phase: "Testing",
    desc: "Test application functionality, verify responsiveness across devices, fix bugs, and ensure a smooth user experience before deployment.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-green-500",
    shadow: "shadow-emerald-500/10",
  },
  {
    step: "06",
    phase: "Deployment",
    desc: "Deploy applications, configure production environments, optimize performance, and ensure everything runs reliably for end users.",
    icon: Rocket,
    color: "from-red-500 to-orange-500",
    shadow: "shadow-red-500/10",
  },
  {
    step: "07",
    phase: "Continuous Improvement",
    desc: "Monitor application performance, implement new features, resolve issues, and continuously improve the product based on user feedback.",
    icon: Wrench,
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/10",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden bg-[#0B1120]"
    >
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Workflow
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            From Idea to Deployment
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
        </div>

        {/* Vertical and Horizontal flow indicators on large screens */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className="relative group p-6 rounded-2xl bg-[#111827]/60 border border-slate-800/80 backdrop-blur-sm shadow-xl hover:border-slate-700/80 hover:bg-[#111827]/90 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                {/* Connecting arrow indicator for flow (except last) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-slate-800 pointer-events-none">
                    <span className="text-lg">→</span>
                  </div>
                )}

                {/* Header: Step and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-80`}
                  >
                    {step.step}
                  </span>
                  <div
                    className={`p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.phase}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>

                {/* Corner ambient accent glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
