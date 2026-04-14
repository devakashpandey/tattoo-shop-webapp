"use client";

// ============================================================
// ArtistsSection — Artist showcase cards with hover reveal
// ============================================================

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Instagram } from "lucide-react";

export default function ArtistsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="The Creators"
          title="Meet Our Artists"
          description="Every piece is a collaboration between your vision and our artists' mastery."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <Link href={`/artists#${artist.id}`}>
                {/* Image Container */}
                <div className="relative h-[450px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {artist.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-gold/30 text-gold font-display"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-smoke/60 font-display opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
                      {artist.bio}
                    </p>
                  </div>

                  {/* Instagram badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Instagram size={16} className="text-gold" />
                  </motion.div>
                </div>

                {/* Artist Info */}
                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-bone group-hover:text-gold transition-colors duration-300">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-smoke/60 font-display mt-1">
                    {artist.role}
                  </p>
                  <p className="text-xs text-gold/60 font-display mt-1">
                    {artist.experience} experience
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/artists">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 border border-gold/30 text-gold font-display font-semibold text-sm rounded-full hover:bg-gold/10 transition-all duration-300 tracking-wide uppercase"
            >
              View All Artists
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
