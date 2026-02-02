"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/data/blog-posts";
import { CalendarBlank, User, Clock } from "@phosphor-icons/react/dist/ssr";

interface BlogCardProps {
    post: BlogPost;
}

const categoryColors: Record<string, string> = {
    "Corporate Wellness": "bg-coral text-white",
    "Event Recaps": "bg-coral text-white",
    "Community Events": "bg-teal text-white",
    "Wellness Tips": "bg-teal text-white",
    "Team Spotlights": "bg-teal text-white",
};

export function BlogCard({ post }: BlogCardProps) {
    // Format the date
    const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <Link href={`/blog/${post.slug}`} className="block group">
                {/* Featured Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span
                            className={`${categoryColors[post.category] || "bg-teal text-white"
                                } px-4 py-2 rounded-full text-sm font-semibold`}
                        >
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-teal mb-3 group-hover:text-coral transition-colors duration-300">
                        {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarBlank size={16} />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{post.readTime} min read</span>
                        </div>
                    </div>

                    {/* Read More Link */}
                    <div className="text-coral font-semibold group-hover:underline">
                        Read More →
                    </div>
                </div>
            </Link>
        </m.div>
    );
}
