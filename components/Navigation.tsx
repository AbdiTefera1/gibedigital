'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Star, Zap } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'home', icon: '' },
    { name: 'about', icon: '' },
    { name: 'services', icon: '' },
    // { name: 'portfolio', icon: '🎨' },
    // { name: 'booking', icon: '📅' },
    { name: 'contact', icon: '' }
  ];

  return (
    <>
      {/* Backdrop blur effect */}
      <div className="fixed top-0 w-full h-20 bg-white/80 backdrop-blur-xl border-b border-purple-100/50 z-40" />
      
      <nav className="fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center cursor-pointer group"
              onClick={() => setCurrentPage('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="relative w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden"
                animate={{
                  background: [
                    'linear-gradient(45deg, #9333ea, #3b82f6)',
                    'linear-gradient(45deg, #3b82f6, #ec4899)',
                    'linear-gradient(45deg, #ec4899, #10b981)',
                    'linear-gradient(45deg, #10b981, #9333ea)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <motion.span 
                  className="text-white font-bold text-xl relative z-10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  G
                </motion.span>
                
                {/* Sparkle effects */}
                <motion.div
                  className="absolute top-1 right-1"
                  animate={{ 
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: 0.5
                  }}
                >
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                </motion.div>
              </motion.div>
              
              <div className="ml-3">
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Gibe Digital
                </motion.span>
                <motion.div
                  className="text-xs text-gray-500 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Creative Tech Studio
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => setCurrentPage(item.name)}
                  className={`relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 group ${
                    currentPage === item.name 
                      ? 'text-white shadow-lg' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {currentPage === item.name && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{
                        background: [
                          'linear-gradient(45deg, #9333ea, #3b82f6)',
                          'linear-gradient(45deg, #3b82f6, #ec4899)',
                          'linear-gradient(45deg, #ec4899, #10b981)',
                          'linear-gradient(45deg, #10b981, #9333ea)'
                        ]
                      }}
                      // transition={{ duration: 3, repeat: Infinity }}
                      layoutId="activeNavItem"
                    />
                  )}
                  
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-base">{item.icon}</span>
                    <span className="capitalize">{item.name}</span>
                    
                    {currentPage === item.name && (
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="w-3 h-3" />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Hover effect */}
                  {currentPage !== item.name && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                </motion.button>
              ))}
              
              {/* CTA Button */}
              <motion.button
                onClick={() => setCurrentPage('booking')}
                className="ml-4 relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Get Started
                </div>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 rounded-2xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100 shadow-2xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-2 gap-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        setCurrentPage(item.name);
                        setIsMenuOpen(false);
                      }}
                      className={`relative p-4 rounded-2xl text-left transition-all duration-300 group ${
                        currentPage === item.name 
                          ? 'text-white shadow-lg' 
                          : 'text-gray-700 hover:text-purple-600 bg-gray-50 hover:bg-purple-50'
                      }`}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {currentPage === item.name && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600"
                          layoutId="activeMobileNavItem"
                        />
                      )}
                      
                      <div className="relative z-10 flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="font-semibold capitalize">{item.name}</div>
                          <div className="text-xs opacity-70">
                            {item.name === 'home' && 'Welcome'}
                            {item.name === 'about' && 'Our Story'}
                            {item.name === 'services' && 'What We Do'}
                            {item.name === 'portfolio' && 'Our Work'}
                            {item.name === 'booking' && 'Schedule'}
                            {item.name === 'contact' && 'Get in Touch'}
                          </div>
                        </div>
                        
                        {currentPage === item.name && (
                          <motion.div
                            className="ml-auto"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Star className="w-4 h-4" />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {/* Mobile CTA */}
                <motion.button
                  onClick={() => {
                    setCurrentPage('booking');
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-2xl font-semibold shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Start Your Project
                    <Zap className="w-5 h-5" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navigation