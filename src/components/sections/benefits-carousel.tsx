"use client";

import { m } from "framer-motion";
import { useState, useEffect } from "react";
import {
    Users,
    Heart,
    TrendUp,
    ShieldCheck,
    Trophy,
    ThumbsUp,
    IconWeight,
} from "@phosphor-icons/react";

const iconMap: Record<
    string,
    React.FC<{ className?: string; weight?: IconWeight }>
> = {
    users: Users,
    heart: Heart,
    trending: TrendUp,
    shield: ShieldCheck,
    trophy: Trophy,
    thumbsup: ThumbsUp,
};

export interface Benefit {
    icon?: string;
    title: string;
    description?: string;
}

interface BenefitsCarouselProps {
    title: string;
    benefits: Benefit[];
    autoRotate?: boolean;
}

export function BenefitsCarousel({
    title,
    benefits,
    autoRotate = true,
}: BenefitsCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!autoRotate || benefits.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % benefits.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [autoRotate, benefits.length]);

    return (
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
                        Benefits
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
                        {title}
                    </h2>
                </m.div>

                {/* Grid layout for desktop, carousel for mobile */}
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon ? iconMap[benefit.icon] : ShieldCheck;
                        return (
                            <m.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`bg-white rounded-2xl p-8 shadow-lg transition-all ${activeIndex === index ? "ring-2 ring-coral" : ""
                                    }`}
                            >
                                <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6">
                                    <Icon className="w-7 h-7 text-coral" weight="duotone" />
                                </div>
                                <h3 className="text-xl font-bold text-teal mb-3">
                                    {benefit.title}
                                </h3>
                                {benefit.description && (
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                )}
                            </m.div>
                        );
                    })}
                </div>

                {/* Carousel dots */}
                {benefits.length > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {benefits.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${activeIndex === index
                                        ? "bg-coral w-8"
                                        : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
