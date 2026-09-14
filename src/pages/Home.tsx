import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, Banknote, HeartHandshake, Headphones, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars, testimonials } from '../data/mockData';
import CarCard from '../components/CarCard';
import SectionHeading from '../components/SectionHeading';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredCars = cars.filter(car => car.featured).slice(0, 6);

  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-gold-600" />,
      title: 'Verified Cars',
      description: 'Every vehicle undergoes a rigorous 200-point inspection before listing.'
    },
    {
      icon: <Banknote className="w-10 h-10 text-gold-600" />,
      title: 'Best Price Guarantee',
      description: 'Transparent pricing with no hidden costs, giving you the best value for your money.'
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-gold-600" />,
      title: 'Easy Financing',
      description: 'Flexible leasing and loan options tailored to your financial needs.'
    },
    {
      icon: <Headphones className="w-10 h-10 text-gold-600" />,
      title: 'After-Sales Service',
      description: 'Comprehensive support and maintenance services for a worry-free ownership.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-navy-950/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Find Your <span className="text-gold-500">Perfect</span> Car Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Experience luxury and reliability with AutoPrime Lanka. 
            The most trusted name in Sri Lanka for premium automobiles.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl max-w-4xl mx-auto border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase text-gray-300 pl-1">Make</label>
                <select className="w-full bg-white text-navy-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 outline-none appearance-none cursor-pointer">
                  <option>All Makes</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Suzuki</option>
                </select>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase text-gray-300 pl-1">Price Range</label>
                <select className="w-full bg-white text-navy-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 outline-none appearance-none cursor-pointer">
                  <option>All Prices</option>
                  <option>Under 10M</option>
                  <option>10M - 25M</option>
                  <option>25M+</option>
                </select>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase text-gray-300 pl-1">Year</label>
                <select className="w-full bg-white text-navy-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 outline-none appearance-none cursor-pointer">
                  <option>Any Year</option>
                  <option>2020 & Newer</option>
                  <option>2015 - 2020</option>
                </select>
              </div>
              <div className="flex items-end">
                <Link
                  to="/inventory"
                  className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-lg"
                >
                  <Search size={20} />
                  <span>Search Cars</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Inventory" 
            subtitle="Hand-picked premium vehicles currently available in our Colombo showroom."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/inventory"
              className="inline-flex items-center space-x-2 text-navy-900 font-bold text-lg hover:text-gold-600 transition-colors group"
            >
              <span>View Full Inventory</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-navy-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose AutoPrime" 
            subtitle="We are committed to providing the most professional and transparent car buying experience in Sri Lanka."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-50 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Real experiences from our valued customers across the island."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-navy-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl relative"
                >
                  <Quote className="absolute top-8 right-8 text-gold-500/20 w-24 h-24" />
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name}
                      className="w-24 h-24 rounded-full border-4 border-gold-500 object-cover"
                    />
                    <div>
                      <p className="text-xl italic text-gray-300 mb-6 leading-relaxed">
                        "{testimonials[activeTestimonial].comment}"
                      </p>
                      <div>
                        <h4 className="text-xl font-bold text-gold-500">{testimonials[activeTestimonial].name}</h4>
                        <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center space-x-3 mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === index ? 'w-8 bg-gold-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
              Ready to Own Your <span className="text-gold-500">Dream Car?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Contact our sales specialists today and get a personalized consultation for your vehicle needs.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="bg-gold-600 hover:bg-gold-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-xl hover:-translate-y-1"
              >
                Contact Us Now
              </Link>
              <Link
                to="/inventory"
                className="bg-white text-navy-900 font-bold px-10 py-4 rounded-xl text-lg transition-all hover:bg-gray-100 shadow-xl hover:-translate-y-1"
              >
                Browse Inventory
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
