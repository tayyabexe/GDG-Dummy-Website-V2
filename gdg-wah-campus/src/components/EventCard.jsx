import React from 'react';
import { MapPin } from 'lucide-react';

const EventCard = ({ event, onClick }) => {
    const categoryStyles = {
        'Flagship': 'bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#F4B400] text-white',
        'Workshop': 'bg-[#4285F4] text-white',
        'Hackathon': 'bg-[#DB4437] text-white',
        'Study Jam': 'bg-[#0F9D58] text-white',
        'Info Session': 'bg-[#F4B400] text-white',
        'Tech Talk': 'bg-[#5F6368] text-white'
    };

    const determineCategoryStyle = (category) => {
        return categoryStyles[category] || 'bg-gray-500 text-white';
    };

    return (
        <div className="bg-white rounded-[1.25rem] border border-gray-200 overflow-hidden flex flex-col h-full shadow-sm">
            {/* Image Container with Top Overlays */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />

                {/* Category Tag - Top Left */}
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold rounded-full shadow-sm ${determineCategoryStyle(event.category)}`}>
                    {event.category || 'Event'}
                </div>

                {/* Date Tag - Top Right */}
                <div className="absolute top-4 right-4 z-10 bg-white text-gray-900 rounded-[0.5rem] px-3 py-1 font-bold text-xs shadow-sm shadow-black/5 flex items-center justify-center border border-gray-100/50">
                    {event.date}
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5 md:p-6 flex-1 flex flex-col">

                {/* Location & Time Context (Above Title) */}
                <div className="flex justify-between items-center text-[13px] md:text-sm font-bold text-gray-700 mb-3">
                    <span className="flex items-center gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis mr-2">
                        <MapPin size={16} strokeWidth={2.5} className="text-gray-400 shrink-0" />
                        <span className="truncate">{event.location}</span>
                    </span>
                    <span className="shrink-0">{event.time}</span>
                </div>

                {/* Title */}
                <h3 className="text-[1.15rem] md:text-xl font-bold text-gray-900 leading-tight mb-3">
                    {event.title}
                </h3>

                {/* Tags (Grey Bubbles) */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {(event.tags || []).map(tag => (
                        <span key={tag} className="bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full text-[11px] md:text-xs font-medium border border-gray-100 whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {event.description}
                </p>

                {/* RSVP Button (Push to bottom, replace with custom shorter 'View details') */}
                <div className="mt-auto pt-2 flex justify-start">
                    <button
                        onClick={onClick}
                        className="px-6 py-2 bg-[#4285F4] text-white rounded-[0.35rem] font-medium text-sm md:text-base hover:bg-blue-600 transition-colors shadow-sm tracking-wide"
                    >
                        View details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
