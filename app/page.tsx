'use client'
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HomePage from "./home/HomePage";
import { AnimatePresence, motion } from "framer-motion";
import AboutPage from "./about/AboutPage";
import ServicesPage from "./services/ServicesPage";
// import PortfolioPage from "./portfolio/PortfolioPage";
import BookingPage from "./booking/BookingPage";
import ContactPage from "./contact/ContactPage";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const toggleScrollVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };

    window.addEventListener('scroll', toggleScrollVisibility);
    return () => window.removeEventListener('scroll', toggleScrollVisibility);
  }, []);

  // Reset scroll position when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderCurrentPage = (setCurrentPage: (page: string) => void) => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage setCurrentPage={setCurrentPage} />;
      // case 'portfolio': return <PortfolioPage setCurrentPage={setCurrentPage} />;
      case 'booking': return <BookingPage setCurrentPage={setCurrentPage} />;
      case 'contact': return <ContactPage setCurrentPage={setCurrentPage} />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderCurrentPage(setCurrentPage)}
        </motion.div>
      </AnimatePresence>
      
      <Footer setCurrentPage={setCurrentPage} />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrollVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="
              fixed bottom-6 right-6 z-50
              w-12 h-12 bg-blue-600 hover:bg-blue-700
              text-white rounded-full shadow-lg
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              md:bottom-8 md:right-8
              flex items-center justify-center
              backdrop-blur-sm bg-opacity-90
            "
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}