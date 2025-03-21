
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, ArrowLeft, Play } from "lucide-react";
import { motion } from 'framer-motion';

const stories = [
  {
    id: 1,
    name: "David Rodriguez",
    title: "Founder & CEO, TechStar",
    quote: "The alumni network was instrumental in helping me secure my first round of funding. The mentorship and connections I made through Alumni Connect directly contributed to my success.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    yearGraduated: "2014",
    videoUrl: "#"
  },
  {
    id: 2,
    name: "Emma Williams",
    title: "Lead Researcher, BioMed Innovations",
    quote: "The collaborative environment fostered within our alumni community led to groundbreaking research partnerships. My current work in medical technology stemmed from connections made through Alumni Connect.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    yearGraduated: "2016",
    videoUrl: "#"
  },
  {
    id: 3,
    name: "James Wilson",
    title: "International Aid Coordinator, Global Relief",
    quote: "Through the alumni network, I was able to coordinate relief efforts across five countries. The diverse perspectives and expertise within our community helped us develop more effective humanitarian aid strategies.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    yearGraduated: "2011",
    videoUrl: "#"
  }
];

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const story = stories[currentStory];

  return (
    <section id="stories" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-alumni-purple/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-alumni-blue/5 filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.span 
              className="inline-block px-4 py-2 mb-4 rounded-full bg-alumni-gold/10 text-alumni-gold text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Inspirational Journeys
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Success Stories
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover how our alumni have leveraged their education and network to achieve remarkable success.
            </motion.p>
          </div>

          <motion.div 
            className="bg-gradient-to-r from-alumni-purple/5 to-alumni-blue/5 rounded-3xl p-6 md:p-10 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-10 left-10">
              <Quote size={50} className="text-alumni-purple/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <blockquote className="text-lg md:text-xl font-medium italic mb-8 relative z-10">
                  "{story.quote}"
                </blockquote>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold">{story.name}</h3>
                  <p className="text-muted-foreground">{story.title}</p>
                  <p className="text-sm text-alumni-gold">Class of {story.yearGraduated}</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Button 
                    className="rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple hover:shadow-md text-white transition-all button-scale"
                  >
                    <Play size={16} className="mr-2" /> Watch Story
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full" 
                      onClick={prevStory}
                    >
                      <ArrowLeft size={18} />
                    </Button>
                    <span className="text-sm font-medium">
                      {currentStory + 1}/{stories.length}
                    </span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full" 
                      onClick={nextStory}
                    >
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative aspect-square">
                  <img 
                    src={story.imageUrl}
                    alt={story.name} 
                    className="w-full h-full object-cover rounded-2xl shadow-sharp"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple hover:shadow-md text-white px-6 transition-all button-scale">
              View All Success Stories <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
