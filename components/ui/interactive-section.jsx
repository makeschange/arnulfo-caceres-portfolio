"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function InteractiveSection({
  children,
  title,
  className = "",
}) {
  const containerRef = useRef(null);

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Starts smaller, grows big at the center, then shrinks
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  // Fades in to maximum 0.1 opacity so it stays visible as a watermark, then fades out
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // Section Content subtle scaling for an "overlapping" depth feel
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.95, 1, 1, 0.95],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["5%", "0%", "-5%"],
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* Huge Background Text */}
      {title && (
        <motion.div
          style={{
            x: textX,
            y: textY,
            scale: textScale,
            opacity: textOpacity,
          }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 select-none overflow-hidden"
        >
          <span className="text-[15vw] md:text-[20vw] font-black uppercase text-white whitespace-nowrap opacity-100">
            {title}
          </span>
        </motion.div>
      )}

      {/* Main Content Wrapper */}
      <motion.div
        style={{
          scale: contentScale,
          opacity: contentOpacity,
          y: contentY,
        }}
        className="relative z-10 w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
