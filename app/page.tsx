'use client'
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomePage from "./home/HomePage";
import { AnimatePresence, motion } from "framer-motion";
import AboutPage from "./about/AboutPage";
import ServicesPage from "./services/ServicesPage";
import PortfolioPage from "./portfolio/PortfolioPage";
import BookingPage from "./booking/BookingPage";
import ContactPage from "./contact/ContactPage";
import Footer from "@/components/Footer";


export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const renderCurrentPage = (setCurrentPage: (page: string) => void) => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'portfolio': return <PortfolioPage setCurrentPage={setCurrentPage} />;
      case 'booking': return <BookingPage setCurrentPage={setCurrentPage} />;
      case 'contact': return <ContactPage setCurrentPage={setCurrentPage} />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };
  return (
    <div>
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
    </div>
  );
}
