import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Video, Globe, Smartphone, Share2, BarChart3, Printer } from 'lucide-react'

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

const ServicesPage = ({ setCurrentPage }: ServicesPageProps) => {

  const services = [
    { icon: Palette, title: 'Graphics & Branding', desc: 'Creative visual identity and brand design solutions' },
    { icon: Video, title: 'Video Editing', desc: 'Professional video production and post-production' },
    { icon: Globe, title: 'Website Development', desc: 'Modern, responsive websites and web applications' },
    { icon: Smartphone, title: 'UI/UX Design', desc: 'User-centered design for digital experiences' },
    { icon: Share2, title: 'Social Media Management', desc: 'Strategic social media presence and content' },
    { icon: BarChart3, title: 'Digital Marketing', desc: 'Data-driven marketing campaigns and analytics' },
    { icon: Printer, title: 'Printing Solutions', desc: 'High-quality print design and production' }
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to help your business thrive in the modern digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <service.icon className="w-12 h-12 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <div className="flex gap-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Learn More
                  </button>
                  <button 
                    onClick={() => setCurrentPage('booking')}
                    className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
                  >
                    Book Service
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage