import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FILTERS = ["All", "Workshop", "Hackathon", "Study Jam", "Info Session", "Tech Talk"];

const EventFilterNavbar = ({ activeFilter, setActiveFilter, tab, setTab }) => {
    const { scrollY } = useScroll();
    const [isMainNavbarHidden, setIsMainNavbarHidden] = useState(false);

    // Hide/Show logic synced with main Navbar
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 10) {
            setIsMainNavbarHidden(true);
        } else {
            setIsMainNavbarHidden(false);
        }
    });

    return (
        <section
            className={`bg-white/95 backdrop-blur-md sticky z-40 border-b border-gray-200 shadow-sm transition-[top] duration-200 ${isMainNavbarHidden ? "top-0" : "top-[48px] md:top-[56px]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between">

                {/* 1. Toggle Tab (Upcoming vs Past) - Image 1 Style */}
                <div className="flex w-full lg:w-auto">
                    {["upcoming", "past"].map((t) => {
                        const isActive = tab === t;
                        return (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`relative px-6 py-4 text-sm md:text-base font-bold capitalize transition-colors duration-200 whitespace-nowrap outline-none ${isActive ? "text-[#4285F4]" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {t} Events
                                {/* Active Tab Underline */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4285F4]"
                                        transition={{ duration: 0.15, ease: "easeInOut" }}
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* 2. Category Filter Pills - Image 2 Style */}
                <div className="flex items-center gap-2 overflow-x-auto py-3 w-full lg:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="flex items-center gap-2 mr-2 text-gray-400 shrink-0">
                        <Filter size={16} strokeWidth={2.5} />
                    </div>

                    {FILTERS.map((f) => {
                        const isActive = activeFilter === f;
                        return (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-200 border outline-none ${isActive
                                    ? "bg-[#4285F4] text-white border-[#4285F4] shadow-sm"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                                    }`}
                            >
                                {f}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EventFilterNavbar;
