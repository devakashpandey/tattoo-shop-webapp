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
  image?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

// --- Navigation Links ---
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/estimator", label: "Estimator" },
  // { href: "/transformations", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Now" },
];

export const featureLinks: any[] = [];


// --- Artists ---
export const artists: Artist[] = [
  {
    id: "marcus-black",
    name: "Satish K. Keshri",
    role: "Lead Artist & Founder",
    image: "/images/artist.png",
    bio: "With over 15 years of experience, Marcus is renowned for his photorealistic portraits and intricate black & grey work. His attention to detail and artistic vision have earned him recognition at international tattoo conventions.",
    specialties: ["Black & Grey Realism", "Portraits", "Dark Art"],
    experience: "15+ years",
    instagram: "@marcus.ink",
    portfolio: ["/images/tattoo-realism.png", "/images/tattoo-blackwork.png"],
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
    name: "Rahul Kumar",
    text: "Best tattoo studio in Arrah. Marcus is very professional and the shop is very clean. Highly recommended for everyone!",
    rating: 5,
    tattooType: "Portrait Realism",
    artist: "Satish K. Keshri",
    image: "/images/client-1.png",
  },
  {
    id: "2",
    name: "Amit Singh",
    text: "Bhai maza aa gaya! Tattoo bilkul perfect bana hai aur hygiene ka bhi pura dhyan rakha. Hairan hoon itna accha kaam dekh kar.",
    rating: 5,
    tattooType: "Traditional",
    artist: "Satish K. Keshri",
    image: "/images/client-2.png",
  },
  {
    id: "3",
    name: "Priyanka Kumari",
    text: "I got my first tattoo here and the experience was great. Very safe and the artist is very patient. Love my new ink!",
    rating: 5,
    tattooType: "Fine Line",
    artist: "Satish K. Keshri",
    image: "/images/client-3.png",
  },
  {
    id: "4",
    name: "Manish Pandey",
    text: "Ara me isse accha studio nahi milega. Artist professional hai aur price bhi sahi hai. Best finishing!",
    rating: 5,
    tattooType: "Blackwork",
    artist: "Satish K. Keshri",
    image: "/images/client-4.png",
  },
  {
    id: "5",
    name: "Neha Sharma",
    text: "Very happy with my tattoo. Professional service and great attention to detail. I will definitely come back for more.",
    rating: 5,
    tattooType: "Watercolor",
    artist: "Satish K. Keshri",
    image: "/images/client-5.png",
  },
];

