import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
    // Prevent background scrolling ONLY when modal is open and an event is present
    useEffect(() => {
        if (event) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [event]);

    if (!event) return null;

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
                    className="relative w-full max-w-5xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] md:max-h-[85vh] z-10"
                >
                    {/* Fixed Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 md:top-6 right-4 md:right-6 z-50 p-2 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md border border-gray-200 transition-all"
                    >
                        <X size={24} strokeWidth={2.5} />
                    </button>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto w-full h-full flex flex-col relative [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent pb-10">

                        {/* Centered Poster Section */}
                        <div className="w-full flex justify-center items-center py-6 px-4 md:py-10 md:px-10 flex-shrink-0 bg-white">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full max-w-4xl max-h-[300px] md:max-h-[450px] object-cover rounded-xl shadow-sm border border-gray-200"
                            />
                        </div>

                        {/* Title and Location */}
                        <div className="px-6 md:px-10 pb-6 flex-shrink-0 text-center md:text-left">
                            <h1 className="text-3xl md:text-[2.5rem] font-bold text-[#202124] mb-3 leading-tight tracking-tight mt-6 md:mt-0">
                                {event.title}
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base cursor-pointer hover:underline">
                                {event.location}
                            </p>
                        </div>

                        {/* Shifted Grey Info Bar */}
                        <div className="bg-[#E8EAED] border-y border-gray-300/50 py-3 md:py-4 px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm md:text-[15px] font-bold text-gray-800">
                                <span>{event.date}, {event.time}</span>
                                {event.status !== 'past' && (
                                    <>
                                        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                        <span>{event.seatsFilled} RSVP'd</span>
                                    </>
                                )}
                            </div>
                            {event.status !== 'past' && (
                                <div className="flex items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0 justify-end">
                                    <button className="px-6 md:px-8 py-2 md:py-2.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white text-sm md:text-[15px] font-bold rounded-md transition-colors whitespace-nowrap shadow-sm">
                                        RSVP
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Split Body Layout (Image 4 main content) */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 p-6 md:p-10 flex-shrink-0 border-t border-gray-100">

                            {/* Left Column: Key Themes */}
                            <div className="w-full md:w-[220px] flex-shrink-0">
                                <h3 className="text-lg md:text-[1.3rem] font-bold text-[#202124] mb-4">Key Themes</h3>
                                <div className="flex flex-wrap md:flex-col gap-2.5 md:gap-3">
                                    {(event.tags || []).map(tag => (
                                        <span key={tag} className="border border-gray-300 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap text-center bg-white w-fit md:text-left">
                                            {tag}
                                        </span>
                                    ))}
                                    {/* Default tags if empty just for layout */}
                                    {(!event.tags || event.tags.length === 0) && (
                                        <span className="border border-gray-300 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-white w-fit md:text-left">
                                            {event.category}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Right Column: About this event */}
                            <div className="w-full flex-1">
                                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 tracking-tight">About this event</h2>
                                <div className="prose max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
                                    {/* Splitting description by newlines to render multiple paragraphs if they exist */}
                                    {event.description.split('\n').map((paragraph, index) => (
                                        <p key={index} className="mb-4">{paragraph}</p>
                                    ))}
                                    {/* Dummy text appended to make it feel like Image 4 if description is small */}
                                    <p className="mb-4">
                                        Join us for this dedicated learning journey designed to help you grow professionally while connecting with peers. This session aims to bridge the gap between emerging technologies and practical industry skills, empowering our community to stay ahead of the curve through focused, high-impact sessions.
                                    </p>
                                    <p>
                                        Whether you're a student or a budding professional, these sessions are crafted to turn your curiosity into a tangible portfolio. Leading this session is an experienced lead with a deep understanding of the ecosystem. Get ready to level up your game and build impactful solutions!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default EventModal;
