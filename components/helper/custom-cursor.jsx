"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Hide custom cursor on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
      return;
    }

    setHidden(false);

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        // Add a slight lag to the outer ring for a trailing effect
        ringRef.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    
    // Add links listeners after DOM loads
    handleLinkHoverEvents();
    
    // Re-bind link hover events periodically for dynamically rendered elements
    const interval = setInterval(handleLinkHoverEvents, 1000);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      clearInterval(interval);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 ${
          clicked ? "scale-50 bg-violet-400" : ""
        } ${linkHovered ? "scale-150 bg-cyan-300" : ""}`}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/50 pointer-events-none z-[9999998] transition-all duration-300 ease-out ${
          clicked ? "scale-75 border-violet-400/80 bg-violet-500/10" : ""
        } ${
          linkHovered
            ? "scale-150 border-cyan-300 bg-cyan-400/10"
            : ""
        }`}
      />
    </>
  );
}
