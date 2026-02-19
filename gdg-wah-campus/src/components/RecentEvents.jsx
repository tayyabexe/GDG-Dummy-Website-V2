
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { events } from '../data/mockData'; // Assuming usage of existing mock data
import EventModal from './EventModal';

const RecentEvents = () => {
    // If we want 4 events to fill the grid as requested, let's duplicate the last one if we only have 3
    // or just map the existing ones. existing mockData has 3.
    // Let's add a placeholder 4th one for the visual balance if needed, 
    // or just render the 3. The request implies a full row.
    // I'll render the existing 3 and maybe they will center or align left. 
    // The grid is `grid - cols - 1 sm: grid - cols - 2 lg: grid - cols - 4`.

    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <section id="events" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl mt-10">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">Past events</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 justify-items-center sm:justify-items-start">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex flex-col items-center text-center w-full cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setSelectedEvent(event)}
                        >
                            {/* A. Image/Avatar - Circular */}
                            <div className="w-32 h-32 rounded-full mb-4 border border-gray-100 shadow-sm overflow-hidden bg-gray-50 pointer-events-none">
                                <img
                                    src={event.image || "https://via.placeholder.com/150"}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* B. Date Text */}
                            <p className="text-sm text-gray-500 font-normal uppercase tracking-wide pointer-events-none">
                                {event.date} {event.year || "2025"} {/* Assuming year might be needed, adding default */}
                            </p>

                            {/* C. Event Type/Category */}
                            <h3 className="text-base text-gray-900 font-bold mt-1 pointer-events-none">
                                {event.category || "Workshop"}
                            </h3>

                            {/* D. Event Title (Link) */}
                            <span className="text-base text-google-blue underline underline-offset-4 decoration-1 hover:text-blue-800 transition-colors mt-2 cursor-pointer line-clamp-2">
                                {event.title}
                            </span>

                            {/* E. Chapter/Location Name */}
                            <p className="text-sm text-gray-500 font-normal mt-2 pointer-events-none">
                                GDGoC CUI Wah
                            </p>
                        </div>
                    ))}

                    {/* Placeholder 4th event for grid completeness if user wants 4 cols */}
                    <div
                        className="flex flex-col items-center text-center w-full cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedEvent({
                            title: "GDG On Campus Launch",
                            date: "12 Dec",
                            year: "2024",
                            category: "Orientation",
                            location: "GDGoC CUI Wah",
                            image: "https://images.unsplash.com/photo-1540331547168-8b6310d425f9?auto=format&fit=crop&q=80&w=256",
                            description: "The official launch of Google Developer Groups on Campus at CUI Wah. We introduced our team, our vision, and our roadmap for the upcoming year."
                        })}
                    >
                        <div className="w-32 h-32 rounded-full mb-4 border border-gray-100 shadow-sm overflow-hidden bg-gray-50 flex items-center justify-center pointer-events-none">
                            <img
                                src="https://images.unsplash.com/photo-1540331547168-8b6310d425f9?auto=format&fit=crop&q=80&w=256"
                                alt="Orientation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-sm text-gray-500 font-normal uppercase tracking-wide pointer-events-none">12 Dec 2024</p>
                        <h3 className="text-base text-gray-900 font-bold mt-1 pointer-events-none">Orientation</h3>
                        <span className="text-base text-google-blue underline underline-offset-4 decoration-1 hover:text-blue-800 transition-colors mt-2 cursor-pointer">
                            GDG On Campus Launch
                        </span>
                        <p className="text-sm text-gray-500 font-normal mt-2 pointer-events-none">GDGoC CUI Wah</p>
                    </div>
                </div>

                {/* Load More Button */}
                <div className="mt-16 text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded transition-colors duration-200">
                        Load more
                    </button>
                </div>

                {/* Event Modal */}
                <EventModal
                    event={selectedEvent}
                    isOpen={!!selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                    isPastEvent={true}
                />
            </div>
        </section>
    );
};

export default RecentEvents;

