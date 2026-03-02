import React, { useRef } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import CountUp from 'react-countup';

import imgFrontend from '../assets/impacts/frontendbootcamp.webp';
import imgAi from '../assets/impacts/aiintro.webp';
import imgHack from '../assets/impacts/hackthevibe.webp';

const stats = [
    {
        eyebrow: "MILESTONES",
        label: "Events Conducted",
        subtext: "Bridging the gap between theory and industry.",
        value: 10,
        suffix: "+",
        color: "#4285F4", // Google Blue
        companionType: 'polaroids'
    },
    {
        eyebrow: "SKILL BUILDING",
        label: "Workshops Organized",
        subtext: "Hands-on sessions where code meets creativity.",
        value: 10,
        suffix: "+",
        color: "#0F9D58", // Google Green
        companionType: 'code'
    },
    {
        eyebrow: "INNOVATION",
        label: "Hackathons Hosted",
        subtext: "Intensive 8-hour sprints to build local solutions.",
        value: 5,
        suffix: "+",
        color: "#F4B400", // Google Yellow
        companionType: 'trophy'
    },
    {
        eyebrow: "COMMUNITY",
        label: "Students Engaged",
        subtext: "A growing network of passionate tech enthusiasts.",
        value: 200,
        suffix: "+",
        color: "#DB4437", // Google Red
        companionType: 'avatars'
    }
];

const Counter = ({ value, duration = 2.5 }) => {
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    return (
        <span ref={nodeRef}>
            {isInView ? <CountUp end={value} duration={duration} separator="," /> : "0"}
        </span>
    );
};

