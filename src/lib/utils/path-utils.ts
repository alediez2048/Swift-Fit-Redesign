export function getAssetPath(path: string): string {
    // Determine base path from environment variable or default to repo name in production
    let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    // Fallback for GitHub Pages production environment if env var is missing
    if (!basePath && (typeof window !== "undefined" && (window.location.hostname.includes("github.io") || window.location.pathname.includes("Swift-Fit-Redesign")))) {
        basePath = "/Swift-Fit-Redesign";
    }

    if (!path) return "";

    // If it's already a full URL or already prefixed, return as is
    if (path.startsWith("http") || (basePath && path.startsWith(basePath))) {
        return path;
    }

    // Ensure path starts with / but not //
    const cleanPath = path.startsWith("/") ? path : `/${path}`;

    return `${basePath}${cleanPath}`;
}
