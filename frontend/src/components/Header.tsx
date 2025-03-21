import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled 
          ? "bg-blur-overlay shadow-md py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple flex items-center justify-center">
            <span className="text-white font-bold text-lg">AC</span>
          </div>
          <h1 className="text-xl font-semibold hidden sm:block">
            <span className="text-gradient">Alumni</span> Connect
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-alumni-purple font-medium transition-colors opacity-90 hover:opacity-100">Home</a>
          <a href="#featured" className="text-foreground hover:text-alumni-purple font-medium transition-colors opacity-90 hover:opacity-100">Alumni</a>
          <a href="#events" className="text-foreground hover:text-alumni-purple font-medium transition-colors opacity-90 hover:opacity-100">Events</a>
          <a href="#stories" className="text-foreground hover:text-alumni-purple font-medium transition-colors opacity-90 hover:opacity-100">Stories</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="rounded-full border-alumni-purple text-alumni-purple hover:bg-alumni-purple hover:text-white transition-all" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button size="sm" className="rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple hover:from-alumni-blue/90 hover:to-alumni-purple/90 text-white transition-all button-scale" asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-1"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blur-overlay shadow-md animate-fade-in">
          <div className="max-w-7xl mx-auto p-5 flex flex-col space-y-4">
            <a href="#" className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Home</span>
              <ChevronRight size={18} />
            </a>
            <a href="#featured" className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Alumni</span>
              <ChevronRight size={18} />
            </a>
            <a href="#events" className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Events</span>
              <ChevronRight size={18} />
            </a>
            <a href="#stories" className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Stories</span>
              <ChevronRight size={18} />
            </a>
            <div className="flex flex-col space-y-3 pt-3">
              <Button variant="outline" className="w-full justify-center rounded-full border-alumni-purple text-alumni-purple" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button className="w-full justify-center rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple text-white" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
