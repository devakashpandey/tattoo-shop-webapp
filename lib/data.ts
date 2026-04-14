// ============================================================
// STATIC DATA for the Tattoo Studio Website
// All mock data used across pages and components
// ============================================================

export interface Artist {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  experience: string;
  instagram: string;
  portfolio: string[];
}

export interface TattooStyle {
  id: string;
  name: string;
  description: string;
  image: string;
  priceRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  tattooType: string;
  artist: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  artist: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  duration: string;
  icon: string;
  features: string[];
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

// --- Navigation Links ---
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Now" },
];

// --- Extra Feature Links (for "More" dropdown) ---
export const featureLinks = [
  { href: "/estimator", label: "Price Estimator", icon: "", description: "Get an instant price estimate" },
  { href: "/faq", label: "FAQ", icon: "", description: "Common questions answered" },
  { href: "/transformations", label: "Before & After", icon: "", description: "See our amazing transformations" },
];

// --- Artists ---
export const artists: Artist[] = [
  {
    id: "marcus-black",
    name: "Marcus Black",
    role: "Lead Artist & Founder",
    image: "/images/marcus.png",
    bio: "With over 15 years of experience, Marcus is renowned for his photorealistic portraits and intricate black & grey work. His attention to detail and artistic vision have earned him recognition at international tattoo conventions.",
    specialties: ["Black & Grey Realism", "Portraits", "Dark Art"],
    experience: "15+ years",
    instagram: "@marcus.ink",
    portfolio: ["/images/tattoo-realism.png", "/images/tattoo-blackwork.png"],
  },
  {
    id: "luna-vex",
    name: "Luna Vex",
    role: "Senior Artist",
    image: "/images/luna.png",
    bio: "Luna brings a fresh, contemporary approach to tattooing. Her signature watercolor and fine-line work has redefined modern tattoo aesthetics. She specializes in creating delicate, meaningful pieces with incredible precision.",
    specialties: ["Fine Line", "Watercolor", "Minimalist"],
    experience: "10+ years",
    instagram: "@luna.vex.ink",
    portfolio: ["/images/tattoo-minimal.png", "/images/tattoo-watercolor.png"],
  },
  {
    id: "kai-storm",
    name: "Kai Storm",
    role: "Traditional Specialist",
    image: "/images/kai.png",

    bio: "A master of bold lines and vivid colors, Kai specializes in traditional and neo-traditional tattoos. His work pays homage to the classic American tattoo tradition while incorporating modern elements and techniques.",
    specialties: ["Traditional", "Neo-Traditional", "Japanese"],
    experience: "12+ years",
    instagram: "@kai.storm.tattoo",
    portfolio: ["/images/tattoo-traditional.png", "/images/tattoo-japanese.png"],
  },
];

// --- Tattoo Styles ---
export const tattooStyles: TattooStyle[] = [
  {
    id: "realism",
    name: "Realism",
    description: "Photo-realistic tattoos that capture life in incredible detail. From portraits to nature scenes, every piece is a masterwork.",
    image: "/images/tattoo-realism.png",
    priceRange: "₹200 - ₹500/hr",
  },
  {
    id: "minimal",
    name: "Fine Line",
    description: "Delicate, precise linework creating elegant and understated designs. Perfect for those who appreciate subtlety.",
    image: "/images/tattoo-minimal.png",
    priceRange: "₹150 - ₹350/hr",
  },
  {
    id: "japanese",
    name: "Japanese",
    description: "Traditional Japanese motifs brought to life with bold color and flowing composition. Timeless artistry.",
    image: "/images/tattoo-japanese.png",
    priceRange: "₹250 - ₹500/hr",
  },
  {
    id: "traditional",
    name: "Traditional",
    description: "Bold lines, vivid colors, and iconic imagery. Classic American tattoo art at its finest.",
    image: "/images/tattoo-traditional.png",
    priceRange: "₹150 - ₹400/hr",
  },
  {
    id: "watercolor",
    name: "Watercolor",
    description: "Vibrant, fluid designs that mimic the beauty of watercolor paintings on skin.",
    image: "/images/tattoo-watercolor.png",
    priceRange: "₹200 - ₹450/hr",
  },
  {
    id: "blackwork",
    name: "Blackwork",
    description: "Bold, graphic designs using solid black ink. From geometric patterns to ornamental art.",
    image: "/images/tattoo-blackwork.png",
    priceRange: "₹175 - ₹400/hr",
  },
];

