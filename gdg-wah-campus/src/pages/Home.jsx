import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, MapPin, Code, Sparkles } from 'lucide-react';
import Partners from '../components/Partners';
import Impact from '../components/Impact';
import Clubs from '../components/Clubs';
import Team from '../components/Team';
import CTA from '../components/CTA';
import EventModal from '../components/EventModal';
import FeaturedEvent from '../components/FeaturedEvent';

const AnimatedHeadline = ({ label, headline, highlights, highlightColor }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "center center"]
    });

    const baseColor = useTransform(scrollYProgress, [0, 1], ["#E5E7EB", "#202124"]);
    const activeColor = useTransform(scrollYProgress, [0, 1], ["#E5E7EB", highlightColor]);
    const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.1]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto relative w-full"
        >
            <motion.div
                className="absolute inset-0 pointer-events-none rounded-full blur-[100px] z-0"
                style={{
                    background: `radial-gradient(circle, ${highlightColor} 0%, transparent 60%)`,
                    opacity: glowOpacity,
                    scale: 1.5,
                    y: "-10%"
                }}
            />
            <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-6 block relative z-10">
                {label}
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight flex flex-wrap justify-center relative z-10">
                {headline.split(' ').map((word, i) => {
                    const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
                    const isHighlight = highlights.includes(cleanWord);
                    return (
                        <motion.span
                            key={i}
                            style={{ color: isHighlight ? activeColor : baseColor }}
                            className="inline-block mx-[0.15em] relative z-10"
                        >
                            {word}
                        </motion.span>
                    );
                })}
            </h2>
        </motion.div>
    );
};

