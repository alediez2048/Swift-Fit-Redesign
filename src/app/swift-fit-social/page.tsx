"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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

// Community offerings
const offerings = [
    {
        title: "Community Yoga",
        description: "Free outdoor yoga sessions in Austin's most beautiful parks.",
        icon: "yoga",
    },
    {
        title: "Wellness Workshops",
        description: "Educational workshops on nutrition, mindfulness, and healthy living.",
        icon: "workshop",
    },
    {
        title: "Group Fitness",
        description: "High-energy group workouts that bring the community together.",
        icon: "fitness",
    },
    {
        title: "Health Fairs",
        description: "Partner with local health vendors for community wellness fairs.",
        icon: "fair",
    },
    {
        title: "Run Clubs",
        description: "Weekly running groups for all fitness levels across Austin.",
        icon: "run",
    },
    {
        title: "Sponsor Events",
        description: "Custom branded wellness events for local businesses and sponsors.",
        icon: "sponsor",
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

export default function SwiftFitSocialPage() {
    return (
        <>
            <main className="min-h-screen bg-white -mt-16">

                {/* Hero Section */}
                <section className="relative h-screen overflow-hidden border-x-[20px] border-white box-border">
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
                        {/* Gradient overlay - same as homepage */}
                        <div className="absolute inset-0 bg-gradient-to-b from-teal/30 via-teal/20 to-teal/30" />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col h-screen px-6">

                        {/* TOP SECTION - Title - matching homepage + 65px */}
                        <div className="pt-[calc(10vh+65px)] md:pt-[calc(12vh+65px)] lg:pt-[calc(14vh+65px)] text-center">
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
                                    <span className="block text-[0.41em] tracking-[0.3em] font-bold mt-1 relative z-20" style={{ color: '#FFFFFF' }}>SOCIAL</span>
                                </motion.h1>

                                {/* Decorative Squiggle - same as homepage */}
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

                        {/* MIDDLE SECTION - Spacer */}
                        <div className="flex-1" />

                        {/* BOTTOM SECTION - Rating, Tagline, Arrow */}
                        <div className="pb-[14vh] text-center">
                            {/* Rating */}
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
                                            transition={{ delay: 0.6 + i * 0.08, type: "spring" }}
                                        >
                                            <StarIcon className="w-[30px] h-[30px] text-white fill-white" />
                                        </motion.div>
                                    ))}
                                    <span className="ml-2 font-medium text-white text-2xl">5/5</span>
                                </div>
                                <p className="text-2xl text-white font-medium">
                                    How Austin&apos;s Wellness<br />Community Connects
                                </p>
                            </motion.div>

                            {/* Tagline */}


                            {/* Animated Arrow */}
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
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-coral leading-tight">
                                <span className="block font-light italic text-teal">Introducing,</span>
                                Swift Fit <span className="relative inline-block">
                                    Social
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
                                    alt="Swift Fit Social community event"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Right - About & Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col justify-center space-y-8"
                            >
                                <p className="text-xl md:text-2xl font-medium text-teal leading-relaxed">
                                    Austin&apos;s most epic wellness events, built on good vibes, great people, and a healthy dose of &ldquo;weird&rdquo;.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Swift Fit Social brings approachable, family-friendly, and creatively curated gatherings that celebrate Austin’s vibrant culture. Our events blend movement with music and immersive wellness experiences that welcome friends, families, locals, and newcomers alike.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Celebrate life, break a sweat, and make genuine connections without taking yourself too seriously.
                                </p>
                                <div>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-coral text-white hover:bg-coral/90 rounded-full px-8"
                                    >
                                        <Link href="/contact">Join the Community</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                        {/* Stats Cards */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { value: "100+", label: "Free Community Events" },
                                { value: "25+", label: "Local Sponsors" },
                                { value: "10K+", label: "Community Members" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-coral/5 rounded-2xl p-8 text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-extrabold text-coral mb-2">{stat.value}</div>
                                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Offerings Section */}
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
                                Community Programs
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
                                What We Offer
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {offerings.map((offering, index) => (
                                <motion.div
                                    key={offering.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6">
                                        <svg className="w-7 h-7 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-teal mb-3">{offering.title}</h3>
                                    <p className="text-muted-foreground">{offering.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Become a Sponsor CTA */}
                <section className="py-24 lg:py-32 bg-coral relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-teal rounded-full blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ color: '#FFFFFF' }}>
                                Become a Sponsor
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Partner with Swift Fit Social to connect your brand with Austin&apos;s health-conscious community. Custom events, authentic engagement, lasting impact.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-coral hover:bg-white/90 rounded-full px-8"
                                >
                                    <Link href="/contact">Partner With Us</Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8"
                                >
                                    <Link href="/corporate-wellness">View Sponsorship Tiers</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Upcoming Events Section */}
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
                                Don&apos;t Miss Out
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
                                Upcoming Events
                            </h2>
                        </motion.div>

                        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                            {/* Event 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row"
                            >
                                <div className="md:w-2/5 relative h-64 md:h-auto bg-teal/10">
                                    {/* Placeholder for event image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-teal/30 font-bold text-2xl">
                                        JAN 24
                                    </div>
                                </div>
                                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                                    <div className="text-coral font-bold mb-2">January 24th, 2026</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-teal mb-4">Glow & Grow: A New Year Kickoff</h3>
                                    <p className="text-muted-foreground mb-6">
                                        What if 2026 was the year you actually did it? Glow & Grow is where resolutions become reality. This immersive New Year kickoff brings together fitness samplers, hands-on wellness experiences, and mocktail bars, alongside activations and collaborative movement experiences. One event. Endless possibilities. Your 2026 glow-up starts here.
                                    </p>
                                    <div>
                                        <Button asChild className="bg-teal text-white hover:bg-teal/90 rounded-full px-8">
                                            <Link href="/contact">RSVP Now</Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Event 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row"
                            >
                                <div className="md:w-2/5 relative h-64 md:h-auto bg-coral/10">
                                    {/* Placeholder for event image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-coral/30 font-bold text-2xl">
                                        FEB 15
                                    </div>
                                </div>
                                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                                    <div className="text-coral font-bold mb-2">February 15th, 2026</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-teal mb-4">Marathon Finish Line Experience</h3>
                                    <p className="text-muted-foreground mb-6">
                                        The ultimate race-day headquarters, The Finish Line Experience offers runners and their crews VIP treatment from sunrise to victory lap. Guests can stretch before the race, spectate in style, and recover after—all with prime finish line views on Congress Avenue.
                                    </p>
                                    <div>
                                        <Button asChild className="bg-teal text-white hover:bg-teal/90 rounded-full px-8">
                                            <Link href="/contact">RSVP Now</Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-xl font-medium text-teal mb-2">More events on the way! Stay tuned for updates.</p>
                        </div>
                    </div>
                </section>


                {/* Newsletter Section */}
                <section className="py-24 bg-coral text-white text-center">
                    <div className="mx-auto max-w-2xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
                                Sign up to make sure you don&apos;t miss the next swift fit social event.
                            </h2>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="flex-1 px-6 py-3 rounded-full bg-transparent border border-white text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                                    required
                                />
                                <Button type="submit" className="bg-teal text-white hover:bg-teal/90 rounded-full px-8 py-6 font-semibold shadow-lg">
                                    Sign Up
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </section>

            </main>
        </>
    );
}
