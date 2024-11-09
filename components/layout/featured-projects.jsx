import React from "react";
import FeaturedCarousel from "../featured-projects/featured-carousel";
import FeaturedDialog from "../featured-projects/featured-dialog";

const FeaturedProjects = () => {
  return (
    <div id="myproject" className="px-12 sm:px-2 py-10 sm:py-24 ">
      <div className="wrapper !max-w-[1400px]">
        <div>
          <h2
            data-aos="fade-up"
            className=" text-stroke-green relative text-center text-7xl sm:text-8xl md:text-9xl font-bebas_neue text-black tracking-widest"
          >
            My Work
            <span className="w-full font-poppins text-stroke-black font-bold uppercase  no-text-stroke absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl z-20  tracking-normal text-emerald-500">
              Featured Projects
            </span>
          </h2>
          <div className="mt-10 sm:mt-20 border border-dotted border-emerald-800 p-0 sm:p-8 rounded-lg">
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
