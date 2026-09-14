import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gauge, Fuel, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  car: {
    id: number;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: string;
    fuelType: string;
    transmission: string;
    image: string;
  };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const formattedPrice = new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    maximumFractionDigits: 0,
  }).format(car.price);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden h-60">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-navy-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {car.year}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-navy-900 leading-tight">
              {car.make} {car.model}
            </h3>
            <p className="text-gold-600 font-semibold mt-1">{formattedPrice}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 my-6 pt-6 border-t border-gray-100">
          <div className="flex flex-col items-center text-center">
            <Calendar size={18} className="text-gray-400 mb-1" />
            <span className="text-xs text-gray-500">{car.year}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Gauge size={18} className="text-gray-400 mb-1" />
            <span className="text-xs text-gray-500">{car.mileage}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Fuel size={18} className="text-gray-400 mb-1" />
            <span className="text-xs text-gray-500">{car.fuelType}</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <Link
            to="/inventory"
            className="flex-1 bg-navy-900 text-white text-center py-3 rounded-xl font-bold text-sm transition-colors hover:bg-gold-600"
          >
            Inquire Now
          </Link>
          <Link
            to="/inventory"
            className="w-12 h-12 flex items-center justify-center border-2 border-navy-900 text-navy-900 rounded-xl transition-all hover:bg-navy-900 hover:text-white"
          >
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
