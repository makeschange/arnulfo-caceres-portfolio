"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.svg";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-2 flex flex-col sm:flex-row justify-center gap-4 sm:gap-2 space-x-8 bg-none sm:bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 rounded-full min-h-12 items-center mt-20 max-w-full sm:max-w-[80%] mx-auto">
      <h5 className="text-xs sm:text-sm order-2 sm:order-1">
        &copy;Copyright 2023 - {currentYear} &bull;{" "}
        <span>All Rights Reserved </span>
      </h5>
      <Separator
        className="hidden sm:inline-flex h-6 bg-emerald-600 sm:order-2"
        orientation="vertical"
      />
      <Link href="/" className="order-1 sm:order-3">
        <Image
          className="max-w-[80px] w-full"
          src={Logo}
          alt="main logo of the portfolio"
        />
      </Link>
      <Separator
        className="hidden sm:inline-flex h-6 bg-emerald-600 sm:order-4"
        orientation="vertical"
      />
      <h5 className="text-xs sm:text-sm order-3 sm:order-5">
        Designed By <strong>Arnulfo Caceres</strong>
      </h5>
    </div>
  );
};

export default Footer;
