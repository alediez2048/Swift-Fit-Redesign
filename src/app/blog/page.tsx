import { HeroSection } from "@/components/sections/hero-section";
import { BlogCard } from "@/components/blog/blog-card";
import { CTASection } from "@/components/sections/cta-section";
import { blogPosts, getAllCategories } from "@/lib/data/blog-posts";

export default function BlogPage() {
    const categories = getAllCategories();

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                variant="compact"
                background="teal"
                heading="Blog"
                subheading="Wellness insights, event recaps, and community stories"
            />

            {/* Blog Grid */}
            <section className="py-24 lg:py-32 bg-white relative z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="text-center mb-16">
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Explore our latest articles on corporate wellness, community events,
                            wellness tips, and behind-the-scenes stories from the Swift Fit team.
                        </p>
                    </div>

                    {/* Categories Filter (Future Enhancement) */}
                    {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 rounded-full border-2 border-teal text-teal hover:bg-teal hover:text-white transition-colors"
                            >
                                {category}
                            </button>
                        ))}
                    </div> */}

                    {/* Blog Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <CTASection
                heading="Stay Updated with Our Latest Content"
                description="Subscribe to get wellness tips, event updates, and exclusive content delivered to your inbox."
                showForm={true}
                variant="teal"
            />
        </main>
    );
}
