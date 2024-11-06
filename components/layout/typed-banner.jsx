"use client";

import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypedBanner = () => {
  const el = useRef();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "develop seamless user experiences",
        "design responsive layouts",
        "implement engaging features",
        "optimize code for performance",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="text-emerald-400 font-semibold" ref={el} />;
};

export default TypedBanner;
