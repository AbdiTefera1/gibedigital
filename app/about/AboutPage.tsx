import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Target, Eye, Star } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Creativity Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Gibe Digital, we believe in the power of combining creative vision with cutting-edge technology 
              to create digital experiences that not only look amazing but drive real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in the heart of Addis Ababa, Ethiopia, Gibe Digital emerged from a simple yet powerful idea: 
                every business deserves to shine in the digital world. We started as a small team of passionate creators 
                and technologists who believed that great design and smart technology could transform businesses.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we continue to help individuals and businesses across Ethiopia and beyond to establish 
                strong digital presences that reflect their unique stories and drive meaningful growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl h-80 flex items-center justify-center"
            >
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 rounded-xl bg-blue-50"
            >
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance brand presence, and create meaningful connections with their audiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 rounded-xl bg-orange-50"
            >
              <Eye className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading creative tech studio in Ethiopia, known for transforming 
                businesses through exceptional design and innovative digital solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 rounded-xl bg-purple-50"
            >
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Creativity, excellence, integrity, and client success drive everything we do. 
                We believe in building lasting partnerships based on trust and results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage