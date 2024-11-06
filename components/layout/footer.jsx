"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.svg";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center space-x-8 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 rounded-full min-h-12 items-center mt-20 max-w-[80%] mx-auto">
      <h5 className="text-sm">
        &copy;Copyright 2023 - {currentYear} &bull;{" "}
        <span>All Rights Reserved </span>
      </h5>
      <Separator className="h-6 bg-emerald-600" orientation="vertical" />
      <Link href="/">
        <Image
          className="max-w-[80px] w-full"
          src={Logo}
          alt="main logo of the portfolio"
        />
      </Link>
      <Separator className="h-6 bg-emerald-600" orientation="vertical" />
      <h5 className="text-sm">
        Designed By <strong>Arnulfo Caceres</strong>
      </h5>
    </div>
  );
};

export default Footer;
