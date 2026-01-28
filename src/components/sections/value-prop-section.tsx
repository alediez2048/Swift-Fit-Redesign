"use client";

import { m } from "framer-motion";

interface ValuePropSectionProps {
    copy: string;
    alignment?: "center" | "left";
}

export function ValuePropSection({
    copy,
    alignment = "center",
}: ValuePropSectionProps) {
    const alignmentClass = alignment === "center" ? "text-center" : "text-left";

    return (
        <section className="py-16 lg:py-20 bg-white relative z-10">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={alignmentClass}
                >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-teal leading-relaxed">
                        {copy}
                    </p>
                </m.div>
            </div>
        </section>
    );
}
