
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, PhoneCall, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-alumni-purple/10 to-background pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AC</span>
                </div>
                <h3 className="text-xl font-semibold">
                  <span className="text-gradient">Alumni</span> Connect
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Connecting graduates for networking, mentorship, and professional growth.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-alumni-blue/10 text-alumni-blue">
                  <Facebook size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-alumni-blue/10 text-alumni-blue">
                  <Twitter size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-alumni-purple/10 text-alumni-purple">
                  <Instagram size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-alumni-blue/10 text-alumni-blue">
                  <Linkedin size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                </li>
                <li>
                  <a href="#featured" className="text-muted-foreground hover:text-foreground transition-colors">Alumni Directory</a>
                </li>
                <li>
                  <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">Events</a>
                </li>
                <li>
                  <a href="#stories" className="text-muted-foreground hover:text-foreground transition-colors">Success Stories</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-alumni-purple" />
                  <a href="mailto:info@alumniconnect.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    info@alumniconnect.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall size={16} className="text-alumni-purple" />
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-alumni-purple mt-1" />
                  <span className="text-muted-foreground">
                    1234 Alumni Way, College Town, CA 90210
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Subscribe to Newsletter</h4>
              <p className="text-muted-foreground mb-4">Stay updated with the latest alumni news and events.</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-full border-alumni-purple/30 focus:border-alumni-purple"
                />
                <Button className="rounded-full bg-gradient-to-r from-alumni-blue to-alumni-purple hover:shadow-md text-white transition-all button-scale">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2023 Alumni Connect. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-alumni-purple/30 hover:border-alumni-purple hover:bg-alumni-purple/5"
              onClick={scrollToTop}
            >
              <ArrowUp size={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
