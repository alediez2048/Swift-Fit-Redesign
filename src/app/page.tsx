"use client";

import Link from "next/link";
import Image from "next/image";
import { m, useInView } from "framer-motion";
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
import asteriskImage from "@/assets/images/asterisk.webp";
import teamImage from "@/assets/images/Swift_Fit_Picture_Day_92_0e0ecbeeb9.webp";
import {
  Star,
  Users,
  Buildings,
  Heart,
  MapPin,
  Phone,
  ClipboardText,
  Sparkle,
  FlowerLotus,
  UsersThree,
  HouseLine,
  Pizza,
  MusicNote,
  Fire,
  CaretDown,
  Trophy,
  ThumbsUp,
  Target,
  Play,
  Quotes,
  IconWeight,
} from "@phosphor-icons/react";

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
  { text: "TEAM BUILDING", icon: "users" },
  { text: "LIVE MUSIC", icon: "music" },
  { text: "VENUE RENTAL", icon: "building" },
  { text: "FITNESS EVENTS", icon: "heart" },
  { text: "AUSTIN TX", icon: "location" },
  { text: "KEEP IT WEIRD", icon: "star" },
  { text: "DOWNTOWN VIBES", icon: "building" },
  { text: "YOGA", icon: "wellness" },
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

const iconMap: Record<string, React.FC<{ className?: string; weight?: IconWeight }>> = {
  star: Star,
  users: Users,
  building: Buildings,
  heart: Heart,
  location: MapPin,
  phone: Phone,
  clipboard: ClipboardText,
  sparkles: Sparkle,
  wellness: FlowerLotus,
  team: UsersThree,
  venue: HouseLine,
  taco: Pizza,
  music: MusicNote,
  bbq: Fire,
};

// FAQ Accordion Component
function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-surface relative z-10">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <m.div
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
        </m.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <m.div
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
                  <CaretDown className="w-5 h-5 text-white" weight="bold" />
                </div>
              </button>
              <m.div
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
              </m.div>
            </m.div>
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
      <section className="relative h-screen overflow-hidden border-x-[20px] border-white box-border">
        {/* Video Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            // @ts-expect-error - fetchPriority is valid but not in React types yet
            fetchPriority="high"
            poster={teamImage.src}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={`${process.env.NODE_ENV === 'production' ? '/Swift-Fit-Redesign' : ''}/assets/video/hero-video.mp4`} type="video/mp4" />
          </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-teal/30 via-teal/20 to-teal/30" />
        </div>

        {/* Animated Background Shapes */}
        <m.div
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
        <m.div
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
            <m.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <m.h1
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
                    sizes="10vw"
                  />
                </div>
                <span className="block text-[0.41em] tracking-[0.3em] font-bold mt-1 relative z-20" style={{ color: '#FFFFFF' }}>SOCIAL</span>
              </m.h1>

              {/* Decorative Squiggle - overlapping title bottom */}
              <m.div
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
              </m.div>
            </m.div>
          </div>

          {/* MIDDLE SECTION - Flexible spacer (image content area) */}
          <div className="flex-1" />

          {/* BOTTOM SECTION - Rating at ~66%, Tagline at ~75%, Arrow at ~92% */}
          <div className="pb-[14vh] text-center">
            {/* Rating - at ~66% from top */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4"
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Star className="w-[30px] h-[30px] text-white" weight="fill" />
                  </m.div>
                ))}
                <span className="ml-2 font-medium text-white text-2xl">5/5</span>
              </div>
              <p className="text-2xl text-white font-medium">
                Austin&apos;s Top-Rated Corporate<br />Wellness Partner
              </p>
            </m.div>

            {/* Tagline - exactly two lines */}


            {/* Animated Arrow - at ~92% from top */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CaretDown className="w-[46px] h-[45px] mx-auto text-white" weight="bold" />
            </m.div>
          </div>
        </div>
      </section>

      {/* Orange Banner - Austin Vibes */}
      <div className="relative bg-coral py-8 overflow-hidden z-20">
        <div className="absolute left-0 top-0 bottom-0 top-0 w-16 bg-gradient-to-r from-coral to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-coral to-transparent z-10" />

        <Marquee speed="normal" className="text-white">
          {marqueeItems.map((item, index) => {
            const Icon = iconMap[item.icon] || Star;
            return (
              <div key={index} className="flex items-center gap-5 px-9">
                <Icon className="w-8 h-8" weight="fill" />
                <span className="font-bold text-lg tracking-wide">{item.text}</span>
              </div>
            );
          })}
        </Marquee>
      </div>


      {/* Welcome Section */}
      <section className="py-24 lg:py-32 bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Welcome Heading */}
          <m.div
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
          </m.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Left - Image */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={teamImage}
                alt="Swift Fit Events team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </m.div>

            {/* Right - About & Mission */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-10"
            >
              {/* About Us */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <UsersThree className="w-8 h-8 text-[#FF5C00]" weight="regular" />
                  <h3 className="text-2xl font-bold text-teal">About Us</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We are Austin&apos;s premier corporate wellness and events company, dedicated to transforming workplace culture. With expert facilitators, stunning venues, and a deep commitment to your team&apos;s success, we create experiences that energize, connect, and inspire.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-[#FF5C00]" weight="regular" />
                  <h3 className="text-2xl font-bold text-teal">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that healthy, connected teams drive business success. Our mission is to provide comprehensive wellness programs and unforgettable team experiences that boost morale, reduce burnout, and create lasting positive change in corporate culture.
                </p>
              </div>
            </m.div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "trophy", value: "500+", label: "Corporate Events Hosted" },
              { icon: "thumbsup", value: "98%", label: "Client Satisfaction Rate" },
              { icon: "users", value: "50+", label: "Enterprise Partners" },
            ].map((stat, index) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-coral/10 mb-4">
                  {stat.icon === "trophy" && (
                    <Trophy className="w-6 h-6 text-coral" weight="regular" />
                  )}
                  {stat.icon === "thumbsup" && (
                    <ThumbsUp className="w-6 h-6 text-coral" weight="regular" />
                  )}
                  {stat.icon === "users" && (
                    <Users className="w-6 h-6 text-coral" weight="regular" />
                  )}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-teal mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-surface relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
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
          </m.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <m.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.href} className="group block">
                    <m.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal/10 to-coral/10 mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                    >
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/5 transition-colors" />
                    </m.div>
                    <h3 className="text-2xl font-bold text-teal mb-2 group-hover:text-coral transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Link>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
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
          </m.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorksSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <m.div
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
                    <Icon className="w-10 h-10 text-coral" weight="duotone" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-coral text-white text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-teal mb-3">{step.title}</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
                </m.div>
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
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal/60">
              Trusted by leading companies
            </span>
          </m.div>
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
                width={360}
                height={180}
                className="h-24 md:h-28 w-auto object-contain"
                sizes="(max-width: 768px) 33vw, 15vw"
              />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-surface relative z-10 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <m.div
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
          </m.div>

          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <m.div
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
                <Quotes className="w-12 h-12 text-coral/30 mb-6" weight="fill" />
                <blockquote className="text-2xl md:text-3xl font-medium text-teal italic mb-8 max-w-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-teal">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </m.div>
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
          <m.div
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
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-teal to-teal/80 shadow-2xl group cursor-pointer"
          >
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <m.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 rounded-full bg-coral flex items-center justify-center shadow-lg"
              >
                <Play className="w-10 h-10 text-white ml-1" weight="fill" />
              </m.div>
            </div>

            {/* Placeholder text */}
            <div className="absolute bottom-8 left-8 text-cream/70">
              <p className="text-sm">Video coming soon</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-coral/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cream/10 rounded-full blur-2xl" />
          </m.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-teal">
        <div className="absolute inset-0">
          {/* Decorative elements */}
          <m.div
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
          <m.div
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
          <m.div
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
          </m.div>
        </div>
      </section>
    </>
  );
}
