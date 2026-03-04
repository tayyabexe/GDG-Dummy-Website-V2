import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Code, Server, Database } from 'lucide-react';

import { TeamCard } from '../components/Team';
import kashifPanel from '../assets/panel png/sir kashif cleaned frame.png';
import ubaidPanel from '../assets/panel png/ubaid cleaned frame.png';
import laibaPanel from '../assets/panel png/Laiba cleaned frame.png';
import junaidPanel from '../assets/panel png/Junaid cleaned frame.png';

const Team = () => {
    return (
        <div className="bg-gray-50 min-h-screen relative flex flex-col">
            {/* Dark Hero Section matching Events/Home Page */}
            <section className="relative w-full bg-[#202124] overflow-hidden flex flex-col items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 mb-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#4285F4 2px, transparent 2px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>

                <div className="container mx-auto px-6 relative z-10 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center flex flex-col items-center"
                    >
                        {/* 4 Google Colors Dots */}
                        <div className="flex justify-center items-center gap-2.5 mb-8">
                            <span className="w-3 h-3 rounded-full bg-[#4285F4]"></span>
                            <span className="w-3 h-3 rounded-full border-none bg-[#EA4335]"></span>
                            <span className="w-3 h-3 rounded-full border-none bg-[#FBBC05]"></span>
                            <span className="w-3 h-3 rounded-full border-none bg-[#34A853]"></span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                            Meet the <span className="text-[#4285F4]">Team</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Empowering innovation through collaboration. Our faculty-guided student team is dedicated to learning, building, and driving tech impact at CUI Wah.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-6 pb-24">

                {/* Core Team Section */}
                <div className="flex flex-col items-center justify-center mb-16 relative">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-gray-300"></div>
                        <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Leadership</span>
                        <div className="h-[1px] w-12 bg-gray-300"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0a1128] tracking-tight">Core Team</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl mx-auto px-4 md:px-0 mb-32">
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
                        imageContainerClass="mb-6 lg:mb-10"
                        imageStyle={{ clipPath: 'inset(5% 4% 3% 4%)', transform: 'scale(1.2) translateY(5%)' }}
                    />
                    <TeamCard
                        image={laibaPanel}
                        name="Laiba Faiz"
                        role="Chairperson"
                        delay={0.3}
                        imageContainerClass="mb-6 lg:mb-10"
                        imageStyle={{ clipPath: 'inset(5% 4% 3% 4%)', transform: 'scale(1.2) translateY(5%)' }}
                    />
                    <TeamCard
                        image={junaidPanel}
                        name="Junaid Mehmood"
                        role="General Secretary"
                        delay={0.4}
                        imageContainerClass="mb-6 lg:mb-10"
                        imageStyle={{ clipPath: 'inset(5% 4% 3% 4%)', transform: 'scale(1.2) translateY(5%)' }}
                    />
                </div>

                {/* Domain Leads Section */}
                <div className="flex flex-col items-center justify-center mb-16 relative mt-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0a1128] tracking-tight mb-4">Domain Leads</h2>
                    <p className="text-gray-500 font-medium text-lg text-center max-w-2xl">Specialists leading each technology vertical</p>
                </div>

                <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-32 max-w-6xl mx-auto">
                    {/* Domain Leads Mock Layout matching Image 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] border-4 p-1 overflow-hidden mb-4 border-[#4285F4]">
                            <div className="w-full h-full bg-gray-200 rounded-[1.5rem]"></div>
                        </div>
                        <span className="text-[11px] font-bold text-white px-3 py-1 rounded-full mb-2 bg-[#4285F4]">Web</span>
                        <h3 className="text-lg font-bold text-gray-900">Zara Hussain</h3>
                        <p className="text-sm text-gray-500">Web Dev Lead</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] border-4 p-1 overflow-hidden mb-4 border-[#0F9D58]">
                            <div className="w-full h-full bg-gray-200 rounded-[1.5rem]"></div>
                        </div>
                        <span className="text-[11px] font-bold text-white px-3 py-1 rounded-full mb-2 bg-[#0F9D58]">Android</span>
                        <h3 className="text-lg font-bold text-gray-900">Hassan Kamran</h3>
                        <p className="text-sm text-gray-500">Android Dev Lead</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] border-4 p-1 overflow-hidden mb-4 border-[#DB4437]">
                            <div className="w-full h-full bg-gray-200 rounded-[1.5rem]"></div>
                        </div>
                        <span className="text-[11px] font-bold text-white px-3 py-1 rounded-full mb-2 bg-[#DB4437]">ML/AI</span>
                        <h3 className="text-lg font-bold text-gray-900">Ayesha Malik</h3>
                        <p className="text-sm text-gray-500">ML/AI Lead</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] border-4 p-1 overflow-hidden mb-4 border-[#F4B400]">
                            <div className="w-full h-full bg-gray-200 rounded-[1.5rem]"></div>
                        </div>
                        <span className="text-[11px] font-bold text-white px-3 py-1 rounded-full mb-2 bg-[#F4B400]">Cloud</span>
                        <h3 className="text-lg font-bold text-gray-900">Usman Sheikh</h3>
                        <p className="text-sm text-gray-500">Cloud Lead</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] border-4 p-1 overflow-hidden mb-4 border-[#4285F4]">
                            <div className="w-full h-full bg-gray-200 rounded-[1.5rem]"></div>
                        </div>
                        <span className="text-[11px] font-bold text-white px-3 py-1 rounded-full mb-2 bg-[#4285F4]">Marketing</span>
                        <h3 className="text-lg font-bold text-gray-900">Nadia Farooq</h3>
                        <p className="text-sm text-gray-500">Marketing & Outreach</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] border-4 p-1 overflow-hidden mb-4 border-[#DB4437]">
                            <div className="w-full h-full bg-gray-200 rounded-[1.5rem]"></div>
                        </div>
                        <span className="text-[11px] font-bold text-white px-3 py-1 rounded-full mb-2 bg-[#DB4437]">Design</span>
                        <h3 className="text-lg font-bold text-gray-900">Omar Tariq</h3>
                        <p className="text-sm text-gray-500">Design Lead</p>
                    </div>
                </div>

                {/* Our Tracks Section */}
                <h2 className="text-[1.75rem] md:text-3xl font-bold text-center mb-10 text-[#0a1128]">Our Tracks</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {/* Track 1 */}
                    <div className="bg-[#e8f0fe] border border-[#d2e3fc] rounded-xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
                        <span className="text-[2.5rem] md:text-[3rem] tracking-tighter font-black text-[#1A73E8] mb-1">12</span>
                        <h4 className="text-[#174EA6] font-bold text-base mb-0.5">Web Development</h4>
                        <span className="text-[#1A73E8]/80 text-sm">members</span>
                    </div>

                    {/* Track 2 */}
                    <div className="bg-[#e6f4ea] border border-[#ceead6] rounded-xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
                        <span className="text-[2.5rem] md:text-[3rem] tracking-tighter font-black text-[#1E8E3E] mb-1">10</span>
                        <h4 className="text-[#0D652D] font-bold text-base mb-0.5">Android Dev</h4>
                        <span className="text-[#1E8E3E]/80 text-sm">members</span>
                    </div>

                    {/* Track 3 */}
                    <div className="bg-[#fce8e6] border border-[#fad2cf] rounded-xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
                        <span className="text-[2.5rem] md:text-[3rem] tracking-tighter font-black text-[#D93025] mb-1">9</span>
                        <h4 className="text-[#A50E0E] font-bold text-base mb-0.5">ML / AI</h4>
                        <span className="text-[#D93025]/80 text-sm">members</span>
                    </div>

                    {/* Track 4 */}
                    <div className="bg-[#fef7e0] border border-[#feefc3] rounded-xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
                        <span className="text-[2.5rem] md:text-[3rem] tracking-tighter font-black text-[#F9AB00] mb-1">8</span>
                        <h4 className="text-[#E37400] font-bold text-base mb-0.5">Cloud Computing</h4>
                        <span className="text-[#F9AB00]/80 text-sm">members</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
