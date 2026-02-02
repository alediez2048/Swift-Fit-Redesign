import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogContent } from "@/components/blog/blog-content";
import { BlogCard } from "@/components/blog/blog-card";
import { CTASection } from "@/components/sections/cta-section";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/data/blog-posts";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

// Generate static paths for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Blog Header with Featured Image */}
            <BlogHeader post={post} />

            {/* Back to Blog Link */}
            <div className="bg-surface py-6">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-teal hover:text-coral transition-colors font-semibold"
                    >
                        <ArrowLeft size={20} weight="bold" />
                        Back to Blog
                    </Link>
                </div>
            </div>

            {/* Blog Content */}
            <article className="py-16 lg:py-24 bg-white relative z-10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <BlogContent content={post.content} />

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 bg-surface text-teal rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Author Bio */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-teal">
                                    {post.author.name.charAt(0)}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-teal mb-1">
                                    {post.author.name}
                                </h3>
                                <p className="text-muted-foreground">{post.author.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 lg:py-24 bg-surface relative z-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-teal mb-12 text-center">
                            Related Articles
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <BlogCard key={relatedPost.slug} post={relatedPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <CTASection
                heading="Ready to bring wellness to your workplace?"
                description="Let's create a custom program that fits your team's needs."
                showForm={true}
                variant="coral"
            />
        </main>
    );
}
