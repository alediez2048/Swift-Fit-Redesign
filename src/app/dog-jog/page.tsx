import { HeroSection } from "@/components/sections/hero-section";
import { DetailsGrid, Detail } from "@/components/sections/details-grid";
import { CTASection } from "@/components/sections/cta-section";
import { EXTERNAL_LINKS } from "@/lib/constants";

// Event details
const eventDetails: Detail[] = [
    {
        title: "Start Point",
        description:
            "Republic Park (meet in the center). Best entry points: Federal Courthouse Plaza or Guadalupe Street.",
    },
    {
        title: "Distance",
        description:
            "2 miles (loop along Lady Bird Lake trail). A shorter 1.2 mile option is also available.",
    },
    {
        title: "Pace",
        description:
            "Relaxed + social. We'll walk as a group down Guadalupe Street, then jog/walk at your own pace on the trail.",
    },
];

// What to bring
const whatToBring = [
    "Comfortable running/walking shoes",
    "Leash and/or harness (no retractables, please)",
    "Water bottle (optional, there are public water stations along the route)",
    "Dog waste bags",
    "Big smiles and wagging tails!",
];

// Safety guidelines
const safetyGuidelines = [
    {
        title: "Leashes Required",
        description:
            "All dogs must remain on leash throughout the event for everyone's safety.",
    },
    {
        title: "Pet Safety First",
        description:
            "Please only bring dogs that are comfortable around other dogs and crowds. If your dog is reactive, those energetic pups are better off catching up on Netflix at home.",
    },
    {
        title: "Hydration",
        description:
            "Multiple water stations available. Bring a collapsible bowl if your pup prefers their own.",
    },
    {
        title: "Heat Precautions",
        description:
            "This is Texas! Watch for signs of overheating (heavy panting, lagging, excessive drool). Pause at water breaks as needed.",
    },
    {
        title: "Waste Disposal",
        description:
            "Please pick up after your pet and bring your own waste bags.",
    },
];

export default function DogJogPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                background="coral"
                heading="Wags & Wellness Dog Jog"
                subheading="Saturday, September 27 | 9:00 AM | Republic Park"
            />

            {/* Event Description */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <p className="text-2xl md:text-3xl font-semibold text-teal leading-relaxed mb-8">
                        Lace up, leash up, and join us for a morning of movement, community,
                        and wagging tails! The Wags & Wellness Dog Jog is a fun, casual way
                        to get moving with your pup while exploring Austin&apos;s trails
                        together.
                    </p>
                    <a
                        href={EXTERNAL_LINKS.eventbrite.dogJog}
                        className="inline-block bg-coral text-white font-semibold px-8 py-4 rounded-full hover:bg-coral/90 transition-colors"
                    >
                        SIGN UP NOW!
                    </a>
                </div>
            </section>

            {/* Event Details */}
            <DetailsGrid details={eventDetails} columns={3} />

            {/* Event Flow */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-12 text-center">
                        Event Flow
                    </h2>

                    <div className="space-y-6 mb-12">
                        <div className="bg-surface rounded-xl p-6">
                            <h3 className="text-xl font-bold text-teal mb-2">
                                9:00 AM – Check-in + hydration station
                            </h3>
                        </div>
                        <div className="bg-surface rounded-xl p-6">
                            <h3 className="text-xl font-bold text-teal mb-2">
                                9:15 AM – Group start (walk to trail together)
                            </h3>
                        </div>
                        <div className="bg-surface rounded-xl p-6">
                            <h3 className="text-xl font-bold text-teal mb-2">
                                Jog/Walk – Scenic 2-mile or 1.2-mile loop
                            </h3>
                        </div>
                        <div className="bg-surface rounded-xl p-6">
                            <h3 className="text-xl font-bold text-teal mb-2">
                                Finish + Cool Down – Back to Republic Park
                            </h3>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-teal mb-4">Route Options</h3>
                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            <div className="bg-coral/10 rounded-xl p-6">
                                <h4 className="text-xl font-bold text-coral mb-2">
                                    Short Route
                                </h4>
                                <p className="text-4xl font-extrabold text-teal">1.2 miles</p>
                            </div>
                            <div className="bg-teal/10 rounded-xl p-6">
                                <h4 className="text-xl font-bold text-teal mb-2">Long Route</h4>
                                <p className="text-4xl font-extrabold text-teal">2 miles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Section */}
            <section className="py-24 lg:py-32 bg-surface relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                        <span className="w-2 h-2 rounded-full bg-coral" />
                        Event Partner
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-6">
                        Led by Goodpain Athletics
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                        This community-powered jog is guided by Goodpain Athletics—a run
                        club known for their camaraderie, energy, and passion for fitness.
                        They&apos;ll keep the pace light, safe, and fun for both two- and
                        four-legged runners.
                    </p>

                    <h3 className="text-2xl font-bold text-teal mb-4">What to Expect:</h3>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                            <span className="text-coral mt-1">•</span>
                            <span className="text-lg text-muted-foreground">
                                Group energy and encouragement
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-coral mt-1">•</span>
                            <span className="text-lg text-muted-foreground">
                                Water breaks for pups + humans
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-coral mt-1">•</span>
                            <span className="text-lg text-muted-foreground">
                                Volunteer guides at every key turn
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-coral mt-1">•</span>
                            <span className="text-lg text-muted-foreground">
                                Plenty of celebration at the finish
                            </span>
                        </li>
                    </ul>

                    <p className="text-teal font-semibold">
                        Follow{" "}
                        <a
                            href={EXTERNAL_LINKS.goodpain.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            @goodpainathletics
                        </a>
                    </p>
                </div>
            </section>

            {/* What to Bring */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-12 text-center">
                        What to Bring
                    </h2>
                    <div className="space-y-3 max-w-2xl mx-auto">
                        {whatToBring.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-coral flex-shrink-0 mt-2" />
                                <span className="text-lg text-muted-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety Guidelines */}
            <DetailsGrid details={safetyGuidelines} columns={2} />

            {/* Email Signup CTA */}
            <CTASection
                heading="Sign up with your email to receive news and updates"
                showForm={true}
                variant="teal"
            />
        </main>
    );
}
