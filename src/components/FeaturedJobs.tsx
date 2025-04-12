import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPoundSign, FaWhatsapp } from 'react-icons/fa';

const jobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Ltd',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£60,000 - £75,000',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    featured: true,
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Marketing Manager',
    company: 'Global Brands Inc',
    location: 'Manchester, UK',
    type: 'Full-time',
    salary: '£45,000 - £55,000',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    featured: true,
    posted: '3 days ago',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'Creative Solutions',
    location: 'Remote, UK',
    type: 'Full-time',
    salary: '£40,000 - £50,000',
    logo: 'https://images.unsplash.com/photo-1622473590773-f588134b6ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    posted: '1 week ago',
  },
  {
    id: 4,
    title: 'Financial Analyst',
    company: 'Capital Investments',
    location: 'Birmingham, UK',
    type: 'Contract',
    salary: '£350 - £450 per day',
    logo: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
    featured: true,
    posted: '5 days ago',
  },
  {
    id: 5,
    title: 'Human Resources Specialist',
    company: 'HR Solutions Ltd',
    location: 'Bristol, UK',
    type: 'Part-time',
    salary: '£30,000 - £35,000 pro rata',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    posted: '2 weeks ago',
  },
  {
    id: 6,
    title: 'Product Manager',
    company: 'Innovative Tech',
    location: 'Edinburgh, UK',
    type: 'Full-time',
    salary: '£55,000 - £65,000',
    logo: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: true,
    posted: '1 day ago',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

const FeaturedJobs: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-green">Jobs</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover the latest opportunities from top employers seeking talent like you. Contact us directly to apply.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              className={`card overflow-hidden ${job.featured ? 'border-l-4 border-green' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                      <img 
                        src={job.logo} 
                        alt={`${job.company} logo`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-deep-navy hover:text-green transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">{job.company}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-4">
                  <div className="flex items-center text-gray-500 text-sm sm:text-base">
                    <FaMapMarkerAlt className="mr-2 text-gray-400 flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm sm:text-base">
                    <FaClock className="mr-2 text-gray-400 flex-shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm sm:text-base">
                    <FaPoundSign className="mr-2 text-gray-400 flex-shrink-0" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-6">
                  <span className="text-xs sm:text-sm text-gray-500">{job.posted}</span>
                  <a 
                    href={`https://wa.me/447428606908?text=I'm interested in the ${job.title} position at ${job.company}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="btn btn-primary py-2 px-3 sm:px-4 text-sm w-full sm:w-auto flex items-center justify-center space-x-2"
                  >
                    <FaWhatsapp className="flex-shrink-0" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
                
                {job.featured && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span className="bg-green text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="/jobs" className="btn btn-outline">View All Jobs</a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedJobs; 