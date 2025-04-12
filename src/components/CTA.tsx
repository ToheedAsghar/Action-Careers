import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const CTA: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-deep-navy to-navy-light text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-light/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-navy-light/30 to-transparent" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Interested in our <span className="text-green">recruitment services</span>?
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact Action Staffing today to discuss your career options or hiring needs. Our expert team is ready to assist you with personalized recruitment solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="https://wa.me/447428606908" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green text-white hover:bg-green-hover flex items-center justify-center space-x-2 text-sm sm:text-base py-2 sm:py-3"
              >
                <FaWhatsapp className="flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
              
              <a 
                href="mailto:info@actionstaffing.co.uk" 
                className="btn bg-white text-deep-navy hover:bg-gray-100 flex items-center justify-center space-x-2 text-sm sm:text-base py-2 sm:py-3"
              >
                <FaEnvelope className="flex-shrink-0" />
                <span>Email Us</span>
              </a>
              
              <a 
                href="tel:+447428606908" 
                className="btn bg-orange text-white hover:bg-orange-hover flex items-center justify-center space-x-2 text-sm sm:text-base py-2 sm:py-3"
              >
                <FaPhone className="flex-shrink-0" />
                <span>Call Us</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-gray-200 mb-4 text-sm sm:text-base">Reach out via WhatsApp, email, or phone to discuss your requirements.</p>
              
              <div className="absolute -top-3 left-24 w-8 h-8 bg-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 mt-6 sm:mt-8">Discuss Your Needs</h3>
              <p className="text-gray-200 mb-4 text-sm sm:text-base">Our team will understand your career goals or hiring requirements.</p>
              
              <div className="absolute top-32 -right-6 w-10 h-10 bg-orange rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 mt-6 sm:mt-8">Get Matched</h3>
              <p className="text-gray-200 mb-4 text-sm sm:text-base">We'll match candidates with the right opportunities or employers with top talent.</p>
              
              <div className="absolute bottom-8 -right-3 w-8 h-8 bg-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 mt-6 sm:mt-8">Achieve Success</h3>
              <p className="text-gray-200 text-sm sm:text-base">Complete the hiring process with our guidance for the best outcomes.</p>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20 border-t border-white/20 pt-8 md:pt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green mb-2">5,000+</p>
            <p className="text-white text-sm sm:text-base">Active Jobs</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green mb-2">3,500+</p>
            <p className="text-white text-sm sm:text-base">Companies</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green mb-2">10,000+</p>
            <p className="text-white text-sm sm:text-base">Candidates</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green mb-2">98%</p>
            <p className="text-white text-sm sm:text-base">Success Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 