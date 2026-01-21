"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * LazyMotion Provider
 * 
 * Wraps the application with LazyMotion to enable tree-shaking
 * of unused framer-motion features. Using `domAnimation` which
 * includes only essential animation features (opacity, transform, etc.)
 * instead of the full bundle.
 * 
 * This can reduce the framer-motion bundle by ~50%.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    );
}
