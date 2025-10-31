import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Lightbulb, Target, Eye, Star, Users, Award, Heart,
  ArrowRight, Globe, Sparkles,
  Coffee, MapPin, Calendar
} from 'lucide-react'

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

const AboutPage = ({ setCurrentPage }: ServicesPageProps) => {
  const [activeTab, setActiveTab] = useState('story');
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  // const stats = [
  //   { number: '500+', label: 'Projects Completed', icon: CheckCircle },
  //   { number: '150+', label: 'Happy Clients', icon: Heart },
  //   { number: '5+', label: 'Years Experience', icon: Clock },
  //   { number: '24/7', label: 'Support Available', icon: Zap }
  // ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every project is crafted with love, dedication, and attention to detail.',
      color: 'from-pink-400 to-red-500',
      bgColor: 'from-pink-50 to-red-50'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their digital transformation journey.',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every pixel, every line of code, and every interaction.',
      color: 'from-purple-400 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    }
  ];

  const team = [
    {
      name: 'Abebe Tadesse',
      role: 'Creative Director',
      bio: 'Visionary leader with 8+ years in digital design and brand strategy.',
      avatar: '👨‍💼'
    },
    {
      name: 'Meron Haile',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating seamless digital experiences.',
      avatar: '👩‍💻'
    },
    {
      name: 'Daniel Bekele',
      role: 'UX Designer',
      bio: 'User experience specialist focused on creating intuitive and delightful interfaces.',
      avatar: '👨‍🎨'
    },
    {
      name: 'Sara Getnet',
      role: 'Marketing Strategist',
      bio: 'Digital marketing expert helping brands connect with their audiences.',
      avatar: '👩‍📊'
    }
  ];

  const tabs = [
    { id: 'story', label: 'Our Story', icon: Globe },
    { id: 'mission', label: 'Mission & Vision', icon: Target },
    { id: 'values', label: 'Our Values', icon: Star },
    // { id: 'team', label: 'Meet the Team', icon: Users }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
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
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="font-medium">About Gibe Digital</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Where Creativity Meets{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              We transform visionary ideas into digital masterpieces that captivate audiences and drive unprecedented growth.
            </p>

            {/* <motion.button
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-6 h-6" />
              Watch Our Story
              <ArrowRight className="w-6 h-6" />
            </motion.button> */}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Tabbed Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'story' && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2" />
                        <div>
                          {/* <h4 className="font-semibold text-gray-900 mb-2">2019 - The Beginning</h4> */}
                          <p className="text-gray-600">Founded in the heart of Addis Ababa, Ethiopia, Gibe Digital emerged from a simple yet powerful idea: 
                                        every business deserves to shine in the digital world. We started as a small team of passionate creators 
                                        and technologists who believed that great design and smart technology could transform businesses.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-pink-500 rounded-full mt-2" />
                        <div>
                          {/* <h4 className="font-semibold text-gray-900 mb-2">2021 - Expansion</h4> */}
                          <p className="text-gray-600">Today, we continue to help individuals and businesses across Ethiopia and beyond to establish 
                                           strong digital presences that reflect their unique stories and drive meaningful growth.</p>
                        </div>
                      </div>
                      {/* <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">2024 - Innovation</h4>
                          <p className="text-gray-600">Launched AI-powered design tools and established partnerships across East Africa.</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <motion.div
                          className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <MapPin className="w-12 h-12" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2">Addis Ababa, Ethiopia</h3>
                        <p className="text-white/80">Where innovation meets tradition</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      To empower businesses with innovative digital solutions that drive exponential growth, 
                      enhance brand presence, and create meaningful connections with their audiences through 
                      cutting-edge technology and creative excellence.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      To become the leading creative technology studio in Africa, recognized globally for 
                      transforming businesses through exceptional design, innovative digital solutions, 
                      and sustainable growth strategies.
                    </p>
                  </motion.div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      className={`relative p-8 rounded-3xl bg-gradient-to-br ${value.bgColor} overflow-hidden group cursor-pointer`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onHoverStart={() => setHoveredValue(index)}
                      onHoverEnd={() => setHoveredValue(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                        animate={{
                          rotate: hoveredValue === index ? [0, 10, -10, 0] : 0,
                          scale: hoveredValue === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <value.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'team' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {team.map((member, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div
                        className="text-6xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {member.avatar}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                      
                      <motion.div
                        className="mt-4 flex justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (index * 0.1) + 0.3 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
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
                y: [0, -30, 0],
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
            <Coffee className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Ready to transform your digital presence? We&apos;d love to hear about your project.
            </p>
            
            <motion.button
              className="inline-flex items-center gap-3 bg-white text-purple-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300"
              onClick={() => setCurrentPage('booking')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-6 h-6" />
              Schedule a Consultation
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage







// import React from 'react'
// import { motion } from 'framer-motion'
// import { Lightbulb, Target, Eye, Star } from 'lucide-react'

// const AboutPage = () => {
//   return (
//     <div className="pt-24 pb-16">
//       <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Where Creativity Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Technology</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               At Gibe Digital, we believe in the power of combining creative vision with cutting-edge technology 
//               to create digital experiences that not only look amazing but drive real results.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <p className="text-gray-600 mb-4">
//                 Founded in the heart of Addis Ababa, Ethiopia, Gibe Digital emerged from a simple yet powerful idea: 
//                 every business deserves to shine in the digital world. We started as a small team of passionate creators 
//                 and technologists who believed that great design and smart technology could transform businesses.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Today, we continue to help individuals and businesses across Ethiopia and beyond to establish 
//                 strong digital presences that reflect their unique stories and drive meaningful growth.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl h-80 flex items-center justify-center"
//             >
//               <div className="text-white text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Lightbulb size={32} />
//                 </div>
//                 <h3 className="text-xl font-semibold">Innovation</h3>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-center p-8 rounded-xl bg-blue-50"
//             >
//               <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
//               <p className="text-gray-600">
//                 To empower businesses with innovative digital solutions that drive growth, 
//                 enhance brand presence, and create meaningful connections with their audiences.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-center p-8 rounded-xl bg-orange-50"
//             >
//               <Eye className="w-12 h-12 text-orange-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
//               <p className="text-gray-600">
//                 To be the leading creative tech studio in Ethiopia, known for transforming 
//                 businesses through exceptional design and innovative digital solutions.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-center p-8 rounded-xl bg-purple-50"
//             >
//               <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
//               <p className="text-gray-600">
//                 Creativity, excellence, integrity, and client success drive everything we do. 
//                 We believe in building lasting partnerships based on trust and results.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default AboutPage