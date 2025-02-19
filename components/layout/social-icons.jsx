import React from "react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Github } from "lucide-react";
import ButtonLink from "../helper/button-link";

const SocialIcons = ({ className }) => {
  return (
    <div className={`flex gap-x-3 items-center ${className}`}>
      <ButtonLink href="https://github.com/makeschange">
        <Github className="h-5 w-5 text-emerald-500 hover:opacity-80" />
      </ButtonLink>
      <ButtonLink href="https://www.linkedin.com/in/arnulfo-s-caceres-web-developer-01218122a/">
        <FaLinkedinIn className="h-5 w-5 text-emerald-500 hover:opacity-80" />
      </ButtonLink>
    </div>
  );
};

export default SocialIcons;
