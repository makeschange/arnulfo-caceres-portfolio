import React from "react";
import FeaturedCarousel from "../featured-projects/featured-carousel";
import FeaturedDialog from "../featured-projects/featured-dialog";

const FeaturedProjects = () => {
  return (
    <div id="myproject" className="px-2 py-24 ">
      <div className="wrapper !max-w-[1400px]">
        <div>
          <h2 className="text-stroke-green relative text-center text-9xl font-bebas_neue text-black tracking-widest">
            My Work
            <span className="font-poppins text-stroke-black font-bold uppercase no-text-stroke absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-4xl z-20 tracking-normal text-emerald-500">
              Featured Projects
            </span>
          </h2>
          <div className="mt-20 border border-dotted border-emerald-800 p-8 rounded-lg">
            <FeaturedCarousel />
          </div>
          <div className="flex justify-center mt-8">
            <FeaturedDialog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
