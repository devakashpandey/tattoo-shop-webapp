"use client";

// ============================================================
// HeroSection — Fullscreen immersive hero with parallax
// ============================================================

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
    }, 3500);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {backgrounds[currentIndex].type === "image" ? (
              <Image
                src={backgrounds[currentIndex].src}
                alt="International Tattoo House Studio Background"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            ) : (
              <video
                src={backgrounds[currentIndex].src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
      </motion.div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise z-[1]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        {/* Decorative top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto w-20 h-[1px] bg-crimson mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-crimson font-display font-medium mb-6"
        >
          Premium Tattoo Artistry
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6"
        >
          <span className="text-bone">Where Art</span>
          <br />
          <span className="text-gradient-crimson">Meets Skin</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-lg text-smoke/80 font-display max-w-xl mx-auto mb-10 leading-relaxed"
        >
          World-class tattoo artist crafting bespoke pieces in a premium studio
          environment. Your vision, our expertise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/booking">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-crimson text-charcoal-dark font-display font-bold text-sm rounded-full hover:bg-crimson-light transition-all duration-300 glow-crimson tracking-wide uppercase"
            >
              Book Appointment
            </motion.span>
          </Link>
          <Link href="/gallery">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border border-crimson/30 text-crimson font-display font-semibold text-sm rounded-full hover:bg-crimson/10 transition-all duration-300 tracking-wide uppercase"
            >
              View Our Work
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-smoke/50 font-display">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-crimson/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
