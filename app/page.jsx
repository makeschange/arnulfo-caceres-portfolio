"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "@/components/layout/banner";
import ContactUs from "@/components/layout/contact-us";
import Faq from "@/components/layout/faq";
import FeaturedProjects from "@/components/layout/featured-projects";
import TechStack from "@/components/layout/tech-stack";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);
  return (
    <>
      <Banner />
      <FeaturedProjects />
      <TechStack />
      <Faq />
      <ContactUs />
    </>
  );
}
