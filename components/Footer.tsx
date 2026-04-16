"use client";

// ============================================================
// Footer — Luxury footer with crimson accents, links, newsletter
// ============================================================

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Services", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Booking", href: "/booking" },
    { label: "Contact", href: "/contact" },
  ],
  tools: [
    { label: "Price Estimator", href: "/estimator" },
    { label: "Before & After", href: "/transformations" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/tattoohouseara", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-dark border-t border-crimson/10">
      {/* Decorative line */}
      <div className="line-crimson" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-gradient-crimson mb-2">
              TATTOO HOUSE
            </h3>
            <p className="text-xs tracking-[0.3em] text-smoke uppercase font-display mb-4">
              Tattoo Studio
            </p>
            <p className="text-sm text-smoke/80 leading-relaxed mb-6">
              Where art meets skin. Premium tattoo experiences crafted by world-class artists in an environment that redefines luxury.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-crimson/20 flex items-center justify-center text-smoke hover:text-crimson hover:border-crimson/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-sm font-display font-semibold text-crimson tracking-widest uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-smoke/70 hover:text-bone transition-colors duration-300 font-display"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-display font-semibold text-crimson tracking-widest uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-smoke/70 hover:text-bone transition-colors duration-300 font-display"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Links */}
          <div>
            <h4 className="text-sm font-display font-semibold text-crimson tracking-widest uppercase mb-6">
              Tools
            </h4>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-smoke/70 hover:text-bone transition-colors duration-300 font-display"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-display font-semibold text-crimson tracking-widest uppercase mb-6">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-smoke/70">
                <MapPin size={16} className="text-crimson mt-0.5 shrink-0" />
                <a href="https://maps.app.goo.gl/3UtEBRzV4MfQ9Tzq8" target="_blank" rel="noopener noreferrer" className="hover:text-crimson transition-colors">
                  Babu bajar mod, Mahadeva Road<br />Arrah, Bihar 802301
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-smoke/70">
                <Phone size={16} className="text-crimson shrink-0" />
                <a href="tel:+919304328528" className="hover:text-crimson transition-colors">+91 9304328528</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-smoke/70">
                <Mail size={16} className="text-crimson shrink-0" />
                <span>contact@tattoohouse.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-smoke/50 font-display">
                <span className="text-crimson">Mon - Sat:</span> 10AM - 8PM
              </p>
              <p className="text-xs text-smoke/50 font-display">
                <span className="text-crimson">Sunday:</span> By Appointment
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="line-crimson mt-12 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-smoke/40 font-display">
            © 2026 Tattoo House Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
