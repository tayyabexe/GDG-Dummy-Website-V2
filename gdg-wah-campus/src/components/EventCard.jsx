import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const EventCard = ({ event, index }) => {
    const [isRsvp, setIsRsvp] = useState(false);

    const colors = {
        'Web Dev': 'border-t-google-blue text-google-blue',
        'AI/ML': 'border-t-google-red text-google-red',
        'Cloud': 'border-t-google-yellow text-google-yellow',
    };

    const badgeColor = {
        'Web Dev': 'bg-blue-100 text-blue-800',
        'AI/ML': 'bg-red-100 text-red-800',
        'Cloud': 'bg-yellow-100 text-yellow-800',
    };

    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 ${colors[event.category] || 'border-t-gray-500'} flex flex-col h-full group`}
        >
            {/* Date Stencil Side (Visual for Desktop) */}
            <div className="flex h-full">
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${badgeColor[event.category] || 'bg-gray-100'}`}>
                            {event.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                            <Users size={14} />
                            <span>{event.seatsFilled}/{event.seatsTotal}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mb-4">
                        <div className="flex-shrink-0 text-center bg-gray-50 rounded-lg p-2 min-w-[60px] border border-gray-100">
                            <span className="block text-sm font-bold text-gray-400 uppercase">{event.date.split(' ')[1]}</span>
                            <span className="block text-2xl font-black text-gray-800">{event.date.split(' ')[0]}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1 group-hover:text-google-blue transition-colors">{event.title}</h3>
                            <div className="flex flex-col gap-1 text-sm text-gray-500">
                                <span className="flex items-center gap-1"><Clock size={14} /> {event.time}</span>
                                <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                        <button
                            onClick={() => setIsRsvp(!isRsvp)}
                            className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${isRsvp
                                    ? 'bg-google-green text-white hover:bg-green-600'
                                    : 'bg-gray-50 text-gray-600 hover:bg-google-blue hover:text-white'
                                }`}
                        >
                            {isRsvp ? (
                                <><CheckCircle size={16} /> Registered</>
                            ) : (
                                <>RSVP Now <ArrowRight size={16} /></>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;
