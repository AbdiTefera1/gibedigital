import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

interface ContactPageProps {
    setCurrentPage: (page: string) => void;
}

const ContactPage = ({ setCurrentPage }: ContactPageProps) => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      };
  
      return (
        <div className="pt-24 pb-16">
          <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
                <p className="text-xl text-gray-600">
                  Ready to start your project? We'd love to hear from you.
                </p>
              </motion.div>
  
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Send Message
                    </button>
                  </form>
                </motion.div>
  
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700">hello@gibedigital.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700">+251-XXX-XXX-XXX</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <MapPin className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700">Addis Ababa, Ethiopia</span>
                      </div>
                    </div>
                  </div>
  
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                    <div className="space-y-4">
                      <button 
                        onClick={() => setCurrentPage('booking')}
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Book a Service
                      </button>
                      <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                        <MessageCircle size={20} />
                        WhatsApp Chat
                      </button>
                    </div>
                  </div>
  
                  {/* Map */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                    <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <MapPin size={48} className="mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">Addis Ababa, Ethiopia</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default ContactPage