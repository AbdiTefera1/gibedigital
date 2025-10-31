import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle,
  Mail, Phone, MapPin, ArrowRight, Heart, Star, Zap,
  Send, Contact
} from 'lucide-react'

const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [positions, setPositions] = useState<Array<{ left: string; top: string }>>([])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  useEffect(() => {
    const newPositions = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setPositions(newPositions)
  }, [])

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-sky-400' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'hover:text-red-500' },
    { icon: MessageCircle, name: 'WhatsApp', url: '#', color: 'hover:text-green-500' }
  ]

  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'Contact', page: 'contact' },
    { name: 'Book Service', page: 'booking' }
  ]

  const services = [
    'Web Development',
    'Graphic Design',
    'Digital Marketing',
    'Video Production',
    'UI/UX Design',
    'Brand Strategy'
  ]

  // const stats = [
  //   { icon: Users, value: '500+', label: 'Happy Clients' },
  //   { icon: Award, value: '50+', label: 'Awards Won' },
  //   { icon: Star, value: '4.9', label: 'Rating' },
  //   { icon: Clock, value: '24/7', label: 'Support' }
  // ]

  return (
    <footer className="relative inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
    <div className="absolute inset-0">
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={pos}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        {/* <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-6"
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Zap className="text-white w-7 h-7" />
                  </motion.div>
                  <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Gibe Digital
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  We design, you shine. Creative tech studio helping businesses transform their digital presence with cutting-edge solutions and innovative strategies.
                </p>

                {/* Newsletter Signup */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    Stay Updated
                  </h4>
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                    <motion.button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </form>
                  {isSubscribed && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-sm mt-2 flex items-center gap-2"
                    >
                      <Heart className="w-4 h-4" />
                      Thanks for subscribing!
                    </motion.p>
                  )}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/20`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-blue-400" />
                Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => setCurrentPage(link.page)}
                    className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Services & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-400" />
                Our Services
              </h3>
              <div className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.div>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Contact className="w-5 h-5 text-orange-400" />
                Contact Info
              </h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center gap-3 text-gray-400"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-green-400" />
                  Addis Ababa, Ethiopia
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  hello@gibedigital.com
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-purple-400" />
                  +251-XXX-XXX-XXX
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 Gibe Digital. All rights reserved. Made with{' '}
                <Heart className="inline w-4 h-4 text-red-500 mx-1" />
                in Ethiopia
              </p>
              
              <div className="flex gap-6 text-sm">
                <button className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer