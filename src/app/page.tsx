"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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

// Marquee items
const marqueeItems = [
  { text: "CORPORATE WELLNESS", icon: "star" },
  { text: "TEAM BUILDING", icon: "users" },
  { text: "VENUE RENTAL", icon: "building" },
  { text: "FITNESS EVENTS", icon: "heart" },
  { text: "AUSTIN TX", icon: "location" },
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
    image: "/assets/images/wellness.jpg",
    href: "/corporate-wellness",
  },
  {
    title: "Team Building",
    description: "Engaging experiences that strengthen bonds and boost morale.",
    image: "/assets/images/team.jpg",
    href: "/corporate-wellness#team-building",
  },
  {
    title: "Venue Rental",
    description: "Premium downtown Austin space for your next corporate event.",
    image: "/assets/images/venue.jpg",
    href: "/venue-rental",
  },
];

// FAQ items
const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer corporate wellness programs, team building events, fitness classes, venue rental, and full event production services.",
  },
  {
    question: "Where are you located?",
    answer: "Our flagship venue is at 918 Congress Ave in downtown Austin, TX. We also service Dallas, Houston, and San Antonio.",
  },
  {
    question: "How do I book an event?",
    answer: "Simply fill out our contact form or call us directly. We'll schedule a consultation to understand your needs and create a custom proposal.",
  },
];

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

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  star: StarIcon,
  users: UsersIcon,
  building: BuildingIcon,
  heart: HeartIcon,
  location: LocationIcon,
};

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Bleed with Large Typography */}
      <section className="relative min-h-screen flex flex-col">
        {/* Hero Image */}
        <div className="relative flex-1 min-h-[70vh]">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-500">
            {/* Placeholder gradient - replace with actual image */}
            <div className="absolute inset-0 bg-[url('/assets/images/hero.jpg')] bg-cover bg-center" />
          </div>

          {/* Large Typography Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center px-4"
            >
              <h1 className="text-white text-[10vw] md:text-[8vw] lg:text-[6vw] font-extrabold leading-[0.95] tracking-tighter">
                SWIFT FIT
                <br />
                <span className="text-cta">EVENTS</span>
              </h1>
            </motion.div>
          </div>

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white"
          >
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 font-semibold">5/5</span>
            </div>
            <p className="text-sm opacity-90">Austin&apos;s Top-Rated Corporate Wellness Partner</p>
          </motion.div>
        </div>

        {/* Tagline */}
        <div className="bg-white py-12 px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium italic text-ink max-w-3xl mx-auto"
          >
            Whether you&apos;re planning a team retreat or chasing quarterly goals,
            <br className="hidden md:block" />
            <span className="text-cta"> we&apos;ve got the perfect experience for you.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6"
          >
            <svg
              className="w-6 h-6 mx-auto text-ink animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-cta py-4 overflow-hidden">
        <Marquee speed="normal" className="text-white">
          {marqueeItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={index} className="flex items-center gap-3 px-4">
                <Icon className="w-5 h-5" />
                <span className="font-bold text-sm tracking-wide">{item.text}</span>
              </div>
            );
          })}
        </Marquee>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-sky-300" />
              {/* Replace with actual image */}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-cta text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-cta" />
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-6">
                Feel Better,<br />Work Better.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Swift Fit Events is Austin&apos;s premier corporate wellness partner. We help companies
                create meaningful experiences that boost employee wellbeing, strengthen team bonds,
                and transform workplace culture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-cta text-white hover:bg-cta/90 rounded-full px-8">
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 border-ink text-ink hover:bg-ink hover:text-white">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-cta text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-cta" />
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-ink">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="group block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500" />
                    {/* Replace with actual images */}
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-2 group-hover:text-cta transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar - Partner Logos */}
      <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Trusted by leading companies
        </motion.p>
        <Marquee speed="slow" pauseOnHover gap="4rem" className="py-4">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={180}
                height={90}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-cta text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-cta" />
              FAQs
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">
              Got Questions?
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know before booking your next corporate event.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-100 pb-6"
              >
                <h3 className="text-lg font-semibold text-ink mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600">
          {/* Replace with actual image */}
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Transform<br />Your Workplace?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let&apos;s create meaningful experiences that your team will actually remember.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cta text-white hover:bg-cta/90 rounded-full px-8"
              >
                <Link href="/contact">Request a Proposal</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white text-white hover:bg-white hover:text-ink"
              >
                <Link href="/corporate-wellness">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
