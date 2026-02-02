"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Star, CaretDown } from "@phosphor-icons/react";
import asteriskImage from "@/assets/images/asterisk.webp";
import teamImage from "@/assets/images/Swift_Fit_Picture_Day_92_0e0ecbeeb9.webp";

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

interface HeroSectionProps {
    variant?: "full" | "compact";
    background?: "video" | "coral" | "teal";
    heading: string;
    subheading?: string;
    showRating?: boolean;
    showArrow?: boolean;
}

export function HeroSection({
    variant = "compact",
    background = "video",
    heading,
    subheading,
    showRating = false,
    showArrow = false,
}: HeroSectionProps) {
    const heightClass = variant === "full" ? "h-screen" : "h-[50vh]";

    return (
        <section
            className={`relative ${heightClass} overflow-hidden border-x-[20px] border-white box-border`}
        >
            {/* Background */}
            <div className="absolute inset-0" aria-hidden="true">
                {background === "video" ? (
                    <>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            // @ts-expect-error - fetchPriority is valid but not in React types yet
                            fetchPriority={variant === "full" ? "high" : "low"}
                            poster={teamImage.src}
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src={`${process.env.NODE_ENV === "production" ? "/Swift-Fit-Redesign" : ""
                                    }/assets/video/hero-video.mp4`}
                                type="video/mp4"
                            />
                        </video>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-teal/30 via-teal/20 to-teal/30" />
                    </>
                ) : (
                    <div className={`absolute inset-0 ${background === "coral" ? "bg-coral" : "bg-teal"
                        }`} />
                )}
            </div>

            {variant === "full" ? (
                <FullHeroContent
                    heading={heading}
                    showRating={showRating}
                    showArrow={showArrow}
                />
            ) : (
                <CompactHeroContent heading={heading} subheading={subheading} />
            )}
        </section>
    );
}

// Full immersive hero (Homepage & Swift Fit Social)
function FullHeroContent({
    heading,
    showRating,
    showArrow,
}: {
    heading: string;
    showRating: boolean;
    showArrow: boolean;
}) {
    return (
        <div className="relative z-10 flex flex-col h-screen px-6">
            {/* TOP SECTION - Title */}
            <div className="pt-[calc(10vh+15px)] md:pt-[calc(12vh+15px)] lg:pt-[calc(14vh+15px)] text-center">
                <m.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <m.h1
                        variants={fadeUpVariant}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-extrabold leading-[0.9] tracking-tight"
                        style={{ color: "#FFFFFF", fontSize: "15vw" }}
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
                        <span
                            className="block text-[0.41em] tracking-[0.3em] font-bold mt-1 relative z-20"
                            style={{ color: "#FFFFFF" }}
                        >
                            SOCIAL
                        </span>
                    </m.h1>

                    {/* Decorative Squiggle */}
                    <m.div
                        variants={fadeUpVariant}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center -mt-[2vw]"
                    >
                        <svg
                            width="412"
                            height="110"
                            viewBox="0 0 275 73"
                            className="w-[45vw] max-w-[412px]"
                            style={{ color: "#FF5C00" }}
                        >
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

            {/* MIDDLE SECTION - Flexible spacer */}
            <div className="flex-1" />

            {/* BOTTOM SECTION */}
            <div className="pb-[14vh] text-center">
                {showRating && (
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
                            Austin&apos;s Top-Rated Corporate
                            <br />
                            Wellness Partner
                        </p>
                    </m.div>
                )}

                {showArrow && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <CaretDown
                            className="w-[46px] h-[45px] mx-auto text-white"
                            weight="bold"
                        />
                    </m.div>
                )}
            </div>
        </div>
    );
}

// Compact hero (all other pages)
function CompactHeroContent({
    heading,
    subheading,
}: {
    heading: string;
    subheading?: string;
}) {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
            <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
            >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight" style={{ color: '#FFFFFF' }}>
                    {heading}
                </h1>
                {subheading && (
                    <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-center" style={{ color: '#FFFFFF' }}>
                        {subheading}
                    </p>
                )}
            </m.div>
        </div>
    );
}