// --- Testimonials ---
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Rodriguez",
    text: "Marcus created an absolutely stunning portrait of my grandmother. The detail is unreal — people think it's a photograph. This studio is world class.",
    rating: 5,
    tattooType: "Portrait Realism",
    artist: "Marcus Black",
    image: "/images/client-1.png",
  },
  {
    id: "2",
    name: "Sophie Chen",
    text: "Luna designed the most beautiful fine-line piece for me. Her artistic vision turned my rough idea into something I'll treasure forever. The studio vibe is immaculate.",
    rating: 5,
    tattooType: "Fine Line",
    artist: "Luna Vex",
    image: "/images/client-2.png",
  },
  {
    id: "3",
    name: "Derek Phillips",
    text: "Got a full sleeve from Kai and it's absolutely incredible. The colors haven't faded a bit. True craftsmanship at every level.",
    rating: 5,
    tattooType: "Traditional",
    artist: "Kai Storm",
    image: "/images/client-3.png",
  },
  {
    id: "4",
    name: "Maria Santos",
    text: "The whole experience was luxury from start to finish. Clean, professional, and the end result exceeded every expectation. Highly recommend.",
    rating: 5,
    tattooType: "Watercolor",
    artist: "Luna Vex",
    image: "/images/client-4.png",
  },
  {
    id: "5",
    name: "Alex Ivanov",
    text: "I've been tattooed all over the world and this studio is hands down one of the best I've ever visited. The attention to detail is unmatched.",
    rating: 5,
    tattooType: "Japanese",
    artist: "Kai Storm",
    image: "/images/client-5.png",
  },
];

// --- Gallery Items ---
export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "/images/tattoo-realism.png", alt: "Realistic lion tattoo", category: "realism", artist: "Marcus Black", aspectRatio: "portrait" },
  { id: "g2", src: "/images/tattoo-minimal.png", alt: "Fine line wolf tattoo", category: "minimal", artist: "Luna Vex", aspectRatio: "portrait" },
  { id: "g3", src: "/images/tattoo-japanese.png", alt: "Japanese koi sleeve", category: "japanese", artist: "Kai Storm", aspectRatio: "portrait" },
  { id: "g4", src: "/images/tattoo-traditional.png", alt: "Traditional eagle tattoo", category: "traditional", artist: "Kai Storm", aspectRatio: "portrait" },
  { id: "g5", src: "/images/tattoo-watercolor.png", alt: "Watercolor hummingbird", category: "watercolor", artist: "Luna Vex", aspectRatio: "portrait" },
  { id: "g6", src: "/images/tattoo-blackwork.png", alt: "Blackwork mandala", category: "blackwork", artist: "Marcus Black", aspectRatio: "portrait" },
  { id: "g7", src: "/images/hero.png", alt: "Artist at work", category: "realism", artist: "Marcus Black", aspectRatio: "landscape" },
  { id: "g8", src: "/images/studio.png", alt: "Studio interior", category: "blackwork", artist: "Luna Vex", aspectRatio: "landscape" },
];

