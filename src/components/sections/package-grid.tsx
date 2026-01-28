"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface Package {
    title: string;
    tagline?: string;
    features: string[];
    description: string;
    ctaText?: string;
    ctaHref?: string;
}

interface PackageGridProps {
    packages: Package[];
    columns?: 2 | 3;
}

export function PackageGrid({ packages, columns = 3 }: PackageGridProps) {
    const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

    return (
        <section className="py-24 lg:py-32 bg-surface relative z-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={`grid ${gridCols} gap-8`}>
                    {packages.map((pkg, index) => (
                        <m.div
                            key={pkg.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-teal mb-2">
                                    {pkg.title}
                                </h3>
                                {pkg.tagline && (
                                    <p className="text-coral font-semibold">{pkg.tagline}</p>
                                )}
                            </div>

                            {pkg.features.length > 0 && (
                                <ul className="space-y-2 mb-6">
                                    {pkg.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                            <span className="text-coral mt-0.5">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <p className="text-muted-foreground mb-6">{pkg.description}</p>

                            {pkg.ctaText && pkg.ctaHref && (
                                <Button
                                    asChild
                                    className="w-full bg-teal text-white hover:bg-teal/90 rounded-full"
                                >
                                    <Link href={pkg.ctaHref}>{pkg.ctaText}</Link>
                                </Button>
                            )}
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
