import React from 'react';
import { motion } from 'framer-motion';

// Importing panel images
import kashifPanel from '../assets/panel png/sir kashif panel.png';
import ubaidPanel from '../assets/panel png/ubaid panel.png';
import laibaPanel from '../assets/panel png/laiba panel.png';
import junaidPanel from '../assets/panel png/junaid panel.png';

const TeamCard = ({ image, name, role, delay, className = "", imageStyle = {}, imageContainerClass = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={`flex flex-col items-center group bg-white shadow-xl shadow-gray-200/50 border border-gray-100 p-8 rounded-[2rem] hover:shadow-2xl hover:border-google-blue/20 transition-all duration-300 ${className}`}
        >
            {/* Image Container */}
            <div className={`relative w-4/5 md:w-full transition-transform duration-300 group-hover:-translate-y-2 ${imageContainerClass}`}>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-auto object-contain drop-shadow-md"
                    style={imageStyle}
                />
            </div>
            {/* Explicit Text rendering below the panel image */}
            <div className="text-center bg-white relative z-10 w-full pt-4 rounded-b-[2rem]">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-google-blue transition-colors">{name}</h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-1">{role}</p>
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
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                        Meet The Driving Force
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        The passionate individuals leading our community towards innovation and growth.
                    </p>
                </motion.div>

                {/* Team Members Grid (4-Column) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl mx-auto px-4 md:px-0">
                    <TeamCard
                        image={kashifPanel}
                        name="Dr. Kashif Ayyub"
                        role="Faculty Advisor"
                        delay={0.1}
                        imageContainerClass="mb-6 lg:mb-10"
                        imageStyle={{ clipPath: 'inset(5% 4% 3% 4%)', transform: 'scale(1.2) translateY(5%)' }}
                    />
                    <TeamCard
                        image={ubaidPanel}
                        name="Ubaid Ghazi"
                        role="Campus Lead"
                        delay={0.2}
                        imageContainerClass="-mb-12 lg:-mb-24"
                        imageStyle={{ clipPath: 'inset(0 3% 27% 4%)' }}
                    />
                    <TeamCard
                        image={laibaPanel}
                        name="Laiba Faiz"
                        role="Chairperson"
                        delay={0.3}
                        imageContainerClass="mb-6 lg:mb-10"
                        imageStyle={{ clipPath: 'inset(4.5% 4.3% 3% 4.3%)', transform: 'scale(1.2) translateY(5%)' }}
                    />
                    <TeamCard
                        image={junaidPanel}
                        name="Junaid Mehmood"
                        role="General Secretary"
                        delay={0.4}
                        imageContainerClass="-mb-12 lg:-mb-24"
                        imageStyle={{ clipPath: 'inset(0 3% 27% 4%)' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