// --- Services ---
export const services: ServiceItem[] = [
  {
    id: "custom-tattoo",
    title: "Custom Tattoo Design",
    description: "Work directly with our artists to create a one-of-a-kind tattoo tailored to your vision. Includes consultation, design iterations, and the final tattoo session.",
    priceRange: "₹150 - ₹500/hr",
    duration: "Varies by complexity",
    icon: "✦",
    features: ["Personal consultation", "Custom artwork", "Unlimited revisions", "Premium inks"],
  },
  {
    id: "cover-up",
    title: "Cover-Up Specialist",
    description: "Transform an old or unwanted tattoo into a stunning new piece. Our artists are experts at creative cover-up solutions.",
    priceRange: "₹200 - ₹500/hr",
    duration: "2-8 hours per session",
    icon: "◈",
    features: ["Free assessment", "Creative solutions", "Color matching", "Seamless blending"],
  },
  {
    id: "fine-line",
    title: "Fine Line & Minimalist",
    description: "Delicate, precise tattoos with elegant linework. Perfect for subtle, meaningful designs.",
    priceRange: "₹150 - ₹350/hr",
    duration: "1-4 hours",
    icon: "◇",
    features: ["Precision tools", "Detailed consultation", "Aftercare kit", "Touch-up included"],
  },
  {
    id: "full-sleeve",
    title: "Full Sleeve Package",
    description: "A comprehensive package for full arm sleeves. Multiple sessions with your chosen artist to create a cohesive masterwork.",
    priceRange: "₹3,000 - ₹10,000+",
    duration: "30-60+ hours total",
    icon: "◆",
    features: ["Design planning", "Multiple sessions", "Priority booking", "Complimentary touch-ups"],
  },
  {
    id: "consultation",
    title: "Free Consultation",
    description: "Not sure what you want? Book a free consultation to discuss ideas, placement, sizing, and pricing with our artists.",
    priceRange: "Free",
    duration: "30 minutes",
    icon: "○",
    features: ["No obligation", "Expert advice", "Reference review", "Quote estimation"],
  },
];

// --- Aftercare Steps ---
export const aftercareSteps = [
  { step: 1, title: "Keep It Covered", description: "Leave the bandage on for 2-4 hours after your session. This protects the fresh tattoo from bacteria." },
  { step: 2, title: "Gentle Cleaning", description: "Wash with lukewarm water and fragrance-free soap. Pat dry with a clean paper towel — never rub." },
  { step: 3, title: "Moisturize", description: "Apply a thin layer of recommended aftercare ointment 2-3 times daily. Keep the tattoo hydrated but not smothered." },
  { step: 4, title: "Avoid Sun & Water", description: "No swimming, hot tubs, or direct sunlight for at least 2-3 weeks. Always use SPF 50+ on healed tattoos." },
  { step: 5, title: "Don't Pick or Scratch", description: "Peeling and itching are normal. Let the skin heal naturally — picking can cause ink loss and scarring." },
];

// --- Time Slots ---
export const timeSlots: TimeSlot[] = [
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: false },
  { time: "12:00 PM", available: true },
  { time: "1:00 PM", available: true },
  { time: "2:00 PM", available: false },
  { time: "3:00 PM", available: true },
  { time: "4:00 PM", available: true },
  { time: "5:00 PM", available: false },
  { time: "6:00 PM", available: true },
];

// --- Gallery Filter Categories ---
export const galleryCategories = [
  { id: "all", label: "All Work" },
  { id: "realism", label: "Realism" },
  { id: "minimal", label: "Fine Line" },
  { id: "japanese", label: "Japanese" },
  { id: "traditional", label: "Traditional" },
  { id: "watercolor", label: "Watercolor" },
  { id: "blackwork", label: "Blackwork" },
];

