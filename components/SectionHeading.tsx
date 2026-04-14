"use client";

// ============================================================
// SectionHeading — Reusable animated section title component
// ============================================================

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block text-xs md:text-sm font-display font-semibold tracking-[0.3em] uppercase text-gold mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight ${
          light ? "text-bone" : "text-gradient-gold"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm md:text-base text-smoke/70 max-w-2xl mx-auto leading-relaxed font-display">
          {description}
        </p>
      )}
      {/* Decorative line */}
      <div
        className={`mt-6 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent ${
          align === "center" ? "mx-auto w-24" : "w-16"
        }`}
      />
    </motion.div>
  );
}
