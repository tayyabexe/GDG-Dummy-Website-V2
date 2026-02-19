import React from 'react';
import { motion } from 'framer-motion';

// Importing panel images
import kashifPanel from '../assets/panel png/sir kashif panel.png';
import ubaidPanel from '../assets/panel png/ubaid panel.png';
import laibaPanel from '../assets/panel png/laiba panel.png';
import junaidPanel from '../assets/panel png/junaid panel.png';

const TeamCard = ({ image, name, role, delay, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={`relative w-full bg-transparent group ${className}`}
        >
            {/* Image Container - Pure image render, no background/shadow on wrapper */}
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>
        </motion.div>
    );
};

const Team = () => {
    return (
        <section
            id="team"
            className="relative py-20 px-4 md:px-8 bg-[#F8F9FA] overflow-hidden"
            style={{
                backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
                backgroundSize: '24px 24px'
            }}
        >
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#202124] tracking-tight mb-4">
                        Meet The Driving Force
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        The passionate individuals leading our community towards innovation and growth.
                    </p>
                </motion.div>

                {/* Top Row: Faculty Advisor (Centered) */}
                <div className="flex justify-center mb-24">
                    <div className="w-full max-w-md">
                        <TeamCard
                            image={kashifPanel}
                            name="Dr. Kashif Ayyub"
                            role="Faculty Advisor"
                            delay={0.1}
                        />
                    </div>
                </div>

                {/* Bottom Row: Student Leads (3-Column Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20 max-w-6xl mx-auto">
                    <TeamCard
                        image={ubaidPanel}
                        name="Ubaid Ghazi"
                        role="Campus Lead"
                        delay={0.2}
                    />
                    <TeamCard
                        image={laibaPanel}
                        name="Laiba Faiz"
                        role="Chairperson"
                        delay={0.3}
                        className="md:-mt-8" // Subtle visual offset for center card if desired, or remove
                    />
                    <TeamCard
                        image={junaidPanel}
                        name="Junaid Mehmood"
                        role="General Secretary"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
