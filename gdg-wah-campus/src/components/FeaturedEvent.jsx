import React from 'react';
import { motion } from 'framer-motion';
import featuredImage from '../assets/featured events/hackthevibe.jpeg';

const FeaturedEvent = () => {
    return (
        <section className="py-16 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Featured Events</h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full rounded-[2rem] overflow-visible md:overflow-hidden shadow-2xl bg-gray-900 flex flex-col md:flex-row min-h-[300px]"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 rounded-[2rem] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1540331547168-8b6310d425f9?auto=format&fit=crop&q=80&w=2000"
                            alt="Featured Event"
                            className="w-full h-full object-cover opacity-70 mix-blend-overlay text-transparent"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
                    </div>

                    {/* Glass Panel Content */}
                    <div className="relative z-10 w-full md:w-[45%] p-4 md:p-6 pt-64 md:pt-6 flex items-end md:items-center">
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a smooth 'halting' effect
                                delay: 0.2
                            }}
                            className="bg-white/95 backdrop-blur-3xl border border-white/60 p-6 md:p-10 shadow-2xl rounded-3xl w-full translate-y-8 md:translate-y-0 relative z-20"
                        >
                            {/* Glassmorphism Background Glow */}
                            <div className="absolute inset-0 bg-[#4285F4]/10 blur-2xl rounded-3xl -z-10 pointer-events-none"></div>

                            <div className="flex items-center gap-2 mb-4 relative z-10">
                                <span className="w-2 h-2 rounded-full bg-[#4285F4] shadow-[0_0_8px_rgba(66,133,244,0.8)]"></span>
                                <span className="text-[#4285F4] font-extrabold tracking-widest text-xs uppercase">INDUSTRY-ACADEMIA BRIDGE</span>
                            </div>

                            <motion.h2
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight mix-blend-normal relative z-10"
                            >
                                HackTheVibe 2026
                            </motion.h2>

                            <motion.img
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                src={featuredImage}
                                alt="HackTheVibe"
                                className="w-full h-70 md:h-70 object-cover rounded-2xl mb-6 shadow-md relative z-10 border border-gray-100/50"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="text-base md:text-lg text-gray-700 mb-8 font-medium leading-relaxed relative z-10"
                            >
                                A landmark collaboration bringing 4 industry-leading GitHub Campus Experts to CUI Wah. We bridged the gap between university theory and industry reality through deep dives into AI architecture, DevOps, and Cyber Security.
                            </motion.p>


                            <motion.a
                                href="#gallery"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                className="inline-block w-full sm:w-auto px-10 py-4 bg-[#4285F4] text-white text-center rounded-xl font-bold text-base hover:bg-blue-600 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 relative z-10"
                            >
                                View Event Gallery
                            </motion.a>

                        </motion.div>
                    </div>
                </motion.div>
                {/* Spacer for mobile overlap */}
                <div className="h-24 md:hidden"></div>
            </div>
        </section>
    );
};

export default FeaturedEvent;
