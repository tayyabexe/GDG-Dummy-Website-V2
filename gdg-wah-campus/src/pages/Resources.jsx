import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Github, ExternalLink, Presentation, Video, HardDrive, Calendar, ArrowRight } from 'lucide-react';
import { resources } from '../data/mockData';
import ResourceFilterNavbar from '../components/ResourceFilterNavbar';
import ResourceModal from '../components/ResourceModal';

const Resources = () => {
    const [activeCategory, setActiveCategory] = useState("All Resources");
    const [activeType, setActiveType] = useState("All Resources");
    const [activeSort, setActiveSort] = useState("Latest");
    const [selectedResource, setSelectedResource] = useState(null);

    // We do a best-effort mock filtering here, as mockData might not perfectly align with the new tags.
    const filteredResources = useMemo(() => {
        return resources
            .filter(res => {
                // To be robust, if it's "All Resources" we match everything
                const matchesCategory = activeCategory === 'All Resources' || res.category === activeCategory;
                const matchesType = activeType === 'All Resources' || res.type === activeType || (activeType === "Github" && res.type === "GitHub");
                return matchesCategory && matchesType;
            })
            .sort((a, b) => {
                if (activeSort === 'Title (A-Z)') {
                    return a.title.localeCompare(b.title);
                } else if (activeSort === 'Most Popular') {
                    return (b.popularity || 0) - (a.popularity || 0);
                } else if (activeSort === 'Size: Smallest' || activeSort === 'Size: Largest') {
                    const parseSize = (sizeStr) => {
                        if (!sizeStr) return 0;
                        const [val, unit] = sizeStr.split(' ');
                        const num = parseFloat(val);
                        if (unit === 'GB') return num * 1024 * 1024 * 1024;
                        if (unit === 'MB') return num * 1024 * 1024;
                        if (unit === 'KB') return num * 1024;
                        return num;
                    };
                    const diff = parseSize(a.size) - parseSize(b.size);
                    return activeSort === 'Size: Smallest' ? diff : -diff;
                } else {
                    // Latest: sort by date descending
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                }
            });
    }, [activeCategory, activeType, activeSort]);

    const getIcon = (type) => {
        switch (type) {
            case 'Slides': return <Presentation className="text-yellow-600" size={24} />;
            case 'GitHub':
            case 'Github': return <Github className="text-gray-800" size={24} />;
            case 'PDFs':
            case 'Docs': return <FileText className="text-red-500" size={24} />;
            case 'Session Replays': return <Video className="text-blue-500" size={24} />;
            default: return <ExternalLink className="text-blue-500" size={24} />;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen relative flex flex-col">
            {/* Dark Hero Section matching Events Page */}
            <section className="relative w-full bg-[#202124] overflow-hidden flex flex-col items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#4285F4 2px, transparent 2px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>

                <div className="container mx-auto px-6 relative z-10 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center flex flex-col items-center"
                    >
                        {/* 4 Google Colors Dots */}
                        <div className="flex justify-center items-center gap-2.5 mb-8">
                            <span className="w-3 h-3 rounded-full bg-[#4285F4]"></span>
                            <span className="w-3 h-3 rounded-full border-none bg-[#EA4335]"></span>
                            <span className="w-3 h-3 rounded-full border-none bg-[#FBBC05]"></span>
                            <span className="w-3 h-3 rounded-full border-none bg-[#34A853]"></span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                            Developer <span className="text-[#4285F4]">Resources</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Curated learning materials, tools, courses, and roadmaps to help you master Google technologies and advance your developer career.
                        </p>
                    </motion.div>
                </div>
            </section>

            <ResourceFilterNavbar
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                activeType={activeType}
                setActiveType={setActiveType}
                activeSort={activeSort}
                setActiveSort={setActiveSort}
            />

            <div className="container mx-auto px-6 py-12 md:py-20 flex-grow">
                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredResources.length > 0 ? (
                            filteredResources.map((resource) => (
                                <motion.div
                                    layout
                                    key={resource.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col h-full"
                                >
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="p-3 bg-gray-50 rounded-xl text-gray-700 group-hover:bg-blue-50 group-hover:text-[#4285F4] transition-colors">
                                            {getIcon(resource.type)}
                                        </div>
                                        <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-blue-50 text-[#4285F4] uppercase tracking-wider">
                                            {resource.category}
                                        </span>
                                    </div>

                                    {/* Middle Row: Title and Description */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
                                        {resource.description || "Access curated slides, code repositories, and documentation from our developer sessions."}
                                    </p>

                                    {/* Bottom Row: Metadata (File Size and Date) */}
                                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-6 pb-6 border-b border-gray-100">
                                        <div className="flex items-center gap-1.5">
                                            <HardDrive size={14} />
                                            <span>{resource.size || "4.2 MB"}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            <span>{resource.date || "Oct 12, 2025"}</span>
                                        </div>
                                    </div>

                                    {/* Action Row: Download & View Details */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <a
                                            href={resource.link}
                                            className="inline-flex items-center justify-center gap-2 bg-[#4285F4] text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors shadow-sm"
                                        >
                                            <Download size={16} /> Download
                                        </a>
                                        <button
                                            onClick={() => setSelectedResource(resource)}
                                            className="text-[#4285F4] font-bold text-sm hover:text-blue-700 flex items-center gap-1 group transition-colors cursor-pointer"
                                        >
                                            View Details
                                            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center text-gray-500 text-xl font-medium">
                                No resources match your criteria. Please adjust your filters.
                            </div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Resource Detail Modal */}
            <ResourceModal
                resource={selectedResource}
                onClose={() => setSelectedResource(null)}
            />
        </div>
    );
};

export default Resources;
