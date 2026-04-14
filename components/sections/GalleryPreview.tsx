"use client";

// ============================================================
// GalleryPreview — Instagram-style grid preview for homepage
// ============================================================

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryItems } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink } from "lucide-react";

export default function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="relative py-24 md:py-32 bg-charcoal-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Portfolio"
          title="Our Work"
          description="Every tattoo tells a story. Here are some of our favorites."
        />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                >
                  <ExternalLink size={24} className="text-gold mx-auto mb-2" />
                  <p className="text-xs text-bone font-display">{item.category}</p>
                  <p className="text-[10px] text-smoke/60 font-display">by {item.artist}</p>
                </motion.div>
              </div>
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
          <Link href="/gallery">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold/30 text-gold font-display font-semibold text-sm rounded-full hover:bg-gold/10 transition-all duration-300 tracking-wide uppercase"
            >
              View Full Gallery
              <ExternalLink size={14} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
