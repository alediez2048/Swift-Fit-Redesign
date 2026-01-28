"use client";

import { m } from "framer-motion";
import Image from "next/image";

export interface CaseStudy {
    title: string;
    description: string;
    image?: string;
}

interface CaseStudyShowcaseProps {
    heading: string;
    caseStudies: CaseStudy[];
}

export function CaseStudyShowcase({
    heading,
    caseStudies,
}: CaseStudyShowcaseProps) {
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
                        Case Studies
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
                        {heading}
                    </h2>
                </m.div>

                <div className="space-y-12">
                    {caseStudies.map((study, index) => (
                        <m.div
                            key={study.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } gap-8 items-center`}
                        >
                            {/* Image */}
                            {study.image && (
                                <div className="w-full md:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Content */}
                            <div className={`w-full ${study.image ? "md:w-1/2" : ""}`}>
                                <h3 className="text-2xl md:text-3xl font-bold text-teal mb-4">
                                    {study.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {study.description}
                                </p>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
