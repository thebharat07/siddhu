"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxZSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function ParallaxZSection({ children, id, className }: ParallaxZSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // As the section enters the viewport (0 -> 0.5), it moves from Z=-300 to Z=0.
  // As it leaves the viewport (0.5 -> 1), it recedes to Z=-300 again.
  const z = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-300, 0, 0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);

  return (
    <section 
      id={id} 
      ref={containerRef} 
      className={`relative perspective-[1200px] ${className || ""}`}
    >
      <motion.div 
        style={{ z, opacity, scale }}
        className="w-full h-full transform-gpu will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
}
