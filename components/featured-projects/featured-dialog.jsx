import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FeaturedDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        data-aos="fade-up"
        className="h-10 px-4 text-xs sm:text-sm sm:px-6  py-2 rounded hover:shadow-lg  hover:shadow-emerald-400 bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-500 text-emarald-300"
      >
        Show More
      </DialogTrigger>
      <DialogContent className="bg-emerald-500 border-emerald-800">
        <DialogHeader>
          <DialogTitle className=" text-destructive text-center mb-4">
            More Projects Coming Soon!
          </DialogTitle>
          <DialogDescription className="text-stone-200">
            I still have a lot of projects to create, so stay tuned for updates!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FeaturedDialog;
