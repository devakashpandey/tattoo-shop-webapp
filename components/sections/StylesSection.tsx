"use client";

// ============================================================
// StylesSection — Featured tattoo styles with hover cards
// ============================================================

import Image from "next/image";
import { motion } from "framer-motion";
import { tattooStyles } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function StylesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Our Expertise"
          title="Tattoo Styles"
          description="From photorealistic portraits to delicate fine-line art, our artists master every technique."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tattooStyles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-gold/5 hover:border-gold/20 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Price badge */}
                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full">
                  <span className="text-xs font-display font-semibold text-gold">
                    {style.priceRange}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-bone mb-2 group-hover:text-gold transition-colors duration-300">
                  {style.name}
                </h3>
                <p className="text-sm text-smoke/60 leading-relaxed font-display">
                  {style.description}
                </p>

                {/* Hover reveal line */}
                <motion.div className="mt-4 h-[1px] bg-gold/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
