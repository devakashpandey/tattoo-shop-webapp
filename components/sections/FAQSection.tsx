"use client";

// ============================================================
// FAQSection — Simple accordion for common questions
// Focuses on the top 6 most common questions
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  
  // Get top 6 FAQs
  const commonFaqs = faqItems.slice(0, 6);

  return (
    <section className="relative py-16 md:py-20 bg-charcoal">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-crimson/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Common Questions"
          title="Curious About Tattoos?"
          description="Everything you need to know before your first (or next) masterpiece."
        />

        <div className="mt-12 space-y-4">
          {commonFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                openId === faq.id 
                  ? "border-crimson/30 bg-crimson/5 shadow-xl shadow-black/20" 
                  : "border-crimson/10 hover:border-crimson/20"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <div className="flex items-start gap-4 pr-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    openId === faq.id ? "bg-crimson text-charcoal-dark" : "bg-crimson/10 text-crimson group-hover:bg-crimson/20"
                  }`}>
                    <HelpCircle size={18} />
                  </div>
                  <h3 className={`text-base md:text-lg font-display font-bold transition-colors ${
                    openId === faq.id ? "text-crimson" : "text-bone"
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`shrink-0 ${openId === faq.id ? "text-crimson" : "text-smoke/40"}`}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 pl-[4.5rem] md:pl-[5.5rem]">
                      <div className="h-[1px] bg-crimson/20 mb-6" />
                      <p className="text-sm md:text-base text-smoke/70 font-display leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA below FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-8 md:p-12 text-center border border-crimson/10 relative overflow-hidden group hover:border-crimson/30 transition-colors"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/5 blur-3xl -translate-y-16 translate-x-16 rounded-full group-hover:bg-crimson/10 transition-colors" />
          
          <MessageCircle size={40} className="text-crimson mx-auto mb-6" />
          <h3 className="text-2xl font-heading font-bold text-bone mb-4">
            Still Have Questions?
          </h3>
          <p className="text-sm md:text-base text-smoke/60 font-display mb-8 max-w-lg mx-auto">
            Can&apos;t find what you&apos;re looking for? Reach out to us directly for personalized answers about your tattoo journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-crimson text-charcoal-dark font-display font-bold text-sm tracking-widest uppercase rounded-full shadow-lg shadow-crimson/10 hover:bg-crimson-light transition-all min-w-[180px]"
            >
              Contact Us
            </motion.a>
            <motion.a
              href="https://wa.me/919304328528"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-[#25D366]/30 text-[#25D366] font-display font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#25D366]/5 transition-all min-w-[180px]"
            >
              WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
