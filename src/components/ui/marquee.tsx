"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
  gap?: string;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = "normal",
  gap = "3rem",
}: MarqueeProps) {
  const duration = {
    slow: 40,
    normal: 25,
    fast: 15,
  }[speed];

  const animationStyle: React.CSSProperties = {
    animationName: reverse ? "marquee-reverse" : "marquee",
    animationDuration: `${duration}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    willChange: "transform",
    gap: gap,
    paddingRight: gap,
  };

  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={animationStyle}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={animationStyle}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
