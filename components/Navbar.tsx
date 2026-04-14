"use client";

// ============================================================
// Navbar — Sticky, glass morphism, animated navigation bar
// Includes mobile hamburger menu with smooth transitions
// "More" dropdown for extra feature pages
// ============================================================

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, featureLinks } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
  }, [pathname]);

  // Close "More" dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const featureHrefs = featureLinks.map((l) => l.href);
  const isFeaturePageActive = featureHrefs.includes(pathname);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <span className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold tracking-wider">
                INK & SOUL
              </span>
              <span className="block text-[10px] md:text-xs tracking-[0.3em] text-smoke uppercase font-display">
                Tattoo Studio
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-between ml-12">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isBooking = link.href === "/booking";

                if (isBooking) return null;

                return (
                  <Link key={link.href} href={link.href} className="group/nav">
                    <motion.span
                      whileHover={{ y: -1 }}
                      className={`relative px-3 py-2 text-xs font-display font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                        isActive ? "text-gold" : "text-bone/60 hover:text-gold"
                      }`}
                    >
                      {link.label}
                      <motion.span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gold rounded-full transition-all duration-300 ${
                          isActive ? "w-6 opacity-100" : "w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:opacity-50"
                        }`}
                      />
                    </motion.span>
                  </Link>
                );
              })}

              {/* More Dropdown */}
              <div ref={moreRef} className="relative">
                <motion.button
                  whileHover={{ y: -1 }}
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className={`flex items-center gap-1 px-3 py-2 text-xs font-display font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                    isFeaturePageActive || isMoreOpen
                      ? "text-gold"
                      : "text-bone/60 hover:text-gold"
                  }`}
                >
                  More
                  <motion.span
                    animate={{ rotate: isMoreOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={12} />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-72 bg-charcoal-dark border border-gold/20 rounded-xl overflow-hidden shadow-2xl shadow-black z-50"
                    >
                      <div className="p-2">
                        {featureLinks.map((link) => {
                          const isActive = pathname === link.href;
                          return (
                            <Link key={link.href} href={link.href}>
                              <motion.div
                                whileHover={{ x: 4 }}
                                className={`flex items-start ${link.icon ? "gap-3" : ""} px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gold/5 ${
                                  isActive ? "bg-gold/10" : ""
                                }`}
                              >
                                {link.icon && <span className="text-lg mt-0.5">{link.icon}</span>}
                                <div>
                                  <span
                                    className={`text-sm font-display font-semibold block ${
                                      isActive ? "text-gold" : "text-bone"
                                    }`}
                                  >
                                    {link.label}
                                  </span>
                                  <span className="text-xs text-smoke/40 font-display">
                                    {link.description}
                                  </span>
                                </div>
                              </motion.div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className="flex items-center">
              {navLinks.filter(l => l.href === "/booking").map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-gold text-charcoal-dark font-display font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 glow-gold"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-bone hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-charcoal-dark border-l border-gold/10 flex flex-col pt-24 px-8 overflow-y-auto"
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 text-lg font-display font-medium border-b border-white/5 transition-colors ${
                        isActive ? "text-gold" : "text-bone/70 hover:text-bone"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Feature Links in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
              >
                <p className="text-xs text-gold tracking-[0.2em] uppercase font-display font-semibold mt-6 mb-3">
                  Tools & Resources
                </p>
                {featureLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + i) * 0.05 + 0.15 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 py-2.5 text-base font-display font-medium border-b border-white/5 transition-colors ${
                          isActive ? "text-gold" : "text-bone/60 hover:text-bone"
                        }`}
                      >
                        {link.icon && <span className="text-base">{link.icon}</span>}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Social links in mobile menu */}
              <div className="mt-auto pb-8">
                <div className="line-gold mb-6" />
                <p className="text-xs text-smoke font-display tracking-widest uppercase mb-3">Follow Us</p>
                <div className="flex gap-4 text-bone/50">
                  <span className="hover:text-gold cursor-pointer transition-colors text-sm">Instagram</span>
                  <span className="hover:text-gold cursor-pointer transition-colors text-sm">TikTok</span>
                  <span className="hover:text-gold cursor-pointer transition-colors text-sm">X</span>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
