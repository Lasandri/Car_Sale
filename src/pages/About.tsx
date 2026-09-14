import { motion } from 'framer-motion';
import { Car, ShieldCheck, Wallet, Wrench, Truck, Award, Users, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { teamMembers } from '../data/mockData';

const About = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8 text-white" />,
      title: 'Car Sales',
      description: 'Wide range of high-quality Japanese and European vehicles to choose from.'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Trade-In',
      description: 'Get the best market value for your current vehicle when you upgrade with us.'
    },
    {
      icon: <Wallet className="w-8 h-8 text-white" />,
      title: 'Financing Assistance',
      description: 'Customized leasing plans from leading banks and financial institutions.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: 'Vehicle Inspection',
      description: 'Comprehensive 200-point physical and technical inspection for every car.'
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: 'Home Delivery',
      description: 'We can deliver your dream car right to your doorstep anywhere in Sri Lanka.'
    },
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: 'After-Sales Support',
      description: 'Dedicated service department for ongoing maintenance and parts.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Story Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Legacy</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-8 leading-tight">
                Driving Excellence in Sri Lanka Since 2010
              </h2>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  AutoPrime Lanka began with a simple vision: to redefine the car buying experience in Sri Lanka. 
                  What started as a small family-owned showroom in Colombo has grown into the island's most 
                  trusted premier automobile dealership.
                </p>
                <p>
                  We believe that buying a car is more than just a transaction; it's a significant milestone 
                  in our customers' lives. That's why we prioritize transparency, quality, and exceptional 
                  service above all else.
                </p>
                <p>
                  Our commitment to excellence has earned us numerous awards and, more importantly, 
                  the loyalty of thousands of happy drivers across the country.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center text-navy-900">
                    <Award size={32} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-navy-900">14+</h4>
                    <p className="text-gray-500">Years of Trust</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center text-navy-900">
                    <Users size={32} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-navy-900">5k+</h4>
                    <p className="text-gray-500">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Showroom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold-500 rounded-3xl -z-10 hidden md:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-navy-50 rounded-full -z-20 blur-3xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Premium Services" 
            subtitle="We offer a comprehensive suite of services to ensure your car buying journey is as smooth as possible."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gold-600 rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Meet Our Experts" 
            subtitle="Our professional team is dedicated to helping you find the perfect vehicle that suits your lifestyle."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-64 h-80 rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-2xl font-bold text-navy-900">{member.name}</h4>
                <p className="text-gold-600 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="flex items-center space-x-3 text-navy-900">
              <CheckCircle className="text-gold-600" size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Registered Dealer</span>
            </div>
            <div className="flex items-center space-x-3 text-navy-900">
              <CheckCircle className="text-gold-600" size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Customer Satisfaction</span>
            </div>
            <div className="flex items-center space-x-3 text-navy-900">
              <CheckCircle className="text-gold-600" size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center space-x-3 text-navy-900">
              <CheckCircle className="text-gold-600" size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">SLADA Member</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
