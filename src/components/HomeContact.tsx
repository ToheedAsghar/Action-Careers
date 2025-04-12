import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from './ContactForm';

const HomeContact: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaMapMarkerAlt className="text-green text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-deep-navy mb-1">Our Address</h3>
                  <p className="text-gray-600">
                    Office 4505 182-184 High Street North<br />
                    East Ham, London E6 2JA<br />
                    United Kingdom
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaPhone className="text-green text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-deep-navy mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+447428606908" className="hover:text-green transition-colors">
                      +44 7428 606908
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaEnvelope className="text-green text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-deep-navy mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@actionstaffing.co.uk" className="hover:text-green transition-colors">
                      info@actionstaffing.co.uk
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaClock className="text-green text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-deep-navy mb-1">Working Hours</h3>
                  <p className="text-gray-600">
                    Open 24 hours, 7 days a week<br />
                    Available for inquiries anytime<br />
                    365 days a year
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps?q=London,UK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green font-medium hover:underline inline-flex items-center"
            >
              View larger map
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          {/* Contact Form Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6">Send Us a Message</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact; 