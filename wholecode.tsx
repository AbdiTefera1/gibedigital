// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Menu, X, ArrowRight, Star, CheckCircle, Mail, Phone, MapPin, 
//   Palette, Video, Globe, Smartphone, Share2, BarChart3, Printer,
//   Eye, Calendar, Send, Facebook, Instagram, Linkedin, Twitter,
//   Youtube, MessageCircle, Filter, ExternalLink, Users, Target,
//   Lightbulb, Award
// } from 'lucide-react';

// const GibeDigitalWebsite = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '', email: '', phone: '', service: '', message: '', subject: ''
//   });

//   const services = [
//     { icon: Palette, title: 'Graphics & Branding', desc: 'Creative visual identity and brand design solutions' },
//     { icon: Video, title: 'Video Editing', desc: 'Professional video production and post-production' },
//     { icon: Globe, title: 'Website Development', desc: 'Modern, responsive websites and web applications' },
//     { icon: Smartphone, title: 'UI/UX Design', desc: 'User-centered design for digital experiences' },
//     { icon: Share2, title: 'Social Media Management', desc: 'Strategic social media presence and content' },
//     { icon: BarChart3, title: 'Digital Marketing', desc: 'Data-driven marketing campaigns and analytics' },
//     { icon: Printer, title: 'Printing Solutions', desc: 'High-quality print design and production' }
//   ];

//   const portfolioItems = [
//     { id: 1, title: 'Modern E-commerce Platform', category: 'Web', image: 'bg-gradient-to-br from-blue-500 to-purple-600' },
//     { id: 2, title: 'Corporate Brand Identity', category: 'Design', image: 'bg-gradient-to-br from-orange-500 to-red-500' },
//     { id: 3, title: 'Social Media Campaign', category: 'Marketing', image: 'bg-gradient-to-br from-green-500 to-teal-500' },
//     { id: 4, title: 'Product Catalog Design', category: 'Printing', image: 'bg-gradient-to-br from-purple-500 to-pink-500' },
//     { id: 5, title: 'Mobile App Interface', category: 'Design', image: 'bg-gradient-to-br from-indigo-500 to-blue-500' },
//     { id: 6, title: 'Restaurant Website', category: 'Web', image: 'bg-gradient-to-br from-yellow-500 to-orange-500' }
//   ];

//   const testimonials = [
//     { name: 'Sarah Johnson', company: 'TechStart Inc.', text: 'Gibe Digital transformed our brand identity completely. Exceptional work!' },
//     { name: 'Ahmed Hassan', company: 'Local Business', text: 'Professional service and amazing results. Highly recommended!' },
//     { name: 'Maria Santos', company: 'Creative Agency', text: 'Outstanding creativity and technical expertise. Perfect collaboration!' }
//   ];

