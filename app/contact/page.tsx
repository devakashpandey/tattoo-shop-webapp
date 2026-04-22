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
    value: "Babu bajar mod, Mahadeva Road\nArrah, Bihar 802301",
    action: "Get Directions",
    href: "https://maps.app.goo.gl/3UtEBRzV4MfQ9Tzq8",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9304328528",
    action: "Call Now",
    href: "tel:+919304328528",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@tattoohouse.com",
    action: "Send Email",
    href: "mailto:contact@tattoohouse.com",
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
  { icon: Instagram, label: "Instagram", handle: "@tattoohouseara", href: "https://www.instagram.com/tattoohouseara" },
];

export default function ContactPage() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  const handleSendMessage = () => {
    if (!formName || !formEmail || !formMessage) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const messageContent = `*New Inquiry from International Tattoo House Website*%0A%0A*Name:* ${formName}%0A*Email:* ${formEmail}%0A*Message:* ${formMessage}`;
    const whatsappUrl = `https://wa.me/919304328528?text=${messageContent}`;
    
    window.open(whatsappUrl, "_blank");
    setFormSent(true);
  };

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="Get in Touch"
            title="Contact Us"
            description="Have a question, want to discuss a design, or ready to book? We're here to help."
          />
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info + Map */}
            <div>
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <AnimatedSection key={info.label} delay={index * 0.1}>
                    <div className="glass rounded-xl p-6 border border-crimson/5 hover:border-crimson/15 transition-all duration-300 h-full">
                      <info.icon size={20} className="text-crimson mb-3" />
                      <h4 className="text-xs font-display font-semibold text-crimson tracking-wider uppercase mb-2">
                        {info.label}
                      </h4>
                      <p className="text-sm text-bone font-display whitespace-pre-line leading-relaxed">
                        {info.value}
                      </p>
                      {info.action && (
                        <a
                          href={info.href || "#"}
                          className="inline-flex items-center gap-1 mt-3 text-xs text-crimson/70 hover:text-crimson font-display transition-colors"
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
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-charcoal border border-crimson/10">
                  <a 
                    href="https://maps.app.goo.gl/3UtEBRzV4MfQ9Tzq8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 block"
                    title="Open in Google Maps"
                  />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.741!2d84.6699!3d25.5609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f5a892e8fa7%3A0x7d00f9599580ef13!2sTatoo%20House!5e0!3m2!1sen!2sin!4v1713280800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </AnimatedSection>              {/* WhatsApp CTA moved from here if needed, but I'll keep it as a button below everything on left or right? User said just insta below message box. */}
              <AnimatedSection delay={0.5}>
                <motion.a
                  href="https://wa.me/919304328528"
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
              <div className="glass rounded-2xl p-8 md:p-10 border border-crimson/5">
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
                    <div className="w-16 h-16 rounded-full bg-crimson/20 flex items-center justify-center mx-auto mb-4">
                      <Mail size={24} className="text-crimson" />
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
                      className="mt-6 text-sm text-crimson font-display font-semibold hover:text-crimson-light transition-colors"
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
                        placeholder="Satish Keshri"
                        className="w-full bg-white/5 border border-crimson/10 rounded-lg px-4 py-3 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-crimson/40 transition-colors"
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
                        placeholder="satish@gmail.com"
                        className="w-full bg-white/5 border border-crimson/10 rounded-lg px-4 py-3 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-crimson/40 transition-colors"
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
                        className="w-full bg-white/5 border border-crimson/10 rounded-lg px-4 py-3 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-crimson/40 transition-colors resize-none"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSendMessage}
                      className="w-full py-4 bg-crimson text-charcoal-dark font-display font-bold text-sm rounded-lg hover:bg-crimson-light transition-all duration-300 glow-crimson"
                    >
                      Send Message
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Social Links (Follow Us) - Moved here below the form */}
              <AnimatedSection delay={0.6}>
                <div className="mt-8">
                  <h4 className="text-xs font-display font-semibold text-crimson tracking-wider uppercase mb-4">
                    Follow Us
                  </h4>
                  <div className="flex flex-col gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 glass rounded-xl px-6 py-4 border border-crimson/5 hover:border-crimson/20 transition-all duration-300 group"
                      >
                        <social.icon size={20} className="text-crimson" />
                        <div>
                          <p className="text-md text-bone font-display font-semibold group-hover:text-crimson transition-colors">
                            {social.label}
                          </p>
                          <p className="text-xs text-smoke/50 font-display uppercase tracking-widest">
                            {social.handle}
                          </p>
                        </div>
                        <ExternalLink size={14} className="ml-auto text-smoke/20 group-hover:text-crimson transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
