
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const buttons = buttonsRef.current;

    // Move cursor to follow mouse
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Handle button hover effects
    const handleButtonHover = (button) => {
      gsap.to(button, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(cursor, {
        scale: 1.5,
        opacity: 0.6,
        boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.5)", // Larger, softer shadow on hover
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleButtonLeave = (button) => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.3)", // Default shadow
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", moveCursor);

    // Add hover events to buttons
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => handleButtonHover(button));
      button.addEventListener("mouseleave", () => handleButtonLeave(button));
    });

    // Cleanup event listeners
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => handleButtonHover(button));
        button.removeEventListener("mouseleave", () => handleButtonLeave(button));
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-blue-800 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      style={{ boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.3)" }} // Default shadow
    />
  );
}