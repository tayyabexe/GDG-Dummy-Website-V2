import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Twitter, Plus, Minus } from 'lucide-react';
import contactUsIllustration from '../assets/illustrations/contact_us.png';

const faqs = [
    {
        question: "How do I join GDGoC CUI Wah?",
        answer: "Click the 'Join Chapter' button in the navbar or on the Join page. Fill out the registration form and you'll receive a confirmation email."
    },
    {
        question: "Is membership free?",
        answer: "Yes, membership is completely free and open to all students passionate about technology."
    },
    {
        question: "Can students from other universities join?",
        answer: "Yes, our events and workshops are open to anyone who is eager to learn, regardless of their university."
    },
    {
        question: "How can I propose a workshop or collaboration?",
        answer: "You can reach out to us right here on the Contact page, or email us directly at our partnership channel!"
    }
];

const Contact = () => {
    // states for form
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: 'Event Inquiry', message: '' });
    const [status, setStatus] = useState('');
    const [openFaq, setOpenFaq] = useState(0); // first faq open by default

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', subject: 'Event Inquiry', message: '' });
        }, 1500);
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen relative flex flex-col">
            {/* Dark Hero Section */}
            <section className="relative w-full bg-[#202124] overflow-hidden flex flex-col items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#4285F4 2px, transparent 2px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>
                <div className="container mx-auto px-6 relative z-10 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-center flex flex-col items-center"
                    >
                        <div className="flex justify-center items-center gap-2.5 mb-8">
                            <span className="w-3 h-3 rounded-full bg-[#4285F4]"></span>
                            <span className="w-3 h-3 rounded-full border-none bg-[#EA4335]"></span>
                            <span className="w-3 h-3 rounded-full border-none bg-[#FBBC05]"></span>
                            <span className="w-3 h-3 rounded-full border-none bg-[#34A853]"></span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-8 tracking-tight">
                            Get in <span className="text-[#4285F4]">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Have a question, proposal, or just want to say hi? We'd love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                    {/* LEFT COLUMN: THE FORM */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
                        <h2 className="text-2xl font-extrabold text-[#1e293b] mb-8 flex items-center gap-3">
                            <Mail className="text-[#4285F4]" size={28} /> Send a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">First Name</label>
                                    <input
                                        type="text" required
                                        value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">Last Name</label>
                                    <input
                                        type="text" required
                                        value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700">Email Address</label>
                                <input
                                    type="email" required
                                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                                    placeholder="john.doe@example.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700">Subject</label>
                                <select
                                    value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all appearance-none"
                                >
                                    <option>Event Inquiry</option>
                                    <option>General Support</option>
                                    <option>Partnership</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2 flex-grow">
                                <label className="text-sm font-bold text-gray-700">Message</label>
                                <textarea
                                    required rows="5"
                                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all resize-none flex-grow"
                                    placeholder="Tell us how we can help..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full mt-auto py-3.5 bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-50"
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : <>Send Message <Send size={18} /></>}
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* 1. Illustration Box */}
                        <div className="flex items-center justify-center min-h-[220px]">
                            <img
                                src={contactUsIllustration}
                                alt="Contact Illustration"
                                className="w-full max-w-[320px] object-contain"
                            />
                        </div>

                        {/* 2. Follow Us Block */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-extrabold text-[#1e293b] mb-6 uppercase tracking-wider">Follow Us</h3>
                            <div className="flex flex-wrap items-center gap-5">
                                {/* GitHub */}
                                <div className="group w-14 h-14 rounded-full border-2 border-[#4285F4] text-[#4285F4] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#4285F4]">
                                    <Github size={24} className="group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/company/gdg-cuiwah/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 rounded-full border-2 border-[#34A853] text-[#34A853] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#34A853]">
                                    <Linkedin size={24} className="group-hover:text-white transition-colors duration-300" />
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/gdgoccuiwah/" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 rounded-full border-2 border-[#EA4335] text-[#EA4335] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#EA4335]">
                                    <Instagram size={24} className="group-hover:text-white transition-colors duration-300" />
                                </a>

                                {/* X (formerly Twitter) */}
                                <div className="group w-14 h-14 rounded-full border-2 border-black text-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black">
                                    <span className="font-black text-2xl group-hover:text-white transition-colors duration-300 leading-none">X</span>
                                </div>
                            </div>
                        </div>

                        {/* 3. Embedded Google Map */}
                        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm min-h-[220px] flex-grow relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659.8058763531063!2d72.785893!3d33.7445424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa6bc26bfa2db%3A0x2344c019578abeac!2sCOMSATS%20University%20Islamabad%2C%20Wah%20Campus!5e0!3m2!1sen!2sus!4v1709503460459!5m2!1sen!2sus"
                                width="100%" height="100%"
                                style={{ border: 0, position: 'absolute', inset: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </div>

                {/* FAQ SECTION */}
                <div className="max-w-4xl mx-auto mt-20 mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1e293b] mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                            >
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                >
                                    <span className="font-extrabold text-gray-900 text-[16px]">{faq.question}</span>
                                    {openFaq === idx ? (
                                        <Minus size={20} strokeWidth={3} className="text-[#4285F4] flex-shrink-0" />
                                    ) : (
                                        <Plus size={20} strokeWidth={3} className="text-[#4285F4] flex-shrink-0" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-500 text-[15px] leading-relaxed border-t border-gray-100 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
