import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/Gemini_Generated_Image_h2x1h5h2x1h5h2x1.png";
import { Marquee } from "@/components/ui/marquee";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/corporate-wellness" },
  { name: "Venue", href: "/venue-rental" },
  { name: "Events", href: "/swift-fit-social" },
  { name: "Packages", href: "/corporate-packages" },
  { name: "Contact", href: "/contact" },
  { name: "Partner With Us", href: "/partner-with-us" },
];

const marqueeItems = [
  { text: "CORPORATE WELLNESS", icon: "star" },
  { text: "TEAM BUILDING", icon: "heart" },
  { text: "AUSTIN TX", icon: "location" },
  { text: "VENUE RENTAL", icon: "building" },
  { text: "FITNESS EVENTS", icon: "star" },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  star: StarIcon,
  heart: HeartIcon,
  location: LocationIcon,
  building: BuildingIcon,
};

export function Footer() {
  return (
    <footer className="bg-white">
      {/* Marquee Banner */}
      <div className="relative bg-coral py-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-coral to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-coral to-transparent z-10" />

        <Marquee speed="normal" className="text-white">
          {marqueeItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={index} className="flex items-center gap-3 px-6">
                <Icon className="w-5 h-5" />
                <span className="font-bold text-sm tracking-wide">{item.text}</span>
              </div>
            );
          })}
        </Marquee>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        {/* Large Brand Name */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-extrabold leading-none tracking-tighter text-teal text-center">
            SWIFT<span className="text-coral">*</span>FIT
          </h2>
        </div>

        {/* Decorative Squiggle */}
        <div className="flex justify-center mb-12">
          <svg width="120" height="20" viewBox="0 0 120 20" className="text-coral">
            <path
              d="M0 10 Q15 0, 30 10 T60 10 T90 10 T120 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-coral transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo and Social */}
        <div className="flex flex-col items-center gap-6 pt-8 border-t border-gray-100">
          <Image
            src={logo}
            alt="Swift Fit Events"
            width={96}
            height={96}
            className="w-24 h-24"
          />

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/swiftfitevents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/60 hover:text-coral transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/swiftfitevents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/60 hover:text-coral transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <p className="text-sm text-ink/50">
            © {new Date().getFullYear()} Swift Fit Events. All rights reserved.
          </p>
          <p className="text-[10px] opacity-30 font-mono">
            Env: {process.env.NODE_ENV} | Base: {process.env.NEXT_PUBLIC_BASE_PATH || '/'}
          </p>
        </div>
      </div>
    </footer>
  );
}
