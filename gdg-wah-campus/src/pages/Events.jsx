import React from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';
import { events } from '../data/mockData';

const Events = () => {
    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-google-dark mb-4">Upcoming Events</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join us for workshops, hackathons, and tech talks. Connect with developers and learn new skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>

                {/* Newsletter / Notifications */}
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    className="mt-20 bg-google-blue rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
                        <p className="mb-8 opacity-90">Subscribe to our newsletter to get notified about upcoming workshops and meetups.</p>
                        <div className="max-w-md mx-auto flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none"
                            />
                            <button className="px-6 py-3 bg-google-yellow text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Events;
