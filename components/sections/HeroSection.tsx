"use client";

// ============================================================
// HeroSection — Enhanced Premium Hero with Ken Burns Effect
// ============================================================

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgrounds = [
    { type: "image", src: "/tattoos/hero-section.jpeg" },
    { type: "image", src: "/tattoos/hero-banner.jpeg" },
    { type: "image", src: "/tattoos/hero-banner2.jpeg" },
    { type: "video", src: "/tattoos/vid.mp4" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Increased duration for a more relaxed premium feel
    return () => clearInterval(timer);
  }, [backgrounds.length]);

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
      {/* Background Slideshow - Premium Ken Burns Effect */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {backgrounds[currentIndex].type === "image" ? (
              <Image
                src={backgrounds[currentIndex].src}
                alt="Tattoo House Ara Studio"
                fill
                className="object-cover brightness-[0.85]"
                priority
                quality={100}
              />
            ) : (
              <video
                src={backgrounds[currentIndex].src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-[0.85]"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated Layered Overlays - Lightened */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/60 via-transparent to-charcoal-dark/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-dark/10 to-charcoal-dark/40 z-10" />
      </motion.div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 noise opacity-20 z-[1] pointer-events-none" />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl"
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
