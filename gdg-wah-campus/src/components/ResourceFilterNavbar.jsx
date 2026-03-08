import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

const CATEGORIES = ["All Resources", "Workshop", "Hackathon", "Study Jam", "Info Session", "Tech Talk"];
const RESOURCE_TYPES = ["All Resources", "Slides", "Github", "Docs", "Mix", "Session Replays"];
const SORT_OPTIONS = [
    { value: "Latest", label: "Latest" },
    { value: "Most Popular", label: "Most Popular" },
    { value: "Title (A-Z)", label: "Title (A-Z)" },
    { value: "Size: Smallest", label: "Size: Smallest" },
    { value: "Size: Largest", label: "Size: Largest" }
];

const ResourceFilterNavbar = ({
    activeCategory, setActiveCategory,
    activeType, setActiveType,
    activeSort, setActiveSort
}) => {
    const { scrollY } = useScroll();
    const [isMainNavbarHidden, setIsMainNavbarHidden] = useState(false);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

    const typeDropdownRef = useRef(null);
    const sortDropdownRef = useRef(null);

    // Hide/Show logic synced with main Navbar animation logic inherited from EventFilterNavbar
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 10) {
            setIsMainNavbarHidden(true);
            setIsTypeDropdownOpen(false);
            setIsSortDropdownOpen(false);
        } else {
            setIsMainNavbarHidden(false);
        }
    });

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
                setIsTypeDropdownOpen(false);
            }
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
                setIsSortDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <section
            className={`bg-white/95 backdrop-blur-md sticky z-40 border-b border-gray-200 shadow-md transition-[top] duration-200 ${isMainNavbarHidden ? "top-0" : "top-[48px] md:top-[56px]"
                }`}
        >
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative flex flex-col lg:flex-row items-center justify-between py-2 lg:py-0 min-h-[64px]">

                {/* Left: Event Type Dropdown */}
                <div className="flex flex-row items-center justify-start w-full lg:w-auto py-2 lg:py-3 z-50 overflow-visible relative">
                    <div className="relative shrink-0" ref={typeDropdownRef}>
                        <button
                            onClick={() => {
                                setIsTypeDropdownOpen(!isTypeDropdownOpen);
                                setIsSortDropdownOpen(false);
                            }}
                            className="flex items-center justify-between gap-3 px-4 py-2 bg-white border border-gray-300 rounded-md hover:border-gray-400 hover:bg-gray-50 transition-colors w-40 sm:w-48 outline-none text-left"
                        >
                            <span className="text-gray-700 text-sm font-medium truncate">
                                {activeType === "All Resources" ? "Resource type" : activeType}
                            </span>
                            <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isTypeDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {isTypeDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50 text-sm overflow-hidden"
                                >
                                    {RESOURCE_TYPES.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => {
                                                setActiveType(type);
                                                setIsTypeDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 transition-colors ${activeType === type ? "bg-[#e8f0fe] text-[#1a73e8] font-bold" : "text-gray-700 hover:bg-gray-100 font-medium"}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Center: Category Filter Pills */}
                <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-3 w-full lg:w-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {CATEGORIES.map((cat) => {
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 border outline-none ${isActive
                                    ? "bg-[#4285F4] text-white border-[#4285F4] shadow-sm"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                                    }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Right: Sort Dropdown */}
                <div className="flex flex-row items-center justify-start lg:justify-end w-full lg:w-auto py-2 lg:py-3 z-50 overflow-visible relative">
                    <div className="relative shrink-0" ref={sortDropdownRef}>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-500 hidden sm:block">Sort by:</span>
                            <button
                                onClick={() => {
                                    setIsSortDropdownOpen(!isSortDropdownOpen);
                                    setIsTypeDropdownOpen(false);
                                }}
                                className="flex items-center gap-1.5 px-3 py-2 text-[#4285F4] hover:bg-blue-50 transition-colors rounded-md font-bold text-sm outline-none"
                            >
                                {activeSort}
                                <ChevronDown size={16} className={`transition-transform duration-200 ${isSortDropdownOpen ? "rotate-180" : ""}`} />
                            </button>
                        </div>

                        <AnimatePresence>
                            {isSortDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-1 z-50 text-sm overflow-hidden"
                                >
                                    {SORT_OPTIONS.map((sortOpt) => (
                                        <button
                                            key={sortOpt.value}
                                            onClick={() => {
                                                setActiveSort(sortOpt.value);
                                                setIsSortDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 transition-colors ${activeSort === sortOpt.value ? "bg-[#e8f0fe] text-[#1a73e8] font-bold" : "text-gray-700 hover:bg-gray-100 font-medium"}`}
                                        >
                                            {sortOpt.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ResourceFilterNavbar;
