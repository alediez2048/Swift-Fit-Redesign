"use client";

import { ReactNode } from "react";

interface BlogContentProps {
    content: string;
    children?: ReactNode;
}

export function BlogContent({ content }: BlogContentProps) {
    // Convert markdown-like content to JSX
    // Split by ## headers and process each section
    const sections = content.split("\n## ").filter(Boolean);

    return (
        <div className="prose prose-lg max-w-none">
            {sections.map((section, index) => {
                const lines = section.split("\n");
                const isFirstSection = index === 0 && !content.startsWith("\n## ");

                // If it's the first section and doesn't start with ##, it's just content
                if (isFirstSection) {
                    return (
                        <div key={index} className="mb-8">
                            {processContent(section)}
                        </div>
                    );
                }

                // Otherwise, first line is the heading
                const heading = lines[0];
                const sectionContent = lines.slice(1).join("\n");

                return (
                    <section key={index} className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-teal mb-6">
                            {heading}
                        </h2>
                        {processContent(sectionContent)}
                    </section>
                );
            })}
        </div>
    );
}

function processContent(content: string) {
    const elements: JSX.Element[] = [];
    const lines = content.split("\n").filter((line) => line.trim());

    let currentList: string[] = [];
    let currentListType: "ul" | "ol" | null = null;

    const flushList = () => {
        if (currentList.length > 0) {
            elements.push(
                currentListType === "ol" ? (
                    <ol key={elements.length} className="list-decimal list-inside mb-6 space-y-2">
                        {currentList.map((item, i) => (
                            <li key={i} className="text-muted-foreground">
                                {processInlineFormatting(item)}
                            </li>
                        ))}
                    </ol>
                ) : (
                    <ul key={elements.length} className="list-none mb-6 space-y-2">
                        {currentList.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-coral mt-1">•</span>
                                <span className="text-muted-foreground flex-1">
                                    {processInlineFormatting(item)}
                                </span>
                            </li>
                        ))}
                    </ul>
                )
            );
            currentList = [];
            currentListType = null;
        }
    };

    lines.forEach((line, index) => {
        // Handle ### headings
        if (line.startsWith("### ")) {
            flushList();
            const heading = line.substring(4);
            elements.push(
                <h3 key={elements.length} className="text-2xl font-bold text-teal mb-4 mt-8">
                    {heading}
                </h3>
            );
        }
        // Handle unordered lists
        else if (line.startsWith("- ")) {
            const listItem = line.substring(2);
            if (currentListType !== "ul") {
                flushList();
                currentListType = "ul";
            }
            currentList.push(listItem);
        }
        // Handle ordered lists
        else if (/^\d+\. /.test(line)) {
            const listItem = line.substring(line.indexOf(". ") + 2);
            if (currentListType !== "ol") {
                flushList();
                currentListType = "ol";
            }
            currentList.push(listItem);
        }
        // Handle blockquotes
        else if (line.startsWith("> ")) {
            flushList();
            const quote = line.substring(2);
            elements.push(
                <blockquote
                    key={elements.length}
                    className="border-l-4 border-coral pl-6 py-2 italic text-lg text-muted-foreground mb-6"
                >
                    {processInlineFormatting(quote)}
                </blockquote>
            );
        }
        // Handle bold paragraphs (starting with **)
        else if (line.startsWith("**")) {
            flushList();
            elements.push(
                <p key={elements.length} className="text-xl font-bold text-teal mb-4">
                    {processInlineFormatting(line)}
                </p>
            );
        }
        // Regular paragraphs
        else {
            flushList();
            elements.push(
                <p key={elements.length} className="text-muted-foreground mb-4 leading-relaxed">
                    {processInlineFormatting(line)}
                </p>
            );
        }
    });

    flushList();

    return <>{elements}</>;
}

function processInlineFormatting(text: string): React.ReactNode {
    // Process bold text **text**
    let result: React.ReactNode[] = [];
    let remainingText = text;
    let key = 0;

    while (remainingText.length > 0) {
        const boldMatch = remainingText.match(/\*\*(.*?)\*\*/);
        const linkMatch = remainingText.match(/\[(.*?)\]\((.*?)\)/);

        // Find which match comes first
        const boldIndex = boldMatch ? remainingText.indexOf(boldMatch[0]) : Infinity;
        const linkIndex = linkMatch ? remainingText.indexOf(linkMatch[0]) : Infinity;

        if (boldIndex < linkIndex && boldIndex !== Infinity) {
            // Process bold
            if (boldIndex > 0) {
                result.push(remainingText.substring(0, boldIndex));
            }
            result.push(
                <strong key={key++} className="font-semibold text-teal">
                    {boldMatch![1]}
                </strong>
            );
            remainingText = remainingText.substring(boldIndex + boldMatch![0].length);
        } else if (linkIndex !== Infinity) {
            // Process link
            if (linkIndex > 0) {
                result.push(remainingText.substring(0, linkIndex));
            }
            result.push(
                <a
                    key={key++}
                    href={linkMatch![2]}
                    className="text-coral hover:underline font-semibold"
                >
                    {linkMatch![1]}
                </a>
            );
            remainingText = remainingText.substring(linkIndex + linkMatch![0].length);
        } else {
            // No more formatting
            result.push(remainingText);
            break;
        }
    }

    return <>{result}</>;
}
