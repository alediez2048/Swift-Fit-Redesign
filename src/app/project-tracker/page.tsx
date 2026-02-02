"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { BoardLayout } from "@/components/project-tracker/board-layout";

export default function ProjectTrackerPage() {
    return (
        <main className="h-screen flex flex-col bg-slate-50 overflow-hidden">
            {/* Simple Header instead of full Hero to save space */}
            {/* Simple Header instead of full Hero to save space */}
            <div className="bg-white border-b border-gray-200 px-6 py-8 flex flex-col items-center justify-center shadow-sm z-10 relative">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Project Tracker</h1>
                    <p className="text-sm text-gray-500">Track development progress and resources</p>
                </div>

                {/* Available Team - Absolute positioned to right or just centered below? 
                    User asked to center the title. Keeping users on right might look unbalanced if title is centered.
                    Let's put them absolute right for desktop, centered for mobile? 
                    Or just keep them on the right. 
                */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2">
                    <div className="flex -space-x-2 mr-2">
                        <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold border-2 border-white">JD</div>
                        <div className="w-10 h-10 rounded-full bg-coral text-white flex items-center justify-center text-sm font-bold border-2 border-white">AI</div>
                    </div>
                </div>
            </div>

            {/* Board Area */}
            <div className="flex-1 overflow-x-auto overflow-y-hidden bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center">
                <div className="h-full w-full backdrop-blur-sm bg-white/30">
                    <BoardLayout />
                </div>
            </div>
        </main>
    );
}
