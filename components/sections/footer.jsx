"use client";

import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#0B1120] border-t border-slate-900/80 py-12 relative overflow-hidden">
      {/* Light glow detail */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full bg-blue-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group font-semibold text-lg text-white mb-2"
            >
              <span className="font-medium tracking-wide">Arnulfo Caceres</span>
            </a>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Design & Development with focus on performance, clean code, and
              business success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a
              href="#tech"
              onClick={(e) => handleNavClick(e, "#tech")}
              className="hover:text-cyan-400 transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "#experience")}
              className="hover:text-cyan-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Socials & Top Scroll */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/arnulfo-caceres-01218122a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-450 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/makeschange"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-450 hover:text-white hover:border-slate-700 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:arnulfocaceres07@gmail.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-450 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top */}
            <button
              onClick={handleScrollToTop}
              className="w-9 h-9 rounded-full bg-slate-700 border border-slate-850 flex items-center justify-center text-slate-450 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-slate-600 font-semibold tracking-wide uppercase">
            © {currentYear} Arnulfo Caceres. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-600 font-semibold uppercase tracking-wider">
            Built with Next.js, Tailwind CSS & Framer Motion guidelines
          </p>
        </div>
      </div>
    </footer>
  );
}
