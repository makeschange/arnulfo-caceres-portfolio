"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import SocialIcons from "./social-icons";
import Link from "next/link";

gsap.registerPlugin(useGSAP);
const Header = () => {
  const container = useRef();
  const welcomeRef = useRef();
  const headerRef = useRef();
  const welcomeNameRef = useRef();
  const welcomePaRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
        duration: 2,
      },
    });

    tl.from(welcomeNameRef.current, {
      opacity: 0,
      x: -200,
    })
      .from(welcomePaRef.current, {
        opacity: 0,
        x: 200,
      })
      .to(welcomeRef.current, {
        opacity: 0,
        x: -200,
      })
      .to(container.current, { opacity: 1, height: 60 })
      .to(
        headerRef.current,
        {
          opacity: 1,
        },
        "<0"
      );
  });
  return (
    <header
      ref={container}
      className="px-4 w-full h-screen opacity-100 sticky top-0 z-50 bg-gradient-to-r from-black/75 via-emerald-950/75 to-black/75 backdrop-blur-lg bg-no-repeat bg-cover"
    >
      <div className="wrapper ">
        <div
          ref={headerRef}
          className="py-2 flex justify-between items-center pt-4 opacity-0"
        >
          <h3 className="text-xl font-semibold text-emerald-500">Arnulfo C.</h3>
          <div className="flex gap-x-4 items-center">
            <ul className=" hidden sm:flex items-center gap-x-4 mr-8">
              <li>
                <Link
                  className="text-emerald-500 hover:opacity-80 text-sm "
                  href="#about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-500 hover:opacity-80 text-sm"
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <SocialIcons />
            <Button
              className="hidden sm:inline-flex "
              size="sm"
              variant="custom"
              asChild
            >
              <Link href="#myproject"> Show Projects</Link>
            </Button>
          </div>
        </div>
        <div
          ref={welcomeRef}
          className="flex justify-center items-center w-full h-screen -mt-[60px]"
        >
          <div>
            <h3
              ref={welcomeNameRef}
              className="font-semibold text-emerald-500 text-5xl"
            >
              <span>Hi,</span> Im Arnulfo Caceres
            </h3>
            <p ref={welcomePaRef} className="text-xl leading-loose">
              and welcome to my website portfolio.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
