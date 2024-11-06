import React from "react";
import { Button } from "@/components/ui/button";
import TypedBanner from "./typed-banner";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="before:bg-bg-net before:bg-no-repeat before:bg-cover before:absolute before:w-full before:h-[1285px] before:-top-[50px] before:rotate-180 before:left-0 px-2 pt-12 pb-20 bg-no-repeat bg-contain bg-center relative before:-z-10"
      style={{ backgroundImage: "url('/banner/hacker.png')" }}
    >
      <div className="wrapper min-h-[700px] flex justify-center items-center flex-col">
        <div className=" p-4 min-h-[500px] rounded space-y-12">
          <div className="relative">
            <h3 className="absolute text-[14rem] text-stroke-green text-black text-center w-[120%] top-6 z-0 left-1/2 -translate-x-1/2 font-bebas_neue tracking-wide">
              WEB DEVELOPER
            </h3>
            <h1 className="relative z-10 text-stroke-green text-8xl font-bebas_neue text-emerald-500 text-center leading-tight">
              I’m Arnulfo Caceres,{" "}
              <span className="block">Your Front-End Developer</span>
            </h1>
          </div>
          <p className=" text-lg max-w-[90%] mx-auto leading-normal">
            I&apos;m a Front-End Developer dedicated to turning ideas into
            engaging web applications. I design user-friendly interfaces that
            emphasize performance and usability. My goal is to <TypedBanner />.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button asChild size="lg" variant="custom">
              <a href="mailto:makeschange96@gmail.com">Get Started</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent !text-emerald-500 border border-emerald-500 hover:bg-transparent hover:shadow-lg  hover:shadow-emerald-400 "
            >
              <a
                href="/pdf/Arnulfo_Caceres.pdf"
                download="Arnulfo Caceres CV.pdf"
                target="_blank"
                className="flex items-center gap-1 font-semibold"
              >
                <FaCloudDownloadAlt className="w-8 h-8" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
