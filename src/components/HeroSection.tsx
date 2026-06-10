"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !bgRef.current || !contentRef.current) return;
      const scrollPos = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;

      if (scrollPos <= heroHeight) {
        const bgSpeed = scrollPos * 0.4;
        const contentSpeed = scrollPos * 0.1;
        bgRef.current.style.transform = `translateZ(-200px) scale(1.3) translateY(${bgSpeed}px)`;
        contentRef.current.style.transform = `translateZ(50px) scale(0.95) translateY(${contentSpeed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-muted/30 parallax-wrapper pt-20"
    >
      <div className="parallax-container w-full h-full min-h-[80vh] flex items-center">
        <div ref={bgRef} className="absolute inset-0 z-0 parallax-layer-back">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuXha2ugm3Y1Bjx3qav_A0bKLxXL7wttRxP5XazgPiPwAcOdA6Wwj1nWgl-1QaCBrVTChJElEAOKsYVAPsUe4RQw-Cq3bxbiHKajC9gLRGoTQWaCv64aUj8A3LDZukg7ATAWu-ghNWLLnIYPR2oeUjmmNyPhlW8Teli_BHoQ_rlbA9Y0bMfRHUN_qA5EQ_fxcbQ5aGSDTn_yfrs57jgGvxIsOkWt6baerB-i5oLiRbgjlaIbrdj3vSAysYKcu3BnToZhXSnq3xMA" 
            alt="Modern structural blueprint background" 
            fill
            className="object-cover opacity-60 mix-blend-multiply dark:mix-blend-screen dark:opacity-30" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div 
          ref={contentRef}
          className="relative z-10 container mx-auto px-6 md:px-12 grid grid-cols-12 w-full parallax-layer-front"
        >
          <div className="col-span-12 lg:col-span-8">
            <div className="border-l-4 border-primary pl-8 space-y-6">
              <span className="text-sm font-medium text-primary uppercase tracking-widest block">
                Killi Siddartha
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tighter">
                Aspiring Civil Engineer
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                To start my career in a growth-oriented organization where I can apply my technical knowledge and continuously enhance my skills. I am seeking a challenging environment that promotes learning, innovation, and teamwork.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4 text-muted-foreground text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  siddarthakilli143@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  +91-7729006604
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Tekkali, Andhra Pradesh
                </div>
              </div>
              
              <div className="flex gap-4 pt-6">
                <a href="#education" className={buttonVariants({ size: "lg", className: "rounded-none font-bold tracking-wider" })}>
                  VIEW PROFILE <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
