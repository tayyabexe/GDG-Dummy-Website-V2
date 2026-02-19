import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        setTimeout(() => {
            console.log("Message Sent:", formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <div className="py-24 bg-[#0a0a0a] min-h-screen relative overflow-hidden">
            {/* Background Flair */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-google-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-google-blue font-mono tracking-widest uppercase text-sm mb-2 block">CONTACT US</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue to-google-green">Build</span> Together
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a question about an event? Want to partner with us? Or just want to say hi? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2 bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow"></div>
                        <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                            <Send className="text-google-blue" size={24} /> Send a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-google-blue transition-colors">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-google-blue focus:ring-1 focus:ring-google-blue transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-google-blue transition-colors">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-google-blue focus:ring-1 focus:ring-google-blue transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-google-blue transition-colors">Subject</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-google-blue focus:ring-1 focus:ring-google-blue transition-all">
                                    <option>General Inquiry</option>
                                    <option>Event Participation</option>
                                    <option>Sponsorship</option>
                                    <option>Tech Feedback</option>
                                </select>
                            </div>
                            <div className="group">
                                <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-google-blue transition-colors">Message</label>
                                <textarea
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-google-blue focus:ring-1 focus:ring-google-blue transition-all resize-none"
                                    placeholder="Tell us what's on your mind..."
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="px-8 py-3 bg-gradient-to-r from-google-blue to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-google-blue/30 transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {status === 'sending' ? 'Transmitting...' : status === 'success' ? 'Sent Successfully' : <>Transmit Message <Send size={18} /></>}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Details Section */}
                    <div className="space-y-8">
                        {/* Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-[#111] border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-google-red border border-white/5">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">HQ Location</h4>
                                        <p className="text-gray-400 text-sm">COMSATS University Islamabad,<br />Wah Campus, GT Road</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-google-yellow border border-white/5">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Email Channel</h4>
                                        <p className="text-gray-400 text-sm">contact@gdgwah.com</p>
                                        <p className="text-gray-400 text-sm">partnerships@gdgwah.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-google-green border border-white/5">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Emergency</h4>
                                        <p className="text-gray-400 text-sm">+92 300 1234567</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map Mock */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-800 h-64 rounded-3xl overflow-hidden relative group cursor-pointer"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                                alt="Map Location"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-500 scale-100 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <MapPin className="text-google-red w-10 h-10 mb-2 animate-bounce" />
                                <span className="inline-block bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-xl">
                                    Open in Maps
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
