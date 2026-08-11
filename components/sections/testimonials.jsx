"use client";

import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    quote: "Arnulfo is an exceptional developer who combines technical brilliance with high business intelligence. He re-architected our core CRM system, which improved page loading speeds by 40% and saved our team hours of manual work every single week.",
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "Apex Digital Solutions",
    rating: 5,
    initials: "SJ",
    color: "from-blue-600 to-cyan-500"
  },
  {
    quote: "Working with Arnulfo has been an absolute pleasure. He has an incredible eye for detail and interactive animations. He translates complex Figma wireframes into perfect, high-performance web pages. His command over React is top-notch.",
    name: "David Miller",
    role: "Lead UI/UX Designer",
    company: "Proweaver",
    rating: 5,
    initials: "DM",
    color: "from-violet-600 to-fuchsia-500"
  },
  {
    quote: "Arnulfo built our multi-vendor pet shop platform from scratch. His database designs are robust, and his Stripe integration works flawlessly. Thanks to his page optimizations, our mobile checkout conversions increased by 18%.",
    name: "Michael Chen",
    role: "Founder",
    company: "Taki Pet Shop",
    rating: 5,
    initials: "MC",
    color: "from-emerald-600 to-teal-500"
  },
  {
    quote: "Arnulfo is a self-driven developer who delivers high-quality code on time. He has a deep focus on clean architecture and took full ownership of our internal scheduling database, resolving complex synchronization bugs with ease.",
    name: "Jessica Taylor",
    role: "Operations Director",
    company: "Innovatech Labs",
    rating: 5,
    initials: "JT",
    color: "from-red-600 to-orange-500"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">Testimonials</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Colleague & Client Feedback
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto px-4 sm:px-10" data-aos="fade-up">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {testimonialsData.map((t, idx) => (
                <CarouselItem key={idx}>
                  <div className="p-8 sm:p-10 rounded-2xl bg-[#111827]/70 border border-slate-800/80 backdrop-blur-md shadow-2xl relative">
                    
                    {/* Quotation icon */}
                    <div className="absolute right-8 top-8 opacity-10">
                      <Quote className="w-16 h-16 text-cyan-400" />
                    </div>

                    {/* Star ratings */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <blockquote className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* User profile */}
                    <div className="flex items-center gap-4">
                      {/* Avatar initials with gradient */}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.color} flex items-center justify-center font-bold text-black text-sm uppercase shadow-lg`}>
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm sm:text-base">
                          {t.name}
                        </h4>
                        <p className="text-slate-500 text-xs mt-0.5">
                          {t.role} @ <span className="text-slate-400">{t.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation buttons at the sides (absolute positioned) */}
            <div className="flex justify-end gap-3 mt-6">
              <CarouselPrevious className="static h-10 w-10 border-slate-800 hover:border-cyan-400 bg-slate-900/60 text-slate-400 hover:text-white" />
              <CarouselNext className="static h-10 w-10 border-slate-800 hover:border-cyan-400 bg-slate-900/60 text-slate-400 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
