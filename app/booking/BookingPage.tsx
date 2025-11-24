import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { BookingService } from '@/services/booking';
import { 
  Send, Clock, Star, CheckCircle, ArrowRight, 
  User, Mail, Phone, MessageSquare, Briefcase, Zap,
  Sparkles, Heart, Target, Rocket
} from 'lucide-react';

interface BookingPageProps {
    setCurrentPage: (page: string) => void;
}

const BookingPage = ({ setCurrentPage }: BookingPageProps) => {
    const [formData, setFormData] = useState({ 
      name: '', 
      email: '', 
      phone: '', 
      service: '', 
      budget: '',
      timeline: '',
      message: '' 
    });
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string>('');
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const services = [
        { title: 'Graphics & Branding', icon: '🎨', price: 'From $299' },
        { title: 'Video Production', icon: '🎬', price: 'From $499' },
        { title: 'Website Development', icon: '💻', price: 'From $799' },
        { title: 'UI/UX Design', icon: '📱', price: 'From $599' },
        { title: 'Social Media Management', icon: '📱', price: 'From $399' },
        { title: 'Digital Marketing', icon: '📊', price: 'From $699' },
        { title: 'Print Solutions', icon: '🖨️', price: 'From $199' }
    ];

    const budgetOptions = [
      { value: 'under-1000', label: 'Under $1,000', icon: '💰' },
      { value: '1000-5000', label: '$1,000 - $5,000', icon: '💎' },
      { value: '5000-10000', label: '$5,000 - $10,000', icon: '👑' },
      { value: 'over-10000', label: '$10,000+', icon: '🚀' }
    ];

    const timelineOptions = [
      { value: 'asap', label: 'ASAP (Rush Order)', icon: '⚡' },
      { value: '1-2weeks', label: '1-2 Weeks', icon: '🏃' },
      { value: '1month', label: '1 Month', icon: '📅' },
      { value: '2-3months', label: '2-3 Months', icon: '🎯' },
      { value: 'flexible', label: 'Flexible Timeline', icon: '🌊' }
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      // Reset errors
      setSubmitError('');
      setValidationErrors([]);
      
      // Validate form data
      const errors = BookingService.validateBookingData(formData);
      if (errors.length > 0) {
          setValidationErrors(errors);
          return;
      }

      setIsSubmitting(true);

      try {
          const response = await BookingService.submitBooking(formData);

          if (response.success) {
              setIsSubmitted(true);
              // Reset form after successful submission
              setTimeout(() => {
                  setFormData({ 
                      name: '', 
                      email: '', 
                      phone: '', 
                      service: '', 
                      budget: '', 
                      timeline: '', 
                      message: '' 
                  });
                  setCurrentStep(1);
                  setIsSubmitted(false);
              }, 3000);
          } else {
              setSubmitError(response.error || 'Failed to submit booking');
              if (response.details) {
                  setValidationErrors(response.details.map(d => d.message));
              }
          }
      } catch (error) {
          setSubmitError('Network error. Please try again.');
          console.error('Booking submission failed:', error);
      } finally {
          setIsSubmitting(false);
      }
  };

    const nextStep = () => {
      if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const isStepValid = () => {
      switch (currentStep) {
        case 1:
          return formData.name && formData.email && formData.phone;
        case 2:
          return formData.service && formData.budget && formData.timeline;
        case 3:
          return formData.message;
        default:
          return false;
      }
    };

    if (isSubmitted) {
      return (
        <div className="pt-24 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center max-w-2xl mx-auto px-4"
          >
              <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 bg-linear-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🎉 Booking Submitted!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for choosing us! We&apos;ll review your request and get back to you within 24 hours with a detailed proposal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setCurrentPage('home')}
                className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5" />
                Back to Home
              </motion.button>
              
              <motion.button
                onClick={() => setCurrentPage('services')}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      );
    }

    return (
      <div className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Animated background */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
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
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <Rocket className="w-5 h-5 text-pink-400" />
                <span className="font-medium">Start Your Project</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Let&apos;s Create Something 
                <span className="bg-linear-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent block">
                  Amazing Together
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to transform your vision into reality? Let&apos;s discuss your project and create something extraordinary.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Bar */}
        <div className="bg-white py-6 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      currentStep >= step
                        ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: step * 0.1 }}
                  >
                    {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                  </motion.div>
                  
                  {step < 3 && (
                    <div className={`h-1 w-20 mx-4 rounded-full ${
                      currentStep > step ? 'bg-linear-to-r from-purple-600 to-pink-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4 text-sm font-medium">
              <span className={currentStep >= 1 ? 'text-purple-600' : 'text-gray-500'}>Personal Info</span>
              <span className={currentStep >= 2 ? 'text-purple-600' : 'text-gray-500'}>Project Details</span>
              <span className={currentStep >= 3 ? 'text-purple-600' : 'text-gray-500'}>Final Details</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-32 translate-x-32 opacity-50" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full translate-y-24 -translate-x-24 opacity-50" />

              <form onSubmit={handleSubmit} className="relative z-10">
                {validationErrors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                  >
                    <h4 className="text-red-800 font-semibold mb-2">
                      Please fix the following errors:
                    </h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      {validationErrors.map((error, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-red-500 rounded-full" />
                          {error}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-center"
                  >
                    <p className="text-red-800 font-semibold">{submitError}</p>
                    <p className="text-red-600 text-sm mt-1">
                      Please try again or contact support if the problem persists.
                    </p>
                  </motion.div>
                )}
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="space-y-8"
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tell Us About Yourself</h2>
                        <p className="text-gray-600">Let&apos;s start with some basic information so we can personalize your experience.</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Full Name
                          </label>
                          <motion.input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField('')}
                            className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                              focusedField === 'name' || formData.name
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            placeholder="Your full name"
                            whileFocus={{ scale: 1.02 }}
                          />
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email Address
                          </label>
                          <motion.input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField('')}
                            className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                              focusedField === 'email' || formData.email
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            placeholder="your@email.com"
                            whileFocus={{ scale: 1.02 }}
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </label>
                        <motion.input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                            focusedField === 'phone' || formData.phone
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="+251-XXX-XXX-XXX"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Details */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="space-y-8"
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Requirements</h2>
                        <p className="text-gray-600">Help us understand your project scope and requirements.</p>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Select Service Type
                        </label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {services.map((service, index) => (
                            <motion.div
                              key={index}
                              className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.service === service.title
                                  ? 'border-purple-500 bg-purple-50'
                                  : 'border-gray-200 hover:border-purple-300'
                              }`}
                              onClick={() => setFormData({...formData, service: service.title})}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{service.icon}</span>
                                  <div>
                                    <h3 className="font-semibold text-gray-900">{service.title}</h3>
                                    <p className="text-sm text-purple-600 font-medium">{service.price}</p>
                                  </div>
                                </div>
                                {formData.service === service.title && (
                                  <CheckCircle className="w-6 h-6 text-purple-500" />
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Budget Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Project Budget
                        </label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {budgetOptions.map((budget, index) => (
                            <motion.div
                              key={index}
                              className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.budget === budget.value
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-gray-200 hover:border-green-300'
                              }`}
                              onClick={() => setFormData({...formData, budget: budget.value})}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-xl">{budget.icon}</span>
                                  <span className="font-semibold text-gray-900">{budget.label}</span>
                                </div>
                                {formData.budget === budget.value && (
                                  <CheckCircle className="w-6 h-6 text-green-500" />
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Timeline Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Project Timeline
                        </label>
                        <div className="grid md:grid-cols-3 gap-4">
                          {timelineOptions.map((timeline, index) => (
                            <motion.div
                              key={index}
                              className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.timeline === timeline.value
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                              onClick={() => setFormData({...formData, timeline: timeline.value})}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-center">
                                <span className="text-2xl block mb-2">{timeline.icon}</span>
                                <span className="font-semibold text-gray-900 text-sm">{timeline.label}</span>
                                {formData.timeline === timeline.value && (
                                  <CheckCircle className="w-5 h-5 text-blue-500 mx-auto mt-2" />
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Project Description */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="space-y-8"
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Description</h2>
                        <p className="text-gray-600">Tell us more about your vision and specific requirements.</p>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Describe Your Project
                        </label>
                        <motion.textarea
                          rows={6}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 resize-none ${
                            focusedField === 'message' || formData.message
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="Please describe your project in detail. Include any specific requirements, goals, or inspiration you have in mind..."
                          whileFocus={{ scale: 1.01 }}
                        />
                        <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                          {formData.message.length}/500
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500" />
                          Booking Summary
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Service:</span>
                            <span className="font-semibold">{formData.service || 'Not selected'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Budget:</span>
                            <span className="font-semibold">
                              {budgetOptions.find(b => b.value === formData.budget)?.label || 'Not selected'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Timeline:</span>
                            <span className="font-semibold">
                              {timelineOptions.find(t => t.value === formData.timeline)?.label || 'Not selected'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12">
                  {currentStep > 1 && (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Previous
                    </motion.button>
                  )}

                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStepValid()}
                        className={`px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 ${
                          isStepValid()
                            ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        whileHover={isStepValid() ? { scale: 1.05 } : {}}
                        whileTap={isStepValid() ? { scale: 0.95 } : {}}
                      >
                        Next Step
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    ) : (
                      // <motion.button
                      //   type="submit"
                      //   disabled={!isStepValid()}
                      //   className={`px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 ${
                      //     isStepValid()
                      //       ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
                      //       : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      //   }`}
                      //   whileHover={isStepValid() ? { scale: 1.05 } : {}}
                      //   whileTap={isStepValid() ? { scale: 0.95 } : {}}
                      // >
                      //   <Send className="w-5 h-5" />
                      //   Submit Booking
                      //   <Sparkles className="w-5 h-5" />
                      // </motion.button>

                      <motion.button
                      type="submit"
                      disabled={!isStepValid() || isSubmitting}
                      className={`px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 ${
                          isStepValid() && !isSubmitting
                              ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      whileHover={isStepValid() && !isSubmitting ? { scale: 1.05 } : {}}
                      whileTap={isStepValid() && !isSubmitting ? { scale: 0.95 } : {}}
                  >
                      {isSubmitting ? (
                          <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Submitting...
                          </>
                      ) : (
                          <>
                              <Send className="w-5 h-5" />
                              Submit Booking
                              <Sparkles className="w-5 h-5" />
                          </>
                      )}
                  </motion.button>
                    )}
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">24-Hour Response</h3>
                <p className="text-gray-600 text-sm">We&apos;ll get back to you within 24 hours with a detailed proposal.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">100+ Happy Clients</h3>
                <p className="text-gray-600 text-sm">Join our community of satisfied customers who love our work.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Quick turnaround times without compromising on quality.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default BookingPage