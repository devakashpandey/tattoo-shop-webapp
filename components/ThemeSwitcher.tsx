"use client";

// ============================================================
// ThemeSwitcher — Floating color theme selector
// 5 themes: Gold, Crimson, Cyan, Emerald, Violet
// ============================================================

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

const themes = [
  { id: "gold", label: "Gold", color: "#C9A84C", desc: "Classic Luxury" },
  { id: "crimson", label: "Crimson", color: "#DC2626", desc: "Bold & Edgy" },
  { id: "cyan", label: "Cyan", color: "#06B6D4", desc: "Electric Neon" },
  { id: "emerald", label: "Emerald", color: "#10B981", desc: "Nature Ink" },
  { id: "violet", label: "Violet", color: "#A855F7", desc: "Mystic Art" },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("gold");
  const ref = useRef<HTMLDivElement>(null);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("ink-soul-theme") || "gold";
    setActiveTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchTheme = (themeId: string) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("ink-soul-theme", themeId);
    setIsOpen(false);
  };

  const currentTheme = themes.find((t) => t.id === activeTheme) || themes[0];

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {/* Theme Picker Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-52 bg-charcoal-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/60"
          >
            <div className="px-4 pt-4 pb-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-smoke/50 font-display font-semibold">
                Choose Theme
              </p>
            </div>
            <div className="px-2 pb-3 space-y-0.5">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  whileHover={{ x: 3 }}
                  onClick={() => switchTheme(theme.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                    activeTheme === theme.id
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  }`}
                >
                  {/* Color dot */}
                  <div
                    className="w-4 h-4 rounded-full shrink-0 border-2 transition-all"
                    style={{
                      backgroundColor: theme.color,
                      borderColor: activeTheme === theme.id ? theme.color : "white",
                      boxShadow:
                        activeTheme === theme.id
                          ? `0 0 10px ${theme.color}60`
                          : "none",
                    }}
                  />
                  <div>
                    <span
                      className={`text-sm font-display font-semibold block leading-tight ${
                        activeTheme === theme.id
                          ? "text-bone"
                          : "text-bone/60"
                      }`}
                    >
                      {theme.label}
                    </span>
                    <span className="text-[10px] text-smoke/40 font-display">
                      {theme.desc}
                    </span>
                  </div>
                  {activeTheme === theme.id && (
                    <motion.div
                      layoutId="theme-check"
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: theme.color }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-charcoal-dark border border-white/10 flex items-center justify-center shadow-xl shadow-black/40 hover:border-white/20 transition-all group"
        aria-label="Change theme color"
      >
        <div
          className="w-5 h-5 rounded-full transition-all"
          style={{
            backgroundColor: currentTheme.color,
            boxShadow: `0 0 12px ${currentTheme.color}50`,
          }}
        />
      </motion.button>
    </div>
  );
}
