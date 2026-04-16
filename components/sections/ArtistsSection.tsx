"use client";

// ============================================================
// ArtistsSection — Single artist showcase with full biography
// ============================================================

import Image from "next/image";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Award, Clock } from "lucide-react";

export default function ArtistsSection() {
  const artist = artists[0]; // Currently only one artist

  if (!artist) return null;

  return (
    <section className="relative py-16 md:py-20 bg-charcoal-dark/50 overflow-hidden" id="artist">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-crimson/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <SectionHeading
          subtitle="The Artist"
          title="Meet the Master"
          description="Every masterpiece starts with a vision. Meet the hands that bring those visions to life."
        />

        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Artist Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative h-[400px] md:h-[650px] rounded-2xl overflow-hidden group">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-80" />
              </div>

            </motion.div>
          </div>

          {/* Artist Info */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-crimson/50" />
                <span className="text-xs tracking-[0.4em] uppercase text-crimson font-display font-bold">
                  {artist.role}
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-bone mb-8">
                {artist.name}
              </h2>

              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex items-center gap-4 bg-white/5 px-5 py-3 rounded-2xl border border-crimson/10">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-crimson" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-smoke/50 font-display">Experience</p>
                    <p className="text-sm text-bone font-display font-bold">{artist.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 px-5 py-3 rounded-2xl border border-crimson/10">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center shrink-0">
                    <Award size={18} className="text-crimson" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-smoke/50 font-display">Status</p>
                    <p className="text-sm text-bone font-display font-bold">Certified Professional</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-smoke/80 leading-relaxed font-display mb-10 max-w-xl">
                {artist.bio}
              </p>

              {/* Specialties Section */}
              <div className="mb-12">
                <p className="text-[10px] uppercase tracking-[0.3em] text-smoke/40 font-display font-bold mb-5 flex items-center gap-3">
                   Expertise 
                  <span className="h-[1px] flex-1 bg-crimson/10" />
                </p>
                <div className="flex flex-wrap gap-3">
                  {artist.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs tracking-wider uppercase px-5 py-3 rounded-xl border border-crimson/15 text-crimson font-display font-semibold bg-crimson/5 hover:bg-crimson/10 transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <motion.a
                  href="/booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4.5 bg-crimson text-charcoal-dark font-display font-bold text-sm tracking-[0.2em] uppercase rounded-full shadow-2xl shadow-crimson/20 hover:bg-crimson-light transition-all text-center min-w-[220px]"
                >
                  Book Session
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
