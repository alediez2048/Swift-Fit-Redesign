import { HeroSection } from "@/components/sections/hero-section";
import { BenefitsCarousel, Benefit } from "@/components/sections/benefits-carousel";
import { CaseStudyShowcase, CaseStudy } from "@/components/sections/case-study-showcase";
import { CTASection } from "@/components/sections/cta-section";

// Benefits data
const benefits: Benefit[] = [
    {
        icon: "shield",
        title: "Align with Wellness",
        description:
            "Position your brand alongside health, vitality, and positive lifestyle choices that resonate with today's conscious consumers.",
    },
    {
        icon: "trophy",
        title: "Intentional Content",
        description:
            "Our events are curated to attract engaged, health-conscious audiences who value quality experiences and authentic brand partnerships.",
    },
    {
        icon: "thumbsup",
        title: "White-Glove Service",
        description:
            "From planning to execution, we handle every detail so you can focus on connecting with your audience and achieving your marketing goals.",
    },
];

// Case studies data
const caseStudies: CaseStudy[] = [
    {
        title: "The LINE Hotel - ACL Wellness Takeover",
        description:
            "During Austin City Limits Music Festival, we transformed The LINE Hotel into a wellness oasis. Our team curated daily yoga sessions, meditation classes, and recovery lounges that attracted festival-goers seeking balance. The partnership drove significant foot traffic and positioned The LINE as Austin's premier wellness-forward hotel.",
        image: "/images/case-studies/line-hotel.jpg", // Placeholder
    },
    {
        title: "Bumble - Wellness Day Activation",
        description:
            "We partnered with Bumble to create an immersive wellness day for their Austin community. The event featured fitness classes, healthy food vendors, and interactive wellness booths. Over 500 attendees experienced the Bumble brand through meaningful wellness activities, generating significant social media engagement and brand affinity.",
        image: "/images/case-studies/bumble.jpg", // Placeholder
    },
    {
        title: "Clean Cause - National Recovery Month",
        description:
            "For National Recovery Month, we collaborated with Clean Cause to host a series of wellness events highlighting their mission. Through yoga classes, recovery-focused workshops, and community gatherings, we helped Clean Cause connect with their core audience while raising awareness about addiction recovery and mental health.",
        image: "/images/case-studies/clean-cause.jpg", // Placeholder
    },
];

export default function PartnerWithUsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                background="teal"
                heading="Sponsorship Opportunities"
                subheading="We Connect Brands with Austin's Wellness Community"
            />

            {/* Introduction */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <p className="text-2xl md:text-3xl font-semibold text-teal leading-relaxed mb-8">
                        Partner with Swift Fit Events to align your brand with health,
                        wellness, and community. Our sponsorship opportunities give you
                        direct access to Austin&apos;s most engaged wellness enthusiasts.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-coral text-white font-semibold px-8 py-4 rounded-full hover:bg-coral/90 transition-colors"
                    >
                        Become A Sponsor
                    </a>
                </div>
            </section>

            {/* Benefits */}
            <BenefitsCarousel
                title="Why Partner With Us?"
                benefits={benefits}
                autoRotate={true}
            />

            {/* Audience Targeting */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                        <span className="w-2 h-2 rounded-full bg-coral" />
                        Target Audience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-6">
                        Reach the Perfect Audience
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Our events attract health-conscious professionals, corporate
                        decision-makers, and wellness enthusiasts who actively seek premium
                        products and services. Your brand will be front and center with an
                        audience that values quality, authenticity, and innovation.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <CaseStudyShowcase
                heading="Success Stories"
                caseStudies={caseStudies}
            />

            {/* CTA Section */}
            <CTASection
                heading="Get in touch with us to explore partnership opportunities"
                description="Let's create something amazing together."
                showForm={true}
                variant="teal"
            />
        </main>
    );
}
