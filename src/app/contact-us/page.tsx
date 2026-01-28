import { HeroSection } from "@/components/sections/hero-section";
import { ContactForm } from "@/components/sections/contact-form";
import { CONTACT_INFO } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { InstagramLogo, FacebookLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                heading="Contact Us"
                subheading="Let's create something amazing together"
            />

            {/* Contact Form Section */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-12 text-center">
                        gET IN tOUCH wITH uS
                    </h2>
                    <ContactForm variant="standalone" />
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 lg:py-32 bg-surface relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-coral" />
                            Testimonials
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
                            Here&apos;s What People Are Saying About Swift Fit Events!
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg"
                            >
                                <div className="mb-4">
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-coral text-xl">
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="font-bold text-teal">{testimonial.name}</p>
                                    {testimonial.company && (
                                        <p className="text-sm text-coral">{testimonial.company}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                        <span className="w-2 h-2 rounded-full bg-coral" />
                        Connect With Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-8">
                        Follow Us On Social Media
                    </h2>

                    <div className="flex justify-center gap-6">
                        <a
                            href={CONTACT_INFO.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white hover:bg-teal/90 transition-colors"
                            aria-label="Instagram"
                        >
                            <InstagramLogo size={32} weight="fill" />
                        </a>
                        <a
                            href={CONTACT_INFO.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white hover:bg-teal/90 transition-colors"
                            aria-label="Facebook"
                        >
                            <FacebookLogo size={32} weight="fill" />
                        </a>
                        <a
                            href={CONTACT_INFO.social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white hover:bg-teal/90 transition-colors"
                            aria-label="YouTube"
                        >
                            <YoutubeLogo size={32} weight="fill" />
                        </a>
                    </div>

                    <div className="mt-12 bg-surface rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-teal mb-4">Other Ways to Reach Us</h3>
                        <div className="space-y-3 text-lg">
                            <p>
                                <span className="font-semibold text-teal">Phone:</span>{" "}
                                <a href={`tel:${CONTACT_INFO.phone}`} className="text-coral hover:underline">
                                    {CONTACT_INFO.phone}
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold text-teal">Email:</span>{" "}
                                <a
                                    href={`mailto:${CONTACT_INFO.email.booking}`}
                                    className="text-coral hover:underline"
                                >
                                    {CONTACT_INFO.email.booking}
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold text-teal">Address:</span>{" "}
                                {CONTACT_INFO.address.venue1}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
