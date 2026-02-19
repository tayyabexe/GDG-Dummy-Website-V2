import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Users, Ticket } from 'lucide-react';

const EventModal = ({ event, isOpen, onClose, isPastEvent }) => {
    if (!isOpen || !event) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors text-black"
                    >
                        <X size={24} />
                    </button>

                    {/* Left: Image / Puzzle Layout */}
                    <div className="w-full md:w-1/2 bg-google-yellow relative p-6 flex flex-col justify-center overflow-hidden">
                        {/* Geometric shapes for puzzle effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-google-blue rounded-bl-[100px] z-10 opacity-90"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-google-red rounded-tr-[100px] z-10 opacity-90"></div>

                        <div className="relative z-10 w-full aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg rotate-1 transform hover:rotate-0 transition-transform duration-500">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto bg-white text-gray-800">
                        <div className="inline-block px-3 py-1 bg-google-blue/10 text-google-blue font-bold rounded-full text-xs mb-4 uppercase tracking-wider">
                            {event.category}
                        </div>

                        <h2 className="text-3xl font-bold mb-4 text-google-matt-black leading-tight">{event.title}</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {event.description || "Join us for an immersive session where we dive deep into the latest technologies. Whether you're a beginner or an expert, there's something for everyone."}
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-google-red/10 flex items-center justify-center text-google-red">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Date & Time</p>
                                    <p className="font-medium">{event.date} • {event.time}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-google-green/10 flex items-center justify-center text-google-green">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                                    <p className="font-medium">{event.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-google-blue/10 flex items-center justify-center text-google-blue">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Capacity</p>
                                    <p className="font-medium">{event.seatsFilled}/{event.seatsTotal} Registered</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg ${isPastEvent
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                                    : 'bg-google-blue text-white hover:bg-blue-600 hover:shadow-xl'
                                }`}
                            disabled={isPastEvent}
                        >
                            <Ticket size={20} />
                            {isPastEvent ? 'Event Ended' : 'RSVP Now'}
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default EventModal;
