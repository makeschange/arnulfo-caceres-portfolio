"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Logo1 from "@/public/tech-logo/html-logo.svg";
import Logo2 from "@/public/tech-logo/css-logo.svg";
import Logo3 from "@/public/tech-logo/js-logo.svg";
import Logo4 from "@/public/tech-logo/react-logo.svg";
import Logo5 from "@/public/tech-logo/next-logo.svg";
import Logo6 from "@/public/tech-logo/reac-query-logo.svg";
import Logo7 from "@/public/tech-logo/tailwind-logo.svg";
import Logo8 from "@/public/tech-logo/wordpress-logo.svg";
import Logo9 from "@/public/tech-logo/mongodb-logo.svg";
import Image, { StaticImageData } from "next/image";

const TechData = [
  { id: "t1", src: Logo1, title: "HTML logo" },
  { id: "t2", src: Logo2, title: "CSS logo" },
  { id: "t3", src: Logo3, title: "JAVASCRIPT logo" },
  { id: "t4", src: Logo4, title: "REACT logo" },
  { id: "t5", src: Logo5, title: "NEXT logo" },
  { id: "t6", src: Logo6, title: "React Query logo" },
  { id: "t7", src: Logo7, title: "Tailwind CSS logo" },
  { id: "t8", src: Logo8, title: "Wordpress logo" },
  { id: "t9", src: Logo9, title: "MongoDb logo" },
];

const TechStack = () => {
  return (
    <div className="py-24 pb-0 sm:py-24 border-dotted border-t border-t-emerald-800">
      <div className="wrapper">
        <div>
          <h2
            data-aos="zoom-in"
            className="text-stroke-green relative text-center text-7xl sm:text-8xl md:text-9xl font-bebas_neue text-black tracking-widest"
          >
            Tech Stack
            <span className="w-full leading-5 sm:leading-normal text-2xl sm:text-3xl md:text-4xl font-poppins text-stroke-black font-bold uppercase no-text-stroke absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 tracking-normal text-emerald-500">
              Skills & Expertise
            </span>
          </h2>
          <Marquee
            pauseOnHover
            pauseOnClick
            className="bg-bg-net bg-[center_bottom_-3rem] w-full h-full bg-cover mt-10 sm:mt-20 min-h-40 sm:min-h-80 rounded-lg border border-dotted border-emerald-800"
          >
            {TechData.map((item) => {
              return (
                <Image
                  data-aos="zoom-in"
                  key={item.id}
                  src={item.src}
                  alt={item.title}
                  className="mx-2 sm:mx-4 border-2 border-dotted border-emerald-800 rounded-full shadow-lg shadow-emerald-800 max-w-14 sm:max-w-20 lg:max-w-full"
                  title={item.title}
                />
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
