"use client";

import {
  Award,
  Briefcase,
  GraduationCap,
  Calendar,
  Zap,
  Shield,
  CheckCircle,
} from "lucide-react";

const milestones = [
  {
    year: "2024 - Present",
    title: "Full-Stack Web Developer",
    company: "Building Scalable Digital Solutions",
    description:
      "Developing full-stack web and mobile applications using Laravel, React, Next.js, and React Native. Building AI-powered solutions, REST APIs and internal systems with a strong focus on clean architecture, performance, and user experience.",
    icon: Award,
    color: "from-blue-500 to-cyan-400",
  },
  {
    year: "2022 - 2024",
    title: "Lead Front-End Developer",
    company: "Creating Modern User Experiences",
    description:
      "Led front-end development for responsive web applications, collaborated closely with designers and backend developers, established reusable component libraries, improved application performance, and delivered intuitive user interfaces.",
    icon: Briefcase,
    color: "from-violet-500 to-fuchsia-400",
  },
  {
    year: "2020 - 2022",
    title: "Front-End Web Developer",
    company: "Starting My Development Journey",
    description:
      "Built responsive websites and interactive user interfaces while strengthening skills in HTML, CSS, JavaScript, React, and modern frontend development. Gained hands-on experience collaborating with teams and delivering production-ready projects.",
    icon: Calendar,
    color: "from-emerald-500 to-teal-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Light glow overlay */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Turning Ideas Into Fast, Reliable & Scalable Web Applications
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Panel: Summary and Focus */}
          <div className="lg:col-span-6 space-y-8" data-aos="fade-right">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                How I Build
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I&apos;m a Full-Stack Web Developer with over four years of
                experience building modern web and mobile applications from
                concept to deployment. I enjoy working across the entire
                development stack using technologies like Laravel, React,
                Next.js, Vue, and React Native to create applications that are
                fast, scalable, and easy to maintain.
                <br />
                <br />I believe successful development starts with understanding
                the business problem before writing code. That&apos;s why I
                focus on clean architecture, performance optimization, intuitive
                user experiences, and building solutions that continue to
                deliver value as businesses grow.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3 hover:border-blue-500/30 transition-all duration-300">
                <Zap className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">
                    High Performance
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Fast, responsive applications with optimized APIs, efficient
                    queries, and smooth user experiences.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3 hover:border-cyan-500/30 transition-all duration-300">
                <Shield className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Clean Architecture
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Maintainable codebases built with reusable components,
                    scalable architecture, and industry best practices.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3 hover:border-violet-500/30 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Business Alignment
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Developing solutions that solve real business challenges
                    instead of simply implementing features.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3 hover:border-emerald-500/30 transition-all duration-300">
                <GraduationCap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Continuous Learning
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Continuously exploring modern technologies, AI tools, cloud
                    services, and evolving web frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Journey Timeline */}
          <div className="lg:col-span-6" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-white mb-8 pl-4">
              My Experience
            </h3>

            <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
              {milestones.map((milestone, idx) => {
                const IconComponent = milestone.icon;
                return (
                  <div key={idx} className="relative group">
                    {/* Dot on Timeline */}
                    <div className="absolute -left-[45px] top-1 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-300">
                        <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Timeline Card */}
                    <div className="p-5 rounded-2xl bg-[#111827]/80 border border-slate-800/80 shadow-lg hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                          {milestone.year}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                          {milestone.company}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
