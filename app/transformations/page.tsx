"use client";

// ============================================================
// Before & After / Transformations Page
// ============================================================

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { transformations } from "@/lib/data";
import {
  ArrowRight,
  ArrowLeftRight,
  Clock,
  User,
  Layers,
  Sparkles,
  RefreshCw,
  Heart,
} from "lucide-react";
import Link from "next/link";


const typeIcons: Record<string, typeof Sparkles> = {
  "cover-up": RefreshCw,
  "touch-up": Sparkles,
  healing: Heart,
};

const typeColors: Record<string, string> = {
  "cover-up": "bg-crimson/20 text-crimson-light",
  "touch-up": "bg-crimson/20 text-crimson",
  healing: "bg-green-500/20 text-green-400",
};

export default function TransformationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sliderPositions, setSliderPositions] = useState<Record<string, number>>({});

  const filteredItems = transformations;

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center relative z-10">
          <SectionHeading
            subtitle="Real Results"
            title="Before & After"
            description="See the transformative power of expert tattooing. From cover-ups to touch-ups and healing journeys — real results from real clients."
          />
        </div>
      </section>


      {/* Transformation Cards */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <AnimatePresence>
              {filteredItems.map((item, index) => {
                const sliderPos = sliderPositions[item.id] ?? 50;
                const TypeIcon = typeIcons[item.type] || Sparkles;

                return (
                  <AnimatedSection key={item.id} delay={index * 0.1}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      className="glass rounded-2xl overflow-hidden border border-crimson/10 hover:border-crimson/20 transition-all duration-500"
                    >
                      {/* Image Comparison Slider */}
                      <div className="relative h-[300px] md:h-[450px] overflow-hidden select-none">
                        <div className="absolute inset-0">
                          <Image
                            src={item.afterImage}
                            alt={`${item.title} - After`}
                            fill
                            className="object-cover object-[75%_center] scale-[200%] md:scale-[200%]"
                          />
                        </div>

                        {/* Before image (clipped) */}
                        <div
                          className="absolute inset-0 overflow-hidden z-10"
                          style={{ width: `${sliderPos}%` }}
                        >
                          <Image
                            src={item.beforeImage}
                            alt={`${item.title} - Before`}
                            fill
                            className="object-cover object-[25%_center] scale-[200%] md:scale-[200%]"
                            style={{ filter: "grayscale(30%) brightness(0.9)" }}
                          />

                          {/* Before label */}
                          <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full">
                            <span className="text-xs font-display font-semibold text-smoke/80">
                              BEFORE
                            </span>
                          </div>
                        </div>

                        {/* After label */}
                        <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full">
                          <span className="text-xs font-display font-semibold text-crimson">
                            AFTER
                          </span>
                        </div>

                        {/* Slider Handle */}
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-crimson cursor-ew-resize z-10"
                          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
                        >
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-crimson flex items-center justify-center shadow-lg shadow-crimson/30">
                            <ArrowLeftRight size={16} className="text-charcoal-dark" />
                          </div>
                        </div>

                        {/* Range input (transparent, just for interaction) */}
                        <input
                          type="range"
                          min="5"
                          max="95"
                          value={sliderPos}
                          onChange={(e) =>
                            handleSliderChange(item.id, parseInt(e.target.value))
                          }
                          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                        />
                      </div>

                      {/* Info */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`inline-flex items-center gap-1 text-xs font-display font-semibold px-3 py-1 rounded-full ${typeColors[item.type]}`}
                              >
                                <TypeIcon size={12} />
                                {item.type === "cover-up"
                                  ? "Cover-Up"
                                  : item.type === "touch-up"
                                  ? "Touch-Up"
                                  : "Healing Journey"}
                              </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-heading font-bold text-bone">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm text-smoke/60 font-display leading-relaxed mb-5">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm font-display">
                          <span className="flex items-center gap-2 text-smoke/50">
                            <User size={14} className="text-crimson" />
                            {item.artist}
                          </span>
                          <span className="flex items-center gap-2 text-smoke/50">
                            <Clock size={14} className="text-crimson" />
                            {item.duration}
                          </span>
                          <span className="flex items-center gap-2 text-smoke/50">
                            <Layers size={14} className="text-crimson" />
                            {item.sessions} session{item.sessions > 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-sm text-smoke/50 font-display mb-6">
                Ready for your own transformation?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/booking">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-crimson text-charcoal-dark font-display font-bold text-sm rounded-full hover:bg-crimson-light transition-all glow-crimson"
                  >
                    Book Your Session
                    <ArrowRight size={14} />
                  </motion.span>
                </Link>
                <Link href="/estimator">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 border border-crimson/30 text-crimson font-display font-semibold text-sm rounded-full hover:bg-crimson/10 transition-all"
                  >
                    Get Price Estimate
                  </motion.span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
