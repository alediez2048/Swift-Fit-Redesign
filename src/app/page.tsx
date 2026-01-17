"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

// Partner logos
import logoBumble from "@/assets/images/partners/bumble.png";
import logoCoindesk from "@/assets/images/partners/coindesk.png";
import logoFidelity from "@/assets/images/partners/fidelity.png";
import logoGoldmanSachs from "@/assets/images/partners/goldman-sachs.png";
import logoIBM from "@/assets/images/partners/ibm.png";
import logoVisa from "@/assets/images/partners/visa.png";
import logoTiktok from "@/assets/images/partners/tiktok.png";
import logoAccenture from "@/assets/images/partners/accenture.png";
import logoMadHippie from "@/assets/images/partners/mad-hippie.png";
import logoSnapKitchen from "@/assets/images/partners/snap-kitchen.png";
import logoSansBar from "@/assets/images/partners/sans-bar.png";
import logoRambler from "@/assets/images/partners/rambler.png";
import logoAustinMonthly from "@/assets/images/partners/austin-monthly.png";
import logoVoss from "@/assets/images/partners/voss.png";
import logoTacodeli from "@/assets/images/partners/tacodeli.png";
import asteriskImage from "@/assets/images/asterisk.png";

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Marquee items - Austin vibes
const marqueeItems = [
  { text: "CORPORATE WELLNESS", icon: "star" },
  { text: "BREAKFAST TACOS", icon: "taco" },
  { text: "TEAM BUILDING", icon: "users" },
  { text: "LIVE MUSIC", icon: "music" },
  { text: "VENUE RENTAL", icon: "building" },
  { text: "BBQ CATERING", icon: "bbq" },
  { text: "FITNESS EVENTS", icon: "heart" },
  { text: "AUSTIN TX", icon: "location" },
  { text: "KEEP IT WEIRD", icon: "star" },
  { text: "DOWNTOWN VIBES", icon: "building" },
];

// Client logos for trust bar
const clientLogos = [
  { name: "Bumble", src: logoBumble },
  { name: "IBM", src: logoIBM },
  { name: "Goldman Sachs", src: logoGoldmanSachs },
  { name: "Visa", src: logoVisa },
  { name: "TikTok", src: logoTiktok },
  { name: "Accenture", src: logoAccenture },
  { name: "CoinDesk", src: logoCoindesk },
  { name: "Fidelity", src: logoFidelity },
  { name: "Mad Hippie", src: logoMadHippie },
  { name: "Snap Kitchen", src: logoSnapKitchen },
  { name: "Sans Bar", src: logoSansBar },
  { name: "Rambler", src: logoRambler },
  { name: "Austin Monthly", src: logoAustinMonthly },
  { name: "Voss", src: logoVoss },
  { name: "Tacodeli", src: logoTacodeli },
];

// Services
const services = [
  {
    title: "Corporate Wellness",
    description: "Comprehensive wellness programs tailored for your team's unique needs.",
    icon: "wellness",
    href: "/corporate-wellness",
  },
  {
    title: "Team Building",
    description: "Engaging experiences that strengthen bonds and boost morale.",
    icon: "team",
    href: "/corporate-wellness#team-building",
  },
  {
    title: "Venue Rental",
    description: "Premium downtown Austin space for your next corporate event.",
    icon: "venue",
    href: "/venue-rental",
  },
  {
    title: "Fitness Classes",
    description: "Energizing yoga, HIIT, and strength training sessions led by pro instructors.",
    icon: "heart",
    href: "/fitness-classes",
  },
  {
    title: "Event Production",
    description: "End-to-end planning and logistics for stress-free corporate gatherings.",
    icon: "sparkles",
    href: "/event-production",
  },
  {
    title: "Healthy Catering",
    description: "Nutritious and delicious local food options to fuel your team.",
    icon: "taco",
    href: "/catering",
  },
];

// Stats data
const stats = [
  { value: 8, suffix: "+", label: "Years in Austin" },
  { value: 500, suffix: "+", label: "Corporate Events" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 5, suffix: "/5", label: "Average Rating" },
];

// Testimonials
const testimonials = [
  {
    quote: "Swift Fit transformed our entire approach to employee wellness. Our team morale has never been higher.",
    author: "Sarah Chen",
    role: "VP of People",
    company: "TechStart Inc.",
  },
  {
    quote: "The most seamless corporate event experience we've ever had. They truly deliver on their promise.",
    author: "Michael Torres",
    role: "HR Director",
    company: "Innovate Labs",
  },
  {
    quote: "Our team building retreat was absolutely incredible. Swift Fit made me look like a hero to leadership.",
    author: "Emily Rodriguez",
    role: "Events Manager",
    company: "Growth Co.",
  },
];

// How it works steps
const howItWorksSteps = [
  {
    step: "01",
    title: "Book a Call",
    description: "Schedule a free consultation to discuss your team's needs and goals.",
    icon: "phone",
  },
  {
    step: "02",
    title: "We Plan It",
    description: "Our team designs a custom experience tailored to your culture and budget.",
    icon: "clipboard",
  },
  {
    step: "03",
    title: "You Enjoy It",
    description: "Sit back and watch your team thrive. We handle every detail.",
    icon: "sparkles",
  },
];

// FAQ items
const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer corporate wellness programs, team building events, fitness classes, venue rental, and full event production services. Our team can customize any experience to fit your company's unique culture and goals.",
  },
  {
    question: "Where are you located?",
    answer: "Our flagship venue is at 918 Congress Ave in downtown Austin, TX. We also service Dallas, Houston, and San Antonio, and can travel to your office or preferred location.",
  },
  {
    question: "How do I book an event?",
    answer: "Simply fill out our contact form or call us directly at (512) 660-7746. We'll schedule a consultation to understand your needs and create a custom proposal within 48 hours.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing varies based on group size, event type, and customization level. We offer packages starting at $500 for small teams and enterprise solutions for larger organizations. Contact us for a personalized quote.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-4 weeks in advance for most events. For larger corporate retreats or conferences, 4-8 weeks notice is ideal. However, we can often accommodate last-minute requests depending on availability.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Absolutely! We work with catering partners who can accommodate all dietary needs including vegan, vegetarian, gluten-free, kosher, halal, and allergy-specific requirements. Just let us know when booking.",
  },
  {
    question: "Do you offer virtual or hybrid events?",
    answer: "Yes! We've developed engaging virtual wellness programs and hybrid event solutions that connect remote and in-person teams. Our virtual offerings include guided meditation, desk yoga, and interactive team challenges.",
  },
];

// Icons
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l1.09 3.26L16.35 7l-3.26 1.09L12 11.35l-1.09-3.26L7.65 7l3.26-1.09L12 3z" />
      <path d="M19 13l.8 2.4L22.2 16l-2.4.8L19 19.2l-.8-2.4L15.8 16l2.4-.8L19 13z" />
      <path d="M6 17l.5 1.5L8 19l-1.5.5L6 21l-.5-1.5L4 19l1.5-.5L6 17z" />
    </svg>
  );
}

function WellnessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a5 5 0 0 1 5 5v4a5 5 0 1 1-10 0V7a5 5 0 0 1 5-5z" />
      <path d="M12 22v-6" />
      <path d="M8 22h8" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function TeamIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="3" />
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M12 8v4" />
      <path d="M6 14v-2a6 6 0 0 1 12 0v2" />
    </svg>
  );
}

function VenueIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4 8 4v14" />
      <path d="M9 21v-4h6v4" />
      <path d="M10 9h4" />
      <path d="M10 13h4" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}

function TacoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.56 10.8c.36-.6.56-1.2.56-2.08 0-2.2-1.8-4-4-4h-8.13c-2.2 0-4 1.8-4 4 0 .88.2 1.48.56 2.08-1.8.8-3 2.56-3 4.48C1.56 17.44 3.28 19 5.44 19h13.12c2.16 0 3.88-1.56 3.88-3.72 0-1.92-1.2-3.68-3.08-4.48zM7.44 7c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6zm4.56 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4.56-5.2c-.88 0-1.6-.72-1.6-1.6s.72-1.6 1.6-1.6 1.6.72 1.6 1.6-.72 1.6-1.6 1.6z" />
    </svg>
  );
}

function MusicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  );
}

function BBQIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 10c.7-2.5-.5-5-3-6.5" />
      <path d="M12 10c.7-2.5-.5-5-3-6.5" />
      <path d="M7 10c.7-2.5-.5-5-3-6.5" />
      <ellipse cx="12" cy="14" rx="8" ry="4" />
      <path d="M5.5 16.5v2" />
      <path d="M18.5 16.5v2" />
      <path d="M12 18v3" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  star: StarIcon,
  users: UsersIcon,
  building: BuildingIcon,
  heart: HeartIcon,
  location: LocationIcon,
  phone: PhoneIcon,
  clipboard: ClipboardIcon,
  sparkles: SparklesIcon,
  wellness: WellnessIcon,
  team: TeamIcon,
  venue: VenueIcon,
  taco: TacoIcon,
  music: MusicIcon,
  bbq: BBQIcon,
};

// FAQ Accordion Component
function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-surface relative z-10">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-coral" />
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-4">
            Got Questions?
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before booking your next corporate event.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-2xl px-6 py-5 flex items-center justify-between text-left shadow-sm hover:shadow-md transition-shadow group"
              >
                <span className="text-lg font-semibold text-teal pr-4">{faq.question}</span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-coral rotate-45" : "bg-coral"
                    }`}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-muted-foreground">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Counter component for stats
function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section - Matching reference layout */}
      <section className="relative min-h-screen overflow-hidden border-x-[20px] border-white box-border">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/video/hero-video.mp4`} type="video/mp4" />
          </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-teal/30 via-teal/20 to-teal/30" />
        </div>

        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-coral/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-20 w-48 h-48 bg-cream/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Content Container - Full height flex */}
        <div className="relative z-10 flex flex-col h-screen px-6">

          {/* TOP SECTION - Title at ~16% from top */}
          <div className="pt-[calc(10vh+15px)] md:pt-[calc(12vh+15px)] lg:pt-[calc(14vh+15px)] text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeUpVariant}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-extrabold leading-[0.9] tracking-tight"
                style={{ color: '#FFFFFF', fontSize: '15vw' }}
              >
                SWIFT FIT
                <div className="relative w-[0.8em] h-[0.8em] mx-auto my-[-0.2em] z-10">
                  <Image
                    src={asteriskImage}
                    alt="*"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="block text-[0.41em] tracking-[0.3em] font-bold mt-1 relative z-20" style={{ color: '#FFFFFF' }}>EVENTS</span>
              </motion.h1>

              {/* Decorative Squiggle - overlapping title bottom */}
              <motion.div
                variants={fadeUpVariant}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center -mt-[2vw]"
              >
                <svg width="412" height="110" viewBox="0 0 275 73" className="w-[45vw] max-w-[412px]" style={{ color: '#FF5C00' }}>
                  <path
                    d="M0 36.5 Q34 10, 69 36.5 T138 36.5 T206 36.5 T275 36.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* MIDDLE SECTION - Flexible spacer (image content area) */}
          <div className="flex-1" />

          {/* BOTTOM SECTION - Rating at ~66%, Tagline at ~75%, Arrow at ~92% */}
          <div className="pb-[14vh] text-center">
            {/* Rating - at ~66% from top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4"
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <StarIcon className="w-[30px] h-[30px] text-white fill-white" />
                  </motion.div>
                ))}
                <span className="ml-2 font-medium text-white text-2xl">5/5</span>
              </div>
              <p className="text-2xl text-white font-medium">
                Austin&apos;s Top-Rated Corporate<br />Wellness Partner
              </p>
            </motion.div>

            {/* Tagline - exactly two lines */}


            {/* Animated Arrow - at ~92% from top */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.svg
                className="w-[46px] h-[45px] mx-auto text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Welcome Section */}
      <section className="py-24 lg:py-32 bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Welcome Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-teal leading-tight">
              <span className="block font-light italic">Welcome to</span>
              Swift Fit <span className="relative inline-block">
                Events<sup className="text-coral text-3xl">®</sup>
                {/* Decorative squiggle */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-8 text-[#FF5C00]"
                  viewBox="0 0 200 30"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15 Q25 5, 50 15 T100 15 T150 15 T200 15"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/images/Swift_Fit_Picture_Day_92_0e0ecbeeb9.webp`}
                alt="Swift Fit Events team"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right - About & Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-10"
            >
              {/* About Us */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[#FF5C00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-teal">About Us</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We are Austin&apos;s premier corporate wellness and events company, dedicated to transforming workplace culture. With expert facilitators, stunning venues, and a deep commitment to your team&apos;s success, we create experiences that energize, connect, and inspire.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[#FF5C00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <h3 className="text-2xl font-bold text-teal">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that healthy, connected teams drive business success. Our mission is to provide comprehensive wellness programs and unforgettable team experiences that boost morale, reduce burnout, and create lasting positive change in corporate culture.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "trophy", value: "500+", label: "Corporate Events Hosted" },
              { icon: "thumbsup", value: "98%", label: "Client Satisfaction Rate" },
              { icon: "users", value: "50+", label: "Enterprise Partners" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-coral/10 mb-4">
                  {stat.icon === "trophy" && (
                    <svg className="w-6 h-6 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  )}
                  {stat.icon === "thumbsup" && (
                    <svg className="w-6 h-6 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 10v12" />
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                    </svg>
                  )}
                  {stat.icon === "users" && (
                    <svg className="w-6 h-6 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-teal mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-surface relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-coral" />
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.href} className="group block">
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal/10 to-coral/10 mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                    >
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/5 transition-colors" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-teal mb-2 group-hover:text-coral transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-coral" />
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
              Simple as 1-2-3
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorksSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center relative"
                >
                  {/* Connector line */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-coral/50 to-transparent" />
                  )}

                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-coral/10 mb-6 relative">
                    <Icon className="w-10 h-10 text-coral" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-coral text-white text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-teal mb-3">{step.title}</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Trust Bar - Partner Logos */}
      <section className="py-20 bg-teal/5 overflow-hidden relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-teal/5 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-teal/5 to-transparent z-10" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal/60">
              Trusted by leading companies
            </span>
          </motion.div>
        </div>

        <Marquee speed="slow" pauseOnHover gap="5rem" className="py-2">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 px-4"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={180}
                height={90}
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-surface relative z-10 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-coral" />
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeTestimonial === index ? 1 : 0,
                  y: activeTestimonial === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center ${activeTestimonial === index ? "pointer-events-auto" : "pointer-events-none"
                  }`}
              >
                <QuoteIcon className="w-12 h-12 text-coral/30 mb-6" />
                <blockquote className="text-2xl md:text-3xl font-medium text-teal italic mb-8 max-w-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-teal">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? "bg-coral w-8" : "bg-teal/20"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 lg:py-32 bg-white relative z-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-coral" />
              See Us in Action
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
              Experience Swift Fit
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-teal to-teal/80 shadow-2xl group cursor-pointer"
          >
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 rounded-full bg-coral flex items-center justify-center shadow-lg"
              >
                <PlayIcon className="w-10 h-10 text-white ml-1" />
              </motion.div>
            </div>

            {/* Placeholder text */}
            <div className="absolute bottom-8 left-8 text-cream/70">
              <p className="text-sm">Video coming soon</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-coral/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cream/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-teal">
        <div className="absolute inset-0">
          {/* Decorative elements */}
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-48 h-48 bg-black/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ color: '#FFFFFF' }}>
              Ready to Transform<br />Your Workplace?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Let&apos;s create meaningful experiences that your team will actually remember.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-coral text-white hover:bg-coral/90 rounded-full px-8"
              >
                <Link href="/contact">Request a Proposal</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white bg-white text-teal hover:bg-white/90"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
