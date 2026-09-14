import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, SlidersHorizontal } from 'lucide-react';
import { cars } from '../data/mockData';
import CarCard from '../components/CarCard';
import SectionHeading from '../components/SectionHeading';

const Inventory = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    make: 'All',
    priceRange: 'All',
    fuelType: 'All',
    transmission: 'All',
    year: 'All',
  });

  const uniqueMakes = ['All', ...Array.from(new Set(cars.map(car => car.make)))];
  const uniqueFuelTypes = ['All', ...Array.from(new Set(cars.map(car => car.fuelType)))];
  const uniqueTransmissions = ['All', ...Array.from(new Set(cars.map(car => car.transmission)))];

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (filters.make !== 'All' && car.make !== filters.make) return false;
      if (filters.fuelType !== 'All' && car.fuelType !== filters.fuelType) return false;
      if (filters.transmission !== 'All' && car.transmission !== filters.transmission) return false;
      
      if (filters.priceRange !== 'All') {
        if (filters.priceRange === 'Under 10M' && car.price >= 10000000) return false;
        if (filters.priceRange === '10M - 25M' && (car.price < 10000000 || car.price > 25000000)) return false;
        if (filters.priceRange === '25M+' && car.price <= 25000000) return false;
      }
      
      if (filters.year !== 'All') {
        if (filters.year === '2020 & Newer' && car.year < 2020) return false;
        if (filters.year === '2015 - 2020' && (car.year < 2015 || car.year > 2020)) return false;
      }

      return true;
    });
  }, [filters]);

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      make: 'All',
      priceRange: 'All',
      fuelType: 'All',
      transmission: 'All',
      year: 'All',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Vehicle Inventory" 
          subtitle="Browse our collection of premium, quality-checked vehicles."
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center space-x-2 bg-navy-900 text-white py-3 rounded-xl font-bold"
          >
            <Filter size={20} />
            <span>Show Filters</span>
          </button>

          {/* Sidebar Filters */}
          <aside className={`
            fixed inset-0 z-[60] lg:relative lg:z-0 lg:block lg:w-1/4
            bg-white lg:bg-transparent lg:inset-auto
            transition-transform duration-300 transform
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
            <div className="h-full lg:h-auto overflow-y-auto lg:overflow-visible bg-white p-6 lg:rounded-2xl border border-gray-100 shadow-sm lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-8 lg:hidden">
                <h3 className="text-xl font-bold text-navy-900">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="hidden lg:flex items-center space-x-2 mb-8 text-navy-900">
                <SlidersHorizontal size={20} />
                <h3 className="text-xl font-bold">Filter By</h3>
              </div>

              <div className="space-y-8">
                {/* Make */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">Brand / Make</label>
                  <select 
                    value={filters.make}
                    onChange={(e) => updateFilter('make', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500 outline-none"
                  >
                    {uniqueMakes.map(make => <option key={make} value={make}>{make}</option>)}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">Price Range</label>
                  <select 
                    value={filters.priceRange}
                    onChange={(e) => updateFilter('priceRange', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500 outline-none"
                  >
                    <option value="All">All Prices</option>
                    <option value="Under 10M">Under 10M LKR</option>
                    <option value="10M - 25M">10M - 25M LKR</option>
                    <option value="25M+">25M+ LKR</option>
                  </select>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">Manufacturing Year</label>
                  <select 
                    value={filters.year}
                    onChange={(e) => updateFilter('year', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500 outline-none"
                  >
                    <option value="All">Any Year</option>
                    <option value="2020 & Newer">2020 & Newer</option>
                    <option value="2015 - 2020">2015 - 2020</option>
                  </select>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">Fuel Type</label>
                  <select 
                    value={filters.fuelType}
                    onChange={(e) => updateFilter('fuelType', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500 outline-none"
                  >
                    {uniqueFuelTypes.map(fuel => <option key={fuel} value={fuel}>{fuel}</option>)}
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">Transmission</label>
                  <select 
                    value={filters.transmission}
                    onChange={(e) => updateFilter('transmission', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500 outline-none"
                  >
                    {uniqueTransmissions.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <button 
                  onClick={clearFilters}
                  className="w-full border-2 border-gray-200 text-gray-500 font-bold py-3 rounded-xl transition-colors hover:bg-gray-100"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Car Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-500 font-medium">
                Showing <span className="text-navy-900 font-bold">{filteredCars.length}</span> vehicles
              </p>
            </div>

            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCars.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CarCard car={car} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-300">
                <h3 className="text-xl font-bold text-navy-900 mb-2">No vehicles found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={clearFilters}
                  className="bg-navy-900 text-white px-8 py-3 rounded-xl font-bold"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {filteredCars.length > 0 && (
              <div className="mt-12 text-center">
                <button className="bg-white border-2 border-navy-900 text-navy-900 px-10 py-4 rounded-xl font-bold transition-all hover:bg-navy-900 hover:text-white">
                  Load More Vehicles
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
