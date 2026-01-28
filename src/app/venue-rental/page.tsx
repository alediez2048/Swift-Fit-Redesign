import { HeroSection } from "@/components/sections/hero-section";
import { DetailsGrid, Detail } from "@/components/sections/details-grid";
import { CTASection } from "@/components/sections/cta-section";
import { CONTACT_INFO } from "@/lib/constants";

// Venue details
const venueDetails: Detail[] = [
    {
        title: "Parking",
        description:
            "Convenient parking options available nearby. Street parking and public garages within walking distance.",
    },
    {
        title: "Capacity",
        description:
            "Accommodate up to 150 guests comfortably. Flexible layouts for cocktail-style events, seated dinners, or standing receptions.",
    },
    {
        title: "Food & Beverage",
        description:
            "Fully functioning bar with premium spirits. Custom catering options available through our preferred vendors or bring your own.",
    },
    {
        title: "On-Site Coordinator",
        description:
            "Dedicated event coordinator to ensure seamless execution from setup to cleanup. We handle the details so you can enjoy your event.",
    },
    {
        title: "Site Visit",
        description: `Schedule a tour to see our venues in person. Email ${CONTACT_INFO.email.booking} to arrange your visit.`,
    },
    {
        title: "WiFi & AV Equipment",
        description:
            "High-speed WiFi included. Professional AV equipment available including sound system, projector, and microphones.",
    },
    {
        title: "Cleaning",
        description:
            "Post-event cleaning services included with every rental. Leave the venue worry-free.",
    },
];

// Amenities list
const amenities = [
    "Professional sound system",
    "Projector & screen",
    "High-speed WiFi",
    "Tables & chairs",
    "Full bar setup",
    "Lighting design",
    "Outdoor patio access",
    "Climate control",
];

export default function VenueRentalPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                heading="Venue Rentals"
                subheading="Two Venue Rentals Located in the Heart of Downtown Austin"
            />

            {/* Venue Overview */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Venue 1 */}
                        <div className="bg-surface rounded-2xl p-8">
                            <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                                <span className="w-2 h-2 rounded-full bg-coral" />
                                Venue 1
                            </span>
                            <h2 className="text-3xl font-extrabold text-teal mb-4">
                                918 Congress Ave
                            </h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                A stunning 2,000 square foot space with a fully functioning bar,
                                perfect for corporate events, private parties, and wellness
                                activations.
                            </p>
                            <div className="text-sm text-teal font-semibold">
                                {CONTACT_INFO.address.venue1}
                            </div>
                        </div>

                        {/* Venue 2 */}
                        <div className="bg-surface rounded-2xl p-8">
                            <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                                <span className="w-2 h-2 rounded-full bg-coral" />
                                Venue 2
                            </span>
                            <h2 className="text-3xl font-extrabold text-teal mb-4">
                                920 Congress Ave
                            </h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                Brand NEW space right next door! Modern design with flexible
                                layout options for any type of event or gathering.
                            </p>
                            <div className="text-sm text-teal font-semibold">
                                {CONTACT_INFO.address.venue2}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-24 lg:py-32 bg-surface relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                        <span className="w-2 h-2 rounded-full bg-coral" />
                        Amenities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-8">
                        Ask About Our Amenities
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                        {amenities.map((amenity) => (
                            <div key={amenity} className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-coral flex-shrink-0" />
                                <span className="text-lg text-muted-foreground">{amenity}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Details Grid */}
            <DetailsGrid details={venueDetails} columns={2} />

            {/* CTA Section */}
            <CTASection
                heading="Ready to book your event?"
                description="Fill out this form to get started with your venue rental."
                showForm={true}
                variant="coral"
            />
        </main>
    );
}
