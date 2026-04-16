"use client";

// ============================================================
// CTASection — Book appointment call-to-action section
// ============================================================

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative py-20 md:py-24 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/studio.png"
          alt="Tattoo studio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-dark/30 via-transparent to-crimson/10" />
      </motion.div>

      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-crimson font-display font-medium">
            Ready for Your Next Piece?
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-bone leading-tight">
            Your Story,{" "}
            <span className="text-gradient-crimson">Inked Forever</span>
          </h2>

          <p className="mt-6 text-base text-smoke/70 font-display max-w-xl mx-auto leading-relaxed">
            Book a free consultation with one of our artists and bring your vision to life. Walk-ins welcome, appointments preferred.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 bg-crimson text-charcoal-dark font-display font-bold text-sm rounded-full hover:bg-crimson-light transition-all duration-300 glow-crimson tracking-wide uppercase"
              >
                Book Now
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 border border-bone/20 text-bone font-display font-semibold text-sm rounded-full hover:bg-bone/5 transition-all duration-300 tracking-wide uppercase"
              >
                Contact Us
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
