"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Download,
  Send,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate server request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    toast({
      title: "Message Sent Successfully!",
      description:
        "Thank you for reaching out, Arnulfo will get back to you shortly.",
      variant: "default",
    });

    reset();
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-[#0B1120]"
    >
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {"Let's Start A Project Together"}
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
        </div>

        {/* Contact Layout Grid */}
        <div>
          <div className="w-full lg:w-3/4 mx-auto space-y-8">
            <p className="text-slate-405 text-sm sm:text-base leading-relaxed text-center lg:w-3/4 w-full mx-auto">
              Have an idea for a web platform, a mobile application, or simply
              want to chat about code? Feel free to send a message. I usually
              reply within 24 hours.
            </p>

            <div className="grid grid-cols-2">
              {/* List items */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/20 transition-all">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      Email Me
                    </div>
                    <a
                      href="mailto:arnulfocaceres07@gmail.com"
                      className="text-white hover:text-cyan-400 transition-colors text-sm sm:text-base"
                    >
                      arnulfocaceres07@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      Based In
                    </div>
                    <span className="text-slate-300 text-sm sm:text-base">
                      Cebu, Philippines
                    </span>
                  </div>
                </div>
              </div>

              {/* Socials & Resume Link */}
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">
                  Social Accounts & Resume
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="https://www.linkedin.com/in/arnulfo-caceres-01218122a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-850 hover:bg-slate-800 hover:text-white text-xs font-semibold rounded-lg text-slate-400 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/makeschange"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-850 hover:bg-slate-800 hover:text-white text-xs font-semibold rounded-lg text-slate-400 transition-all"
                  >
                    <Github className="w-4 h-4 text-white" />
                    GitHub
                  </a>
                  <a
                    href="/pdf/Arnulfo-Caceres.pdf"
                    download="Arnulfo_Caceres_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 hover:text-white text-xs font-semibold rounded-lg text-cyan-400 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Get Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
