import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import SocialIcons from "./social-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 w-full border-dotted border border-emerald-800 sticky top-0 z-50 bg-gradient-to-r from-black via-emerald-950 to-black bg-no-repeat bg-cover">
      <div className="wrapper">
        <div className="py-2 flex justify-between">
          <Link href="/">
            <Image
              className="max-w-24 sm:max-w-[150px] "
              src={Logo}
              alt="main logo of the portfolio"
            />
          </Link>
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
      </div>
    </header>
  );
};

export default Header;
