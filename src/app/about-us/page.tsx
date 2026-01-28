import { HeroSection } from "@/components/sections/hero-section";
import { CTASection } from "@/components/sections/cta-section";
import { FOUNDER, TEAM_MEMBERS } from "@/lib/data/team";
import { INSTRUCTORS } from "@/lib/data/instructors";
import { LOCATIONS_SERVED } from "@/lib/constants";
import Image from "next/image";

// Import team member images
import leeAckerleyImg from "@/assets/images/Team/Lee-Ackerley.webp";
import mollyMccartyImg from "@/assets/images/Team/Molly-Mccarty.webp";
import candaceKiefImg from "@/assets/images/Team/Candace-Kief.webp";
import jimMartinoImg from "@/assets/images/Team/Jim-Martino.webp";
import jessicaHerbstImg from "@/assets/images/Team/Jessica-Herbst.webp";
import sageBroussardImg from "@/assets/images/Team/Sage-Broussard.webp";
import alexanderGouyetImg from "@/assets/images/Team/alexander-gouyet.webp";
import annieTaylorImg from "@/assets/images/Team/Annie-Taylor.webp";
import christinaWilsonImg from "@/assets/images/Team/Christina Wilson.webp";
import meganSoefjeImg from "@/assets/images/Team/Megan-Soefje.webp";
import katieWilsonImg from "@/assets/images/Team/Katie-Wilson.webp";

// Create a mapping of team member names to their images
const getTeamMemberImage = (name: string) => {
    const imageMap: Record<string, any> = {
        "Lee Ackerley": leeAckerleyImg,
        "Molly McCarty": mollyMccartyImg,
        "Candace Kief": candaceKiefImg,
        "Jim Martino": jimMartinoImg,
        "Jessica Herbst": jessicaHerbstImg,
        "Sage Broussard": sageBroussardImg,
        "Alexander Gouyet": alexanderGouyetImg,
        "Annie Taylor": annieTaylorImg,
        "Christina Wilson": christinaWilsonImg,
        "Megan Soefje": meganSoefjeImg,
        "Katie Wilson": katieWilsonImg,
    };
    return imageMap[name] || null;
};

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                heading="The Swift Team"
                subheading="Meet the passionate people behind Austin's premier wellness events"
            />

            {/* Founder Section */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                        <span className="w-2 h-2 rounded-full bg-coral" />
                        Our Founder
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-8">
                        Meet the Founder
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Founder Image */}
                        <div className="aspect-square rounded-2xl overflow-hidden relative">
                            <Image
                                src={leeAckerleyImg}
                                alt={FOUNDER.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Founder Bio */}
                        <div>
                            <h3 className="text-3xl font-bold text-teal mb-2">
                                {FOUNDER.name}
                            </h3>
                            <p className="text-coral font-semibold mb-4">
                                Ironman athlete and 42-marathon runner
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {FOUNDER.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-24 lg:py-32 bg-surface relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-coral" />
                            Our Team
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
                            The Swift Team
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TEAM_MEMBERS.map((member) => {
                            const memberImage = getTeamMemberImage(member.name);
                            return (
                                <div
                                    key={member.name}
                                    className="bg-white rounded-xl p-6 text-center"
                                >
                                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 relative">
                                        {memberImage ? (
                                            <Image
                                                src={memberImage}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                sizes="128px"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-teal/10 flex items-center justify-center">
                                                <span className="text-3xl">👤</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-teal mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-coral font-semibold">
                                        {member.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Instructors Section */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-coral" />
                            Our Instructors
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-teal">
                            Meet Our Instructors
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {INSTRUCTORS.map((instructor) => (
                            <div
                                key={instructor.name}
                                className="bg-surface rounded-xl p-6 text-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-coral/10 mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-3xl">🧘</span>
                                </div>
                                <h3 className="text-lg font-bold text-teal mb-2">
                                    {instructor.name}
                                </h3>
                                <div className="text-sm text-muted-foreground">
                                    {instructor.specialties.join(", ")}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations Served */}
            <section className="py-24 lg:py-32 bg-surface relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mb-4">
                        <span className="w-2 h-2 rounded-full bg-coral" />
                        Service Area
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-8">
                        Where We Work
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {LOCATIONS_SERVED.map((location) => (
                            <div
                                key={location}
                                className="bg-white rounded-full px-6 py-3 text-lg font-semibold text-teal"
                            >
                                {location}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                heading="Take the first step towards a healthier, happier workplace!"
                description="Let's create something amazing together."
                showForm={true}
                variant="coral"
            />
        </main>
    );
}
