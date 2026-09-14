import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className={`w-8 h-8 ${isScrolled ? 'text-navy-900' : 'text-navy-900'}`} />
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-navy-900' : 'text-navy-900'}`}>
              AUTOPRIME <span className="text-gold-600">LANKA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold-600 ${
                  location.pathname === link.path ? 'text-gold-600' : 'text-navy-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+94771234567"
              className="flex items-center space-x-2 text-navy-800 hover:text-gold-600 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-semibold">+94 77 123 4567</span>
            </a>
            <a
              href="https://wa.me/94771234567"
              className="bg-navy-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold-600 transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-navy-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-gold-600' : 'text-navy-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-4 border-t border-gray-100">
                <a
                  href="tel:+94771234567"
                  className="flex items-center space-x-2 text-navy-800"
                >
                  <Phone size={20} />
                  <span className="font-semibold">+94 77 123 4567</span>
                </a>
                <a
                  href="https://wa.me/94771234567"
                  className="bg-navy-900 text-white text-center py-3 rounded-lg font-semibold"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
