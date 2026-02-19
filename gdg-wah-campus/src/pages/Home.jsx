import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, MapPin, Code, Sparkles } from 'lucide-react';
import Partners from '../components/Partners';
import Impact from '../components/Impact';
import Departments from '../components/Departments';
import Team from '../components/Team';
import RecentEvents from '../components/RecentEvents';
import CTA from '../components/CTA';
import EventModal from '../components/EventModal';
import { leadership, events } from '../data/mockData';

const Home = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 150]);

    // Team structure for hierarchical grid
    const faculty = leadership.find(l => l.role.includes('Faculty'));
    const leads = leadership.filter(l => l.role.includes('Campus Lead') || l.role.includes('Chairperson'));
    const secretary = leadership.find(l => l.role.includes('General Secretary'));

    return (
        <div className="overflow-x-hidden font-sans selection:bg-google-blue selection:text-white">

            {/* B. Hero Section (Welcome Showcase - Google Line-Art Doodle) */}
            <section className="relative min-h-screen w-full bg-[#202124] overflow-hidden flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32">

                {/* 1. Background Pattern (Subtle Tech Grid - Optional but adds depth) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#4285F4 2px, transparent 2px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>

                {/* 2. Floating Monoline Icons (The "Google Vibe") */}

                {/* Huge Globe (Left) */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.8, y: [0, -15, 0] }}
                    transition={{
                        x: { duration: 1, ease: "easeOut" },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -left-20 md:-left-32 top-1/2 -translate-y-1/2 text-google-blue pointer-events-none opacity-80 z-0"
                >
                    <Globe strokeWidth={1} size={300} className="w-36 h-36 md:w-80 md:h-80" />
                </motion.div>

                {/* Massive Map Pin (Right) */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.8, y: [0, 15, 0] }}
                    transition={{
                        x: { duration: 1, ease: "easeOut", delay: 0.2 },
                        y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
                    }}
                    className="absolute -right-20 md:-right-32 top-1/2 -translate-y-1/2 text-google-blue pointer-events-none opacity-80 z-0"
                >
                    <MapPin strokeWidth={1} size={300} className="w-36 h-36 md:w-80 md:h-80" />
                </motion.div>

                {/* Floating Code Icon (Top Right) */}
                <motion.div
                    animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-24 right-10 md:right-40 text-google-blue opacity-60 z-0 hidden md:block"
                >
                    <Code strokeWidth={1.5} size={48} />
                </motion.div>

                {/* Floating Sparkles (Top Left) */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-10 md:left-40 text-google-blue opacity-80 z-0"
                >
                    <Sparkles strokeWidth={1.5} size={32} />
                </motion.div>

                {/* Arrow Indication (Bottom Left) */}
                <motion.div
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-10 left-10 md:left-32 text-google-blue opacity-80 z-0 hidden md:block rotate-[-15deg]"
                >
                    <ArrowRight strokeWidth={1.5} size={80} />
                </motion.div>


                {/* 3. The Text Container (The Doodle Box) */}
                <div className="container mx-auto px-4 relative z-10 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative max-w-4xl w-full"
                    >
                        {/* Irregular 'Doodle' Border Shape */}
                        <div className="absolute inset-0 border-[3px] border-google-blue rounded-[3rem] rounded-tr-none rounded-bl-[4rem] pointer-events-none"></div>

                        {/* Decorative 'Connectors' on the box */}
                        <div className="absolute -top-3 left-16 w-12 h-6 bg-[#202124] border-x-[3px] border-google-blue"></div>
                        <div className="absolute -bottom-3 right-16 w-12 h-6 bg-[#202124] border-x-[3px] border-google-blue"></div>

                        {/* Tech decoration corner */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-[3px] border-r-[3px] border-google-blue rounded-tr-xl opacity-60"></div>

                        {/* --- Mobile Filler Doodles (Top & Bottom) --- */}

                        {/* Top Circuit Path - Visible on Mobile to fill space */}
                        <motion.div
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{ opacity: 1, pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-20 text-google-blue opacity-60 pointer-events-none"
                        >
                            <svg viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                <path d="M100 60 V 40 H 140 V 20 H 180 V 0" />
                                <path d="M100 60 V 40 H 60 V 20 H 20 V 0" />
                                <circle cx="180" cy="0" r="3" fill="currentColor" />
                                <circle cx="20" cy="0" r="3" fill="currentColor" />
                            </svg>
                        </motion.div>

                        {/* Bottom ZigZag Line - Visible on Mobile */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-xs h-16 text-google-blue opacity-40 pointer-events-none"
                        >
                            <svg viewBox="0 0 300 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                <path d="M0 20 L 20 0 L 40 20 L 60 0 L 80 20 L 100 0 L 120 20 L 140 0 L 160 20 L 180 0 L 200 20 L 220 0 L 240 20 L 260 0 L 280 20 L 300 0" />
                            </svg>
                        </motion.div>

                        {/* Extra Floating Shapes for Mobile Density */}
                        <div className="absolute -top-16 left-4 w-6 h-6 border-2 border-google-yellow rounded-full opacity-60 md:hidden animate-pulse"></div>
                        <div className="absolute -bottom-12 right-8 w-4 h-4 bg-google-green rounded-none rotate-45 opacity-60 md:hidden animate-bounce"></div>


                        <div className="relative p-8 md:p-20 text-center bg-[#202124] m-[4px] rounded-[2.8rem] rounded-tr-none rounded-bl-[3.8rem]"> {/* Inner bg to hide icons behind */}

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-google-sans font-bold text-white mb-8 leading-tight tracking-tight"
                            >
                                Welcome to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-white to-google-blue">
                                    GDGoC CUI Wah
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
                            >
                                Empowering students to build, innovate, and lead with Google technologies. Join a vibrant community of developers, creators, and problem-solvers shaping the future.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="mt-10"
                            >
                                {/* Optional CTA Button inside the doodle box? User didn't ask for one, but it fits the flow. Leaving mostly text as requested. */}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* C. Mission & Vision Section (White Theme, Split Pane) */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Vertical Matte Black Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-google-matt-black hidden md:block transform -translate-x-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        {/* Mission - Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-center md:text-right md:pr-12"
                        >
                            <h3 className="text-google-blue font-bold tracking-widest uppercase mb-6 text-2xl">Our Mission</h3>
                            <p className="text-xl md:text-2xl text-google-matt-black font-medium leading-relaxed">
                                "To create an inclusive tech community that empowers students to learn, build, and grow using modern technologies."
                            </p>
                        </motion.div>

                        {/* Vision - Right (Staggered) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-center md:text-left md:pl-12 pt-0 md:pt-32"
                        >
                            <h3 className="text-google-green font-bold tracking-widest uppercase mb-6 text-2xl">Our Vision</h3>
                            <p className="text-xl md:text-2xl text-google-matt-black font-medium leading-relaxed">
                                "To become a leading campus tech community that nurtures innovation, leadership, and problem-solving skills among students."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* D. Impact Section */}
            <Impact />

            {/* E. Departments Section */}
            <Departments />

            {/* F. Outreach Partners (Before Events/Team) */}
            <div className="bg-google-light-grey">
                <Partners />
            </div>

            {/* G. Team Section (New Puzzle Design) */}
            <Team />

            {/* H. Events Section (Matte Black Cards) */}
            {/* H. Recent Events Section (New Minimalist List) */}
            <RecentEvents />

            {/* I. Call to Action */}
            <CTA />

            {/* Event Modal */}
            <EventModal
                event={selectedEvent}
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />

        </div>
    );
};



export default Home;