// --- FAQ Items ---
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "preparation", label: "Preparation" },
  { id: "aftercare", label: "Aftercare" },
  { id: "pricing", label: "Pricing" },
  { id: "health", label: "Health & Safety" },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Does getting a tattoo hurt?",
    answer: "Pain levels vary depending on the placement, your pain tolerance, and the style of tattoo. Areas with more bone or nerve endings (ribs, spine, elbows) tend to be more sensitive. Most clients describe the sensation as a scratching or vibrating feeling. Our artists are experienced in making the process as comfortable as possible, and we offer numbing cream for sensitive areas.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "How long does a tattoo take to heal?",
    answer: "The surface healing takes about 2-3 weeks, during which you'll see peeling and flaking — this is completely normal. Full skin regeneration beneath the surface takes 2-3 months. During this time, follow our aftercare guide strictly for the best results. We include a free aftercare kit with every session.",
    category: "aftercare",
  },
  {
    id: "faq-3",
    question: "Can I swim or go to the gym after getting a tattoo?",
    answer: "We recommend avoiding swimming pools, hot tubs, saunas, and ocean water for at least 2-3 weeks after your tattoo. Light exercise is fine after 48 hours, but avoid excessive sweating on the tattooed area. Bacteria in water bodies can cause infections on fresh tattoos.",
    category: "aftercare",
  },
  {
    id: "faq-4",
    question: "How much does a tattoo cost?",
    answer: "Pricing depends on size, complexity, style, placement, and the artist. Our rates range from ₹150-₹500/hour depending on the artist. Small pieces may have a minimum charge of ₹100-₹150. We provide free consultations where we'll give you an accurate quote based on your specific design. Use our Price Estimator tool for a quick ballpark estimate!",
    category: "pricing",
  },
  {
    id: "faq-5",
    question: "What should I do before my appointment?",
    answer: "Get a good night's sleep, eat a full meal before your session, stay well hydrated, avoid alcohol for 24 hours prior, wear comfortable clothing that provides easy access to the tattoo area, and moisturize the area for a few days beforehand. Bring snacks and entertainment (headphones, book) for longer sessions.",
    category: "preparation",
  },
  {
    id: "faq-6",
    question: "Can you cover up an existing tattoo?",
    answer: "Absolutely! Cover-up tattoos are one of our specialties. During your consultation, our artist will assess the existing tattoo and discuss design options that will effectively blend or conceal the old tattoo. Not all tattoos need a full cover-up — some can be reworked or incorporated into a new design. Check out our Before & After gallery for examples!",
    category: "general",
  },
  {
    id: "faq-7",
    question: "How do I choose the right artist?",
    answer: "Each of our artists has a unique style and specialty. Browse their portfolios on our Artists page to find someone whose work resonates with your vision. During your free consultation, you can discuss your design with them and see if it's a good fit. We're always happy to recommend the best artist for your specific project.",
    category: "general",
  },
  {
    id: "faq-8",
    question: "Is it safe to get a tattoo?",
    answer: "Yes! We maintain the highest standards of hygiene and safety. We use hospital-grade sterilization equipment, single-use needles and gloves, FDA-approved inks, and follow all health department regulations. Our studio is regularly inspected and all artists are blood-borne pathogen certified.",
    category: "health",
  },
  {
    id: "faq-9",
    question: "Can I bring my own design?",
    answer: "Of course! We love working with client-provided designs and references. Bring any sketches, photos, or inspiration images to your consultation. Our artists will work with you to refine the design for the best results as a tattoo — some details may need to be adjusted for skin as a medium.",
    category: "preparation",
  },
  {
    id: "faq-10",
    question: "Do you offer touch-ups?",
    answer: "We offer one free touch-up session within 3 months of your original tattoo for any minor touch-ups needed after healing. After that, touch-ups are charged at a reduced rate. For tattoos done elsewhere, we're happy to refresh and restore them — pricing will be discussed during consultation.",
    category: "pricing",
  },
  {
    id: "faq-11",
    question: "What if I'm allergic to tattoo ink?",
    answer: "True allergic reactions to professional tattoo ink are very rare but can occur. If you have sensitive skin or known allergies, let us know during your consultation. We can do a small patch test beforehand. We use only premium, hypoallergenic inks from trusted manufacturers.",
    category: "health",
  },
  {
    id: "faq-12",
    question: "Can I get a tattoo if I'm pregnant or breastfeeding?",
    answer: "We recommend waiting until after pregnancy and breastfeeding. While the risk is minimal with proper hygiene, it's best to be cautious. Your body is going through hormonal changes that can affect healing and pain tolerance. We'll be here when you're ready!",
    category: "health",
  },
];

// --- Before & After Transformations ---
export interface TransformationItem {
  id: string;
  title: string;
  description: string;
  type: "cover-up" | "touch-up" | "healing";
  artist: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  sessions: number;
}

