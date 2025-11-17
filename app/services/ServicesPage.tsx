import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Palette, Globe, Smartphone, Share2,
  Star, ArrowRight, Check, Zap, Sparkles, Eye, TrendingUp,
  Cpu
} from 'lucide-react'

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

const ServicesPage = ({ setCurrentPage }: ServicesPageProps) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // { 
    //   icon: Palette, 
    //   title: 'Graphics & Branding', 
    //   desc: 'Creative visual identity and brand design solutions that make your business unforgettable',
    //   category: 'design',
    //   features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Print Design'],
    //   // price: 'From $299',
    //   gradient: 'from-pink-500 to-rose-500',
    //   bgGradient: 'from-pink-50 to-rose-50'
    // },
    // { 
    //   icon: Video, 
    //   title: 'Video Production', 
    //   desc: 'Professional video content that tells your story and captivates your audience',
    //   category: 'media',
    //   features: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design'],
    //   price: 'From $499',
    //   gradient: 'from-purple-500 to-indigo-500',
    //   bgGradient: 'from-purple-50 to-indigo-50'
    // },
    { 
      icon: Globe, 
      title: 'Web Development', 
      desc: 'Modern, lightning-fast websites that convert visitors into customers',
      category: 'development',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
      // price: 'From $799',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    { 
      icon: Smartphone, 
      title: 'UI/UX Design', 
      desc: 'Intuitive digital experiences that users love and remember',
      category: 'design',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      // price: 'From $599',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50'
    },
    { 
      icon: Share2, 
      title: 'Social Media Management', 
      desc: 'Strategic social presence that builds communities and drives engagement',
      category: 'marketing',
      features: ['Content Strategy', 'Post Scheduling', 'Community Management', 'Analytics'],
      // price: 'From $399',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50'
    },
    {
      icon: Cpu, 
      title: 'IT Consulting',
      desc: 'Professional technology consulting that aligns your business goals with smart, scalable IT solutions.',
      category: 'it consulting',
      features: [
        'System Analysis & Planning',
        'Infrastructure Optimization',
        'Software Integration',
        'Technical Support & Maintenance'
      ],
      // price: 'From $699',
      gradient: 'from-slate-500 to-blue-500',
      bgGradient: 'from-slate-50 to-blue-50'
    },
    // { 
    //   icon: BarChart3, 
    //   title: 'Digital Marketing', 
    //   desc: 'Data-driven campaigns that maximize ROI and accelerate growth',
    //   category: 'marketing',
    //   features: ['PPC Advertising', 'Email Marketing', 'Analytics', 'Conversion Optimization'],
    //   // price: 'From $699',
    //   gradient: 'from-violet-500 to-purple-500',
    //   bgGradient: 'from-violet-50 to-purple-50'
    // },
    // { 
    //   icon: Printer, 
    //   title: 'Print Solutions', 
    //   desc: 'High-impact print materials that leave lasting impressions',
    //   category: 'design',
    //   features: ['Business Cards', 'Brochures', 'Packaging', 'Large Format'],
    //   price: 'From $199',
    //   gradient: 'from-red-500 to-pink-500',
    //   bgGradient: 'from-red-50 to-pink-50'
    // }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'development', name: 'Development', icon: Globe },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp },
    { id: 'it consulting', name: 'IT Consulting', icon: Cpu },
    // { id: 'media', name: 'Media', icon: Video }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
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
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
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
              <Zap className="w-5 h-5 text-pink-400" />
              <span className="font-medium">Premium Digital Services</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and captivate your audience in the modern digital landscape.
            </p>

            <motion.button
              onClick={() => setCurrentPage('booking')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-6 h-6" />
              Get Free Consultation
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                {selectedCategory === category.id && (
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    layoutId="activeCategory"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="group relative"
                >
                  <div className={`relative bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }} />
                    </div>

                    {/* Floating icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 shadow-lg`}
                      animate={{
                        rotate: hoveredService === index ? [0, 5, -5, 0] : 0,
                        scale: hoveredService === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3 text-sm text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                        >
                          <Check className="w-4 h-4 text-green-500" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {/* {service.price} */}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 relative z-10">
                      {/* View Details Button */}
                      <motion.button
                        type="button"
                        className={`flex-1 bg-gradient-to-r ${service.gradient} text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => console.log("View Details clicked")}
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </motion.button>

                      {/* Book Now Button */}
                      <motion.button
                        type="button"
                        className="flex-1 border-2 border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                        onClick={() => {
                          console.log("Book Now clicked");
                          setCurrentPage("booking");
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Zap className="w-4 h-4" />
                        Book Now
                      </motion.button>
                    </div>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let&apos;s discuss your project and create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setCurrentPage('booking')}
                className="bg-white text-purple-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-6 h-6" />
                Start Your Project
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={() => setCurrentPage('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage