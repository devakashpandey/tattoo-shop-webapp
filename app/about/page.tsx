"use client";

// ============================================================
// About Page — Studio story, philosophy, and values
// ============================================================

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Artistry First",
    description: "Every tattoo is a custom work of art. We never compromise on creativity or precision.",
    icon: "◈",
  },
  {
    title: "Premium Experience",
    description: "From consultation to aftercare, every touchpoint is designed to exceed expectations.",
    icon: "◇",
  },
  {
    title: "Safety & Hygiene",
    description: "Hospital-grade sterilization, premium inks, and single-use equipment — always.",
    icon: "○",
  },
  {
    title: "Your Vision",
    description: "We listen, collaborate, and iterate until the design is perfect — before ink touches skin.",
    icon: "✦",
  },
];

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "25K+", label: "Tattoos Completed" },
  { number: "20+", label: "Awards Won" },
  { number: "100%", label: "Premium Inks" },
];

export default function AboutPage() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center relative z-10">
          <SectionHeading
            subtitle="Our Story"
            title="About International Tattoo House"
            description="More than a tattoo studio — we're a collective of artists dedicated to transforming your ideas into permanent works of art."
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image with Parallax */}
            <AnimatedSection className="w-full lg:w-1/2" direction="left">
              <div ref={parallaxRef} className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-[-60px]">
                  <Image
                    src="/tattoos/hero-section.jpeg"
                    alt="International Tattoo House Studio"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glass px-5 py-3 rounded-xl">
                  <p className="text-xs text-crimson font-display font-semibold tracking-wider uppercase">
                    Est. 2010
                  </p>
                  <p className="text-sm text-bone font-display mt-1">
                    Los Angeles, CA
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Story Text */}
            <AnimatedSection className="w-full lg:w-1/2" direction="right">
              <span className="text-xs tracking-[0.3em] uppercase text-crimson font-display font-semibold">
                The Beginning
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-bone leading-tight">
                Born from a Passion for{" "}
                <span className="text-gradient-crimson">Permanent Art</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm text-smoke/70 font-display leading-relaxed">
                <p>
                  International Tattoo House was founded in 2010 with a singular vision: to elevate tattooing to its rightful place among the fine arts. What started as a small studio in the heart of LA&apos;s Art District has grown into a globally recognized destination for premium tattoo artistry.
                </p>
                <p>
                  Our studio is more than a place to get tattooed — it&apos;s an immersive experience. From the moment you walk through our doors, you&apos;re enveloped in an atmosphere that celebrates creativity, craftsmanship, and individual expression.
                </p>
                <p>
                  Every artist in our collective has been hand-selected for their exceptional talent, unique style, and unwavering commitment to the craft. Together, we&apos;ve created tens of thousands of pieces that our clients wear with pride.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal-dark/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className="block text-3xl md:text-4xl font-heading font-bold text-gradient-crimson"
                  >
                    {stat.number}
                  </motion.span>
                  <p className="mt-2 text-xs text-smoke/50 font-display tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
