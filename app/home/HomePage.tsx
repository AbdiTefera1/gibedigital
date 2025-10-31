import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Share2, Calendar, ArrowRight, Users, Target, Lightbulb, Award, Zap, Star, Rocket, Sparkles, Quote } from 'lucide-react'

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage = ({ setCurrentPage }: HomePageProps) => {
    const services = [
        // { icon: Palette, title: 'Graphics & Branding', desc: 'Creative visual identity and brand design solutions', color: 'text-purple-600' },
        // { icon: Video, title: 'Video Editing', desc: 'Professional video production and post-production', color: 'text-red-600' },
        { icon: Globe, title: 'Website Development', desc: 'Modern, responsive websites and web applications', color: 'text-blue-600' },
        { icon: Smartphone, title: 'UI/UX Design', desc: 'User-centered design for digital experiences', color: 'text-green-600' },
        { icon: Share2, title: 'Social Media Management', desc: 'Strategic social media presence and content', color: 'text-pink-600' },
        // { icon: BarChart3, title: 'Digital Marketing', desc: 'Data-driven marketing campaigns and analytics', color: 'text-indigo-600' },
        // { icon: Printer, title: 'Printing Solutions', desc: 'High-quality print design and production', color: 'text-teal-600' }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart Solutions",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            content: "Gibe Digital completely transformed our brand identity. Their creative vision and attention to detail exceeded our expectations. Our website traffic increased by 300% after the rebrand!",
            rating: 5,
            company: "TechStart Solutions"
        },
        {
            name: "Michael Chen",
            role: "Marketing Director, GrowthCorp",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            content: "Working with Gibe Digital was a game-changer for our digital marketing strategy. Their data-driven approach and creative campaigns delivered outstanding results. Highly recommended!",
            rating: 5,
            company: "GrowthCorp"
        },
        {
            name: "Emily Rodriguez",
            role: "Founder, Creative Spaces",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            content: "The team's expertise in UI/UX design is unmatched. They created an intuitive and beautiful app interface that our users absolutely love. Our user engagement has skyrocketed!",
            rating: 5,
            company: "Creative Spaces"
        },
        {
            name: "David Thompson",
            role: "Business Owner, Local Eats",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
            content: "From social media management to website development, Gibe Digital handled everything perfectly. They understood our vision and brought it to life better than we imagined.",
            rating: 5,
            company: "Local Eats"
        },
        {
            name: "Lisa Park",
            role: "Operations Manager, InnovateNow",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
            content: "Their video editing and production services are top-notch. The promotional videos they created for us have been incredibly effective in showcasing our products.",
            rating: 5,
            company: "InnovateNow"
        },
        {
            name: "James Wilson",
            role: "Startup Founder, NextGen Apps",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            content: "Gibe Digital's comprehensive approach to digital solutions saved us time and money. Their team is professional, creative, and delivers on every promise. Five stars!",
            rating: 5,
            company: "NextGen Apps"
        }
    ];

    // Duplicate testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    const floatingElements = [
        { icon: Star, color: 'text-yellow-400', size: 'w-6 h-6', position: 'top-20 left-10' },
        { icon: Sparkles, color: 'text-purple-400', size: 'w-8 h-8', position: 'top-32 right-20' },
        { icon: Zap, color: 'text-blue-400', size: 'w-5 h-5', position: 'top-48 left-1/4' },
        { icon: Rocket, color: 'text-pink-400', size: 'w-7 h-7', position: 'top-64 right-1/3' }
    ];
    
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position}`}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
          >
            <element.icon className={`${element.size} ${element.color} opacity-20`} />
          </motion.div>
        ))}
      </div>

      {/* Animated Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-purple-100">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Creative Tech Studio</span>
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              We design,{' '}
              <motion.span 
                className="relative inline-block"
                animate={{ 
                  color: ['#9333ea', '#3b82f6', '#ec4899', '#10b981', '#9333ea']
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                you shine
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-current rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your digital presence with our cutting-edge creative solutions. 
              From stunning visuals to powerful web experiences, we bring your vision to life 
              with innovation and style.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button 
                onClick={() => setCurrentPage('booking')}
                className="group relative bg-purple-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                />
                <div className="relative z-10 flex items-center gap-2">
                  <Calendar size={24} />
                  Free Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </motion.button>

              <motion.button 
                onClick={() => setCurrentPage('about')}
                className="group relative border-3 border-pink-500 text-pink-500 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2">
                  <Rocket size={24} />
                  Our Story
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Hero Background Decoration */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-purple-200 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border border-blue-200 opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">About Gibe Digital</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Creativity Meets Technology</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Based in the vibrant heart of Addis Ababa, Ethiopia, we are a dynamic creative tech studio 
              that transforms ideas into digital masterpieces. Our passion for innovation drives us to 
              deliver exceptional solutions that make businesses shine in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Why Choose <span className="text-purple-600">Our Magic</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Creative Excellence', desc: 'Innovative designs that capture your brand essence', color: 'bg-yellow-500', glow: 'shadow-yellow-200' },
              { icon: Target, title: 'Results-Driven', desc: 'Strategic solutions focused on your business goals', color: 'bg-red-500', glow: 'shadow-red-200' },
              { icon: Users, title: 'Client-Centered', desc: 'Personalized service and ongoing support', color: 'bg-blue-500', glow: 'shadow-blue-200' },
              { icon: Award, title: 'Quality Assured', desc: 'High standards and attention to detail in every project', color: 'bg-green-500', glow: 'shadow-green-200' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 ${item.color} ${item.glow} shadow-lg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="relative py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Creative Services</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -8, 
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(45deg, ${service.color.replace('text-', 'rgba(').replace('-600', ', 0.1)')})` 
                  }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <service.icon className={`w-14 h-14 ${service.color} mx-auto mb-6`} />
                </motion.div>
                
                <h3 className="font-bold text-gray-900 mb-3 text-center group-hover:text-purple-600 transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed relative z-10">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button 
              onClick={() => setCurrentPage('services')}
              className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10 flex items-center gap-2">
                <Sparkles size={20} />
                View All Services
                <Zap size={20} />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section with Horizontal Scrolling Animation */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
              <Quote className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Client Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Happy Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our amazing clients have to say about their experience working with us.
            </p>
          </motion.div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-8"
                animate={{
                  x: ['0%', '-50%']
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-96 bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Background Decoration */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"
                    />
                    
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="w-12 h-12 text-purple-600" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-700 mb-6 leading-relaxed relative z-10 italic">
                    &quot;{testimonial.content}&quot;
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-purple-600 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-50 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 mt-16 text-center"
          >
            {[
              { number: "150+", label: "Happy Clients", icon: Users },
              { number: "500+", label: "Projects Completed", icon: Rocket },
              { number: "99%", label: "Client Satisfaction", icon: Star },
              { number: "5★", label: "Average Rating", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60"
              >
                <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-900 to-purple-900 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 0% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 0%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Ready to Transform?</span>
              <Rocket className="w-5 h-5 text-pink-400" />
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Shine</span>?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Let&apos;s create something extraordinary together. Your digital transformation starts with a single click.
            </p>
            
            <motion.button 
              onClick={() => setCurrentPage('contact')}
              className="relative bg-white text-purple-900 px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10 flex items-center gap-2">
                <Sparkles size={24} />
                Get Started Today
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Star size={20} />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage