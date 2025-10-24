import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react';

interface PortfolioPageProps {
  setCurrentPage: (page: string) => void;
}

const PortfolioPage = ({ setCurrentPage }: PortfolioPageProps) => {
    const portfolioItems = [
        { id: 1, title: 'Modern E-commerce Platform', category: 'Web', image: 'bg-gradient-to-br from-blue-500 to-purple-600' },
        { id: 2, title: 'Corporate Brand Identity', category: 'Design', image: 'bg-gradient-to-br from-orange-500 to-red-500' },
        { id: 3, title: 'Social Media Campaign', category: 'Marketing', image: 'bg-gradient-to-br from-green-500 to-teal-500' },
        { id: 4, title: 'Product Catalog Design', category: 'Printing', image: 'bg-gradient-to-br from-purple-500 to-pink-500' },
        { id: 5, title: 'Mobile App Interface', category: 'Design', image: 'bg-gradient-to-br from-indigo-500 to-blue-500' },
        { id: 6, title: 'Restaurant Website', category: 'Web', image: 'bg-gradient-to-br from-yellow-500 to-orange-500' }
      ];
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Design', 'Web', 'Marketing', 'Printing'];
    
    const filteredItems = filter === 'All' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === filter);

    return (
      <div className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our creative works and see how we've helped businesses shine in the digital world.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <div className={`h-64 ${item.image} transition-transform group-hover:scale-110`}>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <h3 className="text-white font-semibold mt-2">{item.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    );
}

export default PortfolioPage