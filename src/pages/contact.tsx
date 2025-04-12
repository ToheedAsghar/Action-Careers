import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaMapMarked } from 'react-icons/fa';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await axios.post('/api/contact', formData);
      
      setSubmitStatus({
        success: true,
        message: response.data.message || 'Your message has been sent successfully. We will contact you soon!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      let errorMessage = 'Failed to send message. Please try again later.';
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-deep-navy text-center">Contact <span className="text-green">Us</span></h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Have a question or want to discuss your career options? We're here to help. Reach out to our team through any of the methods below.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-deep-navy">Get In Touch</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center mr-4">
                        <FaMapMarkerAlt className="text-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-deep-navy">Our Address</h3>
                        <p className="text-gray-600">
                          Office 4505 182-184 High Street North<br />
                          East Ham, London E6 2JA<br />
                          United Kingdom
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex-shrink-0 flex items-center justify-center mr-4">
                        <FaPhone className="text-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-deep-navy">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+447428606908" className="hover:text-green transition-colors">
                            +44 7428 606908
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex-shrink-0 flex items-center justify-center mr-4">
                        <FaWhatsapp className="text-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-deep-navy">WhatsApp</h3>
                        <p className="text-gray-600">
                          <a 
                            href="https://wa.me/447428606908" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green transition-colors"
                          >
                            +44 7428 606908
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex-shrink-0 flex items-center justify-center mr-4">
                        <FaEnvelope className="text-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-deep-navy">Email</h3>
                        <p className="text-gray-600">
                          <a 
                            href="mailto:info@action-careers.co.uk" 
                            className="hover:text-green transition-colors"
                          >
                            info@action-careers.co.uk
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex-shrink-0 flex items-center justify-center mr-4">
                        <FaClock className="text-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-deep-navy">Working Hours</h3>
                        <p className="text-gray-600">
                          Open 24 hours, 7 days a week<br />
                          Available for inquiries anytime<br />
                          365 days a year
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-deep-navy flex items-center">
                    <FaMapMarked className="text-green mr-2" />
                    Our Location
                  </h3>
                  <div className="rounded-lg overflow-hidden h-48 bg-gray-200">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528558000000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1654656896324!5m2!1sen!2suk" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6 text-deep-navy">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus.message && (
                    <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn btn-primary py-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="bg-green/10 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-deep-navy mb-2">Prefer direct contact?</h3>
              <p className="text-gray-600 mb-4">
                For immediate assistance, reach out to us directly via WhatsApp or phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/447428606908" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-green text-white hover:bg-green-hover flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
                
                <a 
                  href="tel:+447428606908" 
                  className="btn bg-deep-navy text-white hover:bg-navy-hover flex items-center justify-center space-x-2"
                >
                  <FaPhone size={16} />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 