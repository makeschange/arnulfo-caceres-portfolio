import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import TypedBanner from "./typed-banner";
import { FaCloudDownloadAlt } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

const Banner = () => {
  const container = useRef(null);
  const nameRef = useRef(null);
  const positionRef = useRef(null);
  const paRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power1.out",
        duration: 1.5,
      },
    });

    let letters = gsap.utils.toArray(".letter");
    tl.from(container.current, {
      opacity: 0,
      y: -300,
      delay: 1.5,
    })
      .from(
        letters,
        {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          delay: 2,
          ease: "bounce.out",
        },
        "+=2"
      )
      .from(nameRef.current, {
        opacity: 0,
        x: -500,
      })
      .from(positionRef.current, {
        opacity: 0,
        x: 500,
      })
      .from(paRef.current, {
        opacity: 0,
        y: 100,
      })
      .from(btn1Ref.current, {
        opacity: 0,
        x: -500,
      })
      .from(
        btn2Ref.current,
        {
          opacity: 0,
          x: 500,
        },
        "<0"
      );
  });

  return (
    <div
      ref={container}
      className="before:bg-bg-net before:bg-no-repeat before:bg-cover before:absolute before:w-full before:h-[1285px] before:-top-[50px] before:rotate-180 before:left-0 px-2 pt-16 pb-10 sm:pb-24 bg-no-repeat bg-cover lg:bg-contain bg-center relative before:-z-10"
      style={{ backgroundImage: "url('/banner/hacker.png')" }}
    >
      <div className="wrapper  sm:min-h-[600px]  md:min-h-[500px] flex justify-center items-center flex-col">
        <div className=" p-4 min-h-[400px] lg:min-h-[500px] mt-0 md:mt-10 lg:mt-20 rounded space-y-12">
          <div className="relative">
            <div className="absolute flex justify-center  text-7xl sm:text-9xl md:text-[10rem] lg:text-[14rem] text-stroke-green text-black text-center w-[120%] -top-4 sm:-top-12 md:top-6 lg:-top-11 xl:top-8  z-0 left-1/2 -translate-x-1/2 font-bebas_neue tracking-wide">
              <div className="letter">W</div>
              <div className="letter">E</div>
              <div className="letter mr-8">B</div>
              <div className="letter ">D</div>
              <div className="letter">E</div>
              <div className="letter">V</div>
              <div className="letter">E</div>
              <div className="letter">L</div>
              <div className="letter">O</div>
              <div className="letter">P</div>
              <div className="letter">E</div>
              <div className="letter">R</div>
            </div>
            <div className="relative z-10 text-stroke-green  text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bebas_neue text-emerald-500 text-center leading-tight">
              <h1 ref={nameRef}>I’m Arnulfo Caceres, </h1>
              <h2 ref={positionRef} className="block">
                Your Front-End Developer
              </h2>
            </div>
          </div>
          <p
            ref={paRef}
            className="text-sm text-center sm:text-left sm:text-lg max-w-full sm:max-w-[90%] mx-auto leading-normal min-h-[130px]  sm:min-h-full"
          >
            I&apos;m a Front-End Developer dedicated to turning ideas into
            engaging web applications. I design user-friendly interfaces that
            emphasize performance and usability. My goal is to <TypedBanner />.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button ref={btn1Ref} asChild size="lg" variant="custom">
              <a href="mailto:makeschange96@gmail.com">Get Started</a>
            </Button>
            <Button
              ref={btn2Ref}
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-xs sm:text-sm !text-emerald-500 border border-emerald-500 hover:bg-transparent hover:shadow-lg  hover:shadow-emerald-400 "
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
