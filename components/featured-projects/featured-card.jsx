import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const FeaturedCard = ({ src, href, hrefLabel, title }) => {
  return (
    <div className="w-[90%] border border-dotted border-emerald-500 s shadow-lg shadow-green-800/50 mx-auto rounded-xl overflow-hidden relative group ">
      <Image
        className="group-hover:scale-110 scale-100 transition-all duration-300 ease-in-out "
        src={src}
        alt={title}
      />
      <div className="transition-all flex-col duration-75 ease-in-out group-hover:flex absolute w-full h-full top-0 left-0 bg-black/80 hidden justify-center items-center">
        <h3 className="border border-dotted border-emerald-500 font-semibold mb-8 text-md text-emerald-500 shadow-lg shadow-emerald-500 p-2 rounded px-3">
          {title}
        </h3>
        <Button variant="custom">
          <a href={href} target="_blank">
            {hrefLabel} <span className="animate-pulse">&#10140;</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedCard;
