import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    // Hide navbar on scroll down
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Team', path: '/team' },
        { name: 'Resources', path: '/resources' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-all duration-300`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo Section */}
                <NavLink to="/" className="flex items-center gap-2 group relative z-50">
                    <img
                        src={new URL('../assets/gdg logo/GDGoC CUI Wah text.png', import.meta.url).href}
                        alt="GDGoC CUI Wah"
                        className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">

                    {/* Nav Links */}
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Search Icon */}
                    <button className="text-gray-500 hover:text-black transition-colors" aria-label="Search">
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Join Button */}
                    <a
                        href="https://gdg.community.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded bg-google-blue text-white font-medium text-sm hover:bg-blue-600 transition-colors shadow-sm"
                    >
                        Join Chapter
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-hidden flex flex-col pt-4 px-6 gap-6 shadow-xl"
                    >
                        {/* Mobile Links */}
                        <div className="flex flex-col gap-4 mt-4">
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-xl font-medium py-3 border-b border-gray-100 flex justify-between items-center ${isActive ? 'text-google-blue' : 'text-gray-800'
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    <span className="text-gray-300">→</span>
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <a
                            href="https://gdg.community.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-google-blue text-white px-5 py-4 rounded-xl text-center font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg mt-auto mb-12"
                        >
                            Join Our Community
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
