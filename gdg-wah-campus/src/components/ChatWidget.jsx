import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm the GDG AI Assistant. Ask me about our next event!", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');

        // Mock response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "That's a great question! Our team is currently working on the answer. Stay tuned for updates!",
                sender: 'bot'
            }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 bg-white rounded-2xl shadow-xl w-80 sm:w-96 overflow-hidden border border-gray-100 flex flex-col"
                        style={{ height: '450px' }}
                    >
                        {/* Header */}
                        <div className="bg-google-blue p-4 text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Sparkles size={18} />
                                <h3 className="font-bold">GDG Assistant</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-1 rounded-full transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-google-blue text-white self-end rounded-br-none'
                                            : 'bg-white border border-gray-200 text-gray-800 self-start rounded-bl-none shadow-sm'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 border-t border-gray-100 bg-white flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-google-blue/50"
                            />
                            <button
                                type="submit"
                                className="bg-google-blue text-white p-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50"
                                disabled={!input.trim()}
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white text-google-blue p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-100 group"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:animate-bounce" />}
            </button>
        </div>
    );
};

export default ChatWidget;
