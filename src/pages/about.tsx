import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FaHeart, FaHandshake, FaStar, FaUserTie } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-deep-navy">About <span className="text-green">Action Staffing</span></h1>
              
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-deep-navy">Our Story</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founded in 2015, Action Staffing has established itself as a leading recruitment agency specializing in the home care, care homes, and hospitality sectors. What began as a small operation has grown into a trusted partner for both job seekers and employers across the United Kingdom.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team consists of experienced recruiters who understand the unique demands and qualifications needed in these specialized fields. We take pride in our personalized approach, taking the time to understand both our clients' requirements and our candidates' career aspirations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At Action Staffing, we believe that finding the right job should be straightforward and stress-free. Our mission is to connect talented professionals with rewarding opportunities where they can thrive and make a difference.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-light flex items-center justify-center mr-4">
                      <FaHandshake className="text-green" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-deep-navy">Our Mission</h3>
                  </div>
                  <p className="text-gray-600">
                    To connect talented individuals with employers who value their skills and provide opportunities for growth and development, creating meaningful and lasting professional relationships.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-light flex items-center justify-center mr-4">
                      <FaHeart className="text-green" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-deep-navy">Our Values</h3>
                  </div>
                  <p className="text-gray-600">
                    Integrity, transparency, and dedication to excellence guide everything we do. We believe in building relationships based on trust and delivering results that exceed expectations.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deep-navy">Our Expertise</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center mr-4">
                      <FaUserTie className="text-green" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-navy mb-2">Specialized Recruitment</h3>
                      <p className="text-gray-600">
                        We focus on the home care, care homes, and hotel sectors, allowing us to develop deep industry knowledge and connections. Our specialized approach ensures we understand the unique requirements of these fields.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex-shrink-0 flex items-center justify-center mr-4">
                      <FaHandshake className="text-green" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-navy mb-2">Personalized Service</h3>
                      <p className="text-gray-600">
                        Each candidate receives individual attention and guidance. We take the time to understand your skills, experience, and career goals to find positions that truly match your aspirations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex-shrink-0 flex items-center justify-center mr-4">
                      <FaStar className="text-green" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-navy mb-2">Proven Success</h3>
                      <p className="text-gray-600">
                        With a 98% success rate, our track record speaks for itself. We've helped thousands of candidates find fulfilling roles and assisted numerous employers in building strong teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About; 