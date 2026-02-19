import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Github, ExternalLink, Presentation } from 'lucide-react';
import { resources } from '../data/mockData';

const Resources = () => {
    const categories = ['All', 'Slides', 'GitHub', 'PDFs'];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredResources = selectedCategory === 'All'
        ? resources
        : resources.filter(res => res.type === selectedCategory);

    const getIcon = (type) => {
        switch (type) {
            case 'Slides': return <Presentation className="text-google-yellow" size={24} />;
            case 'GitHub': return <Github className="text-gray-800" size={24} />;
            case 'PDFs': return <FileText className="text-google-red" size={24} />;
            default: return <ExternalLink className="text-google-blue" size={24} />;
        }
    };

    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-google-dark mb-4">Resources Library</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Access slides, code repositories, and study materials from our events.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-google-blue text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredResources.map((resource) => (
                            <motion.div
                                layout
                                key={resource.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                                        {getIcon(resource.type)}
                                    </div>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${resource.type === 'Slides' ? 'bg-yellow-100 text-yellow-800' :
                                            resource.type === 'GitHub' ? 'bg-gray-200 text-gray-800' :
                                                'bg-red-100 text-red-800'
                                        }`}>
                                        {resource.type}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{resource.title}</h3>
                                <p className="text-gray-500 text-sm mb-6">Category: {resource.category}</p>

                                <a
                                    href={resource.link}
                                    className="inline-flex items-center gap-2 text-google-blue font-semibold group-hover:underline"
                                >
                                    <Download size={18} /> Download
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Resources;
