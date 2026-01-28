"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.webp";
import { List, X } from "@phosphor-icons/react";

const navigation = [
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/corporate-wellness" },
  { name: "Venue", href: "/venue-rental" },
  { name: "Events", href: "/community-events" },
  { name: "Swift Fit Social", href: "/swift-fit-social" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Swift Fit Events"
              width={75}
              height={75}
              className="w-[75px] h-[75px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop navigation - Centered */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl font-medium text-ink hover:text-cta transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            size="lg"
            className="bg-cta text-white hover:bg-cta/90 font-semibold rounded-full px-8 py-3 text-base"
          >
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ink"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <List size={32} weight="bold" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white px-6 py-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                  <Image
                    src={logo}
                    alt="Swift Fit Events"
                    width={108}
                    height={108}
                    className="w-[108px] h-[108px]"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-ink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X size={32} weight="bold" />
                </button>
              </div>

              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-gray-100">
                  <div className="space-y-1 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-3 text-xl font-medium text-ink hover:bg-gray-50 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button
                      asChild
                      className="w-full bg-cta text-white hover:bg-cta/90 font-medium rounded-full"
                    >
                      <Link href="/contact-us">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
