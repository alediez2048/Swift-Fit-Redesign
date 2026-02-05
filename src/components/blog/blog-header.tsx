"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { CalendarBlank, User, Clock } from "@phosphor-icons/react/dist/ssr";
import { BlogPost } from "@/lib/data/blog-posts";
import { getAssetPath } from "@/lib/utils/path-utils";

interface BlogHeaderProps {
    post: BlogPost;
}

const categoryColors: Record<string, string> = {
    "Corporate Wellness": "bg-coral text-white",
    "Event Recaps": "bg-coral text-white",
    "Community Events": "bg-teal text-white",
    "Wellness Tips": "bg-teal text-white",
    "Team Spotlights": "bg-teal text-white",
};

export function BlogHeader({ post }: BlogHeaderProps) {
    // Format the date
    const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="relative">
            {/* Featured Image */}
            <div className="relative aspect-[21/9] overflow-hidden">
                <Image
                    src={getAssetPath(post.featuredImage)}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-end">
                    <div className="w-full max-w-4xl mx-auto px-6 lg:px-8 pb-12">
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Category Badge */}
                            <span
                                className={`${categoryColors[post.category] || "bg-teal text-white"
                                    } inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4`}
                            >
                                {post.category}
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                                {post.title}
                            </h1>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 text-white/90">
                                <div className="flex items-center gap-2">
                                    <User size={18} weight="bold" />
                                    <span className="font-medium">
                                        {post.author.name} · {post.author.role}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarBlank size={18} weight="bold" />
                                    <span>{formattedDate}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} weight="bold" />
                                    <span>{post.readTime} min read</span>
                                </div>
                            </div>
                        </m.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
