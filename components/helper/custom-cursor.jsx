"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const circlesRef = useRef([]);
  const colors = [
    "#8de284",
    "#72d964",
    "#5bd249",
    "#43cb33",
    "#34bf2b",
    "#2ab124",
    "#1fa31d",
    "#179517",
    "#118611",
    "#0d770d",
    "#0a680a",
    "#085b08",
    "#064e06",
    "#054205",
    "#043804",
    "#032d03",
    "#022402",
  ];

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [colors]);

  return (
    <>
      {Array.from({ length: 22 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;
