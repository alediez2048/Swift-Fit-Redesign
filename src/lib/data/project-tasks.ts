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
    // Done Column
    {
        id: "hero-system",
        columnId: "done",
        title: "Hero System Update",
        description: "Implemented solid color and video variants for hero sections to support different page themes.",
        labels: [{ text: "Feature", color: "bg-green-100 text-green-700" }, { text: "UI", color: "bg-purple-100 text-purple-700" }],
        date: "Feb 1",
        coverImage: "/assets/images/blog/dog-jog-recap.jpg", // Using an existing image as placeholder/example
        links: [
            { label: "Venue Page (Coral)", url: "/venue-rental" },
            { label: "About Page (Teal)", url: "/about-us" }
        ]
    },
    {
        id: "blog-system",
        columnId: "done",
        title: "Blog System Implementation",
        description: "Full blog system with listing page, individual posts, and CMS-like data structure.",
        labels: [{ text: "Feature", color: "bg-green-100 text-green-700" }],
        date: "Feb 2",
        coverImage: "/assets/images/blog/corporate-wellness.jpg",
        links: [
            { label: "View Blog", url: "/blog" }
        ]
    },
    {
        id: "nav-refactor",
        columnId: "done",
        title: "Navigation Refactor",
        description: "Reordered navigation items (Events before Venue) and updated mobile menu.",
        labels: [{ text: "UX", color: "bg-blue-100 text-blue-700" }],
        date: "Feb 2",
    },
    {
        id: "assets",
        columnId: "done",
        title: "Asset Management",
        description: "Added team and instructor headshots.",
        labels: [{ text: "Content", color: "bg-yellow-100 text-yellow-700" }],
        date: "Feb 1"
    },
    {
        id: "rounded-corners",
        columnId: "done",
        title: "UI Refinements",
        description: "Added rounded corners to all hero sections and fixed contact form titles.",
        labels: [{ text: "UI", color: "bg-purple-100 text-purple-700" }],
        date: "Feb 2"
    },

    // In Progress
    {
        id: "project-tracker",
        columnId: "inprogress",
        title: "Project Tracker Board",
        description: "Building a Kanban board to track project status and resources.",
        labels: [{ text: "Feature", color: "bg-green-100 text-green-700" }],
        members: ["JD", "AI"]
    },

    // To Do
    {
        id: "search",
        columnId: "todo",
        title: "Search Functionality",
        description: "Add search capabilities to blog and event listings.",
        labels: [{ text: "Feature", color: "bg-green-100 text-green-700" }]
    },
    {
        id: "filtering",
        columnId: "todo",
        title: "Category Filtering",
        description: "Implement dynamic filtering for blog posts by category.",
        labels: [{ text: "Feature", color: "bg-green-100 text-green-700" }]
    },
    {
        id: "dark-mode",
        columnId: "todo",
        title: "Dark Mode",
        description: "Explore dark mode toggle for better accessibility.",
        labels: [{ text: "UI", color: "bg-purple-100 text-purple-700" }]
    },

    // Resources
    {
        id: "github",
        columnId: "resources",
        title: "GitHub Repository",
        description: "Main source code repository.",
        labels: [{ text: "Code", color: "bg-gray-100 text-gray-700" }],
        links: [{ label: "Repo", url: "https://github.com/alediez2048/Swift-Fit-Redesign" }]
    },
    {
        id: "design-system",
        columnId: "resources",
        title: "Design System",
        description: "Core brand colors and typography.",
        labels: [{ text: "Design", color: "bg-pink-100 text-pink-700" }],
    }
];

export const columns: { id: ColumnId; title: string }[] = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "blocked", title: "Blocked" },
    { id: "done", title: "Done" },
    { id: "resources", title: "Resources" },
];
