import Banner from "@/components/layout/banner";
import ContactUs from "@/components/layout/contact-us";
import Faq from "@/components/layout/faq";
import FeaturedProjects from "@/components/layout/featured-projects";
import TechStack from "@/components/layout/tech-stack";

export default function Home() {
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
