"use client";

// ============================================================
// Contact Page — Contact info, map placeholder, social links
// ============================================================

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Ink Street, Art District\nLos Angeles, CA 90001",
    action: "Get Directions",
    href: "#",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    action: "Call Now",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@inkandsoul.com",
    action: "Send Email",
    href: "mailto:hello@inkandsoul.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon-Sat: 10AM - 8PM\nSunday: By Appointment",
    action: null,
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", handle: "@inkandsoul.la", href: "#" },
  { icon: Twitter, label: "X (Twitter)", handle: "@inkandsoul", href: "#" },
  { icon: Youtube, label: "YouTube", handle: "Ink & Soul Studio", href: "#" },
];

export default function ContactPage() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="Get in Touch"
            title="Contact Us"
            description="Have a question, want to discuss a design, or ready to book? We're here to help."
          />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info + Map */}
            <div>
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <AnimatedSection key={info.label} delay={index * 0.1}>
                    <div className="glass rounded-xl p-6 border border-gold/5 hover:border-gold/15 transition-all duration-300 h-full">
                      <info.icon size={20} className="text-gold mb-3" />
                      <h4 className="text-xs font-display font-semibold text-gold tracking-wider uppercase mb-2">
                        {info.label}
                      </h4>
                      <p className="text-sm text-bone font-display whitespace-pre-line leading-relaxed">
                        {info.value}
                      </p>
                      {info.action && (
                        <a
                          href={info.href || "#"}
                          className="inline-flex items-center gap-1 mt-3 text-xs text-gold/70 hover:text-gold font-display transition-colors"
                        >
                          {info.action}
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Map Placeholder */}
              <AnimatedSection delay={0.3}>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-charcoal border border-gold/10">
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                    <MapPin size={32} className="text-gold/40" />
                    <p className="text-sm text-smoke/40 font-display">
                      Interactive Map
                    </p>
                    <p className="text-xs text-smoke/20 font-display">
                      123 Ink Street, Art District, LA
                    </p>
                  </div>
                  {/* Decorative grid */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                      backgroundImage: "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }} />
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Links */}
              <AnimatedSection delay={0.4}>
                <div className="mt-8">
                  <h4 className="text-xs font-display font-semibold text-gold tracking-wider uppercase mb-4">
                    Follow Us
                  </h4>
                  <div className="flex flex-col gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="flex items-center gap-4 glass rounded-lg px-5 py-3 border border-gold/5 hover:border-gold/20 transition-all duration-300 group"
                      >
                        <social.icon size={18} className="text-gold" />
                        <div>
                          <p className="text-sm text-bone font-display font-medium group-hover:text-gold transition-colors">
                            {social.label}
                          </p>
                          <p className="text-xs text-smoke/50 font-display">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* WhatsApp CTA */}
              <AnimatedSection delay={0.5}>
                <motion.a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-display font-bold text-sm rounded-xl hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </motion.a>
              </AnimatedSection>
            </div>

            {/* Right: Contact Form */}
            <AnimatedSection direction="right">
              <div className="glass rounded-2xl p-8 md:p-10 border border-gold/5">
                <h3 className="text-2xl font-heading font-bold text-bone mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-smoke/50 font-display mb-8">
                  We&apos;ll get back to you within 24 hours.
                </p>

                {formSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                      <Mail size={24} className="text-gold" />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-bone mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-sm text-smoke/60 font-display">
                      Thank you for reaching out. We&apos;ll respond shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSent(false);
                        setFormName("");
                        setFormEmail("");
                        setFormMessage("");
                      }}
                      className="mt-6 text-sm text-gold font-display font-semibold hover:text-gold-light transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-display font-semibold text-smoke/50 tracking-wider uppercase mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-gold/10 rounded-lg px-4 py-3 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-gold/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-display font-semibold text-smoke/50 tracking-wider uppercase mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-gold/10 rounded-lg px-4 py-3 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-gold/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-display font-semibold text-smoke/50 tracking-wider uppercase mb-2 block">
                        Your Message
                      </label>
                      <textarea
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Tell us about your idea or ask any questions..."
                        rows={5}
                        className="w-full bg-white/5 border border-gold/10 rounded-lg px-4 py-3 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormSent(true)}
                      className="w-full py-4 bg-gold text-charcoal-dark font-display font-bold text-sm rounded-lg hover:bg-gold-light transition-all duration-300 glow-gold"
                    >
                      Send Message
                    </motion.button>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
