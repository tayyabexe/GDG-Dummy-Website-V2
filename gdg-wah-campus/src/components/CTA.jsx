import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Share2, ArrowUpRight } from 'lucide-react';

const CTA = () => {
    return (
        <section id="join" className="bg-white pt-24 pb-0 relative overflow-hidden">
            <div className="container mx-auto px-6 flex justify-center">

                {/* 1. Overall Container - The Bento Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-6xl bg-[#0a0f1a] rounded-t-[2.5rem] rounded-b-none border-2 border-b-0 border-[#4285F4] relative overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                >
                    {/* Subtle Background Doodles (Low Opacity Network Lines) */}
                    <svg className="absolute inset-0 w-full h-full text-white opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100 200 C 150 100, 300 300, 600 50 C 900 -200, 1100 400, 1400 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
                        <path d="M 0 400 C 250 500, 400 100, 800 350 C 1200 600, 1000 0, 1500 200" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>

                    {/* 2. Asymmetric Internal Layout (Left 60%) */}
                    <div className="w-full lg:w-[60%] p-10 md:p-14 lg:p-20 relative z-10 flex flex-col justify-center">
                        <h2 className="text-4xl font-black text-white leading-tight mb-4">
                            Ready to Build with Us?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-lg">
                            Be part of innovation and growth. Connect with like-minded developers and build something amazing together.
                        </p>

                        <div className="flex items-center gap-5 relative z-30 flex-wrap">
                            <a
                                href="https://gdg.community.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#4285F4] text-white font-bold px-8 py-3.5 rounded-md hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 inline-block text-center"
                            >
                                Join Chapter
                            </a>
                            <a
                                href="#volunteer"
                                className="text-[#4285F4] font-medium px-4 py-3 hover:text-blue-400 transition-colors inline-block"
                            >
                                Become a Volunteer
                            </a>
                        </div>
                    </div>

                    {/* 3. Newsletter Console (Right 40%) */}
                    <div className="w-full lg:w-[40%] p-6 md:p-10 flex items-center relative z-10">
                        <div className="bg-[#080c15] w-full p-10 rounded-2xl relative overflow-hidden border border-white/5">

                            {/* Content */}
                            <div className="relative z-20">
                                <h3 className="text-xl font-black text-white mb-2">Join our Newsletter</h3>
                                <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">
                                    Never miss an upcoming workshop or tech talk.
                                </p>

                                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="border border-gray-800 bg-transparent rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#4285F4] transition-colors w-full text-sm"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#4285F4] text-white font-bold px-6 py-3 rounded-md hover:bg-blue-600 transition-colors w-full"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                            {/* Anti-Gravity Floating Thumbnails (DOODLES) */}
                            <div className="absolute bottom-6 right-6 flex items-end gap-3 opacity-90 pointer-events-none z-10">
                                {/* Thumbnail 1: Email */}
                                <motion.div
                                    animate={{ y: [-4, 4, -4] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-12 h-12 rounded-xl bg-[#202124] border border-gray-700 flex items-center justify-center shadow-xl rotate-[-10deg]"
                                >
                                    <Mail className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                                </motion.div>

                                {/* Thumbnail 2: Node Cluster */}
                                <motion.div
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="w-16 h-16 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center shadow-xl z-20 relative"
                                >
                                    <Share2 className="w-6 h-6 text-[#4285F4]" strokeWidth={2} />
                                    {/* Simulated Google Colors via shadows/dots */}
                                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#EA4335]"></div>
                                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></div>
                                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#34A853]"></div>
                                </motion.div>

                                {/* Thumbnail 3: Arrow */}
                                <motion.div
                                    animate={{ y: [-3, 3, -3] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xl rotate-[15deg] mb-2"
                                >
                                    <ArrowUpRight className="w-5 h-5 text-gray-900" strokeWidth={2} />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
