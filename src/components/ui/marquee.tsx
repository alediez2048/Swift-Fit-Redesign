"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = "normal",
}: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "flex overflow-hidden [--gap:2rem]",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-[--gap]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{
          animationDuration: speedMap[speed],
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-[--gap]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        aria-hidden
        style={{
          animationDuration: speedMap[speed],
        }}
      >
        {children}
      </div>
    </div>
  );
}
