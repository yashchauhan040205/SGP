
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowRight, Star } from "lucide-react";
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: "Annual Alumni Networking Gala",
    date: "November 15, 2023",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Hotel Ballroom, New York",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    attendees: 250,
    featured: true
  },
  {
    id: 2,
    title: "Tech Industry Panel Discussion",
    date: "December 5, 2023",
    time: "2:00 PM - 4:30 PM",
    location: "Innovation Center, San Francisco",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    attendees: 120,
    featured: false
  },
  {
    id: 3,
    title: "Career Fair & Mentorship Day",
    date: "January 20, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "University Main Campus",
    imageUrl: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    attendees: 350,
    featured: false
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-background via-alumni-purple/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.span 
              className="inline-block px-4 py-2 mb-4 rounded-full bg-alumni-blue/10 text-alumni-blue text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Upcoming Opportunities
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Alumni Events
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join our exclusive events to network, learn, and grow with fellow alumni from around the world.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {events.map((event, index) => (
              <motion.div 
                key={event.id}
                className={`glass-card rounded-2xl overflow-hidden shadow-sharp hover:shadow-alumni-hover transition-all ${event.featured ? 'ring-2 ring-alumni-gold' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-48 object-cover"
                  />
                  {event.featured && (
                    <div className="absolute top-4 right-4 bg-alumni-gold text-white py-1 px-3 rounded-full text-xs font-medium flex items-center">
                      <Star size={12} className="mr-1" /> Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar size={16} className="text-alumni-purple" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <Clock size={16} className="text-alumni-purple" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin size={16} className="text-alumni-purple" />
                      <span>{event.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <Users size={16} className="text-alumni-purple" />
                      <span>{event.attendees} Attending</span>
                    </div>
                  </div>
                  
                  <Button className="w-full rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple hover:shadow-md text-white transition-all button-scale">
                    RSVP Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="outline" className="rounded-full border-alumni-purple text-alumni-purple hover:bg-alumni-purple/10 transition-all">
              View All Events <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
