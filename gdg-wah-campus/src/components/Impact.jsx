import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, PenTool, Lightbulb, Users, Handshake } from 'lucide-react';

const stats = [
    {
        eyebrow: "MILESTONES",
        label: "Events Conducted",
        value: 15,
        suffix: "+",
        icon: Calendar,
        bg: "bg-blue-50",
        text: "text-blue-600"
    },
    {
        eyebrow: "SKILL BUILDING",
        label: "Workshops Organized",
        value: 10,
        suffix: "+",
        icon: PenTool,
        bg: "bg-green-50",
        text: "text-green-600"
    },
    {
        eyebrow: "INNOVATION",
        label: "Hackathons Hosted",
        value: 5,
        suffix: "+",
        icon: Lightbulb,
        bg: "bg-yellow-50",
        text: "text-yellow-600"
    },
    {
        eyebrow: "COMMUNITY",
        label: "Students Engaged",
        value: 200,
        suffix: "+",
        icon: Users,
        bg: "bg-red-50",
        text: "text-red-600"
    },
    {
        eyebrow: "COLLABORATION",
        label: "Outreach Partners",
        value: 4,
        suffix: "",
        icon: Handshake,
        bg: "bg-gray-100",
        text: "text-gray-800"
    },
];

const Counter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = value;
        const totalDuration = duration * 1000;
        // Calculate increment time to ensure the counter reaches the end value
        // Avoid division by zero if end is 0, though typically stats values are positive.
        const incrementTime = end > 0 ? totalDuration / end : totalDuration;

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value, duration, isInView]);

    return <span ref={nodeRef}>{count}</span>;
};

const Impact = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Impact So Far</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        We've been working with students since 2024 to track our community's growth. We're proud of our impact across key focus areas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className={`relative overflow-hidden rounded-3xl p-8 aspect-[4/5] md:aspect-square flex flex-col justify-between ${stat.bg} group cursor-default`}
                        >
                            {/* Watermark Icon */}
                            <stat.icon
                                className={`absolute -bottom-6 -right-6 w-32 h-32 opacity-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 ${stat.text}`}
                                strokeWidth={1.5}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <h4 className={`text-xs font-bold tracking-widest uppercase mb-4 opacity-70 ${stat.text}`}>
                                    {stat.eyebrow}
                                </h4>
                                <div className={`text-6xl lg:text-7xl font-extrabold mb-4 tracking-tighter ${stat.text}`}>
                                    <Counter value={stat.value} />{stat.suffix}
                                </div>
                                <p className="text-gray-700 font-medium leading-tight text-lg">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Impact;
