import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Mail, Share2, Globe, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-gold-500" />
              <span className="text-xl font-bold tracking-tight">
                AUTOPRIME <span className="text-gold-500">LANKA</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your premier destination for high-quality, verified vehicles in Sri Lanka. 
              We bring you the best deals with unmatched transparency and service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-gold-600 pl-3">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/inventory" className="text-gray-400 hover:text-gold-500 transition-colors">Car Inventory</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors">About Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gold-500 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-gold-600 pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-gold-600 shrink-0" />
                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-gold-600 shrink-0" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-gold-600 shrink-0" />
                <span>info@autoprimelanka.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-gold-600 pl-3">Opening Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AutoPrime Lanka. All rights reserved. Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
