import { HeroSection } from "@/components/sections/hero-section";
import {
    PartnershipGrid,
    PartnerCategory,
} from "@/components/sections/partnership-grid";
import { CTASection } from "@/components/sections/cta-section";

// Partnership data
const partnerships: PartnerCategory[] = [
    {
        category: "Animal Welfare",
        organizations: ["Austin Pets Alive", "Austin Animal Center"],
    },
    {
        category: "Sustainability",
        organizations: ["Boggy Creek Farm"],
    },
    {
        category: "Conservation",
        organizations: ["The Trail Foundation"],
    },
    {
        category: "Intellectual Disabilities",
        organizations: ["DSACT (Down Syndrome Association of Central Texas)"],
    },
];

export default function CommunityEventsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                background="teal"
                heading="Community Events"
                subheading="Uniting the Community Through Wellness"
            />

            {/* Introduction */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <p className="text-2xl md:text-3xl font-semibold text-teal leading-relaxed">
                        We believe wellness is for everyone. Our free and low-cost community
                        events make fitness, mindfulness, and connection accessible to all
                        Austinites.
                    </p>
                </div>
            </section>

            {/* Featured Events */}
            <section className="py-24 lg:py-32 bg-surface relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-coral" />
                            Free Community Events
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-4">
                            Join Us Every Week
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Fareground Yoga */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-teal mb-2">
                                Fareground Yoga
                            </h3>
                            <p className="text-coral font-semibold mb-4">Sundays @ 10:00 AM</p>
                            <p className="text-muted-foreground mb-4">
                                Start your Sunday with free yoga at Fareground Food Hall. All
                                levels welcome. Bring your own mat and water.
                            </p>
                            <div className="text-sm text-teal">
                                <strong>Location:</strong> Fareground, 111 Congress Ave
                            </div>
                        </div>

                        {/* Sans Bar Downtown */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-teal mb-2">
                                Sans Bar Downtown
                            </h3>
                            <p className="text-coral font-semibold mb-4">
                                Friday Nights @ 6:30 PM
                            </p>
                            <p className="text-muted-foreground mb-4">
                                Join us for evening yoga and mocktails at Sans Bar. A perfect
                                way to unwind and connect with the community after a long week.
                            </p>
                            <div className="text-sm text-teal">
                                <strong>Location:</strong> Sans Bar, 718 Congress Ave
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg text-muted-foreground mb-6">
                            Check out our{" "}
                            <a
                                href="/swift-fit-social"
                                className="text-coral font-semibold hover:underline"
                            >
                                Swift Fit Social page
                            </a>{" "}
                            for more community events and updates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Giving Back Section */}
            <PartnershipGrid
                title="Giving Back to Austin"
                partners={partnerships}
            />

            {/* Additional Info */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-6">
                        Get Involved
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        Want to bring a community wellness event to your neighborhood or
                        organization? We partner with local businesses, nonprofits, and
                        community groups to make wellness accessible across Austin.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                heading="Partner with us for community wellness"
                description="Let's make Austin healthier together."
                showForm={true}
                variant="teal"
            />
        </main>
    );
}
