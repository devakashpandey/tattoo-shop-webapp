"use client";

// ============================================================
// Gallery Page — Masonry grid with filter & hover effects
// ============================================================

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
    }
  }, [selectedImageIndex]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [selectedImageIndex]);

  const currentItem = selectedImageIndex !== null ? galleryItems[selectedImageIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, nextImage, prevImage, closeLightbox]);

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center relative z-10">
          <SectionHeading
            subtitle="Portfolio"
            title="Our Gallery"
            description="Browse our collection of custom tattoo work. Every piece is a testament to our artists' skill and our clients' trust."
          />
        </div>
      </section>


      <section className="pb-16 md:pb-20">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden cursor-pointer bg-charcoal-light/30"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 4}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-crimson/30 flex items-center justify-center text-crimson hover:bg-crimson/10 transition-colors z-[60]"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </motion.button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-crimson/30 flex items-center justify-center text-crimson hover:bg-crimson/10 transition-colors z-[60]"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-crimson/30 flex items-center justify-center text-crimson hover:bg-crimson/10 transition-colors z-[60]"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  width={1400}
                  height={1000}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-bone font-display font-medium text-lg">{currentItem.alt}</p>
                <p className="text-crimson/80 font-display mt-1">Artist: {currentItem.artist}</p>
                <p className="text-smoke/50 text-xs mt-4">
                  { (selectedImageIndex || 0) + 1 } / { galleryItems.length }
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
