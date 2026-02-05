import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import { Navbar, Footer, SmoothScrollProvider } from "@/components/layout";
import { MotionProvider } from "@/components/providers/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Swift Fit Events | Corporate Wellness & Venue Rental in Austin",
    template: "%s | Swift Fit Events",
  },
  description:
    "Austin's premier corporate wellness partner. We deliver team-building experiences, wellness activations, and venue rentals at 918 Congress Ave. Trusted by IBM, Google, Bumble, and more.",
  keywords: [
    "corporate wellness Austin",
    "team building Austin",
    "corporate events Austin",
    "venue rental downtown Austin",
    "employee wellness programs",
    "corporate retreat Austin",
  ],
  authors: [{ name: "Swift Fit Events" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.swiftfitevents.com",
    siteName: "Swift Fit Events",
    title: "Swift Fit Events | Corporate Wellness & Venue Rental in Austin",
    description:
      "Austin's premier corporate wellness partner. Team-building, wellness activations, and venue rentals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Fit Events | Corporate Wellness & Venue Rental in Austin",
    description:
      "Austin's premier corporate wellness partner. Team-building, wellness activations, and venue rentals.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.swiftfitevents.com"),
  manifest: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/manifest.json`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Preload hero poster for faster LCP */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/_next/static/media/Swift_Fit_Picture_Day_92_0e0ecbeeb9.webp`}
          type="image/webp"
        />
      </head>
      <body className="bg-canvas text-ink antialiased">
        <MotionProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
