import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { events } from '../data/mockData';
import EventModal from './EventModal';

const RecentEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <section id="events" className="py-24 relative overflow-hidden border-t border-gray-100 font-sans">
            {/* Subtle Tech Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
                    alt="Background Pattern"
                    className="w-full h-full object-cover opacity-[0.03]"
                />
                <div className="absolute inset-0 bg-white/95 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-6 pl-8 md:pl-16 lg:pl-28 max-w-[90rem] relative z-10">

                {/* Main Centered Timeline Layout */}
                <div className="max-w-5xl mx-auto">

                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Recent Activity</h2>
                        <div className="h-px bg-gray-200 flex-grow hidden sm:block"></div>
                    </div>

                    {/* Timeline Container */}
                    <div className="ml-4 md:ml-10 pl-8 md:pl-[64px] py-4 flex flex-col gap-8 md:gap-10 relative">
                        {/* Taking the events */}
                        {events.slice(0, 4).map((event, index, allEvents) => {
                            const getCardColors = (cat) => {
                                if (cat?.includes("AI") || cat?.includes("Machine")) return { tag: "text-[#DB4437]", line: "border-[#DB4437]", flow: "from-[#DB4437]", toFlow: "to-[#DB4437]", solidBg: "bg-[#DB4437]", bg: "bg-red-50", shadow: "shadow-[0_0_25px_rgba(219,68,55,0.15)]", border: "border-[#DB4437]/40" };
                                if (cat?.includes("Cloud") || cat?.includes("General")) return { tag: "text-[#F4B400]", line: "border-[#F4B400]", flow: "from-[#F4B400]", toFlow: "to-[#F4B400]", solidBg: "bg-[#F4B400]", bg: "bg-yellow-50", shadow: "shadow-[0_0_25px_rgba(244,180,0,0.15)]", border: "border-[#F4B400]/40" };
                                if (cat?.includes("Android") || cat?.includes("Web") || cat?.includes("Engineering")) return { tag: "text-[#0F9D58]", line: "border-[#0F9D58]", flow: "from-[#0F9D58]", toFlow: "to-[#0F9D58]", solidBg: "bg-[#0F9D58]", bg: "bg-green-50", shadow: "shadow-[0_0_25px_rgba(15,157,88,0.15)]", border: "border-[#0F9D58]/40" };
                                return { tag: "text-[#4285F4]", line: "border-[#4285F4]", flow: "from-[#4285F4]", toFlow: "to-[#4285F4]", solidBg: "bg-[#4285F4]", bg: "bg-blue-50", shadow: "shadow-[0_0_25px_rgba(66,133,244,0.15)]", border: "border-[#4285F4]/40" };
                            };

                            const currentColors = getCardColors(event.category);
                            const nextColors = index < allEvents.length - 1 ? getCardColors(allEvents[index + 1].category) : null;
                            const { tag: tagColor, line: lineColor, flow, solidBg, bg: bgTagColor, shadow: shadowClass, border: borderClass } = currentColors;

                            return (
                                <div className="relative w-full" key={event.id}>
                                    {/* TIMELINE GRADIENT SEGMENTS */}
                                    {/* Top tail for the very first item */}
                                    {index === 0 && (
                                        <div
                                            className={`absolute -left-8 md:-left-[66px] w-[3px] h-[120px] bg-gradient-to-t ${flow} to-transparent z-0 hidden md:block`}
                                            style={{ bottom: '50%' }}
                                        ></div>
                                    )}

                                    {/* Straight line dropping from gap down to the L-curve (only for items having a previous item) */}
                                    {index > 0 && (
                                        <div
                                            className={`absolute -left-8 md:-left-[66px] w-[3px] ${solidBg} z-0 hidden md:block`}
                                            style={{ top: '0', height: 'calc(50% - 2rem)' }}
                                        ></div>
                                    )}

                                    {/* Downward line tracking to the next item */}
                                    {nextColors && (
                                        <div
                                            className={`absolute -left-8 md:-left-[66px] w-[3px] bg-gradient-to-b ${flow} ${nextColors.toFlow} z-0 hidden md:block`}
                                            style={{ top: '50%', height: 'calc(50% + 2.5rem)' }}
                                        ></div>
                                    )}

                                    {/* THE TIMELINE L-SHAPE CURVE */}
                                    <div
                                        className={`absolute -left-8 md:-left-[66px] w-8 md:w-[66px] h-8 border-l-[3px] border-b-[3px] rounded-bl-[2rem] ${lineColor} z-10 hidden md:block`}
                                        style={{ bottom: '50%' }}
                                    ></div>

                                    {/* Main Card */}
                                    <div
                                        className={`relative flex flex-col sm:flex-row items-center sm:items-center gap-5 md:gap-6 bg-white rounded-[1.25rem] border ${borderClass} ${shadowClass} overflow-visible p-5 md:px-7 md:py-5 max-w-[700px] cursor-pointer transition-transform hover:-translate-y-1 z-20`}
                                        onClick={() => setSelectedEvent(event)}
                                    >
                                        {/* Circular Image Wrapper */}
                                        <div className="flex-shrink-0 flex items-center justify-center relative z-20">
                                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-gray-100 bg-gray-50 overflow-hidden relative">
                                                <img
                                                    src={event.image || "https://images.unsplash.com/photo-1540331547168-8b6310d425f9?auto=format&fit=crop&q=80&w=2000"}
                                                    alt={event.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Content Body */}
                                        <div className="w-full flex flex-col justify-center relative z-20 items-center sm:items-start text-center sm:text-left flex-grow">
                                            <div className="flex-grow flex flex-col items-center sm:items-start w-full">
                                                {/* Tag Pill */}
                                                <span className={`inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest ${tagColor} mb-2 ${bgTagColor} px-3 py-1 rounded-full`}>
                                                    {event.category || "Workshop"}
                                                </span>
                                                {/* Blue Heading */}
                                                <h3 className="text-xl sm:text-2xl font-bold text-[#4285F4] leading-snug tracking-tight line-clamp-1 mb-2">
                                                    {event.title}
                                                </h3>
                                                {/* Concise Description */}
                                                {event.description && (
                                                    <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-1 mb-4">
                                                        {event.description}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Footer: Venue, Date, Capacity */}
                                            <div className="w-full flex flex-col text-gray-500 text-xs sm:text-[13px] font-medium pt-3 gap-2 border-t border-gray-50">
                                                <div className="flex flex-wrap items-center gap-6">
                                                    <div className="flex items-center gap-1.5">
                                                        <svg className={`w-4 h-4 ${tagColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        <span className="line-clamp-1">{event.location || "Main Campus"}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                                                        <svg className={`w-4 h-4 ${tagColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>{event.date} • {event.time || "10:00 AM"}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <svg className={`w-4 h-4 ${tagColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                    <span>Capacity: {event.seatsFilled || "32"}/{event.seatsTotal || "50"} Registered</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-12 text-center md:text-left md:ml-10 md:pl-16">
                        <button className="text-base font-semibold text-gray-600 hover:text-[#4285F4] transition-colors inline-flex items-center gap-2 cursor-pointer bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm hover:shadow-md">
                            View all past events <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
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
