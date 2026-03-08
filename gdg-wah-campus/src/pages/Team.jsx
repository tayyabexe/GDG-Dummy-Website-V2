import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Code, Server, Database, Smartphone, Brain, LineChart, CalendarDays, Megaphone, ArrowRight } from 'lucide-react';

import { TeamCard } from '../components/Team';
import kashifPanel from '../assets/panel png/sir kashif cleaned frame.png';
import ubaidPanel from '../assets/panel png/ubaid cleaned frame.png';
import laibaPanel from '../assets/panel png/Laiba cleaned frame.png';
import junaidPanel from '../assets/panel png/Junaid cleaned frame.png';
import tashfeenPanel from '../assets/panel png/tashfeen cleaned frame.png';
import alishaPanel from '../assets/panel png/alisha fatima cleaned frame.png';
import saadPanel from '../assets/panel png/Saad Ali Cleaned frame.png';
import adeelPanel from '../assets/panel png/adeel cleaned frame.png';

import manahilMirza from '../assets/team_members/manahil_mirza ds lead.png';
import maleehaZulfiqar from '../assets/team_members/maleeha_zulfiqr genai lead.png';
import ayeshaAkhtar from '../assets/team_members/ayesha_akhtar event lead.png';
import mYousaf from '../assets/team_members/m_yousasf graphics lead.png';
import fatimaQureshi from '../assets/team_members/fatima_qureshi social lead.png';

const domainLeadsData = [
    {
        name: 'Muhammad Ismail',
        role: 'Web & App Dev Lead',
        tag: 'Web & App',
        color: '#4285F4',
        image: null,
    },
    {
        name: 'Manahil Mirza',
        role: 'Data Science Lead',
        tag: 'Data Science',
        color: '#0F9D58',
        image: manahilMirza,
    },
    {
        name: 'Maleeha Zulfiqar',
        role: 'Gen AI Lead',
        tag: 'Gen AI',
        color: '#DB4437',
        image: maleehaZulfiqar,
    },
    {
        name: 'Ayesha Akhtar',
        role: 'Event Management Lead',
        tag: 'Event Management',
        color: '#F4B400',
        image: ayeshaAkhtar,
    },
    {
        name: 'Muhammad Yousaf',
        role: 'Graphics Lead',
        tag: 'Graphics',
        color: '#0F9D58',
        image: mYousaf,
    },
    {
        name: 'Fatima Qureshi',
        role: 'Social Media Lead',
        tag: 'Social Media Management',
        color: '#4285F4',
        image: fatimaQureshi,
    }
];

