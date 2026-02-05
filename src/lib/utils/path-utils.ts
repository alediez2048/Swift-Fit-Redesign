export function getAssetPath(path: string): string {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    if (!path) return "";

    // If it's already a full URL or already prefixed, return as is
    if (path.startsWith("http") || (basePath && path.startsWith(basePath))) {
        return path;
    }

    // Ensure path starts with / but not //
    const cleanPath = path.startsWith("/") ? path : `/${path}`;

    return `${basePath}${cleanPath}`;
}
