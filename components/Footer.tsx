import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from 'lucide-react'
import React from 'react'


const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
    return (
        <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="ml-2 text-xl font-bold">Gibe Digital</span>
          </div>
          <p className="text-gray-400 mb-4 max-w-md">
            We design, you shine. Creative tech studio helping businesses grow their digital presence.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle].map((Icon, index) => (
              <Icon key={index} className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => setCurrentPage(link.toLowerCase())}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="space-y-2 text-gray-400">
            <p>Addis Ababa, Ethiopia</p>
            <p>hello@gibedigital.com</p>
            <p>+251-XXX-XXX-XXX</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Gibe Digital. All rights reserved.</p>
      </div>
    </div>
  </footer>
    )
}

export default Footer