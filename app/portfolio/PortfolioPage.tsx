import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { 
  ExternalLink, Eye, Heart, Star, Award, Zap, 
  Play, Code, Megaphone, Printer, Palette,
  ArrowRight, Sparkles, TrendingUp
} from 'lucide-react';

interface PortfolioPageProps {
  setCurrentPage: (page: string) => void;
}

const PortfolioPage = ({ setCurrentPage }: PortfolioPageProps) => {
  const portfolioItems = [
    { 
      id: 1, 
      title: 'TechFlow E-commerce Platform', 
      category: 'Web', 
      image: 'bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700',
      description: 'Modern e-commerce platform with AI-powered recommendations',
      tech: ['React', 'Node.js', 'AI/ML'],
      likes: 124,
      views: 2400,
      featured: true,
      client: 'TechFlow Inc.',
      year: '2024'
    },
    { 
      id: 2, 
      title: 'Zenith Corporate Identity', 
      category: 'Design', 
      image: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
      description: 'Complete brand redesign for a Fortune 500 company',
      tech: ['Brand Strategy', 'Logo Design', 'Guidelines'],
      likes: 89,
      views: 1800,
      featured: true,
      client: 'Zenith Corp.',
      year: '2024'
    },
    { 
      id: 3, 
      title: 'EcoLife Campaign', 
      category: 'Marketing', 
      image: 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600',
      description: 'Sustainable living awareness campaign across multiple platforms',
      tech: ['Social Media', 'Video', 'Analytics'],
      likes: 156,
      views: 3200,
      featured: false,
      client: 'EcoLife Foundation',
      year: '2024'
    },
    { 
      id: 4, 
      title: 'Artisan Product Catalog', 
      category: 'Printing', 
      image: 'bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600',
      description: 'Luxury product catalog with premium finishing',
      tech: ['Print Design', 'Photography', 'Premium Paper'],
      likes: 67,
      views: 1200,
      featured: false,
      client: 'Artisan Crafts',
      year: '2023'
    },
    { 
      id: 5, 
      title: 'HealthSync Mobile App', 
      category: 'Design', 
      image: 'bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-600',
      description: 'Healthcare app interface focused on user experience',
      tech: ['UI/UX', 'Prototyping', 'User Testing'],
      likes: 198,
      views: 4100,
      featured: true,
      client: 'HealthSync',
      year: '2024'
    },
    { 
      id: 6, 
      title: 'Bella Vista Restaurant', 
      category: 'Web', 
      image: 'bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600',
      description: 'Elegant restaurant website with online reservation system',
      tech: ['WordPress', 'Booking System', 'SEO'],
      likes: 112,
      views: 2800,
      featured: false,
      client: 'Bella Vista',
      year: '2024'
    },
    { 
      id: 7, 
      title: 'FutureTech Video Series', 
      category: 'Video', 
      image: 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700',
      description: 'Tech explainer video series with motion graphics',
      tech: ['After Effects', 'Cinema 4D', 'Sound Design'],
      likes: 234,
      views: 5600,
      featured: true,
      client: 'FutureTech',
      year: '2024'
    },
    { 
      id: 8, 
      title: 'Ocean Conservation Campaign', 
      category: 'Marketing', 
      image: 'bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-600',
      description: 'Global awareness campaign for ocean conservation',
      tech: ['Campaign Strategy', 'Social Media', 'Influencer'],
      likes: 187,
      views: 4200,
      featured: false,
      client: 'Ocean Foundation',
      year: '2024'
    }
  ];

  const [filter, setFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  // const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const categories = [
    { name: 'All', icon: Sparkles, count: portfolioItems.length },
    { name: 'Design', icon: Palette, count: portfolioItems.filter(item => item.category === 'Design').length },
    { name: 'Web', icon: Code, count: portfolioItems.filter(item => item.category === 'Web').length },
    { name: 'Marketing', icon: Megaphone, count: portfolioItems.filter(item => item.category === 'Marketing').length },
    { name: 'Video', icon: Play, count: portfolioItems.filter(item => item.category === 'Video').length },
    { name: 'Printing', icon: Printer, count: portfolioItems.filter(item => item.category === 'Printing').length }
  ];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const featuredItems = portfolioItems.filter(item => item.featured);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
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
              <Award className="w-5 h-5" />
              <span className="font-medium">Award-Winning Projects</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="bg-linear-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              Explore our creative works and see how we&apos;ve helped businesses transform their digital presence and achieve remarkable success.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="inline-flex items-center gap-3 bg-linear-to-r from-pink-500 to-violet-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300">
                <Eye className="w-6 h-6" />
                View All Projects
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Our most impactful and celebrated work</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className={`h-80 ${item.image} relative`}>
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Featured badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Featured
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="absolute top-6 right-6 flex gap-4">
                    <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 text-white text-sm flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {item.likes}
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 text-white text-sm flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {item.views}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-white/60 text-sm">
                        {item.client} • {item.year}
                      </div>
                      <motion.button
                        className="bg-white text-gray-900 px-4 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Portfolio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600">Filter by category to explore specific types of work</p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setFilter(category.name)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  filter === category.name
                    ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                <span className="bg-black/10 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${filter}-${item.id}`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  // onClick={() => setSelectedItem(item.id)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className={`h-64 ${item.image} relative`}>
                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={false}
                        animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                      >
                        <motion.div
                          className="text-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ 
                            scale: hoveredItem === item.id ? 1 : 0.8,
                            opacity: hoveredItem === item.id ? 1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink className="w-12 h-12 text-white mx-auto mb-3" />
                          <p className="text-white font-semibold">View Project</p>
                        </motion.div>
                      </motion.div>

                      {/* Featured badge */}
                      {item.featured && (
                        <div className="absolute top-4 left-4">
                          <div className="bg-linear-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </div>
                        </div>
                      )}

                      {/* Stats */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {item.likes}
                        </div>
                        <div className="bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {item.views}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                      <div className="mb-2">
                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm mb-3 line-clamp-2">{item.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-white/60 text-xs">
                          {item.client}
                        </div>
                        <div className="flex gap-1">
                          {item.tech.slice(0, 2).map((tech, idx) => (
                            <span key={idx} className="text-xs bg-white/10 text-white px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let&apos;s bring your vision to life with our expert team and proven process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-purple-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap className="w-6 h-6" />
                Start Your Project
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <TrendingUp className="w-6 h-6" />
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage