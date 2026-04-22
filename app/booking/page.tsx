"use client";

// ============================================================
// Booking Page — Interactive booking form (frontend-only)
// ============================================================

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { artists, tattooStyles, timeSlots } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import {
  CalendarDays,
  Clock,
  User,
  Palette,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic calendar
  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const handleSubmit = () => {
    const artistName = artists.find((a) => a.id === selectedArtist)?.name || "Not selected";
    const styleName = tattooStyles.find((s) => s.id === selectedStyle)?.name || "Not selected";
    const dateStr = selectedDate ? `${months[currentMonth]} ${selectedDate}, ${currentYear}` : "Not selected";
    const timeStr = selectedTime || "Not selected";

    const message = `*NEW BOOKING REQUEST*
--------------------------
Name: ${name || "Not provided"}
Phone: ${phone || "Not provided"}
--------------------------
Artist: ${artistName}
Style: ${styleName}
Date: ${dateStr}
Time: ${timeStr}
--------------------------
Notes: ${notes || "None"}
--------------------------
Sent from International Tattoo House`;

    const phoneNumber = "919304328528";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  const steps = [
    { num: 1, label: "Artist", icon: User },
    { num: 2, label: "Style", icon: Palette },
    { num: 3, label: "Date & Time", icon: CalendarDays },
    { num: 4, label: "Details", icon: CheckCircle },
  ];

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-32 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 rounded-full bg-crimson/20 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={40} className="text-crimson" />
          </motion.div>
          <h2 className="text-3xl font-heading font-bold text-bone mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-sm text-smoke/70 font-display leading-relaxed mb-8">
            Thank you, {name}! Your appointment request has been submitted. We&apos;ll contact you at {phone} to confirm your session.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              setSelectedArtist("");
              setSelectedStyle("");
              setSelectedDate(null);
              setSelectedTime("");
              setName("");
              setPhone("");
              setNotes("");
            }}
            className="px-8 py-3 bg-crimson text-charcoal-dark font-display font-bold text-sm rounded-full hover:bg-crimson-light transition-all duration-300"
          >
            Book Another
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="Schedule Your Session"
            title="Book an Appointment"
            description="Choose your artist, style, and preferred time. We'll confirm your booking within 24 hours."
          />
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => s.num < step && setStep(s.num)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${step >= s.num
                    ? "bg-crimson/20 text-crimson"
                    : "text-smoke/40"
                    }`}
                >
                  <s.icon size={16} />
                  <span className="text-xs font-display font-semibold hidden sm:inline">
                    {s.label}
                  </span>
                </motion.div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-8 md:w-16 h-[1px] mx-1 transition-colors ${step > s.num ? "bg-crimson/40" : "bg-white/10"
                      }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            {/* Step 1: Select Artist */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-heading font-bold text-bone mb-6 text-center">
                  Choose Your Artist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {artists.map((artist) => (
                    <motion.div
                      key={artist.id}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedArtist(artist.id)}
                      className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${selectedArtist === artist.id
                        ? "border-crimson glow-crimson"
                        : "border-transparent hover:border-crimson/20"
                        }`}
                    >
                      <div className="relative h-60">
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-sm font-display font-bold text-bone">
                          {artist.name}
                        </h4>
                        <p className="text-xs text-smoke/60 font-display">
                          {artist.specialties.join(" · ")}
                        </p>
                      </div>
                      {selectedArtist === artist.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3 w-6 h-6 bg-crimson rounded-full flex items-center justify-center"
                        >
                          <CheckCircle size={14} className="text-charcoal-dark" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Style */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-heading font-bold text-bone mb-6 text-center">
                  Select Tattoo Style
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {tattooStyles.map((style) => (
                    <motion.div
                      key={style.id}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${selectedStyle === style.id
                        ? "border-crimson glow-crimson"
                        : "border-transparent hover:border-crimson/20"
                        }`}
                    >
                      <div className="relative h-32">
                        <Image
                          src={style.image}
                          alt={style.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-display font-bold text-bone">
                          {style.name}
                        </span>
                      </div>
                      {selectedStyle === style.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 w-5 h-5 bg-crimson rounded-full flex items-center justify-center"
                        >
                          <CheckCircle size={12} className="text-charcoal-dark" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-heading font-bold text-bone mb-6 text-center">
                  Pick a Date & Time
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div className="glass rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <button 
                        onClick={prevMonth}
                        className="text-smoke hover:text-crimson transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span className="text-sm font-display font-semibold text-bone">
                        {months[currentMonth]} {currentYear}
                      </span>
                      <button 
                        onClick={nextMonth}
                        className="text-smoke hover:text-crimson transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    {/* Weekday headers */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                        <div key={i} className="text-center text-xs text-smoke/40 font-display py-1">
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Days grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {/* Empty cells for first week offset */}
                      {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const cellDate = new Date(currentYear, currentMonth, day);
                        const isPast = cellDate < todayDate;
                        const isSelected = selectedDate === day;
                        const isToday = cellDate.getTime() === todayDate.getTime();

                        return (
                          <motion.button
                            key={day}
                            whileHover={!isPast ? { scale: 1.15 } : {}}
                            whileTap={!isPast ? { scale: 0.9 } : {}}
                            onClick={() => !isPast && setSelectedDate(day)}
                            disabled={isPast}
                            className={`aspect-square rounded-lg text-xs font-display font-medium flex items-center justify-center transition-all duration-200 ${isPast
                              ? "text-smoke/20 cursor-not-allowed"
                              : isSelected
                                ? "bg-crimson text-charcoal-dark font-bold"
                                : isToday
                                  ? "border border-crimson/50 text-crimson"
                                  : "text-smoke/70 hover:bg-crimson/10 hover:text-bone"
                              }`}
                          >
                            {day}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <h4 className="text-sm font-display font-semibold text-smoke/50 mb-4 flex items-center gap-2">
                      <Clock size={14} className="text-crimson" />
                      Available Times (10 AM - 5 PM)
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.filter(s => {
                        // Keep everything but show all 10 AM to 5 PM as available if needed
                        // Actually the user says "10 se 5 sara open ho"
                        // I'll show all and treat them as available
                        const hour = parseInt(s.time);
                        const period = s.time.includes("PM") ? "PM" : "AM";
                        if (period === "AM" && hour === 10) return true;
                        if (period === "AM" && hour < 10) return false;
                        if (period === "PM" && hour <= 5) return true;
                        if (period === "PM" && hour === 12) return true;
                        return false;
                      }).map((slot) => (
                        <motion.button
                          key={slot.time}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`py-3 px-4 rounded-lg text-sm font-display font-medium transition-all duration-200 ${selectedTime === slot.time
                              ? "bg-crimson text-charcoal-dark font-bold underline"
                              : "border border-crimson/10 text-smoke/70 hover:border-crimson/30 hover:text-bone"
                            }`}
                        >
                          {slot.time}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-heading font-bold text-bone mb-6 text-center">
                  Your Details
                </h3>

                <div className="glass rounded-xl p-6 md:p-8 max-w-lg mx-auto">
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-display font-semibold text-smoke/50 tracking-wider uppercase mb-2 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Satish Keshri"
                        className="w-full bg-white/5 border border-crimson/10 rounded-lg px-4 py-3 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-crimson/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-display font-semibold text-smoke/50 tracking-wider uppercase mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 93043 28528"
                        className="w-full bg-white/5 border border-crimson/10 rounded-lg px-4 py-3 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-crimson/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-display font-semibold text-smoke/50 tracking-wider uppercase mb-2 block">
                        Notes / Ideas
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Describe your tattoo idea, placement, size..."
                        rows={4}
                        className="w-full bg-white/5 border border-crimson/10 rounded-lg px-4 py-3 text-sm text-bone font-display placeholder:text-smoke/30 focus:outline-none focus:border-crimson/40 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 pt-6 border-t border-crimson/10">
                    <h4 className="text-xs tracking-wider uppercase text-smoke/40 font-display mb-3">
                      Booking Summary
                    </h4>
                    <div className="space-y-2 text-sm font-display">
                      <div className="flex justify-between">
                        <span className="text-smoke/50">Artist</span>
                        <span className="text-bone">{artists.find((a) => a.id === selectedArtist)?.name || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-smoke/50">Style</span>
                        <span className="text-bone">{tattooStyles.find((s) => s.id === selectedStyle)?.name || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-smoke/50">Phone</span>
                        <span className="text-bone">{phone || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-smoke/50">Date</span>
                        <span className="text-bone">
                          {selectedDate ? `${months[currentMonth]} ${selectedDate}, ${currentYear}` : "—"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-smoke/50">Time</span>
                        <span className="text-bone">{selectedTime || "—"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep((prev) => Math.max(1, prev - 1))}
              className={`px-6 py-3 border border-crimson/20 text-smoke/70 font-display font-medium text-sm rounded-full hover:text-bone transition-all ${step === 1 ? "invisible" : ""
                }`}
            >
              Back
            </motion.button>

            {step < 4 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep((prev) => Math.min(4, prev + 1))}
                className="px-8 py-3 bg-crimson text-charcoal-dark font-display font-bold text-sm rounded-full hover:bg-crimson-light transition-all duration-300"
              >
                Continue
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="px-8 py-3 bg-crimson text-charcoal-dark font-display font-bold text-sm rounded-full hover:bg-crimson-light transition-all duration-300 glow-crimson"
              >
                Confirm Booking
              </motion.button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
