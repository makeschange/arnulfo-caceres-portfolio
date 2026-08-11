"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Download, Terminal, Code2, Sparkles } from "lucide-react";
import Typed from "typed.js";

export default function Hero() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Full-Stack Web Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1120]"
    >
      {/* Premium Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Glowing Ambient Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] animate-pulse duration-4000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & CTAs */}
        <div
          className="lg:col-span-7 flex flex-col items-start text-left"
          data-aos="fade-right"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Open for Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
            {"Hi, I'm"}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Arnulfo Caceres
            </span>
          </h1>

          {/* Typing Title */}
          <div className=" text-2xl sm:text-3xl font-semibold text-slate-300 mb-4 leading-tight">
            I am a{" "}
            <span
              ref={typedEl}
              className="text-cyan-400 underline decoration-cyan-500/30"
            />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
            Experienced Web Developer with over 4 years of building and
            maintaining responsive, user-focused web applications. Passionate
            about creating clean, scalable, and efficient solutions while
            continuously learning new technologies. Seeking opportunities to
            contribute to innovative projects and collaborate with a team that
            values quality, growth, and continuous improvement.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="group relative inline-flex items-center w-full justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wider text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/pdf/Arnulfo-Caceres.pdf"
              download="Arnulfo_Caceres_Resume.pdf"
              className="inline-flex items-center justify-center w-full gap-2 px-6 py-3.5 text-sm font-semibold tracking-wider text-slate-300 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Short Stats Info */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-8 border-t border-slate-800/80 w-full max-w-md">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                4+
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                Years Exp.
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                10+
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                Projects Done
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                99%
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                Client Satis.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Code/Hacker Visual Illustration */}
        <div
          className="lg:col-span-5 relative w-full flex justify-center"
          data-aos="fade-left"
        >
          {/* Main Visual container */}
          <div className="relative w-full max-w-md aspect-square lg:aspect-auto rounded-2xl border border-slate-800/80 bg-[#111827]/70 backdrop-blur-xl p-5 shadow-2xl overflow-hidden group">
            {/* Top Bar for Code Window */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Terminal className="w-3 h-3 text-cyan-400" />
                developer.js
              </div>
              <div className="w-10" />
            </div>

            {/* Code Content */}
            <div className="font-mono text-xs sm:text-sm text-slate-400 space-y-2 select-none overflow-y-auto  scrollbar-thin scrollbar-thumb-slate-800">
              <p className="text-slate-500">
                {"// Personal developer profile configuration"}
              </p>
              <p>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = &#123;
              </p>
              <p className="pl-4">
                name:{" "}
                <span className="text-emerald-400">
                  &quot;Arnulfo Caceres&quot;
                </span>
                ,
              </p>
              <p className="pl-4">
                role:{" "}
                <span className="text-emerald-400">
                  &quot;Full-Stack Developer&quot;
                </span>
                ,
              </p>
              <p className="pl-4">
                experience:{" "}
                <span className="text-orange-400">&quot;4+ Years&quot;</span>,
              </p>
              <p className="pl-4">coreStack: [</p>
              <p className="pl-8">
                <span className="text-emerald-400">
                  &quot;React/Next.js&quot;
                </span>
                ,{" "}
                <span className="text-emerald-400">&quot;TypeScript&quot;</span>
                ,
              </p>
              <p className="pl-8">
                <span className="text-emerald-400">&quot;Laravel&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;MySQL&quot;</span>,
              </p>
              <p className="pl-8">
                <span className="text-emerald-400">&quot;WordPress&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;Git&quot;</span>
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                philosophy:{" "}
                <span className="text-emerald-400">
                  &quot;Clean architecture &amp; high performance&quot;
                </span>
                ,
              </p>
              <p className="pl-4">
                hardWorker: <span className="text-pink-400">true</span>,
              </p>
            </div>

            {/* Glowing developer vector in the corner or as backdrop */}
            <div className="absolute right-4 bottom-4 w-28 h-28 opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-500 pointer-events-none">
              <Code2 className="w-full h-full text-cyan-400" />
            </div>

            {/* Glow Border Overlay */}
            <div className="absolute inset-0 border border-transparent group-hover:border-cyan-500/20 rounded-2xl pointer-events-none transition-all duration-500" />
          </div>

          {/* Underlay glow shadow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-5 blur-xl group-hover:opacity-10 transition duration-1000 -z-10" />
        </div>
      </div>
    </section>
  );
}
