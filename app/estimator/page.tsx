"use client";

// ============================================================
// Price Estimator Page — Interactive tattoo price calculator
// ============================================================

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import {
  tattooSizes,
  tattooComplexities,
  tattooColorOptions,
  bodyPlacements,
  tattooStyles,
} from "@/lib/data";
import {
  IndianRupee,
  Ruler,
  Layers,
  Palette,
  MapPin,
  Clock,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function EstimatorPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedComplexity, setSelectedComplexity] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPlacement, setSelectedPlacement] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  const estimate = useMemo(() => {
    if (!selectedSize || !selectedComplexity || !selectedColor || !selectedPlacement) {
      return null;
    }
    const size = tattooSizes.find((s) => s.id === selectedSize);
    const complexity = tattooComplexities.find((c) => c.id === selectedComplexity);
    const color = tattooColorOptions.find((c) => c.id === selectedColor);
    const placement = bodyPlacements.find((p) => p.id === selectedPlacement);

    if (!size || !complexity || !color || !placement) return null;

    const basePrice = size.basePrice;
    const total = basePrice * complexity.multiplier * color.multiplier + placement.modifier;
    const low = Math.round(total * 0.85);
    const high = Math.round(total * 1.15);

    return {
      low,
      high,
      timeEstimate: size.timeEstimate,
      painLevel: placement.painLevel,
      placement: placement.label,
    };
  }, [selectedSize, selectedComplexity, selectedColor, selectedPlacement]);

  const allSelected = selectedSize && selectedComplexity && selectedColor && selectedPlacement;

  const handleReset = () => {
    setSelectedSize("");
    setSelectedComplexity("");
    setSelectedColor("");
    setSelectedPlacement("");
    setSelectedStyle("");
  };

  const painLabel = (level: number) => {
    if (level <= 2) return "Very Low";
    if (level <= 4) return "Moderate";
    if (level <= 6) return "Medium-High";
    if (level <= 8) return "High";
    return "Very High";
  };

  const painColor = (level: number) => {
    if (level <= 2) return "text-green-400";
    if (level <= 4) return "text-crimson";
    if (level <= 6) return "text-orange-400";
    return "text-crimson-light";
  };

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="Know Your Budget"
            title="Price Estimator"
            description="Get an instant ballpark estimate for your tattoo. Select your preferences below to calculate the approximate cost."
          />
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Selection Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Size */}
              <AnimatedSection delay={0}>
                <div className="glass rounded-xl p-6 border border-crimson/5">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center">
                      <Ruler size={16} className="text-crimson" />
                    </div>
                    <h3 className="text-sm font-display font-semibold text-bone tracking-wider uppercase">
                      Size
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tattooSizes.map((size) => (
                      <motion.button
                        key={size.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedSize(size.id)}
                        className={`text-left px-4 py-3 rounded-lg text-sm font-display transition-all duration-300 border ${selectedSize === size.id
                            ? "bg-crimson/15 border-crimson/40 text-crimson"
                            : "border-crimson/5 text-smoke/70 hover:border-crimson/20 hover:text-bone"
                          }`}
                      >
                        <span className="font-medium">{size.label}</span>
                        <span className="block text-xs mt-0.5 opacity-60">
                          ~{size.timeEstimate} · from ₹{size.basePrice}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Complexity */}
              <AnimatedSection delay={0.1}>
                <div className="glass rounded-xl p-6 border border-crimson/5">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center">
                      <Layers size={16} className="text-crimson" />
                    </div>
                    <h3 className="text-sm font-display font-semibold text-bone tracking-wider uppercase">
                      Detail Level
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tattooComplexities.map((c) => (
                      <motion.button
                        key={c.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedComplexity(c.id)}
                        className={`text-left px-4 py-3 rounded-lg text-sm font-display transition-all duration-300 border ${selectedComplexity === c.id
                            ? "bg-crimson/15 border-crimson/40 text-crimson"
                            : "border-crimson/5 text-smoke/70 hover:border-crimson/20 hover:text-bone"
                          }`}
                      >
                        {c.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Color */}
              <AnimatedSection delay={0.2}>
                <div className="glass rounded-xl p-6 border border-crimson/5">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center">
                      <Palette size={16} className="text-crimson" />
                    </div>
                    <h3 className="text-sm font-display font-semibold text-bone tracking-wider uppercase">
                      Color
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {tattooColorOptions.map((c) => (
                      <motion.button
                        key={c.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedColor(c.id)}
                        className={`text-left px-4 py-3 rounded-lg text-sm font-display transition-all duration-300 border ${selectedColor === c.id
                            ? "bg-crimson/15 border-crimson/40 text-crimson"
                            : "border-crimson/5 text-smoke/70 hover:border-crimson/20 hover:text-bone"
                          }`}
                      >
                        {c.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Placement */}
              <AnimatedSection delay={0.3}>
                <div className="glass rounded-xl p-6 border border-crimson/5">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center">
                      <MapPin size={16} className="text-crimson" />
                    </div>
                    <h3 className="text-sm font-display font-semibold text-bone tracking-wider uppercase">
                      Body Placement
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {bodyPlacements.map((p) => (
                      <motion.button
                        key={p.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedPlacement(p.id)}
                        className={`text-left px-4 py-3 rounded-lg text-sm font-display transition-all duration-300 border ${selectedPlacement === p.id
                            ? "bg-crimson/15 border-crimson/40 text-crimson"
                            : "border-crimson/5 text-smoke/70 hover:border-crimson/20 hover:text-bone"
                          }`}
                      >
                        <span className="font-medium">{p.label}</span>
                        <span className="flex items-center gap-1 text-xs mt-0.5">
                          <span className="opacity-40">Pain:</span>
                          <span className={painColor(p.painLevel)}>
                            {"●".repeat(Math.ceil(p.painLevel / 2))}
                            {"○".repeat(5 - Math.ceil(p.painLevel / 2))}
                          </span>
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Results Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <AnimatedSection direction="right">
                  <div className="glass rounded-2xl p-8 border border-crimson/10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-heading font-bold text-bone">
                        Your Estimate
                      </h3>
                      {allSelected && (
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          whileHover={{ scale: 1.1 }}
                          onClick={handleReset}
                          className="text-smoke/40 hover:text-crimson transition-colors"
                          title="Reset"
                        >
                          <RotateCcw size={16} />
                        </motion.button>
                      )}
                    </div>

                    <AnimatePresence mode="wait">
                      {estimate ? (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {/* Price */}
                          <div className="text-center mb-6">
                            <motion.div
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring" }}
                            >
                              <span className="text-4xl md:text-5xl font-heading font-bold text-gradient-crimson">
                                ₹{estimate.low}
                              </span>
                              <span className="text-lg text-smoke/40 mx-2">—</span>
                              <span className="text-4xl md:text-5xl font-heading font-bold text-gradient-crimson">
                                ₹{estimate.high}
                              </span>
                            </motion.div>
                            <p className="text-xs text-smoke/40 font-display mt-2">
                              Estimated price range
                            </p>
                          </div>

                          <div className="line-crimson my-5" />

                          {/* Details */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-smoke/50 font-display flex items-center gap-2">
                                <Clock size={14} className="text-crimson" />
                                Time Estimate
                              </span>
                              <span className="text-bone font-display font-medium">
                                {estimate.timeEstimate}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-smoke/50 font-display flex items-center gap-2">
                                <MapPin size={14} className="text-crimson" />
                                Placement
                              </span>
                              <span className="text-bone font-display font-medium">
                                {estimate.placement}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-smoke/50 font-display flex items-center gap-2">
                                <AlertTriangle size={14} className="text-crimson" />
                                Pain Level
                              </span>
                              <span className={`font-display font-medium ${painColor(estimate.painLevel)}`}>
                                {painLabel(estimate.painLevel)} ({estimate.painLevel}/10)
                              </span>
                            </div>
                          </div>

                          <div className="line-crimson my-5" />

                          {/* CTA */}
                          <Link href="/booking">
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full py-4 bg-crimson text-charcoal-dark font-display font-bold text-sm rounded-xl hover:bg-crimson-light transition-all duration-300 glow-crimson flex items-center justify-center gap-2"
                            >
                              Book Now
                              <ArrowRight size={16} />
                            </motion.div>
                          </Link>

                          {/* Disclaimer */}
                          <p className="text-[10px] text-smoke/30 font-display mt-4 text-center leading-relaxed">
                            * This is an approximate estimate. Final pricing depends on design complexity, artist, and consultation. Get an exact quote during your free Enquiry.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="empty"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-center py-8"
                        >
                          <IndianRupee size={40} className="text-crimson/20 mx-auto mb-4" />
                          <p className="text-sm text-smoke/40 font-display">
                            Select all options to see your estimate
                          </p>
                          <div className="mt-4 space-y-2">
                            {[
                              { done: !!selectedSize, label: "Size" },
                              { done: !!selectedComplexity, label: "Detail Level" },
                              { done: !!selectedColor, label: "Color" },
                              { done: !!selectedPlacement, label: "Placement" },
                            ].map((item) => (
                              <div
                                key={item.label}
                                className="flex items-center gap-2 text-xs font-display justify-center"
                              >
                                {item.done ? (
                                  <CheckCircle size={12} className="text-crimson" />
                                ) : (
                                  <div className="w-3 h-3 rounded-full border border-smoke/20" />
                                )}
                                <span className={item.done ? "text-crimson" : "text-smoke/30"}>
                                  {item.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
