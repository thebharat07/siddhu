"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Compass } from "lucide-react";

export function PreHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect: moves the content down slightly as we scroll up
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full bg-zinc-950 flex items-center justify-center overflow-hidden z-[60]"
    >
      {/* Background Grid for aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="text-center flex flex-col items-center gap-6 relative z-10 w-full px-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Compass className="w-20 h-20 text-primary mx-auto mb-4" strokeWidth={1} />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold text-zinc-100 uppercase tracking-[0.15em] font-sans"
        >
          K. Siddartha
        </motion.h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
          className="h-[2px] bg-primary"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="text-zinc-400 font-mono tracking-[0.3em] text-xs md:text-sm uppercase"
        >
          Civil Engineering Portfolio
        </motion.p>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Scroll to explore</span>
        <div className="h-16 w-px bg-zinc-800 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-primary h-1/2"
          />
        </div>
      </motion.div>
    </section>
  );
}
