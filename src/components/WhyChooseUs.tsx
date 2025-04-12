import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheck, 
  FaHandshake, 
  FaUserTie, 
  FaClock, 
  FaGlobe, 
  FaStar 
} from 'react-icons/fa';

const benefits = [
  {
    id: 1,
    title: 'Specialized Expertise',
    description: 'Our recruiters have specialized knowledge in home care, care homes, and hotel industries.',
    icon: <FaUserTie className="text-green" size={24} />,
    bgClass: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Personalized Service',
    description: 'We provide personalized attention to understand your unique career goals.',
    icon: <FaHandshake className="text-green" size={24} />,
    bgClass: 'bg-purple-50',
  },
  {
    id: 3,
    title: 'Quick Response Time',
    description: 'Our team responds quickly to all inquiries and maintains open communication.',
    icon: <FaClock className="text-green" size={24} />,
    bgClass: 'bg-amber-50',
  },
  {
    id: 4,
    title: 'Wide Network',
    description: 'We maintain relationships with top employers across the United Kingdom.',
    icon: <FaGlobe className="text-green" size={24} />,
    bgClass: 'bg-green-50',
  },
  {
    id: 5,
    title: 'High Success Rate',
    description: '98% of our candidates successfully secure positions that match their skills.',
    icon: <FaStar className="text-green" size={24} />,
    bgClass: 'bg-red-50',
  },
  {
    id: 6,
    title: 'No Upfront Fees',
    description: 'Our service is completely free for job seekers - you pay nothing to find your dream job.',
    icon: <FaCheck className="text-green" size={24} />,
    bgClass: 'bg-orange-50',
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="text-green">Action Staffing</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We're dedicated to connecting talented professionals with the perfect opportunities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full ${benefit.bgClass} flex items-center justify-center mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm sm:text-base">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gray-50 p-6 sm:p-8 rounded-lg mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xl font-semibold text-deep-navy mb-3">Ready to find your perfect match?</p>
          <p className="text-gray-600 mb-6">Contact us today and let us help you take the next step in your career journey.</p>
          <a 
            href="https://wa.me/447428606908"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center justify-center space-x-2"
          >
            <FaHandshake size={18} />
            <span>Contact Us Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 