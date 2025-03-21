
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedAlumni from '@/components/FeaturedAlumni';
import EventsSection from '@/components/EventsSection';
import SuccessStories from '@/components/SuccessStories';
import AlumniSearch from '@/components/AlumniSearch';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Account for header height
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      <main>
        <Hero />
        <FeaturedAlumni />
        <EventsSection />
        <SuccessStories />
        <AlumniSearch />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
