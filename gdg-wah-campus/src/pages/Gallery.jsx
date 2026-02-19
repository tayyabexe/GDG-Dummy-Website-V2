import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/mockData';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-google-dark mb-4">Event Gallery</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Highlights from our past workshops, hackathons, and community gatherings.
                    </p>
                </motion.div>

                {/* Masonry Grid (Simulated with columns for simplicity in Tailwind) */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ delay: index * 0.1 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <img src={image.src} alt={image.description} className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105" />

                            {/* Hover Overlay with Description */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <ZoomIn className="text-google-blue w-8 h-8 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                                <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {image.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 text-white p-2 hover:bg-white/20 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={32} />
                            </button>
                            <motion.img
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                src={selectedImage}
                                alt="Full Screen"
                                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Gallery;
