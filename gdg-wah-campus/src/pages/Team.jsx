import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Code, Server, Database } from 'lucide-react';
import { team } from '../data/mockData';

const Team = () => {
    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-google-dark mb-4">Meet the Team</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The passionate individuals behind GDG Wah Campus.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={member.id} className="group h-[320px] perspective-1000">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative w-full h-full text-center transition-transform duration-700 transform-style-3d group-hover:rotate-y-180"
                            >
                                {/* Front Side */}
                                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg border border-gray-100 backface-hidden flex flex-col items-center justify-center p-6">
                                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-50 bg-gray-100">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                    <p className="text-google-blue font-medium">{member.role}</p>
                                    <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${index % 4 === 0 ? 'from-google-blue to-blue-300' :
                                            index % 4 === 1 ? 'from-google-red to-red-300' :
                                                index % 4 === 2 ? 'from-google-yellow to-yellow-300' :
                                                    'from-google-green to-green-300'
                                        }`} />
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 w-full h-full bg-google-dark text-white rounded-2xl shadow-xl backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 border-2 border-google-blue">
                                    <h4 className="text-lg font-bold mb-4 text-google-blue">Tech Stack</h4>
                                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                                        {member.stack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={member.socials.github} className="p-2 bg-white/10 rounded-full hover:bg-google-blue transition-colors">
                                            <Github size={18} />
                                        </a>
                                        <a href={member.socials.twitter} className="p-2 bg-white/10 rounded-full hover:bg-google-blue transition-colors">
                                            <Twitter size={18} />
                                        </a>
                                        <a href={member.socials.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-google-blue transition-colors">
                                            <Linkedin size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
        </div>
    );
};

export default Team;
