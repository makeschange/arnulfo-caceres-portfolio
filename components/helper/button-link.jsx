import React from "react";

const ButtonLink = ({ children, href }) => {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
};

export default ButtonLink;
