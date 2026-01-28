import { HeroSection } from "@/components/sections/hero-section";
import { CONTACT_INFO, EXTERNAL_LINKS } from "@/lib/constants";

export default function CatalogPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                heading="thanks for running INTO US AT VISIT AUSTIN!"
            />

            {/* Introduction Section */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-6">
                        Bring the Swift Fit Experience to Your Next Event
                    </h2>
                    <p className="text-2xl font-semibold text-coral mb-8">
                        2025 Programming Overview
                    </p>

                    <div className="bg-surface rounded-2xl p-8 mb-8 text-left">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            This digital guide is designed with ease and exploration in mind.
                            Use the clickable Table of Contents and section headers to navigate
                            seamlessly through our full suite of wellness offerings. As you
                            browse, simply click the arrow icon at the top left corner of any
                            page to return to the Table of Contents at any time.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Please reach out to{" "}
                            <a
                                href={`mailto:${CONTACT_INFO.email.info}`}
                                className="text-teal font-semibold hover:underline"
                            >
                                {CONTACT_INFO.email.info}
                            </a>{" "}
                            with questions.
                        </p>
                    </div>

                    <div className="bg-coral/10 rounded-2xl p-6 mb-8">
                        <p className="text-lg font-semibold text-teal mb-2">
                            Special Access!
                        </p>
                        <p className="text-muted-foreground">
                            Use Password: <strong>VisitAustin2025</strong>
                        </p>
                    </div>

                    <a
                        href={EXTERNAL_LINKS.catalog.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-teal text-white font-semibold px-8 py-4 rounded-full hover:bg-teal/90 transition-colors"
                    >
                        View Here
                    </a>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-24 lg:py-32 bg-surface relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h3 className="text-3xl font-bold text-teal mb-8 text-center">
                        Explore Our Services
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a
                            href="/corporate-wellness"
                            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                        >
                            <h4 className="text-xl font-bold text-teal mb-2">
                                Corporate Wellness
                            </h4>
                            <p className="text-muted-foreground">
                                Team building, fitness classes, and workplace wellness programs
                            </p>
                        </a>
                        <a
                            href="/corporate-events-packages"
                            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                        >
                            <h4 className="text-xl font-bold text-teal mb-2">
                                Event Packages
                            </h4>
                            <p className="text-muted-foreground">
                                Curated wellness packages for any occasion
                            </p>
                        </a>
                        <a
                            href="/venue-rental"
                            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                        >
                            <h4 className="text-xl font-bold text-teal mb-2">
                                Venue Rentals
                            </h4>
                            <p className="text-muted-foreground">
                                Prime downtown Austin locations for your events
                            </p>
                        </a>
                        <a
                            href="/community-events"
                            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                        >
                            <h4 className="text-xl font-bold text-teal mb-2">
                                Community Events
                            </h4>
                            <p className="text-muted-foreground">
                                Free and low-cost wellness events for all Austinites
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
