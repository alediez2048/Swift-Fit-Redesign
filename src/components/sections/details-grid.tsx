"use client";

import { m } from "framer-motion";

export interface Detail {
    title: string;
    description: string;
}

interface DetailsGridProps {
    details: Detail[];
    columns?: 2 | 3;
}

export function DetailsGrid({ details, columns = 2 }: DetailsGridProps) {
    const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

    return (
        <section className="py-24 lg:py-32 bg-surface relative z-10">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className={`grid ${gridCols} gap-8`}>
                    {details.map((detail, index) => (
                        <m.div
                            key={detail.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white rounded-xl p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-teal mb-3">
                                {detail.title}
                            </h3>
                            <p className="text-muted-foreground">{detail.description}</p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