//   const Navigation = () => (
//     <nav className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <motion.div 
//             className="flex items-center cursor-pointer"
//             onClick={() => setCurrentPage('home')}
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">G</span>
//             </div>
//             <span className="ml-2 text-xl font-bold text-gray-800">Gibe Digital</span>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {['home', 'about', 'services', 'portfolio', 'booking', 'contact'].map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                   currentPage === page 
//                     ? 'text-blue-600 bg-blue-50' 
//                     : 'text-gray-700 hover:text-blue-600'
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-blue-600"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white border-t"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {['home', 'about', 'services', 'portfolio', 'booking', 'contact'].map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => {
//                     setCurrentPage(page);
//                     setIsMenuOpen(false);
//                   }}
//                   className={`capitalize block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
//                     currentPage === page 
//                       ? 'text-blue-600 bg-blue-50' 
//                       : 'text-gray-700 hover:text-blue-600'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );

//   const HomePage = () => (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
//             >
//               We design, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">you shine</span>
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
//             >
//               Creative tech studio helping individuals and businesses grow their digital presence through design, technology, and marketing.
//             </motion.p>
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <button 
//                 onClick={() => setCurrentPage('booking')}
//                 className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//               >
//                 Book a Free Consultation <Calendar size={20} />
//               </button>
//               <button 
//                 onClick={() => setCurrentPage('portfolio')}
//                 className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2"
//               >
//                 Explore Our Work <ArrowRight size={20} />
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">About Gibe Digital</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               We are a creative tech studio based in Addis Ababa, Ethiopia, specializing in modern, 
//               all-in-one creative and digital solutions that help businesses thrive in the digital age.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: Lightbulb, title: 'Creative Excellence', desc: 'Innovative designs that capture your brand essence' },
//               { icon: Target, title: 'Results-Driven', desc: 'Strategic solutions focused on your business goals' },
//               { icon: Users, title: 'Client-Centered', desc: 'Personalized service and ongoing support' },
//               { icon: Award, title: 'Quality Assured', desc: 'High standards and attention to detail in every project' }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <item.icon className="w-12 h-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Highlight */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
//           <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {services.slice(0, 4).map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
//               >
//                 <service.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//                 <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
//                 <p className="text-sm text-gray-600">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <button 
//               onClick={() => setCurrentPage('services')}
//               className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow"
//             >
//               View All Services
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Ready to Shine?</h2>
//           <p className="text-xl text-blue-100 mb-8">Let's bring your digital vision to life</p>
//           <button 
//             onClick={() => setCurrentPage('contact')}
//             className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
//           >
//             Get Started Today
//           </button>
//         </div>
//       </section>
//     </div>
//   );

//   const AboutPage = () => (
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
//   );

//   const ServicesPage = () => (
//     <div className="pt-24 pb-16">
//       <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive digital solutions tailored to help your business thrive in the modern digital landscape.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
//               >
//                 <service.icon className="w-12 h-12 text-orange-500 mb-6" />
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                 <p className="text-gray-600 mb-6">{service.desc}</p>
//                 <div className="flex gap-3">
//                   <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
//                     Learn More
//                   </button>
//                   <button 
//                     onClick={() => setCurrentPage('booking')}
//                     className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
//                   >
//                     Book Service
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );

//   const PortfolioPage = () => {
//     const [filter, setFilter] = useState('All');
//     const categories = ['All', 'Design', 'Web', 'Marketing', 'Printing'];
    
//     const filteredItems = filter === 'All' 
//       ? portfolioItems 
//       : portfolioItems.filter(item => item.category === filter);

//     return (
//       <div className="pt-24 pb-16">
//         <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center mb-16"
//             >
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Explore our creative works and see how we've helped businesses shine in the digital world.
//               </p>
//             </motion.div>

//             {/* Filter Buttons */}
//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setFilter(category)}
//                   className={`px-6 py-2 rounded-full transition-colors ${
//                     filter === category
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-white text-gray-700 hover:bg-blue-50'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             {/* Portfolio Grid */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <AnimatePresence>
//                 {filteredItems.map((item, index) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="group cursor-pointer"
//                   >
//                     <div className="relative overflow-hidden rounded-xl">
//                       <div className={`h-64 ${item.image} transition-transform group-hover:scale-110`}>
//                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                           <ExternalLink className="w-8 h-8 text-white" />
//                         </div>
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
//                         <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
//                           {item.category}
//                         </span>
//                         <h3 className="text-white font-semibold mt-2">{item.title}</h3>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   };

//   const BookingPage = () => {
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       alert('Thank you for your booking request! We will contact you soon.');
//       setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//     };

//     return (
//       <div className="pt-24 pb-16">
//         <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center mb-16"
//             >
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Book a Service</h1>
//               <p className="text-xl text-gray-600">
//                 Ready to get started? Fill out the form below and we'll get back to you within 24 hours.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white rounded-2xl shadow-xl p-8"
//             >
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={(e) => setFormData({...formData, name: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Your full name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                     <input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                     <input
//                       type="tel"
//                       required
//                       value={formData.phone}
//                       onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="+251-XXX-XXX-XXX"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
//                     <select
//                       required
//                       value={formData.service}
//                       onChange={(e) => setFormData({...formData, service: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">Select a service</option>
//                       {services.map((service, index) => (
//                         <option key={index} value={service.title}>{service.title}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
//                   <textarea
//                     rows={4}
//                     required
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Tell us about your project..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 px-6 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2 font-semibold"
//                 >
//                   <Send size={20} />
//                   Submit Booking Request
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     );
//   };

//   const ContactPage = () => {
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       alert('Thank you for your message! We will get back to you soon.');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     };

//     return (
//       <div className="pt-24 pb-16">
//         <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center mb-16"
//             >
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
//               <p className="text-xl text-gray-600">
//                 Ready to start your project? We'd love to hear from you.
//               </p>
//             </motion.div>

//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Contact Form */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-white rounded-2xl shadow-xl p-8"
//               >
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                       <input
//                         type="text"
//                         required
//                         value={formData.name}
//                         onChange={(e) => setFormData({...formData, name: e.target.value})}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                       <input
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={(e) => setFormData({...formData, email: e.target.value})}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.subject}
//                       onChange={(e) => setFormData({...formData, subject: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                     <textarea
//                       rows={4}
//                       required
//                       value={formData.message}
//                       onChange={(e) => setFormData({...formData, message: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
//                   >
//                     <Send size={20} />
//                     Send Message
//                   </button>
//                 </form>
//               </motion.div>

//               {/* Contact Info */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="space-y-8"
//               >
//                 <div className="bg-white rounded-2xl shadow-xl p-8">
//                   <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-4">
//                       <Mail className="w-6 h-6 text-blue-600" />
//                       <span className="text-gray-700">hello@gibedigital.com</span>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <Phone className="w-6 h-6 text-blue-600" />
//                       <span className="text-gray-700">+251-XXX-XXX-XXX</span>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <MapPin className="w-6 h-6 text-blue-600" />
//                       <span className="text-gray-700">Addis Ababa, Ethiopia</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-2xl shadow-xl p-8">
//                   <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
//                   <div className="space-y-4">
//                     <button 
//                       onClick={() => setCurrentPage('booking')}
//                       className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Book a Service
//                     </button>
//                     <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
//                       <MessageCircle size={20} />
//                       WhatsApp Chat
//                     </button>
//                   </div>
//                 </div>

//                 {/* Map */}
//                 <div className="bg-white rounded-2xl shadow-xl p-8">
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
//                   <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
//                     <div className="text-center text-gray-600">
//                       <MapPin size={48} className="mx-auto mb-2" />
//                       <p>Interactive Map</p>
//                       <p className="text-sm">Addis Ababa, Ethiopia</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   };

//   const Footer = () => (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div className="md:col-span-2">
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">G</span>
//               </div>
//               <span className="ml-2 text-xl font-bold">Gibe Digital</span>
//             </div>
//             <p className="text-gray-400 mb-4 max-w-md">
//               We design, you shine. Creative tech studio helping businesses grow their digital presence.
//             </p>
//             <div className="flex space-x-4">
//               {[Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle].map((Icon, index) => (
//                 <Icon key={index} className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <div className="space-y-2">
//               {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
//                 <button
//                   key={link}
//                   onClick={() => setCurrentPage(link.toLowerCase())}
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   {link}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <div className="space-y-2 text-gray-400">
//               <p>Addis Ababa, Ethiopia</p>
//               <p>hello@gibedigital.com</p>
//               <p>+251-XXX-XXX-XXX</p>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; 2025 Gibe Digital. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );

//   const renderCurrentPage = () => {
//     switch(currentPage) {
//       case 'home': return <HomePage />;
//       case 'about': return <AboutPage />;
//       case 'services': return <ServicesPage />;
//       case 'portfolio': return <PortfolioPage />;
//       case 'booking': return <BookingPage />;
//       case 'contact': return <ContactPage />;
//       default: return <HomePage />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentPage}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//         >
//           {renderCurrentPage()}
//         </motion.div>
//       </AnimatePresence>
//       <Footer />
//     </div>
//   );
// };

// export default GibeDigitalWebsite;