const LeadershipCard = ({ image, name, role, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0, }}
            className="flex flex-col items-center h-full group bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-5 rounded-[2rem] hover:shadow-2xl hover:border-blue-500/20 transition-all duration-300 w-full max-w-[300px] mx-auto md:w-[calc(100%+10px)]"
        >
            {/* Image Container - scale dynamically increasing width/height bounding box seamlessly */}
            <div className="relative w-full transition-transform duration-300 flex-grow-0 mb-2">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-auto object-contain drop-shadow-sm rounded-[8px] transform scale-[1.08] translate-y-[5px] origin-bottom"
                />
            </div>
            {/* Explicit Text rendering below the panel image with reduced top spacing/height block */}
            <div className="text-center mt-auto bg-white relative z-10 w-full pt-1 pb-1">
                <h3 className="text-[1.15rem] md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">{name}</h3>
                <p className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1.5">{role}</p>
            </div>
        </motion.div>
    );
};

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

            <section className="bg-[#E8F0FE] w-full pb-20 -mt-20">
                {/* Core Team Section Header */}
                <div className="w-full bg-[#d1d8e5] py-12 mb-16">
                    <div className="flex flex-col items-center justify-center relative">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-12 bg-gray-400"></div>
                            <span className="text-gray-600 font-bold uppercase tracking-widest text-sm">Leadership</span>
                            <div className="h-[1px] w-12 bg-gray-400"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a1128] tracking-tight">Core Team</h2>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-16 max-w-[85rem] mx-auto px-4 md:px-0">
                        <LeadershipCard
                            image={kashifPanel}
                            name="Dr. Kashif Ayyub"
                            role="Faculty Advisor"
                            delay={0.1}
                        />
                        <LeadershipCard
                            image={ubaidPanel}
                            name="Ubaid Ghazi"
                            role="Campus Lead"
                            delay={0.2}
                        />
                        <LeadershipCard
                            image={laibaPanel}
                            name="Laiba Faiz"
                            role="Chairperson"
                            delay={0.3}
                        />
                        <LeadershipCard
                            image={junaidPanel}
                            name="Junaid Mehmood"
                            role="General Secretary"
                            delay={0.4}
                        />
                        <LeadershipCard
                            image={tashfeenPanel}
                            name="M. Tashfeen"
                            role="Operation Manager"
                            delay={0.5}
                        />
                        <LeadershipCard
                            image={alishaPanel}
                            name="Alisha Fatima"
                            role="Women in Tech Lead"
                            delay={0.6}
                        />
                        <LeadershipCard
                            image={saadPanel}
                            name="Saad Ali"
                            role="Community Manager"
                            delay={0.7}
                        />
                        <LeadershipCard
                            image={adeelPanel}
                            name="Adeel"
                            role="Tech Lead"
                            delay={0.8}
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#E7F2F4] w-full pb-20">
                {/* Domain Leads Section Header */}
                <div className="w-full bg-[#DDE4E1] py-12 mb-16">
                    <div className="flex flex-col items-center justify-center relative">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a1128] tracking-tight">Domain Leads</h2>
                        <p className="text-gray-600 font-medium text-lg text-center mt-3 max-w-2xl">Specialists leading each technology vertical</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-[90rem] mx-auto w-full px-4 justify-items-center">
                    {domainLeadsData.map((lead, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer hover:-translate-y-2 transition-all duration-300">
                            <div
                                className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-[2rem] border-4 p-1 overflow-hidden mb-4 bg-white group-hover:shadow-xl transition-all duration-300"
                                style={{ borderColor: lead.color }}
                            >
                                <div className="w-full h-full bg-gray-100 rounded-[1.5rem] overflow-hidden flex items-center justify-center relative">
                                    {lead.image ? (
                                        <img
                                            src={lead.image}
                                            alt={lead.name}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    ) : (
                                        <span className="text-gray-400 font-medium text-xs">No Image</span>
                                    )}
                                </div>
                            </div>
                            <span
                                className="text-[10px] md:text-[11px] font-bold text-white px-3 py-1 rounded-full mb-2"
                                style={{ backgroundColor: lead.color }}
                            >
                                {lead.tag}
                            </span>
                            <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">{lead.name}</h3>
                            <p className="text-[11px] md:text-xs lg:text-sm text-gray-500 mt-1">{lead.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team CTA Section - Styled to sit flush on bottom like Events page CTA */}
            <section className="bg-gray-50 pt-16 md:pt-24 pb-0 relative overflow-hidden mt-auto">
                <div className="container mx-auto px-6 flex justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-6xl bg-gradient-to-r from-[#318BC5] to-[#259781] rounded-t-[2.5rem] lg:rounded-t-[3rem] rounded-b-none px-8 py-16 md:py-24 text-center text-white relative overflow-hidden shadow-2xl border-2 border-b-0 border-white/10"
                    >
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-6 tracking-tight">Want to Join Our Team?</h2>
                            <p className="mb-10 text-white text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                                We're always looking for passionate students to join as organizers, tech leads, or volunteers. Be a part of something amazing.
                            </p>

                            <button className="px-10 py-4 bg-white text-[#318BC5] font-bold text-lg rounded-[2rem] hover:bg-gray-50 active:scale-95 transition-all shadow-lg whitespace-nowrap">
                                Apply Now
                            </button>
                        </div>

                        {/* Background decorations matching the style */}
                        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Team;
