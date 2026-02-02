export type ColumnId = "todo" | "inprogress" | "blocked" | "done" | "resources";

export interface Link {
    label: string;
    url: string;
}

export interface ProjectTask {
    id: string;
    title: string;
    description?: string;
    columnId: ColumnId;
    labels?: { text: string; color: string }[]; // e.g., "Feature", "Bug", "Design"
    coverImage?: string; // URL to image
    links?: Link[]; // External resources or internal page links
    date?: string;
    members?: string[]; // Initials or avatar URLs
}

export const initialTasks: ProjectTask[] = [
    // Done Column - Completed Phases
    {
        id: "phase-4-1",
        columnId: "done",
        title: "Interactive Prototyping & Design Verification",
        description: "High-fidelity Next.js prototype with animations, responsive behaviors, and content strategy validation. Created 'Gold Master' reference site.",
        labels: [
            { text: "Phase 4.1", color: "bg-teal-100 text-teal-700" },
            { text: "Design", color: "bg-pink-100 text-pink-700" }
        ],
        date: "Completed",
        coverImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop",
        links: [
            { label: "Live Prototype", url: "https://alediez2048.github.io/Swift-Fit-Redesign/" }
        ],
        members: ["JD", "AI"]
    },
    {
        id: "homepage-modules",
        columnId: "done",
        title: "HubSpot Homepage Modules",
        description: "Developed 9 custom HubSpot modules for homepage: Hero, Marquee, Welcome, Services Grid, Partner Logos, Logic Steps, Testimonials, FAQ, CTA.",
        labels: [
            { text: "Phase 4.2", color: "bg-teal-100 text-teal-700" },
            { text: "HubSpot", color: "bg-orange-100 text-orange-700" }
        ],
        date: "Completed",
        members: ["JD"]
    },

    // In Progress - Active Development
    {
        id: "phase-4-2-inner",
        columnId: "inprogress",
        title: "HubSpot Inner Page Modules",
        description: "Developing custom modules for service pages, about, contact. Ensuring design parity with Next.js prototype.",
        labels: [
            { text: "Phase 4.2", color: "bg-teal-100 text-teal-700" },
            { text: "HubSpot", color: "bg-orange-100 text-orange-700" }
        ],
        members: ["JD"]
    },
    {
        id: "phase-4-3",
        columnId: "inprogress",
        title: "CMS Integration & Page Assembly",
        description: "Assembling service pages, configuring navigation, blog templates, and form styling using the module library.",
        labels: [
            { text: "Phase 4.3", color: "bg-teal-100 text-teal-700" },
            { text: "Content", color: "bg-yellow-100 text-yellow-700" }
        ],
        members: ["JD"]
    },

    // To Do - Upcoming Phases
    {
        id: "phase-4-4",
        columnId: "todo",
        title: "Technical Integration, SEO & Analytics",
        description: "GA4 setup, SEO configuration (meta tags, sitemaps), performance optimization (WebP, lazy loading), and domain/SSL setup.",
        labels: [
            { text: "Phase 4.4", color: "bg-teal-100 text-teal-700" },
            { text: "Technical", color: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "phase-4-5",
        columnId: "todo",
        title: "Quality Assurance & Launch",
        description: "Visual regression testing, functional testing, cross-browser compatibility, mobile responsiveness, and launch support.",
        labels: [
            { text: "Phase 4.5", color: "bg-teal-100 text-teal-700" },
            { text: "QA", color: "bg-red-100 text-red-700" }
        ]
    },
    {
        id: "phase-4-6",
        columnId: "todo",
        title: "Documentation & Training",
        description: "Create editor guide, content management instructions, and conduct handoff/training session for client team.",
        labels: [
            { text: "Phase 4.6", color: "bg-teal-100 text-teal-700" },
            { text: "Documentation", color: "bg-purple-100 text-purple-700" }
        ]
    },

    // Resources
    {
        id: "github",
        columnId: "resources",
        title: "GitHub Repository",
        description: "Next.js prototype source code repository.",
        labels: [{ text: "Code", color: "bg-gray-100 text-gray-700" }],
        links: [{ label: "Repo", url: "https://github.com/alediez2048/Swift-Fit-Redesign" }]
    },
    {
        id: "hubspot-portal",
        columnId: "resources",
        title: "HubSpot Portal",
        description: "Swift Fit Events CMS portal for theme and module development.",
        labels: [{ text: "HubSpot", color: "bg-orange-100 text-orange-700" }],
        links: [{ label: "Portal", url: "https://app-na2.hubspot.com/design-manager/39804652" }]
    },
    {
        id: "brand-vault",
        columnId: "resources",
        title: "Swift Fit Brand Vault",
        description: "Brand assets, colors (Swift Orange/Navy), typography, and approved imagery.",
        labels: [{ text: "Design", color: "bg-pink-100 text-pink-700" }]
    }
];

export const columns: { id: ColumnId; title: string }[] = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "blocked", title: "Blocked" },
    { id: "done", title: "Done" },
    { id: "resources", title: "Resources" },
];
