import React from 'react';
import { motion } from 'framer-motion';
import { FaChild, FaSchool, FaCalendarAlt } from 'react-icons/fa';

const categories = [
  {
    id: 1,
    name: 'Childcare',
    icon: <FaChild className="text-green" size={24} />,
    count: 256,
    bgClass: 'bg-blue-50',
  },
  {
    id: 2,
    name: 'Schools',
    icon: <FaSchool className="text-green" size={24} />,
    count: 312,
    bgClass: 'bg-purple-50',
  },
  {
    id: 3,
    name: 'Agency Shifts',
    icon: <FaCalendarAlt className="text-green" size={24} />,
    count: 50,
    bgClass: 'bg-amber-50',
  }
];

const JobCategories: React.FC = () => {
  return (
    <section className="section bg-gray-50 pt-0">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Browse Jobs by <span className="text-green">Category</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore opportunities in our specialized sectors
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full ${category.bgClass} flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-2">{category.name}</h3>
                <p className="text-gray-500">{category.count} Jobs Available</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories; 