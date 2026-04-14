"use client";

// ============================================================
// Artists Page — Full artist cards with portfolios
// ============================================================

import Image from "next/image";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { Instagram, Award, Clock } from "lucide-react";

export default function ArtistsPage() {
  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="Our Team"
            title="The Artists"
            description="Each artist brings a unique perspective and decades of combined expertise. Meet the creators behind every masterpiece."
          />
        </div>
      </section>

      {/* Artist Detail Sections */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {artists.map((artist, index) => (
            <AnimatedSection key={artist.id} delay={index * 0.1}>
              <div
                id={artist.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 mb-24 md:mb-32 last:mb-0 items-center`}
              >
                {/* Artist Image */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Instagram badge */}
                    <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-full flex items-center gap-2">
                      <Instagram size={14} className="text-gold" />
                      <span className="text-sm text-bone font-display">{artist.instagram}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Artist Info */}
                <div className="w-full lg:w-1/2">
                  <span className="text-xs tracking-[0.3em] uppercase text-gold font-display font-semibold">
                    {artist.role}
                  </span>
                  <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-bone">
                    {artist.name}
                  </h2>

                  <div className="mt-6 flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-smoke/70 font-display">
                      <Clock size={14} className="text-gold" />
                      {artist.experience}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-smoke/70 font-display">
                      <Award size={14} className="text-gold" />
                      Certified Artist
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-smoke/80 leading-relaxed font-display">
                    {artist.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {artist.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-xs tracking-wider uppercase px-4 py-2 rounded-full border border-gold/20 text-gold font-display hover:bg-gold/10 transition-colors cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Portfolio Preview */}
                  <div className="mt-8">
                    <h4 className="text-xs tracking-[0.2em] uppercase text-smoke/50 font-display mb-4">
                      Selected Work
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {artist.portfolio.map((img, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="relative h-40 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt={`${artist.name} work ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
