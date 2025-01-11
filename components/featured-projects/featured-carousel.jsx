import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedCard from "@/components/featured-projects/featured-card";
import FeaturedImage0 from "@/public/featured/f-takime.jpg";
import FeaturedImage1 from "@/public/featured/f-proweaver.jpg";
import FeaturedImage2 from "@/public/featured/f-portfolio.jpg";
import FeaturedImage3 from "@/public/featured/f-taki-pet-shop.jpg";

const FeaturedProjectsData = [
  {
    id: "f0",
    title: "Takime",
    href: "https://takime.vercel.app/",
    src: FeaturedImage0,
    hrefLabel: "Visit Now",
  },
  {
    id: "f1",
    title: "Proweaver, Inc.",
    href: "https://www.proweaver.com/",
    src: FeaturedImage1,
    hrefLabel: "Visit Now",
  },
  {
    id: "f2",
    title: "My Portfolio",
    href: "https://arnulfo-caceres.web.app/",
    src: FeaturedImage2,
    hrefLabel: "Visit Now",
  },
  {
    id: "f3",
    title: "Taki Pet Store",
    href: "https://taki-pet-store.vercel.app/",
    src: FeaturedImage3,
    hrefLabel: "Visit Now",
  },
];

const FeaturedCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full"
    >
      <CarouselContent>
        {FeaturedProjectsData.map((item) => {
          return (
            <CarouselItem
              data-aos="zoom-in"
              key={item.id}
              className="bases-100% sm:basis-1/2 lg:basis-1/3 p-4 md:p-8"
            >
              <FeaturedCard {...item} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="bg-emerald-700 text-emerald-300 border-emerald-500 hover:bg-emerald-500" />
      <CarouselNext className="bg-emerald-700 text-emerald-300 border-emerald-500 hover:bg-emerald-500" />
    </Carousel>
  );
};

export default FeaturedCarousel;
