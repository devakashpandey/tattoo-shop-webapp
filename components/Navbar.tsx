"use client";

// ============================================================
// Navbar — Sticky, glass morphism, animated navigation bar
// Includes mobile hamburger menu with smooth transitions
// ============================================================

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo — Left */}
          <Link href="/" className="group flex items-center gap-2 shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <span className="text-xl md:text-2xl font-heading font-bold text-gradient-crimson tracking-wider">
                TATTOO HOUSE
              </span>
              <span className="block text-[8px] md:text-[10px] tracking-[0.3em] text-smoke uppercase font-display">
                Tattoo Studio
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation — Center */}
          <div className="hidden lg:flex flex-1 items-center justify-center px-8">
            <nav className="flex items-center gap-2 xl:gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isBooking = link.href === "/booking";

                if (isBooking) return null;

                return (
                  <Link key={link.href} href={link.href} className="group/nav">
                    <motion.span
                      whileHover={{ y: -1 }}
                      className={`relative px-2 py-2 text-[10px] xl:text-xs font-display font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                        isActive ? "text-crimson" : "text-bone/60 hover:text-crimson"
                      }`}
                    >
                      {link.label}
                      <motion.span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-crimson rounded-full transition-all duration-300 ${
                          isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover/nav:w-3 group-hover/nav:opacity-50"
                        }`}
                      />
                    </motion.span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Action Button — Right */}
          <div className="hidden lg:flex items-center shrink-0">
            {navLinks.filter(l => l.href === "/booking").map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-crimson text-charcoal-dark font-display font-bold text-[11px] tracking-widest uppercase rounded-full transition-all duration-300 glow-crimson shadow-lg shadow-crimson/20"
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>


          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-bone hover:text-crimson transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 1 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-charcoal-dark border-l border-crimson/10 flex flex-col pt-0 overflow-hidden shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <div className="flex flex-col">
                  <span className="text-xl font-heading font-bold text-gradient-crimson tracking-wider">
                    TATTOO HOUSE
                  </span>
                  <span className="text-[8px] tracking-[0.3em] text-smoke uppercase font-display">
                    Tattoo Studio
                  </span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-smoke hover:text-crimson transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col px-8 py-10 gap-2 overflow-y-auto">
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
                        className={`block py-4 text-xl font-display font-medium border-b border-white/5 transition-colors ${
                          isActive ? "text-crimson" : "text-bone/70 hover:text-bone"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Menu Footer */}
              <div className="mt-auto p-8 bg-black/20">
                <p className="text-[10px] text-smoke/50 font-display tracking-widest uppercase mb-4">Crafting Bespoke Art</p>
                <div className="flex gap-6">
                  <a href="https://instagram.com" className="text-xs text-bone/60 hover:text-crimson transition-colors font-display">Insta</a>
                  <a href="https://wa.me/919304328528" className="text-xs text-bone/60 hover:text-crimson transition-colors font-display">WhatsApp</a>
                  <a href="mailto:contact@tattoohouse.com" className="text-xs text-bone/60 hover:text-crimson transition-colors font-display">Email</a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
