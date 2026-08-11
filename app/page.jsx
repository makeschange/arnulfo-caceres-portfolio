"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Section imports
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import TechStack from "@/components/sections/tech-stack";
import FeaturedProjects from "@/components/sections/featured-projects";
import Experience from "@/components/sections/experience";
import Process from "@/components/sections/process";
import BuildExpertise from "@/components/sections/build-expertise";
import Testimonials from "@/components/sections/testimonials";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import InteractiveSection from "@/components/ui/interactive-section";

export default function Home() {
  useEffect(() => {
    // Initialize Animate on Scroll (AOS)
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  return (
    <div className="w-full relative bg-[#0B1120] text-slate-100">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Me */}
      <InteractiveSection title="About">
        <About />
      </InteractiveSection>

      {/* 3. Tech Stack */}
      <InteractiveSection title="Tech">
        <TechStack />
      </InteractiveSection>

      {/* 4. Featured Projects */}
      <InteractiveSection title="Projects">
        <FeaturedProjects />
      </InteractiveSection>

      {/* 5. Experience Timeline */}
      <InteractiveSection title="Journey">
        <Experience />
      </InteractiveSection>

      {/* 6. Development Process */}
      <InteractiveSection title="Process">
        <Process />
      </InteractiveSection>

      {/* 7. What I Can Build */}
      <InteractiveSection title="Skills">
        <BuildExpertise />
      </InteractiveSection>

      {/* 9. Testimonials */}
      {/* <InteractiveSection title="Reviews">
        <Testimonials />
      </InteractiveSection> */}

      {/* 10. Certifications */}
      {/* <InteractiveSection title="Certs">
        <Certifications />
      </InteractiveSection> */}

      {/* 11. Contact Section */}
      <InteractiveSection title="Contact">
        <Contact />
      </InteractiveSection>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
