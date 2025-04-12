import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaAngleRight,
  FaWhatsapp
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-deep-navy text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <a href="/" className="text-xl sm:text-2xl font-bold font-heading">
                Action<span className="text-green">Staffing</span>
              </a>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
                Connecting talented professionals with top employers across the UK. Your career success is our mission.
              </p>
            </div>
            
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://facebook.com" className="bg-navy-light hover:bg-green w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="https://twitter.com" className="bg-navy-light hover:bg-green w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaTwitter size={14} />
              </a>
              <a href="https://linkedin.com" className="bg-navy-light hover:bg-green w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaLinkedinIn size={14} />
              </a>
              <a href="https://instagram.com" className="bg-navy-light hover:bg-green w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a href="/" className="text-gray-300 hover:text-green transition-colors duration-300 flex items-center">
                  <FaAngleRight className="mr-2 text-green text-xs sm:text-sm flex-shrink-0" />
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-green transition-colors duration-300 flex items-center">
                  <FaAngleRight className="mr-2 text-green text-xs sm:text-sm flex-shrink-0" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-green transition-colors duration-300 flex items-center">
                  <FaAngleRight className="mr-2 text-green text-xs sm:text-sm flex-shrink-0" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-green mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Office 4505 182-184 High Street North<br />
                  East Ham, London E6 2JA<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-green mr-2 sm:mr-3 flex-shrink-0" />
                <a href="tel:+447428606908" className="text-gray-300 hover:text-green transition-colors duration-300">
                  +44 7428 606908
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-green mr-2 sm:mr-3 flex-shrink-0" />
                <a 
                  href="https://wa.me/447428606908" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green transition-colors duration-300"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-green mr-2 sm:mr-3 flex-shrink-0" />
                <a href="mailto:info@actionstaffing.co.uk" className="text-gray-300 hover:text-green transition-colors duration-300">
                  info@actionstaffing.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {currentYear} Action Staffing. All rights reserved.
          </p>
          
          <div className="mt-3 md:mt-0">
            <ul className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="/privacy" className="hover:text-green transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-green transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-green transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 