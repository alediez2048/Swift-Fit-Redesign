"use client";

import { m } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
    title?: string;
    variant?: "standalone" | "embedded";
    onSubmit?: (data: FormData) => void;
}

export function ContactForm({
    title = "Get In Touch With Us",
    variant = "standalone",
    onSubmit,
}: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (onSubmit) {
            const formDataObj = new FormData(e.currentTarget);
            onSubmit(formDataObj);
        }

        // Log form data (in production, send to backend)
        console.log("Form submission:", formData);

        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: "", email: "", phone: "", message: "" });
            setSubmitSuccess(false);
        }, 3000);
    };

    const inputClass =
        "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all";
    const labelClass = "block text-sm font-semibold text-teal mb-2";

    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={
                variant === "standalone"
                    ? "bg-white rounded-2xl p-8 shadow-lg"
                    : "bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            }
        >
            {title && (
                <h3
                    className={`text-2xl font-bold mb-6 ${variant === "embedded" ? "text-white" : "text-teal"
                        }`}
                >
                    {title}
                </h3>
            )}

            {submitSuccess ? (
                <div className="text-center py-8">
                    <div className="text-6xl mb-4">✓</div>
                    <h4
                        className={`text-2xl font-bold mb-2 ${variant === "embedded" ? "text-white" : "text-teal"
                            }`}
                    >
                        Thank You!
                    </h4>
                    <p
                        className={
                            variant === "embedded" ? "text-white/90" : "text-muted-foreground"
                        }
                    >
                        We&apos;ll get back to you soon.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className={labelClass}>
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClass}>
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className={labelClass}>
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="(512) 555-0123"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className={labelClass}>
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className={inputClass}
                            placeholder="Tell us about your event..."
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-coral text-white hover:bg-coral/90 rounded-full py-6 text-lg font-semibold"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            )}
        </m.div>
    );
}
