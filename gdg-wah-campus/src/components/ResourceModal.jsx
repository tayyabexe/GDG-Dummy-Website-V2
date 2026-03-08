import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Download, ExternalLink, Presentation, Github, FileText, Video, CheckCircle2 } from 'lucide-react';

const ResourceModal = ({ resource, onClose }) => {
    // Prevent background scrolling ONLY when modal is open and a resource is present
    useEffect(() => {
        if (resource) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [resource]);

    if (!resource) return null;

    const getIcon = (type) => {
        switch (type) {
            case 'Slides': return <Presentation className="text-yellow-600" size={32} />;
            case 'GitHub':
            case 'Github': return <Github className="text-gray-800" size={32} />;
            case 'PDFs':
            case 'Docs': return <FileText className="text-red-500" size={32} />;
            case 'Session Replays': return <Video className="text-blue-500" size={32} />;
            default: return <ExternalLink className="text-blue-500" size={32} />;
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12">
                {/* Backdrop Blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                ></motion.div>

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] md:max-h-[85vh] z-10"
                >
                    {/* Fixed Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 md:top-6 right-4 md:right-6 z-50 p-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full transition-all"
                    >
                        <X size={20} strokeWidth={2.5} />
                    </button>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto w-full h-full flex flex-col relative [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">

                        {/* Banner & Header Section */}
                        <div className="bg-[#f8f9fa] border-b border-gray-200 px-6 py-8 md:px-12 md:py-12 flex-shrink-0">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                {/* Large Format Icon */}
                                <div className="p-5 bg-white shadow-sm border border-gray-100 rounded-2xl flex-shrink-0">
                                    {getIcon(resource.type)}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-[#4285F4] uppercase tracking-wider">
                                            {resource.category}
                                        </span>
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                            {resource.type}
                                        </span>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                                        {resource.title}
                                    </h1>
                                    <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
                                        <span>Updated: {resource.date}</span>
                                        <span>•</span>
                                        <span>{resource.size}</span>
                                    </div>
                                </div>

                                {/* Share Button */}
                                <div className="hidden md:block">
                                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                                        <Share2 size={18} />
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Body Layout */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 p-6 md:p-12 flex-shrink-0">

                            {/* Main Content Column */}
                            <div className="flex-1 flex flex-col gap-8">
                                {/* Full Summary */}
                                <section>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3">About this resource</h2>
                                    <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                                        {resource.fullSummary || resource.description}
                                    </p>
                                </section>

                                {/* Key Takeaways */}
                                <section>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">What's Inside</h2>
                                    <ul className="space-y-3">
                                        {(resource.keyTakeaways || []).map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle2 className="text-[#34A853] flex-shrink-0 mt-0.5" size={20} />
                                                <span className="text-gray-700 leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            {/* Right Sidebar Column */}
                            <div className="w-full md:w-[280px] flex flex-col gap-8 flex-shrink-0">
                                {/* Contributor */}
                                {resource.contributor && (
                                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Curated By</h3>
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={resource.contributor.image}
                                                alt={resource.contributor.name}
                                                className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm object-cover"
                                            />
                                            <div>
                                                <div className="font-bold text-gray-900">{resource.contributor.name}</div>
                                                <div className="text-sm text-gray-500">Domain Lead</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Related Links & Meta */}
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Related Links</h3>
                                    <a href={resource.relatedLink || "#"} className="flex items-center gap-2 text-[#4285F4] font-medium hover:underline text-sm group">
                                        <ExternalLink size={16} className="text-[#4285F4]" />
                                        <span>View Source Repository</span>
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Fixed Action Footer */}
                        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 md:px-12 md:py-6 mt-auto">
                            <a
                                href={resource.link}
                                className="w-full flex items-center justify-center gap-2 bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <Download size={22} />
                                Download Resource
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ResourceModal;
