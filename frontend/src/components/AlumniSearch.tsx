
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

const AlumniSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Alumni</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Search our extensive database of alumni by name, graduation year, industry, or location.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search by name, year, company..."
                className="pl-10 h-12 rounded-full border-alumni-purple/30 focus:border-alumni-purple"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              className="h-12 rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple hover:shadow-md text-white transition-all button-scale"
            >
              Search
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <Button 
              variant="outline" 
              className="rounded-full border-alumni-purple/30 hover:border-alumni-purple/70 hover:bg-alumni-purple/5"
            >
              Class of 2023
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full border-alumni-purple/30 hover:border-alumni-purple/70 hover:bg-alumni-purple/5"
            >
              Tech Industry
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full border-alumni-purple/30 hover:border-alumni-purple/70 hover:bg-alumni-purple/5"
            >
              San Francisco
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full border-alumni-purple/30 hover:border-alumni-purple/70 hover:bg-alumni-purple/5"
            >
              Entrepreneurs
            </Button>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 text-center shadow-sharp">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
              <p className="text-muted-foreground text-sm">
                Use our advanced search tool to find alumni based on specific criteria.
              </p>
            </div>
            <Button variant="outline" className="rounded-full border-alumni-purple text-alumni-purple hover:bg-alumni-purple/10 transition-all">
              Advanced Filters <Filter size={16} className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlumniSearch;
