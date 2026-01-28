/**
 * Swift Fit Events - Instructors Data
 */

export interface Instructor {
    name: string;
    specialties: string[];
    image?: string;
}

export const INSTRUCTORS: Instructor[] = [
    {
        name: "Liz Davis",
        specialties: ["Yoga", "Meditation", "Wellness Talks"],
        image: "/images/instructors/liz-davis.jpg", // Placeholder
    },
    {
        name: "Collette Ouseley-Moynan",
        specialties: ["Yoga", "Sound Healing", "Tarot"],
        image: "/images/instructors/collette-ouseley-moynan.jpg",
    },
    {
        name: "Gioconda Parker",
        specialties: ["Yoga", "Meditation", "Breathwork"],
        image: "/images/instructors/gioconda-parker.jpg",
    },
    {
        name: "Corey Lawson",
        specialties: ["Strength & Cardio", "Mobility", "Bootcamp"],
        image: "/images/instructors/corey-lawson.jpg",
    },
    {
        name: "Danielle Gertner",
        specialties: ["Bootcamp"],
        image: "/images/instructors/danielle-gertner.jpg",
    },
    {
        name: "Carter Miles",
        specialties: ["Yoga & Breathwork"],
        image: "/images/instructors/carter-miles.jpg",
    },
    {
        name: "Gustavo Padron",
        specialties: ["Yoga"],
        image: "/images/instructors/gustavo-padron.jpg",
    },
    {
        name: "Eileen Artigas",
        specialties: ["Dance Cardio", "Founder of Fitcidence"],
        image: "/images/instructors/eileen-artigas.jpg",
    },
    {
        name: "Erica Nix",
        specialties: ["Dance Cardio"],
        image: "/images/instructors/erica-nix.jpg",
    },
    {
        name: "Sam Johnson",
        specialties: ["Yoga", "Breathwork", "Essential Oils", "Stress Mitigation"],
        image: "/images/instructors/sam-johnson.jpg",
    },
];
