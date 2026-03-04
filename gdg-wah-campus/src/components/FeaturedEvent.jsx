import React from 'react';
import { motion } from 'framer-motion';
import featuredImage from '../assets/featured events/hackthevibe.jpeg';
import { events } from '../data/mockData';

const FeaturedEvent = () => {
    // Ensure max 3 events are taken for the featured box
    const featuredList = events && events.length > 0 ? events.slice(0, 3) : [];

    return (
        <section className="py-16 bg-white shrink">
            <div className="container mx-auto px-0 md:px-6 max-w-7xl">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Featured Events</h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full rounded-none md:rounded-[2rem] overflow-hidden shadow-2xl bg-gray-900 flex flex-col"
                >
                    {/* Background Image across the entire container */}
                    <div className="absolute inset-0 z-0 rounded-none md:rounded-[2rem] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1540331547168-8b6310d425f9?auto=format&fit=crop&q=80&w=2000"
                            alt="Featured Background"
                            className="hidden md:block w-full h-full object-cover opacity-70 mix-blend-overlay text-transparent"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
                    </div>

                    {/* Glass Panel Content grid */}
                    <div className="relative z-10 w-full p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {featuredList.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ x: "100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a smooth 'halting' effect
                                    delay: 0.2 + (index * 0.15)
                                }}
                                className="bg-white/95 backdrop-blur-3xl border border-white/60 p-5 md:p-8 shadow-2xl rounded-3xl w-full relative z-20 flex flex-col"
                            >
                                {/* Glassmorphism Background Glow */}
                                <div className="absolute inset-0 bg-[#4285F4]/10 blur-2xl rounded-3xl -z-10 pointer-events-none"></div>

                                <div className="flex items-center gap-2 mb-4 relative z-10">
                                    <span className="w-2 h-2 rounded-full bg-[#4285F4] shadow-[0_0_8px_rgba(66,133,244,0.8)]"></span>
                                    <span className="text-[#4285F4] font-extrabold tracking-widest text-xs uppercase">{event.category || "EVENT"}</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight leading-tight mix-blend-normal relative z-10 line-clamp-2">
                                    {event.title}
                                </h2>

                                <img
                                    src={event.image || featuredImage}
                                    alt={event.title}
                                    className="w-full h-48 md:h-56 object-cover rounded-2xl mb-6 shadow-md relative z-10 border border-gray-100/50"
                                />

                                <p className="text-sm md:text-base text-gray-700 mb-4 font-medium leading-relaxed relative z-10 flex-grow">
                                    {event.description}
                                </p>
                            </motion.div>
                        ))}
                        {featuredList.length === 0 && (
                            <div className="col-span-1 md:col-span-3 py-10 text-white text-center">
                                No featured events at the moment.
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedEvent;
