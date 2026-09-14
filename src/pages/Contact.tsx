import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredCar: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our team will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', preferredCar: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have questions? We're here to help. Contact us via form or visit our showroom."
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-navy-900 mb-8">Contact Info</h3>
                
                <ul className="space-y-8">
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900">Our Showroom</h4>
                      <p className="text-gray-500">123 Galle Road, Colombo 03, Sri Lanka</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900">Phone Numbers</h4>
                      <p className="text-gray-500">+94 77 123 4567</p>
                      <p className="text-gray-500">+94 11 234 5678</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900">Email Address</h4>
                      <p className="text-gray-500">info@autoprimelanka.com</p>
                      <p className="text-gray-500">sales@autoprimelanka.com</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900">Opening Hours</h4>
                      <p className="text-gray-500">Mon - Fri: 9 AM - 6 PM</p>
                      <p className="text-gray-500">Sat: 9 AM - 4 PM</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 pt-10 border-t border-gray-100">
                  <a
                    href="https://wa.me/94771234567"
                    className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all hover:brightness-110 shadow-lg"
                  >
                    <MessageCircle size={22} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-navy-200 h-64 rounded-[2rem] overflow-hidden relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                  alt="Map Location" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full shadow-2xl">
                    <MapPin className="text-navy-900" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-navy-900 text-white px-4 py-2 rounded-lg text-sm font-bold">
                  View on Google Maps
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
              >
                <h3 className="text-3xl font-bold text-navy-900 mb-2">Send us a Message</h3>
                <p className="text-gray-500 mb-10">Fill out the form below and one of our consultants will be in touch with you shortly.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900 uppercase tracking-widest pl-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ruwan Perera"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-gold-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900 uppercase tracking-widest pl-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 077 123 4567"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-gold-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900 uppercase tracking-widest pl-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. ruwan@example.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-gold-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900 uppercase tracking-widest pl-1">Preferred Car</label>
                      <select
                        name="preferredCar"
                        value={formData.preferredCar}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-gold-500 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a model (Optional)</option>
                        <option value="Toyota Land Cruiser">Toyota Land Cruiser</option>
                        <option value="Honda Civic">Honda Civic</option>
                        <option value="Suzuki Swift">Suzuki Swift</option>
                        <option value="Mercedes-Benz C-Class">Mercedes-Benz C-Class</option>
                        <option value="BMW 5 Series">BMW 5 Series</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 uppercase tracking-widest pl-1">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-gold-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-navy-900 hover:bg-gold-600 text-white font-bold px-12 py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl hover:-translate-y-1"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
