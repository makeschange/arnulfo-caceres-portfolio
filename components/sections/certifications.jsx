"use client";

import { Award, Cloud, Code, Server, ShieldCheck } from "lucide-react";

const certificationsData = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "Sep 2024",
    credentialId: "AWS-DEV-98371",
    focus: "Cloud deployment, serverless architectures (Lambda, API Gateway), secure storage (S3, DynamoDB), and CI/CD pipelines.",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    date: "May 2022",
    credentialId: "META-FED-88273",
    focus: "Advanced React concepts, state management, design architectures, responsive layouts, web security, and Jest unit tests.",
    icon: Code,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Laravel Certified Developer",
    issuer: "Laravel Certification Board",
    date: "Dec 2023",
    credentialId: "LAR-ADV-47264",
    focus: "E-commerce APIs, database schema optimizations, queues, background jobs, caching policies, and PHP/Laravel security.",
    icon: Server,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Google Cloud Certified – Associate Cloud Engineer",
    issuer: "Google Cloud (GCP)",
    date: "Jan 2025",
    credentialId: "GCP-ACE-30291",
    focus: "Docker containers deployment, Kubernetes (GKE), Google Cloud SQL management, network security (IAM), and shell scripting.",
    icon: ShieldCheck,
    color: "from-cyan-505 to-blue-500"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">Qualifications</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Certifications & Training
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="group relative p-6 rounded-2xl bg-[#111827]/60 border border-slate-800/80 backdrop-blur-sm shadow-xl hover:border-slate-700/80 hover:bg-[#111827]/90 transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Header info */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-snug group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-sm font-semibold text-slate-450 mt-1">
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                {/* Focus description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {cert.focus}
                </p>

                {/* Footer Details */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/50">
                  <div className="text-xs text-slate-500 font-semibold font-mono uppercase">
                    ID: <span className="text-slate-400">{cert.credentialId}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase">
                    <span>Issued:</span>
                    <span className="text-cyan-400">{cert.date}</span>
                  </div>
                </div>

                {/* Action arrow verify button */}
                <a
                  href="https://verify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 top-4 w-7 h-7 rounded-full bg-slate-900 border border-slate-850 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 hover:bg-slate-800 transition-all"
                  title="Verify Certificate"
                >
                  <Award className="w-4 h-4 text-cyan-400" />
                </a>

                {/* Ambient hover glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
