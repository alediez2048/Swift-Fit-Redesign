/**
 * Swift Fit Events - Team Members Data
 */

export interface TeamMember {
    name: string;
    title: string;
    bio?: string;
    image?: string;
}

export const FOUNDER: TeamMember = {
    name: "Lee Ackerley",
    title: "Founder + CEO",
    bio: "Lee Ackerley is an Ironman athlete who has run 42 marathons but it was his experience attending corporate events that fueled a mission to redefine office culture. Thus, Swift Fit Events was born, modernizing workplaces through health-forward events that foster connection and well-being. When not plotting wellness revolutions, Lee catches live music, volunteers for the Down Syndrome Association, and conquers new trails.",
    image: "/images/team/lee-ackerley.jpg", // Placeholder
};

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Lee Ackerley",
        title: "Founder + CEO",
    },
    {
        name: "Molly McCarty",
        title: "Head of Strategic Accounts",
    },
    {
        name: "Candace Kief",
        title: "Head of Partner Marketing",
    },
    {
        name: "Jim Martino",
        title: "Head of Business Development",
    },
    {
        name: "Jessica Herbst",
        title: "Marketing Manager",
    },
    {
        name: "Sage Broussard",
        title: "Partner Marketing Manager",
    },
    {
        name: "Alexander Gouyet",
        title: "Business Development Specialist",
    },
    {
        name: "Annie Taylor",
        title: "Venue Manager",
    },
    {
        name: "Christina Wilson",
        title: "Event Production Manager",
    },
    {
        name: "Megan Soefje",
        title: "Strategic Account Manager",
    },
    {
        name: "Katie Wilson",
        title: "Event Production Manager",
    },
];
