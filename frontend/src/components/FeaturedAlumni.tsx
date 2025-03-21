
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, ExternalLink, Award, Briefcase, MapPin } from "lucide-react";
import { motion } from 'framer-motion';

const alumniData = [
  {
    id: 1,
    name: "Yash Chauhan",
    title: "Senior Product Designer",
    company: "Apple Inc.",
    location: "Cupertino, CA",
    imageUrl: "",
    yearGraduated: "2015",
    achievement: "Red Dot Design Award"
  },
  {
    id: 2,
    name: "Shrey Mehta",
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    imageUrl: "",
    yearGraduated: "2018",
    achievement: "Google I/O Speaker"
  },
  {
    id: 3,
    name: "Yug Buha",
    title: "Marketing Director",
    company: "Nike",
    location: "Portland, OR",
    imageUrl: "",
    yearGraduated: "2012",
    achievement: "Cannes Lion Award"
  }
];

const FeaturedAlumni = () => {
  return (
    <section id="featured" className="py-16 md:py-24 bg-gradient-alumni">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.span 
              className="inline-block px-4 py-2 mb-4 rounded-full bg-alumni-purple/10 text-alumni-purple text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Alumni Spotlight
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Featured Alumni
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Meet some of our outstanding graduates who are making an impact in their fields.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {alumniData.map((alumni, index) => (
              <motion.div 
                key={alumni.id}
                className="bg-background rounded-2xl overflow-hidden shadow-alumni-card hover:shadow-alumni-hover transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative h-56">
                  <img 
                    src={alumni.imageUrl} 
                    alt={alumni.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium">
                    Class of {alumni.yearGraduated}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{alumni.name}</h3>
                  <p className="text-muted-foreground mb-4">{alumni.title}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Briefcase size={16} />
                    <span>{alumni.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin size={16} />
                    <span>{alumni.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                    <Award size={16} className="text-alumni-gold" />
                    <span>{alumni.achievement}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="rounded-full border-alumni-purple/50 text-alumni-purple hover:bg-alumni-purple/10 transition-all">
                      View Profile
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full text-alumni-blue hover:bg-alumni-blue/10">
                        <Linkedin size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                        <ExternalLink size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple hover:shadow-md text-white px-6 transition-all button-scale">
              View All Alumni <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAlumni;
