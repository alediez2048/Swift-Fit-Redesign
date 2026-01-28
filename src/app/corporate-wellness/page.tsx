import { HeroSection } from "@/components/sections/hero-section";
import { ValuePropSection } from "@/components/sections/value-prop-section";
import { PackageGrid, Package } from "@/components/sections/package-grid";
import { BenefitsCarousel, Benefit } from "@/components/sections/benefits-carousel";
import { CTASection } from "@/components/sections/cta-section";

// Services data
const services: Package[] = [
    {
        title: "Excursions",
        tagline: "Adventure Awaits",
        features: [
            "Lady Bird Lake kayaking",
            "Stand-up paddleboarding",
            "Guided nature hikes",
            "Team building activities",
        ],
        description:
            "Get your team outside and active with outdoor adventures that build camaraderie and boost morale.",
    },
    {
        title: "Movement",
        tagline: "Get Moving",
        features: [
            "Yoga sessions",
            "HIIT workouts",
            "Dance cardio",
            "Stretch & mobility",
        ],
        description:
            "Energize your workplace with fitness classes tailored to all skill levels and designed to get hearts pumping.",
    },
    {
        title: "Activations",
        tagline: "Event Experiences",
        features: [
            "Pop-up wellness booths",
            "Health screenings",
            "Massage therapy",
            "Sound healing",
        ],
        description:
            "Create memorable wellness moments at your corporate events with on-site activations and services.",
    },
    {
        title: "Workshops",
        tagline: "Learn & Grow",
        features: [
            "Nutrition seminars",
            "Stress management",
            "Sleep optimization",
            "Mental health talks",
        ],
        description:
            "Empower your team with educational workshops led by wellness experts and industry professionals.",
    },
    {
        title: "Team Building",
        tagline: "Stronger Together",
        features: [
            "Group challenges",
            "Trust exercises",
            "Communication games",
            "Collaborative activities",
        ],
        description:
            "Foster deeper connections and improve team dynamics through fun, engaging wellness-focused activities.",
    },
];

// Benefits data
const benefits: Benefit[] = [
    {
        icon: "users",
        title: "Boost Engagement",
        description:
            "Employees who participate in wellness programs are more engaged, productive, and loyal to their company.",
    },
    {
        icon: "heart",
        title: "Improve Health",
        description:
            "Regular wellness activities reduce health risks, lower stress levels, and promote long-term well-being.",
    },
    {
        icon: "trending",
        title: "Save Costs",
        description:
            "Investing in employee wellness reduces healthcare costs and decreases absenteeism by up to 25%.",
    },
];

export default function CorporateWellnessPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                heading="Corporate Events"
                subheading="Bring Wellness To Your Workplace!"
            />

            {/* Value Proposition */}
            <ValuePropSection
                copy="We help you cultivate a vibrant and magnetic company culture through health-forward events that prioritize connection, well-being, and fun!"
                alignment="center"
            />

            {/* Services Section */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-coral" />
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-4">
                            Corporate Wellness Solutions
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            From outdoor excursions to mindfulness workshops, we offer a
                            comprehensive suite of wellness services designed to elevate your
                            workplace culture.
                        </p>
                    </div>

                    <PackageGrid packages={services} columns={3} />
                </div>
            </section>

            {/* Benefits Carousel */}
            <BenefitsCarousel
                title="Why Invest in Corporate Wellness?"
                benefits={benefits}
                autoRotate={true}
            />

            {/* Event Offerings Preview */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-6">
                        Comprehensive Event Programming
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        We offer customizable wellness packages perfect for team building,
                        corporate retreats, office celebrations, and ongoing wellness
                        initiatives. Every event is thoughtfully designed to meet your
                        unique goals and company culture.
                    </p>
                    <a
                        href="/corporate-events-packages"
                        className="inline-block bg-coral text-white font-semibold px-8 py-4 rounded-full hover:bg-coral/90 transition-colors"
                    >
                        View Our Packages
                    </a>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                heading="Take the first step towards a healthier, happier workplace!"
                description="Let's chat about how we can bring wellness to your team."
                showForm={true}
                variant="coral"
            />
        </main>
    );
}
