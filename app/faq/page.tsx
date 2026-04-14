"use client";

// ============================================================
// FAQ Page — Accordion-style knowledge base
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { faqItems, faqCategories } from "@/lib/data";
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqItems.filter((faq) => {
    const matchesCategory =
      activeFilter === "all" || faq.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="Knowledge Base"
            title="Frequently Asked Questions"
            description="Everything you need to know about getting a tattoo at Ink & Soul. Can't find your answer? Contact us directly."
          />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <AnimatedSection delay={0}>
            <div className="relative mb-8">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-white/5 border border-gold/10 rounded-xl pl-12 pr-4 py-4 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
          </AnimatedSection>

          {/* Category Filters */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {faqCategories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-display font-medium tracking-wider uppercase transition-all duration-300 ${
                    activeFilter === cat.id
                      ? "bg-gold text-charcoal-dark"
                      : "border border-gold/20 text-smoke/70 hover:text-bone hover:border-gold/40"
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <AnimatedSection key={faq.id} delay={index * 0.05}>
                <motion.div
                  className={`glass rounded-xl border transition-all duration-300 overflow-hidden ${
                    openId === faq.id
                      ? "border-gold/20"
                      : "border-gold/5 hover:border-gold/15"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenId(openId === faq.id ? null : faq.id)
                    }
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <div className="flex items-start gap-4 pr-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <HelpCircle size={14} className="text-gold" />
                      </div>
                      <h3 className="text-sm md:text-base font-display font-semibold text-bone leading-relaxed">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={18} className="text-gold" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.25rem]">
                          <div className="h-[1px] bg-gold/10 mb-4" />
                          <p className="text-sm text-smoke/70 font-display leading-relaxed">
                            {faq.answer}
                          </p>
                          <span className="inline-block mt-3 text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-gold/10 text-gold/50 font-display">
                            {faqCategories.find((c) => c.id === faq.category)?.label}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedSection>
            ))}

            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search size={40} className="text-gold/20 mx-auto mb-4" />
                <p className="text-sm text-smoke/40 font-display">
                  No questions found matching your search.
                </p>
              </motion.div>
            )}
          </div>

          {/* Still have questions CTA */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 glass rounded-2xl p-8 md:p-12 text-center border border-gold/10">
              <MessageCircle size={32} className="text-gold mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-bone mb-3">
                Still Have Questions?
              </h3>
              <p className="text-sm text-smoke/60 font-display mb-6 max-w-md mx-auto">
                Can&apos;t find what you&apos;re looking for? Our team is always happy to help. Reach out via any channel.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal-dark font-display font-bold text-sm rounded-full hover:bg-gold-light transition-all"
                  >
                    Contact Us
                    <ArrowRight size={14} />
                  </motion.span>
                </Link>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-display font-bold text-sm rounded-full hover:bg-[#20BD5A] transition-all"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </motion.span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
