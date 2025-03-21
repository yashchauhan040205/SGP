
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-alumni-blue/10 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-alumni-purple/10 filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-alumni-gold/10 filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 rounded-full bg-alumni-purple/10 text-alumni-purple text-sm font-medium">
              Welcome to Alumni Connect
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Connect with <span className="text-gradient">alumni</span> and build your professional <span className="text-gold-gradient">network</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join our exclusive community of graduates to access networking opportunities, mentorship, and career advancement resources.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple hover:shadow-lg text-white px-8 transition-all button-scale"
            >
              Join Now <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-alumni-purple text-alumni-purple hover:bg-alumni-purple/10 transition-all"
            >
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Feature Stats */}
        <motion.div 
          className="mt-16 md:mt-24 max-w-4xl mx-auto glass-card rounded-2xl shadow-sharp p-8 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-alumni-blue mb-2">10k+</h3>
            <p className="text-muted-foreground">Active Alumni</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-alumni-purple mb-2">500+</h3>
            <p className="text-muted-foreground">Companies</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-alumni-gold mb-2">150+</h3>
            <p className="text-muted-foreground">Annual Events</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
