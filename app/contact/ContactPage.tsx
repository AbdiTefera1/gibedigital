import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Mail, Phone, MapPin, MessageCircle, Clock, Star, 
  CheckCircle, ArrowRight, Zap, Globe, Heart, Coffee,
  Calendar, Users, Sparkles,
  Rocket
} from 'lucide-react';

interface ContactPageProps {
    setCurrentPage: (page: string) => void;
}

const ContactPage = ({ setCurrentPage }: ContactPageProps) => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', service: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '', service: '' });
        }, 3000);
    };

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Us',
            value: 'gibedigital5@gmail.com',
            description: 'Get a response within 24 hours',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-50 to-cyan-50'
        },
        {
            icon: Phone,
            title: 'Call Us',
            value: '+251-940-050-709',
            description: 'Mon-Fri 9AM-6PM EAT',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'from-green-50 to-emerald-50'
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp',
            value: 'Chat Now',
            description: 'Instant messaging support',
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'from-emerald-50 to-teal-50'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            value: 'Addis Ababa, Ethiopia',
            description: '',
            // description: 'Bole Sub City, Addis Ababa',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'from-purple-50 to-pink-50'
        }
    ];

    const services = [
        'Web Development', 'Social Media Management', 'UI/UX Design', 
        // 'Digital Marketing', 'Branding', 'Video Production', 'Other'
    ];
    // const services = [
    //     'Web Development', 'Mobile App Development', 'UI/UX Design', 
    //     'Digital Marketing', 'Branding', 'Video Production', 'Other'
    // ];

    const stats = [
        { number: "100+", label: "Happy Clients", icon: Users },
        { number: "500+", label: "Projects Completed", icon: Rocket },
        { number: "99%", label: "Client Satisfaction", icon: Star },
        { number: '24/7', label: 'Support', icon: Clock },
    ];

    return (
        <div className="pt-16 min-h-screen">
            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Animated background */}
                <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white/90 mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Heart className="w-5 h-5 text-pink-400" />
                            <span className="font-medium">Let&apos;s Create Something Amazing</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Get In <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Ready to transform your digital presence? We&apos;re here to make your vision a reality.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <stat.icon className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                                    <div className="text-white/70 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Multiple Ways to Reach Us
                        </h2>
                        <p className="text-xl text-gray-600">
                            Choose the method that works best for you
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gradient-to-br ${method.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                                    <method.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                                <p className="font-semibold text-gray-800 mb-1">{method.value}</p>
                                <p className="text-sm text-gray-600">{method.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16" />
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                                            <Send className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
                                            <p className="text-gray-600">We&apos;ll get back to you within 24 hours</p>
                                        </div>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {!isSubmitted ? (
                                            <motion.form
                                                key="form"
                                                onSubmit={handleSubmit}
                                                className="space-y-6"
                                                initial={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/70 backdrop-blur-sm"
                                                            placeholder="Your full name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/70 backdrop-blur-sm"
                                                            placeholder="your@email.com"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Service Interested In
                                                        </label>
                                                        <select
                                                            value={formData.service}
                                                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/70 backdrop-blur-sm"
                                                        >
                                                            <option value="">Select a service</option>
                                                            {services.map((service, index) => (
                                                                <option key={index} value={service}>{service}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Subject *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={formData.subject}
                                                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/70 backdrop-blur-sm"
                                                            placeholder="What's this about?"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Message *
                                                    </label>
                                                    <textarea
                                                        rows={5}
                                                        required
                                                        value={formData.message}
                                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/70 backdrop-blur-sm resize-none"
                                                        placeholder="Tell us about your project..."
                                                    />
                                                </div>

                                                <motion.button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 font-semibold disabled:opacity-50"
                                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <motion.div
                                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                                animate={{ rotate: 360 }}
                                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                            />
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="w-5 h-5" />
                                                            Send Message
                                                            <ArrowRight className="w-5 h-5" />
                                                        </>
                                                    )}
                                                </motion.button>
                                            </motion.form>
                                        ) : (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-12"
                                            >
                                                <motion.div
                                                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.2, type: "spring" }}
                                                >
                                                    <CheckCircle className="w-10 h-10 text-green-600" />
                                                </motion.div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                                                <p className="text-gray-600 mb-6">
                                                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            {/* Quick Actions */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Zap className="w-6 h-6 text-blue-600" />
                                    Quick Actions
                                </h3>
                                <div className="space-y-3">
                                    <motion.button 
                                        onClick={() => setCurrentPage('booking')}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 font-semibold"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book a Service
                                    </motion.button>
                                    <motion.button 
                                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 font-semibold"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Chat
                                    </motion.button>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                    Office Hours
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Monday - Friday</span>
                                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="font-semibold">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="font-semibold">Closed</span>
                                    </div>
                                    <div className="pt-3 border-t border-orange-200">
                                        <div className="flex items-center gap-2 text-green-600">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            <span className="font-semibold">Currently Online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-6 h-6 text-purple-600" />
                                    Our Location
                                </h3>
                                <div className="bg-gradient-to-br from-purple-200 to-pink-200 h-40 rounded-xl flex items-center justify-center mb-4">
                                    <div className="text-center text-purple-800">
                                        <Globe className="w-12 h-12 mx-auto mb-2" />
                                        <p className="font-semibold">Interactive Map</p>
                                        <p className="text-sm">Click to view location</p>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <p className="font-semibold text-gray-900">Gibe Digital Agency</p>
                                    <p>Bole Sub City</p>
                                    <p>Addis Ababa, Ethiopia</p>
                                </div>
                            </div>

                            {/* Fun fact */}
                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Coffee className="w-6 h-6 text-orange-600" />
                                    <h3 className="text-lg font-bold text-gray-900">Fun Fact</h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Our team has consumed over 1,247 cups of coffee while crafting amazing digital experiences! ☕
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Sparkles className="w-8 h-8 text-yellow-400" />
                            <h2 className="text-4xl md:text-5xl font-bold text-white">
                                Let&apos;s Build Something Amazing
                            </h2>
                            <Sparkles className="w-8 h-8 text-yellow-400" />
                        </div>
                        
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Ready to take your business to the next level? We&apos;re excited to hear about your project and help you succeed.
                        </p>
                        
                        <motion.button
                            onClick={() => setCurrentPage('services')}
                            className="bg-white text-purple-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Star className="w-6 h-6" />
                            Explore Our Services
                            <ArrowRight className="w-6 h-6" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage