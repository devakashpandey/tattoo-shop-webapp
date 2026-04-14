"use client";

// ============================================================
// Services Page — Service cards, pricing, and aftercare
// ============================================================

import { motion } from "framer-motion";
import { services, aftercareSteps } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Shield, Sparkles, Droplets, Sun, Hand } from "lucide-react";
import Link from "next/link";

const aftercareIcons = [Shield, Droplets, Sparkles, Sun, Hand];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Services"
            description="From custom designs to full sleeve packages — every service is delivered with precision, care, and uncompromising quality."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6, borderColor: "rgba(201, 168, 76, 0.3)" }}
                  className="h-full glass rounded-xl p-8 border border-gold/5 transition-all duration-500 flex flex-col"
                >
                  {/* Icon */}
                  <span className="text-3xl mb-6 block">{service.icon}</span>

                  {/* Title & Price */}
                  <h3 className="text-xl font-heading font-bold text-bone mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-display font-semibold text-gold">
                      {service.priceRange}
                    </span>
                    <span className="text-xs text-smoke/40 font-display">
                      · {service.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-smoke/60 leading-relaxed font-display mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-smoke/70 font-display"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/booking">
                    <motion.span
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center gap-2 text-sm text-gold font-display font-semibold hover:text-gold-light transition-colors"
                    >
                      Book Now
                      <ArrowRight size={14} />
                    </motion.span>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-24 md:py-32 bg-charcoal-dark/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Post-Session"
            title="Aftercare Guide"
            description="Proper aftercare ensures your tattoo heals beautifully. Follow these steps for the best results."
          />

          <div className="space-y-6">
            {aftercareSteps.map((item, index) => {
              const Icon = aftercareIcons[index % aftercareIcons.length];
              return (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-6 glass rounded-xl p-6 border border-gold/5 hover:border-gold/15 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-display font-bold text-gold">
                          Step {item.step}
                        </span>
                        <h3 className="text-lg font-heading font-bold text-bone">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-smoke/60 leading-relaxed font-display">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
