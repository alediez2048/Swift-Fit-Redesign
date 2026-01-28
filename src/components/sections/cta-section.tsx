"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactForm } from "./contact-form";

interface CTASectionProps {
    heading: string;
    description?: string;
    showForm?: boolean;
    ctaText?: string;
    ctaHref?: string;
    variant?: "coral" | "teal";
}

export function CTASection({
    heading,
    description,
    showForm = false,
    ctaText,
    ctaHref,
    variant = "coral",
}: CTASectionProps) {
    const bgClass = variant === "coral" ? "bg-coral" : "bg-teal";

    return (
        <section className={`py-24 lg:py-32 ${bgClass} relative z-10 overflow-hidden`}>
            {/* Decorative blobs */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#FFFFFF' }}>
                        {heading}
                    </h2>
                    {description && (
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </m.div>

                {showForm ? (
                    <ContactForm variant="embedded" />
                ) : ctaText && ctaHref ? (
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-teal hover:bg-white/90 rounded-full text-lg px-8 py-6"
                        >
                            <Link href={ctaHref}>{ctaText}</Link>
                        </Button>
                    </m.div>
                ) : null}
            </div>
        </section>
    );
}
