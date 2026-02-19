import React from 'react';
import { motion } from 'framer-motion';

// Importing partner images
import gdscAir from '../assets/partners/Air University.png';
import gdscCui from '../assets/partners/GDGoC CUI Chapter Logo.png';
import datacamp from '../assets/partners/datacamp.png';
import github from '../assets/partners/github.png';

const Partners = () => {
    // Using local imports
    const partners = [
        {
            name: "GDSC Air University",
            logo: gdscAir,
            className: "bg-white p-0"
        },
        {
            name: "GDGoC CUI Chapter",
            logo: gdscCui,
            className: "bg-[#202124] border-transparent p-6" // Dark background for white text visibility
        },
        {
            name: "DataCamp",
            logo: datacamp,
            className: "bg-white p-6"
        },
        {
            name: "GitHub",
            logo: github,
            className: "bg-white p-6"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
            {/* Tech Pattern Background - Expanded Range */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 tracking-tight"
                >
                    A Huge Thanks to Our <span className="text-google-blue">Outreach Partners</span>
                </motion.h2>

                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`flex items-center justify-center rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md ${partner.className} h-40 w-64 md:h-48 md:w-80 transform hover:scale-105 overflow-hidden`}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-full w-full object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
