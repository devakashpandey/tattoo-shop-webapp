"use client";

// ============================================================
// HeroSection — Enhanced Premium Hero with Ken Burns Effect
// ============================================================

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgrounds = [
    { type: "image", src: "/tattoos/hero-section.jpeg" },
    { type: "image", src: "/tattoos/hero-banner.jpeg" },
    { type: "image", src: "/tattoos/hero-banner2.jpeg" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 6000); // 6 seconds auto-slide
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const headingVariants: Variants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 50 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-charcoal-dark"
    >
      {/* Background Slideshow - Premium Carousel Slider */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0 overflow-hidden">
        {backgrounds.map((bg, idx) => (
          <motion.div
            key={idx}
            initial={false}
            animate={{ x: `${(idx - currentIndex) * 100}%` }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={bg.src}
              alt="Tattoo House Ara Studio"
              fill
              priority={true}
              sizes="100vw"
              className="object-cover brightness-100"
              quality={90}
            />
          </motion.div>
        ))}

        {/* Sophisticated Layered Overlays - Lightened */}
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />
      </motion.div>

      {/* Manual Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/20 text-bone hover:bg-crimson hover:border-crimson transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/20 text-bone hover:bg-crimson hover:border-crimson transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {backgrounds.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentIndex ? "w-8 bg-crimson" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 noise opacity-20 z-[1] pointer-events-none" />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
      >
        {/* Hidden SEO Heading for Search Engines */}
        <h1 className="sr-only">
          Tattoo House Ara - Best Tattoo Shop in Ara, Top Tattoo Studio in Bihar, Professional Tattoo Artist in Arrah
        </h1>

        {/* Animated Accent Line & Subtitle */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-crimson/50" />
          <p className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-crimson font-display font-semibold">
            Premium Tattoo Artistry
          </p>
          <div className="w-12 h-[1px] bg-crimson/50" />
        </motion.div>

        {/* Main Heading with Reveal Effect */}
        <motion.h2
          variants={headingVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-[0.9] mb-8 tracking-tighter"
        >
          <span className="text-bone inline-block">Where Art</span>
          <br />
          <span className="text-gradient-crimson inline-block mt-2">Meets Skin</span>
        </motion.h2>

        {/* Description with enhanced spacing */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-xl text-smoke/90 font-display max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          World-class tattoo artist crafting bespoke pieces in a premium studio
          environment. <span className="text-bone/60">Your vision, our expertise.</span>
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/booking">
            <motion.span
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-10 py-5 bg-crimson text-white font-display font-bold text-xs rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] tracking-[0.2em] uppercase"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.span>
          </Link>
          
          <Link href="/gallery">
            <motion.span
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md text-bone font-display font-semibold text-xs rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 tracking-[0.2em] uppercase"
            >
              View Our Work
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] tracking-[0.5em] uppercase text-smoke/40 font-display rotate-0 sm:rotate-0">
          Explore
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-crimson to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white/40 h-1/2 w-full"
          />
        </div>
      </motion.div>

      {/* Decorative side element */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-20 z-20">
        <div className="w-px h-20 bg-bone" />
        <span className="text-[10px] tracking-[1em] uppercase text-bone vertical-text">ESTD 2024</span>
      </div>
    </section>
  );
}
