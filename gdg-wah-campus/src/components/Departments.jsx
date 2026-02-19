import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MonitorSmartphone, Database, Share2, PenTool, Ticket, CodeXml, Asterisk } from 'lucide-react';

const Departments = () => {
    return (
        <section className="w-full relative">
            {/* Google Brand Line */}
            <div className="w-full h-1.5 bg-gradient-to-r from-google-blue via-google-red to-google-yellow"></div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* LEFT COLUMN: TECHNICAL TRACKS */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#202124] p-12 lg:p-24 relative overflow-hidden"
                >
                    {/* Background Doodle: CodeXml Icon */}
                    <CodeXml className="absolute -bottom-20 -left-20 w-96 h-96 text-white opacity-5 pointer-events-none" strokeWidth={1} />

                    <h2 className="text-4xl font-extrabold text-white mb-16 relative z-10 tracking-tight">
                        Technical Tracks<span className="text-google-blue">.</span>
                    </h2>

                    <div className="flex flex-col gap-14 relative z-10">
                        {/* Club 1: Gen AI */}
                        <motion.div whileHover={{ x: 10 }} className="group cursor-default">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider mb-3 border border-blue-500/20">
                                AI & FUTURE TECH
                            </span>
                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-[#4285F4] group-hover:text-white transition-colors">
                                <Sparkles className="w-6 h-6" />
                                Gen AI Club
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                                Dive into the world of Gen-AI. Explore LLMs, diffusion models, and build the future of AI-driven applications.
                            </p>
                        </motion.div>

                        {/* Club 2: Web & App */}
                        <motion.div whileHover={{ x: 10 }} className="group cursor-default">
                            <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold tracking-wider mb-3 border border-green-500/20">
                                ENGINEERING
                            </span>
                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-[#34A853] group-hover:text-white transition-colors">
                                <MonitorSmartphone className="w-6 h-6" />
                                Web & App Club
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                                Master modern web and mobile development. From React and Flutter to backend systems, build scalable solutions.
                            </p>
                        </motion.div>

                        {/* Club 3: Data Science */}
                        <motion.div whileHover={{ x: 10 }} className="group cursor-default">
                            <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-wider mb-3 border border-yellow-500/20">
                                ANALYTICS
                            </span>
                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-[#FBBC05] group-hover:text-white transition-colors">
                                <Database className="w-6 h-6" />
                                Data Science Club
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                                Uncover insights from data. Learn machine learning, data visualization, and statistical analysis.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: CREATIVE & MANAGEMENT */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-12 lg:p-24 relative overflow-hidden"
                >
                    {/* Background Doodle: Asterisk Icon */}
                    <Asterisk className="absolute -top-20 -right-20 w-96 h-96 text-gray-200 opacity-40 rotate-12 pointer-events-none" strokeWidth={1} />

                    <h2 className="text-4xl font-extrabold text-[#202124] mb-16 relative z-10 tracking-tight">
                        Non-Tech & Creative<span className="text-google-red">.</span>
                    </h2>

                    <div className="flex flex-col gap-14 relative z-10">
                        {/* Club 4: Social Media */}
                        <motion.div whileHover={{ x: 10 }} className="group cursor-default">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-wider mb-3 border border-red-100">
                                BRANDING
                            </span>
                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-[#EA4335] group-hover:text-black transition-colors">
                                <Share2 className="w-6 h-6" />
                                Social Media & Marketing
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
                                Amplify our voice. Master digital marketing, content creation, and brand storytelling.
                            </p>
                        </motion.div>

                        {/* Club 5: Graphics */}
                        <motion.div whileHover={{ x: 10 }} className="group cursor-default">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider mb-3 border border-blue-100">
                                CREATIVE
                            </span>
                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-[#4285F4] group-hover:text-black transition-colors">
                                <PenTool className="w-6 h-6" />
                                Graphics Club
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
                                Visualize ideas. Design stunning visuals, UI/UX prototypes, and promotional assets.
                            </p>
                        </motion.div>

                        {/* Club 6: Events */}
                        <motion.div whileHover={{ x: 10 }} className="group cursor-default">
                            <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold tracking-wider mb-3 border border-green-100">
                                OPERATIONS
                            </span>
                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-[#34A853] group-hover:text-black transition-colors">
                                <Ticket className="w-6 h-6" />
                                Events Management
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
                                Orchestrate experiences. Plan and execute successful workshops, hackathons, and meetups.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Departments;
