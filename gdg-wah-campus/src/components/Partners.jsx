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
            className: "bg-white p-1"
        },
        {
            name: "GDGoC CUI Chapter",
            logo: gdscCui,
            className: "bg-[#202124] border-transparent p-3 md:p-4" // Dark background for white text visibility
        },
        {
            name: "DataCamp",
            logo: datacamp,
            className: "bg-white p-3 md:p-4"
        },
        {
            name: "GitHub",
            logo: github,
            className: "bg-white p-3 md:p-4"
        }
    ];

    return (
        <section className="py-24 bg-[#F8F9FA] border-y border-gray-100 relative overflow-hidden">
            {/* Tech Pattern Background - Expanded Range */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center relative z-10 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
                >
                    A Huge Thanks to Our <span className="text-google-blue">Outreach Partners</span>
                </motion.h2>
            </div>

            {/* Marquee Container */}
            <div className="relative z-10 w-full overflow-hidden flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    className="flex items-center gap-8 w-max px-4"
                >
                    {/* Render array multiple times to create seamless loop */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center rounded-xl border border-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-md ${partner.className} h-24 w-48 md:h-32 md:w-64 flex-shrink-0 cursor-pointer overflow-hidden group`}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