export const transformations: TransformationItem[] = [
  {
    id: "t1",
    title: "Tribal to Realistic Lion",
    description: "Complete cover-up of a faded tribal tattoo transformed into a stunning photorealistic lion portrait. The original tattoo was fully incorporated into the mane and shadow work.",
    type: "cover-up",
    artist: "Marcus Black",
    beforeImage: "/images/before-after-coverup.png",
    afterImage: "/images/before-after-coverup.png",
    duration: "12 hours total",
    sessions: 3,
  },
  {
    id: "t2",
    title: "Butterfly Color Restoration",
    description: "Faded butterfly tattoo completely rejuvenated with vibrant new colors and sharpened details. The original design was preserved while elevating the color saturation and linework.",
    type: "touch-up",
    artist: "Luna Vex",
    beforeImage: "/images/before-after-touchup.png",
    afterImage: "/images/before-after-touchup.png",
    duration: "4 hours",
    sessions: 1,
  },
  {
    id: "t3",
    title: "Rose Forearm – Healing Journey",
    description: "Follow the complete healing process of this black & grey rose tattoo from day one to fully healed at 6 weeks. Proper aftercare resulted in crisp lines and smooth shading.",
    type: "healing",
    artist: "Marcus Black",
    beforeImage: "/images/before-after-healing.png",
    afterImage: "/images/before-after-healing.png",
    duration: "3 hours",
    sessions: 1,
  },
];



// --- Price Estimator Data ---
export const tattooSizes = [
  { id: "tiny", label: "Tiny (1-2 inches)", basePrice: 100, timeEstimate: "30-60 min" },
  { id: "small", label: "Small (2-4 inches)", basePrice: 200, timeEstimate: "1-2 hours" },
  { id: "medium", label: "Medium (4-6 inches)", basePrice: 400, timeEstimate: "2-4 hours" },
  { id: "large", label: "Large (6-10 inches)", basePrice: 700, timeEstimate: "4-6 hours" },
  { id: "xlarge", label: "Extra Large (10+ inches)", basePrice: 1200, timeEstimate: "6-10 hours" },
  { id: "halfsleeve", label: "Half Sleeve", basePrice: 2000, timeEstimate: "15-25 hours" },
  { id: "fullsleeve", label: "Full Sleeve", basePrice: 4000, timeEstimate: "30-60 hours" },
];

export const tattooComplexities = [
  { id: "simple", label: "Simple (minimal line work)", multiplier: 1.0 },
  { id: "moderate", label: "Moderate (shading & details)", multiplier: 1.3 },
  { id: "detailed", label: "Detailed (fine details & texture)", multiplier: 1.6 },
  { id: "hyperdetailed", label: "Hyper-Detailed (photorealism)", multiplier: 2.0 },
];

export const tattooColorOptions = [
  { id: "blackgrey", label: "Black & Grey", multiplier: 1.0 },
  { id: "limited", label: "Limited Color (1-3 colors)", multiplier: 1.15 },
  { id: "fullcolor", label: "Full Color", multiplier: 1.3 },
];

export const bodyPlacements = [
  { id: "forearm", label: "Forearm", painLevel: 3, modifier: 0 },
  { id: "upperarm", label: "Upper Arm / Bicep", painLevel: 2, modifier: 0 },
  { id: "shoulder", label: "Shoulder", painLevel: 3, modifier: 0 },
  { id: "chest", label: "Chest", painLevel: 5, modifier: 50 },
  { id: "back", label: "Back", painLevel: 4, modifier: 0 },
  { id: "ribs", label: "Ribs / Side", painLevel: 8, modifier: 100 },
  { id: "thigh", label: "Thigh", painLevel: 3, modifier: 0 },
  { id: "calf", label: "Calf", painLevel: 4, modifier: 0 },
  { id: "wrist", label: "Wrist", painLevel: 5, modifier: 0 },
  { id: "ankle", label: "Ankle / Foot", painLevel: 7, modifier: 50 },
  { id: "neck", label: "Neck", painLevel: 7, modifier: 100 },
  { id: "hand", label: "Hand / Fingers", painLevel: 8, modifier: 100 },
];
