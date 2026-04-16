"use client";

// ============================================================
// StylesSection — Featured tattoo styles with hover cards
// ============================================================

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { tattooStyles } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StylesSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const totalWidth = tattooStyles.length * (320 + 24);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 400;
      const target = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
    }
  };
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <SectionHeading
          subtitle="Our Expertise"
          title="Tattoo Styles"
          description="From photorealistic portraits to delicate fine-line art, our artists master every technique."
        />

        <div className="relative mt-8 group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-30 w-12 h-12 rounded-full glass border border-crimson/20 flex items-center justify-center text-crimson opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-crimson/10 pointer-events-auto"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-30 w-12 h-12 rounded-full glass border border-crimson/20 flex items-center justify-center text-crimson opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-crimson/10 pointer-events-auto"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-10 pt-4 px-4 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`flex gap-6 w-max animate-scroll ${isPaused ? 'pause-animation' : ''}`}
            >
              {[...tattooStyles, ...tattooStyles, ...tattooStyles].map((style, index) => (
                <div
                  key={`${style.id}-${index}`}
                  className="group relative overflow-hidden rounded-xl bg-card border border-crimson/5 hover:border-crimson/20 transition-all duration-500 cursor-pointer w-[320px] flex-shrink-0 hover:-translate-y-2"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-bone mb-2 group-hover:text-crimson transition-colors duration-300">
                      {style.name}
                    </h3>
                    <p className="text-sm text-smoke/60 leading-relaxed font-display h-20 overflow-hidden line-clamp-3">
                      {style.description}
                    </p>
                    <div className="mt-4 h-[1px] bg-crimson/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