// --- Gallery Items ---
export const galleryItems: GalleryItem[] = [
  {
    "id": "g1",
    "src": "/tattoos/1.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g2",
    "src": "/tattoos/2.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g3",
    "src": "/tattoos/3.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g4",
    "src": "/tattoos/4.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g5",
    "src": "/tattoos/5.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g6",
    "src": "/tattoos/6.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g7",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.18 PM (1).jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g8",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.22 PM (1).jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g9",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.24 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g10",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.25 PM (1).jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g11",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.25 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g12",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.27 PM (1).jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g13",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.27 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g14",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.28 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g15",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.29 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g16",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.30 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g17",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.32 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g18",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.35 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g19",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.36 PM (1).jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g20",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.44.36 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g21",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.55.54 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g22",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.56.01 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g23",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.56.03 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g24",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.56.05 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g25",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 2.56.23 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g26",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 3.55.56 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g27",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 3.55.57 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g28",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 3.55.58 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g29",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 3.56.00 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g30",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 3.56.01 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g31",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 3.56.02 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g32",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 3.56.08 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g33",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 3.56.12 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g34",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 3.56.21 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  },
  {
    "id": "g35",
    "src": "/tattoos/WhatsApp Image 2026-04-16 at 5.01.23 PM.jpeg",
    "alt": "Tattoo Design",
    "category": "all",
    "artist": "Satish K. Keshri",
    "aspectRatio": "portrait"
  }
];

// --- Services ---
export const services: ServiceItem[] = [
  {
    id: "custom-tattoo",
    title: "Custom Tattoo Design",
    description: "Work directly with our artists to create a one-of-a-kind tattoo tailored to your vision. Includes consultation, design iterations, and the final tattoo session.",
    priceRange: "₹600 - ₹5000/hr",
    duration: "Varies by complexity",
    icon: "✦",
    features: ["Personal consultation", "Custom artwork", "Unlimited revisions", "Premium inks"],
    image: "/images/custom-tattoo.png",
  },
  {
    id: "piercing",
    title: "Professional Piercing",
    description: "Expert body piercing services using surgical-grade titanium and 14k gold jewelry. Sterile, safe, and precise placement.",
    priceRange: "₹500 - ₹2000",
    duration: "15-30 minutes",
    icon: "✧",
    features: ["Sterile equipment", "Premium jewelry", "Aftercare guidance", "Expert placement"],
    image: "/images/piercing_service.png",
  },
  {
    id: "disease-cover",
    title: "Medical & Scar Cover",
    description: "Specialized medical tattooing to artistically cover scars, skin conditions, or medical marks. Restoring skin confidence through art.",
    priceRange: "₹1000 - ₹5000+",
    duration: "2-6 hours",
    icon: "◈",
    features: ["Scar camouflage", "Skin tone matching", "Compassionate care", "Life-changing results"],
    image: "/images/scar_cover_service.png",
  },
  {
    id: "cover-up",
    title: "Cover-Up Specialist",
    description: "Transform an old or unwanted tattoo into a stunning new piece. Our artists are experts at creative cover-up solutions.",
    priceRange: "₹800 - ₹1200/hr",
    duration: "2-8 hours per session",
    icon: "◈",
    features: ["Free assessment", "Creative solutions", "Color matching", "Seamless blending"],
    image: "/images/cover-up.png",
  },
  {
    id: "consultation",
    title: "Free Enquiry",
    description: "Not sure what you want? Book a free enquiry to discuss ideas, placement, sizing, and pricing with our artists.",
    priceRange: "Free",
    duration: "30 minutes",
    icon: "○",
    features: ["No obligation", "Expert advice", "Reference review", "Quote estimation"],
    image: "/images/consultation.png",
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
    id: "faq-2",
    question: "How long does a tattoo take to heal?",
    answer: "The surface healing takes about 2-3 weeks, during which you'll see peeling and flaking — this is completely normal. Full skin regeneration beneath the surface takes 2-3 months. During this time, follow our aftercare guide strictly for the best results. We include a free aftercare kit with every session.",
    category: "aftercare",
  },
  {
    id: "faq-4",
    question: "How much does a tattoo cost?",
    answer: "Pricing depends on size, complexity, style, placement, and the artist. Our rates range from ₹300-₹600/hour depending on the artist. Small pieces may have a minimum charge of ₹300-₹450. We provide free enquiry where we'll give you an accurate quote based on your specific design. Use our Price Estimator tool for a quick ballpark estimate!",
    category: "pricing",
  },
  {
    id: "faq-6",
    question: "Can you cover up an existing tattoo?",
    answer: "Absolutely! Cover-up tattoos are one of our specialties. During your consultation, our artist will assess the existing tattoo and discuss design options that will effectively blend or conceal the old tattoo. Not all tattoos need a full cover-up — some can be reworked or incorporated into a new design. Check out our Before & After gallery for examples!",
    category: "general",
  },



  {
    id: "faq-9",
    question: "Can I bring my own design?",
    answer: "Of course! We love working with client-provided designs and references. Bring any sketches, photos, or inspiration images to your consultation. Our artists will work with you to refine the design for the best results as a tattoo — some details may need to be adjusted for skin as a medium.",
    category: "preparation",
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
    artist: "Satish K. Keshri",
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
    artist: "Satish K. Keshri",
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
    artist: "Satish K. Keshri",
    beforeImage: "/images/before-after-healing.png",
    afterImage: "/images/before-after-healing.png",
    duration: "3 hours",
    sessions: 1,
  },
];



// --- Price Estimator Data ---
export const tattooSizes = [
  { id: "tiny", label: "Tiny (1 inch)", basePrice: 600, timeEstimate: "30-60 min" },
  { id: "small", label: "Small (2-4 inches)", basePrice: 1200, timeEstimate: "1-2 hours" },
  { id: "medium", label: "Medium (4-6 inches)", basePrice: 2400, timeEstimate: "2-4 hours" },
  { id: "large", label: "Large (6-10 inches)", basePrice: 3600, timeEstimate: "4-6 hours" },
  { id: "xlarge", label: "Extra Large (10+ inches)", basePrice: 6000, timeEstimate: "6-10 hours" },
  { id: "halfsleeve", label: "Half Sleeve", basePrice: 12000, timeEstimate: "15-25 hours" },
  { id: "fullsleeve", label: "Full Sleeve", basePrice: 25000, timeEstimate: "30-60 hours" },
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
