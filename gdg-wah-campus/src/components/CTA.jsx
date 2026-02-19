import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, CodeXml, Sparkles, Users } from 'lucide-react';

const CTA = () => {
    return (
        <section id="join" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* 1. Floating Banner Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-6xl mx-auto rounded-[3rem] bg-[#E8F0FE] p-12 md:p-24 relative overflow-hidden shadow-sm text-center"
                >

                    {/* 4. Playful "Doodle" Graphics (Background Vectors) */}
                    {/* Top Left: CodeXml (Google Yellow) */}
                    <div className="absolute -left-10 -top-10 opacity-30 z-0">
                        <CodeXml className="w-40 h-40 text-[#FBBC05] -rotate-12" strokeWidth={1.5} />
                    </div>

                    {/* Bottom Right: Sparkles (Google Red) */}
                    <div className="absolute -right-10 -bottom-10 opacity-30 z-0">
                        <Sparkles className="w-48 h-48 text-[#EA4335]" strokeWidth={1.5} />
                    </div>

                    {/* Top Right: Users (Google Green) */}
                    <div className="absolute top-10 right-20 opacity-30 z-0 hidden md:block">
                        <Users className="w-24 h-24 text-[#34A853]" strokeWidth={1.5} />
                    </div>

                    {/* 2. Typography (Center Aligned) */}
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-sans">
                            <span className="text-[#4285F4]">Join</span> <span className="text-[#EA4335]">Our</span> <span className="text-[#34A853]">Community</span>
                        </h2>

                        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Be part of innovation and growth. Connect with like-minded developers and build something amazing together.
                        </p>

                        {/* 3. Buttons (The Actions) */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
                            {/* Primary Button: Join Now */}
                            <a
                                href="https://gdg.community.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#4285F4] text-white rounded-full font-semibold text-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
                            >
                                Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            {/* Secondary Button: Become a Volunteer */}
                            <a
                                href="#"
                                className="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-full font-semibold text-lg hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                            >
                                Become a Volunteer <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