const CompanionCard = ({ type, color, index }) => {
    const rotation = index % 2 === 0 ? 'rotate-2' : '-rotate-2';

    if (type === 'polaroids') {
        return (
            <div className={`relative w-full h-64 md:h-80 flex items-center justify-center ${rotation} hover:rotate-0 transition-transform duration-500 will-change-transform`}>
                <div className="absolute w-36 md:w-48 h-56 md:h-72 bg-white p-2 pb-8 md:p-3 md:pb-12 shadow-xl -rotate-[12deg] border border-gray-100 z-10 -ml-16 mt-8">
                    <img loading="lazy" src={imgFrontend} className="w-full h-full object-cover bg-gray-200" alt="Frontend Bootcamp" />
                </div>
                <div className="absolute w-48 md:w-80 h-44 md:h-56 bg-white p-2 pb-8 md:p-3 md:pb-12 shadow-2xl scale-105 border border-gray-100 z-30 transform-gpu">
                    <img loading="lazy" src={imgHack} className="w-full h-full object-cover bg-gray-200" alt="Hack the Vibe" />
                </div>
                <div className="absolute w-36 md:w-48 h-56 md:h-72 bg-white p-2 pb-8 md:p-3 md:pb-12 shadow-xl rotate-[12deg] border border-gray-100 z-20 ml-16 -mt-8">
                    <img loading="lazy" src={imgAi} className="w-full h-full object-cover bg-gray-200" alt="AI Intro" />
                </div>
            </div>
        );
    }

    if (type === 'code') {
        return (
            <div className={`relative w-full max-w-md mx-auto shadow-2xl rounded-xl overflow-hidden border border-white/40 bg-white/20 backdrop-blur-xl ${rotation} hover:rotate-0 transition-transform duration-500 will-change-transform`}>
                <div className="bg-gray-800/95 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-[#DB4437]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F4B400]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#0F9D58]"></div>
                    <span className="ml-4 text-xs text-gray-400 font-mono tracking-wider">main.py</span>
                </div>
                <div className="p-6 md:p-8 bg-gray-900/95 text-sm md:text-base font-mono leading-relaxed text-gray-300">
                    <p><span className="text-pink-400">def</span> <span className="text-blue-400">welcome_to_gdg</span>():</p>
                    <p className="ml-6 py-1">community = <span className="text-[#0F9D58]">"Awesome"</span></p>
                    <p className="ml-6 py-1"><span className="text-pink-400">while</span> <span className="text-[#F4B400]">True</span>:</p>
                    <p className="ml-12 py-1 flex items-center gap-2">
                        <span className="text-yellow-200">learn_and_build</span>()
                        <span className="animate-pulse w-2 h-4 bg-white/50 inline-block"></span>
                    </p>
                    <p className="ml-12 py-1"><span className="text-pink-400">return</span> <span className="text-[#0F9D58]">"Impact Created!"</span></p>
                </div>
            </div>
        );
    }

    if (type === 'trophy') {
        return (
            <div className={`flex justify-center items-center h-64 md:h-80 ${rotation} hover:rotate-0 transition-transform duration-500 will-change-transform`}>
                <div className="relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#F4B400] to-yellow-600 rounded-3xl shadow-[0_20px_50px_-12px_rgba(244,180,0,0.6)] flex items-center justify-center transform hover:scale-105 transition-all duration-300 will-change-transform">
                    <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/30"></div>
                    <svg className="w-24 h-24 md:w-28 md:h-28 text-white relative z-10 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99-2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                </div>
            </div>
        );
    }

    if (type === 'avatars') {
        const avatars = [
            "https://i.pravatar.cc/150?img=11",
            "https://i.pravatar.cc/150?img=32",
            "https://i.pravatar.cc/150?img=12",
            "https://i.pravatar.cc/150?img=43",
            "https://i.pravatar.cc/150?img=54",
            "https://i.pravatar.cc/150?img=65",
            "https://i.pravatar.cc/150?img=76",
        ];
        return (
            <div className={`flex justify-center items-center h-64 md:h-80 ${rotation} hover:rotate-0 transition-transform duration-500 will-change-transform`}>
                <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                    {avatars.map((src, i) => {
                        const angle = (i / avatars.length) * Math.PI * 2;
                        const radius = 90;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        return (
                            <img
                                key={i}
                                loading="lazy"
                                src={src}
                                className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-110 transition-transform duration-300 z-10 bg-gray-100 will-change-transform"
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                                alt="Student Member"
                            />
                        )
                    })}
                    <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#DB4437] text-white flex items-center justify-center font-black text-2xl md:text-3xl shadow-2xl border-[6px] border-white z-20">
                        200+
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'logos') {
        const partners = ["AWS", "GitHub", "MLH", "Figma"];
        return (
            <div className={`flex gap-6 justify-center items-center flex-wrap h-64 md:h-80 ${rotation} hover:rotate-0 transition-transform duration-500 will-change-transform`}>
                {partners.map((partner, i) => (
                    <div key={i} className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white shadow-xl border border-gray-100 flex flex-col items-center justify-center gap-2 hover:-translate-y-2 transition-transform duration-300 will-change-transform transform-gpu">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#4285F4]/10 flex items-center justify-center">
                            <span className="text-[#4285F4] font-black text-xl md:text-2xl">{partner[0]}</span>
                        </div>
                        <span className="text-xs font-bold text-gray-400 tracking-wider">PARTNER</span>
                    </div>
                ))}
            </div>
        )
    }

    return null;
}

const TimelineItem = ({ stat, index, isLast }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`relative flex flex-col md:flex-row items-center justify-between ${!isLast ? 'mb-28 md:mb-40' : ''} w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }} // Adjusted margin to be percentage based for better responsiveness
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } } // slightly faster stagger
            }}
        >
            {/* Center Node (Spine Dots) */}
            <div className="absolute left-[8%] md:left-1/2 -translate-x-1/2 flex items-center justify-center top-12 md:top-1/2 md:-translate-y-1/2 z-20">
                <motion.div
                    variants={{
                        hidden: { scale: 0 },
                        visible: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } } // smoother spring
                    }}
                    className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md z-10 will-change-transform transform-gpu"
                    style={{ border: `4px solid ${stat.color}` }}
                >
                    <motion.div
                        variants={{
                            hidden: { scale: 1, opacity: 0.6 },
                            visible: { scale: 2.5, opacity: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.2 } }
                        }}
                        className="absolute w-full h-full rounded-full will-change-transform transform-gpu"
                        style={{ backgroundColor: stat.color }}
                    />
                </motion.div>
            </div>

            {/* Content Area - Number Card */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", bounce: 0.2 } }
                }}
                className={`w-[82%] ml-auto md:mx-0 md:w-[45%] relative z-10 transition-transform duration-500 group-hover:-translate-y-1 will-change-transform ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
            >
                {/* Secondary Accent Glassmorphism Glow */}
                <div
                    className="absolute inset-0 scale-[1.15] rounded-full blur-[60px] opacity-[0.12] pointer-events-none transform-gpu"
                    style={{ backgroundColor: stat.color }}
                ></div>

                <div className="bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/80 relative overflow-hidden transform-gpu">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">
                            {stat.eyebrow}
                        </span>
                    </div>

                    {/* Animated Number */}
                    <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2 md:mb-3 tracking-tighter relative z-10">
                        <Counter value={stat.value} />
                        <span style={{ color: stat.color }}>{stat.suffix}</span>
                    </div>

                    {/* Label & Subtext */}
                    <div className="relative z-10">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1.5">{stat.label}</h3>
                        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-sm">{stat.subtext}</p>
                    </div>
                </div>
            </motion.div>

            {/* Content Area - Companion Card */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 30 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.3 } }
                }}
                className={`w-[82%] ml-auto md:mx-0 md:w-[45%] mt-12 md:mt-0 will-change-transform transform-gpu ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
            >
                <CompanionCard type={stat.companionType} color={stat.color} index={index} />
            </motion.div>

        </motion.div>
    );
};

const Impact = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Adjusted for a high-velocity scroll offset
        offset: ["start 0%", "end 70%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 300, // Increased for more speed
        damping: 40,    // Lowered for a snappier halt
        restDelta: 0.001
    });

    return (
        <section className="pt-12 pb-24 md:pt-20 md:pb-40 bg-[#F8F9FA] relative overflow-hidden" ref={containerRef}>
            {/* The Blueprint Overlay - Engineering lab aesthetic */}
            <div
                className="absolute inset-0 opacity-[0.25] pointer-events-none transform-gpu"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, #9ca3af 2px, transparent 2px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-24 md:mb-40 will-change-transform transform-gpu"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">Our Impact So Far</h2>
                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        We're not just about numbers; we're about the stories behind them. Here is a look at what we've built together since 2025.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* The Power Cable Spine Track */}
                    <div className="absolute left-[8%] md:left-1/2 top-4 bottom-4 w-1.5 bg-gray-200 -translate-x-1/2 rounded-full overflow-hidden z-0">
                        {/* The Active Fill */}
                        <motion.div
                            className="absolute top-0 left-0 w-full origin-top will-change-transform transform-gpu"
                            style={{
                                scaleY,
                                height: '100%',
                                backgroundImage: `linear-gradient(to bottom, ${stats[0].color} 0%, ${stats[0].color} 12%, ${stats[1].color} 38%, ${stats[2].color} 64%, ${stats[3].color} 90%, ${stats[3].color} 100%)`
                            }}
                        />
                    </div>

                    {stats.map((stat, index) => (
                        <TimelineItem key={index} stat={stat} index={index} isLast={index === stats.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
