import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center">
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Find Your <span className="text-green">Dream Job</span> Today
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Action Staffing connects talented young professionals with the right employers. Browse our listings and contact us directly for your next career move.
            </motion.p>
            
            {/* Connect with a Recruiter CTA */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a 
                href="https://api.whatsapp.com/send?phone=+447428606908&text=Hi%2C%20I%27m%20interested%20in%20your%20recruitment%20services.%20Can%20you%20help%20me%20find%20my%20dream%20job%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green to-green-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <FaWhatsapp className="mr-3 text-xl" />
                <span className="text-shadow-sm">Connect with a Recruiter</span>
              </a>
              <p className="mt-4 text-gray-600 italic">Take the first step toward your dream career</p>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-deep-navy">5,000+</p>
                <p className="text-gray-600">Active Jobs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-deep-navy">10,000+</p>
                <p className="text-gray-600">Candidates</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-deep-navy">98%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Professional Businesswoman Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[450px] h-[450px] flex items-center justify-center">
              <div className="absolute w-[420px] h-[420px] bg-green/10 rounded-full transform -translate-x-2 -translate-y-2"></div>
              <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional businesswoman in corporate attire"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-light/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-100 to-transparent" />
    </div>
  );
};

export default Hero; 