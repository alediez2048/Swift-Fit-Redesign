"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Client logos for trust bar
const clientLogos = [
  { name: "Bumble", src: "/assets/logos/bumble.svg" },
  { name: "IBM", src: "/assets/logos/ibm.svg" },
  { name: "Goldman Sachs", src: "/assets/logos/goldman-sachs.svg" },
  { name: "Visa", src: "/assets/logos/visa.svg" },
  { name: "TikTok", src: "/assets/logos/tiktok.svg" },
  { name: "Accenture", src: "/assets/logos/accenture.svg" },
  { name: "Fidelity", src: "/assets/logos/fidelity.svg" },
  { name: "Google", src: "/assets/logos/google.svg" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Dual Entry */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-canvas via-canvas to-muted" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-balance">
              Austin&apos;s Premier
              <br />
              <span className="text-authority">Corporate Sanctuary</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Where workplace wellness meets community connection. A one-stop
              shop for corporate events, wellness activations, and downtown
              venue rentals.
            </p>
          </motion.div>

          {/* Dual Entry Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* B2B Card - Corporate */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/corporate-wellness" className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-xl hover:border-authority/30">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-authority/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-authority/10 flex items-center justify-center mb-6">
                      <svg
                        className="w-6 h-6 text-authority"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <h2 className="text-2xl lg:text-3xl mb-3 group-hover:text-authority transition-colors">
                      Elevate Your Workplace
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Premium corporate wellness programs, team-building
                      experiences, and venue rentals for companies that invest
                      in their people.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-authority font-medium">
                      <span>Explore Corporate Services</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* B2C Card - Community */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/swift-fit-social" className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-xl hover:border-accent/30">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <h2 className="text-2xl lg:text-3xl mb-3 group-hover:text-accent transition-colors">
                      Join the Community
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Connect with Austin&apos;s wellness community through
                      curated social events, fitness experiences, and
                      meaningful gatherings.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-accent font-medium">
                      <span>Discover Upcoming Events</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {/* Placeholder for logos - replace with actual logo images */}
                <div className="h-8 px-4 flex items-center justify-center bg-muted/50 rounded text-xs text-muted-foreground font-medium">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2>Why Swift Fit?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re not just event planners. We&apos;re your strategic
              partner in building healthier, happier, more connected teams.
            </p>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "One-Stop Shop",
                description:
                  "From yoga to team building, venue rental to full event production — we handle it all.",
                icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Austin Experts",
                description:
                  "Deep local connections and venue partnerships across Austin, Dallas, Houston, and San Antonio.",
                icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
              },
              {
                title: "Proven Results",
                description:
                  "Trusted by IBM, Google, Bumble, and more to deliver experiences that employees actually love.",
                icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-authority/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-authority"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-authority">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-canvas">
              Ready to Transform Your Workplace?
            </h2>
            <p className="mt-4 text-lg text-canvas/80 max-w-2xl mx-auto">
              Let&apos;s create meaningful experiences that your team will
              actually remember.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cta text-ink hover:bg-cta/90 font-medium"
              >
                <Link href="/contact">Request a Proposal</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-canvas/30 text-canvas hover:bg-canvas/10"
              >
                <Link href="/corporate-packages">View Packages</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