const Home = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <div className="overflow-x-hidden font-sans selection:bg-google-blue selection:text-white">

            {/* B. Hero Section */}
            <section className="relative h-screen min-h-[100vh] w-full bg-[#202124] overflow-hidden flex items-center justify-center pt-[70px]">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#4285F4 2px, transparent 2px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>

                {/* The Central Content Wrapper */}
                <div className="container mx-auto px-4 md:px-12 relative z-10 flex justify-center mt-8 md:mt-0">

                    {/* THIS BOX ANCHORS ALL DOODLES. They will never get lost now. */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative max-w-4xl w-full"
                    >

                        {/* ======================= SATELLITE DOODLES ======================= */}
                        {/* Placed relative to the central box, ensuring they sit strictly on the sides */}

                        {/* 1. Globe (Flanking Left Side) */}
                        <motion.div
                            animate={{ y: [-3, 3, -3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[55%] -translate-y-1/2 -left-[5%] md:-left-[15%] lg:-left-[22%] text-google-blue opacity-50 z-[-1] hidden sm:block"
                        >
                            <Globe strokeWidth={1} className="w-[120px] md:w-[170px] lg:w-[190px] h-auto" />
                        </motion.div>

                        {/* 2. Map Pin (Flanking Right Side) */}
                        <motion.div
                            animate={{ y: [-4, 4, -4] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-[40%] -translate-y-1/2 -right-[5%] md:-right-[12%] lg:-right-[18%] text-google-blue opacity-50 z-[-1] hidden sm:block"
                        >
                            <MapPin strokeWidth={1} className="w-[100px] md:w-[130px] lg:w-[160px] h-auto" />
                        </motion.div>

                        {/* 3. Sparkles (Fixed: Positioned right beside the box on the left) */}
                        <motion.div
                            animate={{ y: [-2, 2, -2] }}
                            transition={{
                                duration: 4, // Slower, professional "breathing" speed
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                            style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
                            className="absolute top-[15%] -left-[8%] lg:-left-[12%] text-google-blue opacity-60 z-[-1]"
                        >
                            <Sparkles strokeWidth={1.5} className="w-[clamp(30px,4vw,50px)] h-auto" />
                        </motion.div>

                        {/* 4. Code Brackets (Side-Right: Positioned beside the box) */}
                        <motion.div
                            animate={{ y: [-2, 2, -2] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                            className="absolute top-[15%] -right-[8%] lg:-right-[12%] text-google-blue opacity-50 z-[-1]"
                        >
                            <Code strokeWidth={1.5} className="w-[50px] md:w-[60px] h-auto" />
                        </motion.div>


                        {/* 5. VERTICAL ZIGZAG (Positioned on the Left margin) */}
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[20%] -left-[18%] lg:-left-[28%] text-google-blue opacity-40 z-[-1] hidden lg:block"
                        >
                            {/* Rotated 90 degrees to be vertical */}
                            <svg viewBox="0 0 300 40" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[200px] h-auto rotate-90">
                                <path d="M0 20 L 20 0 L 40 20 L 60 0 L 80 20 L 100 0 L 120 20 L 140 0 L 160 20 L 180 0 L 200 20 L 220 0 L 240 20 L 260 0 L 280 20 L 300 0" />
                            </svg>
                        </motion.div>

                        {/* 6. SKETCHED HAND-DRAWN ARROW (Fixed: Wobbly Path, Higher Placement to avoid overlap) */}
                        <motion.div
                            animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2.5
                            }}
                            style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
                            // The new location: Higher up, further out to avoid Globe & Button overlap
                            className="absolute top-[35%] -left-[10%] md:-left-[12%] lg:-left-[16%] text-google-blue opacity-70 z-[20] hidden sm:block"
                        >
                            <svg
                                viewBox="0 0 120 120"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3" // Bolder stroke for a more "drawn" feel
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-[clamp(70px,8vw,100px)] h-auto"
                            >
                                {/* The organic, wobbly "ink on paper" path (Multi-Point) */}
                                <path d="M 15 105 C 10 90, 25 70, 50 60 C 80 50, 95 40, 105 20" />

                                {/* The sketched irregular arrow head */}
                                <path d="M 85 25 L 105 20 L 100 45" />

                                {/* Tiny 'starting tick' to make it look non-digital */}
                                <path d="M 10 110 L 18 100" opacity="0.4" />
                            </svg>
                        </motion.div>

                        {/* 7. Enhanced Stairs (Centered & Size Increased) */}
                        <motion.div

                            className="absolute -top-[35px] md:-top-[60px] left-1/2 -translate-x-1/2 text-google-blue opacity-80 z-[20] w-[140px] md:w-[280px] bg-[#202124] px-10"
                        >
                            <svg viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
                                <path d="M100 60 V 40 H 140 V 20 H 180 V 0" />
                                <path d="M100 60 V 40 H 60 V 20 H 20 V 0" />
                                <circle cx="180" cy="0" r="4" fill="currentColor" />
                                <circle cx="20" cy="0" r="4" fill="currentColor" />
                            </svg>
                        </motion.div>


                        {/* ======================= INNER BOX CONTENT ======================= */}

                        {/* The Main Doodle Border */}
                        <div className="absolute inset-0 border-[3px] border-google-blue rounded-[3rem] rounded-tr-none rounded-bl-[4rem] pointer-events-none z-10"></div>

                        {/* Decorative 'Connectors' on the box */}
                        <div className="absolute -top-3 left-16 w-12 h-6 bg-[#202124] border-x-[3px] border-google-blue z-20"></div>
                        <div className="absolute -bottom-3 right-16 w-12 h-6 bg-[#202124] border-x-[3px] border-google-blue z-20"></div>

                        {/* Top-Right Notch */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-[3px] border-r-[3px] border-google-blue rounded-tr-xl opacity-60 z-20"></div>

                        {/* Text Container */}
                        <div className="relative p-8 md:px-16 md:py-16 text-center bg-[#202124] m-[3px] rounded-[2.8rem] rounded-tr-none rounded-bl-[3.8rem] z-[5]">
                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.8,
                                    duration: 1.5, // Increased from default to 1.5s
                                    ease: [0.22, 1, 0.36, 1] // Smooth 'halting' ease
                                }}
                                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                            >
                                Welcome to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-white to-google-blue">
                                    GDGoC CUI Wah
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }} // Added a small y-offset for a smoother reveal
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1,
                                    duration: 1.8, // Slightly longer for the subtext to feel elegant
                                    ease: "easeOut"
                                }}
                                className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light mb-8"
                            >
                                Empowering students to build, innovate, and lead with Google technologies. Join a vibrant community of developers, creators, and problem-solvers shaping the future.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1.2,
                                    duration: 1.2 // Buttons reveal slightly faster to feel responsive
                                }}
                                className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center relative z-30"
                            >
                                <a href="#join" className="px-8 py-3.5 bg-[#4285F4] text-white rounded-md font-medium text-base shadow-sm hover:shadow hover:bg-blue-600 transition-all duration-200">
                                    Become a Member
                                </a>
                                <a href="#events" className="px-6 py-3.5 text-[#4285F4] font-medium text-base hover:text-blue-400 transition-colors duration-200 flex items-center">
                                    View Events <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* C. Mission & Vision Section */}
            <section className="pt-16 pb-32 md:pt-24 md:pb-48 bg-[#FAFAFA] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                    <div className="flex flex-col gap-[20vh]">
                        <AnimatedHeadline
                            label="Our Mission"
                            headline="Empowering students to build solutions for the community."
                            highlights={['build', 'solutions']}
                            highlightColor="#4285F4"
                        />
                        <AnimatedHeadline
                            label="Our Vision"
                            headline="Bridging the gap between theory and practice."
                            highlights={['theory', 'and', 'practice']}
                            highlightColor="#0F9D58"
                        />
                    </div>
                </div>
            </section>

            <Impact />
            <FeaturedEvent />
            <Clubs />
            <div className="bg-google-light-grey">
                <Partners />
            </div>
            <Team />
            <CTA />

            <EventModal
                event={selectedEvent}
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </div>
    );
};

export default Home;