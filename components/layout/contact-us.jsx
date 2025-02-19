import React from "react";
import ContactForm from "../contact/contact-form";
import SocialIcons from "./social-icons";
import { Separator } from "@/components/ui/separator";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Footer from "./footer";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="bg-bg-net bg-[center_bottom_-3rem] w-full h-full bg-cover px-4 pt-24 pb-8 border-dotted border-t border-t-emerald-800"
    >
      <div className="wrapper">
        <h2
          data-aos="zoom-in"
          className="text-stroke-green relative text-center text-7xl sm:text-8xl md:text-9xl font-bebas_neue text-black tracking-widest"
        >
          Get in Touch
          <span className="w-full font-poppins text-stroke-black font-bold uppercase no-text-stroke absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 leading-5 sm:leading-normal text-2xl sm:text-3xl md:text-4xl z-20 tracking-normal text-emerald-500">
            Send a Message
          </span>
        </h2>
        <ContactForm />
        <SocialIcons className="justify-center mt-20" />
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center sm:flex-row gap-2 space-x-4 justify-center mt-8 text-sm text-emerald-500"
        >
          <div>
            <a
              className="hover:opacity-80 underline underline-offset-4"
              href="tel:+639912033418"
            >
              +63 991 203 3418
            </a>
          </div>
          <Separator
            className="hidden sm:block h-6 bg-emerald-800"
            orientation="vertical"
          />
          <div>
            <a
              className="hover:opacity-80 underline underline-offset-4"
              href="mailto:arnulfocaceres07@gmail.com"
            >
              arnulfocaceres07@gmail.com
            </a>
          </div>
          <Separator
            className="hidden sm:block h-6 bg-emerald-800"
            orientation="vertical"
          />
          <div>
            <a
              className="hover:opacity-80 flex items-center gap-1 underline underline-offset-4"
              href="/pdf/Arnulfo_Caceres.pdf"
              download="Arnulfo Caceres CV.pdf"
              target="_blank"
            >
              <span> CV</span> <FaCloudDownloadAlt className="w-5 h-5" />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
