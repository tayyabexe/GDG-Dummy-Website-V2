import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from '../components/EventCard';
import EventFilterNavbar from '../components/EventFilterNavbar';
import EventModal from '../components/EventModal';
import { events } from '../data/mockData';

const Events = () => {
    const [tab, setTab] = useState("upcoming");
    const [activeFilter, setActiveFilter] = useState("All");

    // Pagination / Load More state
    const [visibleCount, setVisibleCount] = useState(6);

    // Modal State
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Reset visible count when filters change
    useMemo(() => {
        setVisibleCount(6);
    }, [tab, activeFilter]);

    const sortedEvents = useMemo(() => {
        return events
            .filter(event => {
                const matchesTab = (event.status || "upcoming") === tab;
                const matchesFilter = activeFilter === "All" || event.category === activeFilter;
                return matchesTab && matchesFilter;
            })
            .sort((a, b) => {
                const dateA = new Date(a.timestamp || 0).getTime();
                const dateB = new Date(b.timestamp || 0).getTime();
                // Upcoming: earliest first (ascending). Past: most recent first (descending).
                if (tab === "upcoming") {
                    return dateA - dateB;
                } else {
                    return dateB - dateA;
                }
            });
    }, [tab, activeFilter]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    return (
        <div className="bg-gray-50 min-h-screen relative flex flex-col">
            {/* Dark Hero Section matching Home Page */}
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
                            Discover our <span className="text-[#4285F4]">Events</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Experience a mix of tech talks, workshops, and study jams designed to grow your developer skills. Learn the Google stack and collaborate with the community to build world-class solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            <EventFilterNavbar
                tab={tab}
                setTab={setTab}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            <div className="container mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedEvents.length > 0 ? (
                        sortedEvents.slice(0, visibleCount).map((event, index) => (
                            <EventCard key={event.id} event={event} index={index} onClick={() => setSelectedEvent(event)} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-gray-500 text-xl font-medium">
                            No events match your criteria. Please adjust your filters.
                        </div>
                    )}
                </div>

                {/* Load More Button */}
                {sortedEvents.length > visibleCount && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="text-[#4285F4] font-bold text-lg md:text-xl tracking-wide hover:underline hover:text-blue-600 transition-all px-6 py-3"
                        >
                            Load More
                        </button>
                    </div>
                )}

                {/* Event Modal */}
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            </div> {/* END OF MAIN CONTAINER */}

            {/* Newsletter / Notifications - Styled to sit flush on bottom like Home page CTA */}
            <section className="bg-gray-50 pt-20 md:pt-32 pb-0 relative overflow-hidden mt-auto">
                <div className="container mx-auto px-6 flex justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-6xl bg-google-blue rounded-t-[2.5rem] lg:rounded-t-[3rem] rounded-b-none px-8 py-14 md:py-20 text-center text-white relative overflow-hidden shadow-2xl border-2 border-b-0 border-[#4285F4]/30"
                    >
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight">Never Miss an Event</h2>
                            <p className="mb-10 text-white/90 text-sm md:text-lg max-w-2xl mx-auto font-medium">Subscribe to our newsletter to get notified about upcoming workshops, certifications, and exclusive meetups.</p>

                            <form className="w-full max-w-lg mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/20 shadow-inner font-medium transition-all"
                                    required
                                />
                                <button type="submit" className="px-8 py-3.5 bg-google-yellow text-gray-900 font-bold rounded-lg hover:bg-yellow-400 active:scale-95 transition-all shadow-xl whitespace-nowrap">
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        {/* Background decorations matches Home style */}
                        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/20 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Events;
