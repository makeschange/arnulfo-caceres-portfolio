import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionDataProps = [
  {
    id: "a1",
    question: "How much experience do you have in web development?",
    answer:
      "I have 3 years of experience in web development, specializing in creating responsive and user-focused websites and applications.",
  },
  {
    id: "a2",
    question: "What is your level of expertise in web development?",
    answer:
      "I consider myself primarily a front-end expert; however, I also have experience as a full-stack developer, allowing me to handle various aspects of web development effectively.",
  },
  {
    id: "a3",
    question: "Are you available for remote work?",
    answer:
      "Yes, I am available for remote work and have successfully managed remote projects with clear communication and timely delivery.",
  },
  {
    id: "a4",
    question: "Can you start working on a project immediately?",
    answer:
      "I can begin initial preparations right away, but I require a one-month lead time before fully engaging in the project.",
  },
];

const Faq = () => {
  return (
    <div
      id="about"
      className="px-4 py-24 bg-bg-globe  bg-bottom w-full h-full bg-cover overflow-hidden"
    >
      <div className="wrapper">
        <div>
          <h2
            data-aos="fade-down"
            className="text-center mb-8 font-poppins text-stroke-black font-bold uppercase no-text-stroke text-xl sm:text-3xl md:text-4xl z-20 tracking-normal text-emerald-500"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-full sm:w-[70%] mx-auto">
            <Accordion type="single" collapsible className="">
              {AccordionDataProps.map((item, index) => {
                const animationStyle =
                  index % 2 === 0 ? "fade-left" : "fade-right";
                return (
                  <AccordionItem
                    data-aos={animationStyle}
                    key={item.id}
                    value={item.id}
                    className="border-emerald-800 border-dotted mb-6"
                  >
                    <AccordionTrigger className="text-md lg:text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm lg:text-lg bg-gradient-to-r from-emerald-800 via-emerald-900 to-emerald-800 p-4 rounded-lg">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
