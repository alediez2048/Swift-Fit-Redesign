import { HeroSection } from "@/components/sections/hero-section";
import { PackageGrid, Package } from "@/components/sections/package-grid";
import { CTASection } from "@/components/sections/cta-section";

// Package data
const packages: Package[] = [
    {
        title: "Active Afternoon",
        tagline: "Lake Activities",
        features: [
            "Kayaking on Lady Bird Lake",
            "Stand-up paddleboarding",
            "Guided water tours",
            "Equipment & instruction included",
        ],
        description:
            "Get your team outside for an afternoon of adventure on Austin's beautiful Lady Bird Lake. Perfect for building teamwork while enjoying the outdoors.",
    },
    {
        title: "Recovery Lounge",
        tagline: "Hydration & Wellness",
        features: [
            "IV hydration therapy",
            "Red light therapy",
            "Compression therapy",
            "Relaxation lounge",
        ],
        description:
            "Help your team recover and recharge with premium wellness services. Ideal for post-event recovery or midday rejuvenation.",
    },
    {
        title: "Healthy Happy Hour",
        tagline: "Custom Mocktails",
        features: [
            "Craft non-alcoholic beverages",
            "Fresh juice bar",
            "Healthy snacks",
            "Interactive mixology",
        ],
        description:
            "Reimagine happy hour with delicious, health-conscious mocktails and snacks that keep the energy high without the hangover.",
    },
    {
        title: "Morning Movement",
        tagline: "Fitness Class",
        features: [
            "Yoga or HIIT sessions",
            "Professional instructors",
            "All fitness levels welcome",
            "Equipment provided",
        ],
        description:
            "Start the day strong with an energizing fitness class. Choose from yoga, HIIT, dance cardio, or custom movement sessions.",
    },
    {
        title: "Texas Team Building",
        tagline: "Historic Tours",
        features: [
            "Downtown Austin walking tours",
            "Local history & culture",
            "Interactive challenges",
            "Photo opportunities",
        ],
        description:
            "Explore Austin's rich history and vibrant culture while building team connections through interactive challenges and local exploration.",
    },
    {
        title: "Conference Breakout",
        tagline: "Curated Seminars",
        features: [
            "Wellness workshops",
            "Nutrition talks",
            "Mental health seminars",
            "Expert speakers",
        ],
        description:
            "Enhance your conference or corporate event with engaging wellness seminars led by industry experts and thought leaders.",
    },
];

export default function CorporateEventsPackagesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                heading="Corporate Packages"
                subheading="Curated wellness experiences tailored for your team"
            />

            {/* Wellness Blueprint Section */}
            <section className="py-24 lg:py-32 bg-surface relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                        <span className="w-2 h-2 rounded-full bg-coral" />
                        Free Consultation
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-6">
                        Wellness Blueprint
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Schedule a free 30-minute consultation to discuss your company's
                        wellness goals and learn how we can create a custom program for your
                        team.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-teal text-white font-semibold px-8 py-4 rounded-full hover:bg-teal/90 transition-colors"
                    >
                        Book A Time
                    </a>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-coral" />
                            Our Packages
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-4">
                            Tailored For Your Team
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Choose from our curated packages or mix and match services to
                            create a custom wellness experience that fits your budget and
                            goals.
                        </p>
                    </div>

                    <PackageGrid packages={packages} columns={3} />
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                heading="Ready to transform your workplace culture?"
                description="Get in touch with us to design your custom wellness event."
                showForm={true}
                variant="coral"
            />
        </main>
    );
}
