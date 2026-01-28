"use client";

import { m } from "framer-motion";

export interface PartnerCategory {
    category: string;
    organizations: string[];
}

interface PartnershipGridProps {
    title: string;
    partners: PartnerCategory[];
}

export function PartnershipGrid({ title, partners }: PartnershipGridProps) {
    return (
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
                        Partnerships
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
                        {title}
                    </h2>
                </m.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <m.div
                            key={partner.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface rounded-xl p-6"
                        >
                            <h3 className="text-lg font-bold text-teal mb-4">
                                {partner.category}
                            </h3>
                            <ul className="space-y-2">
                                {partner.organizations.map((org) => (
                                    <li
                                        key={org}
                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                    >
                                        <span className="text-coral mt-0.5">•</span>
                                        <span>{org}</span>
                                    </li>
                                ))}
                            </ul>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
