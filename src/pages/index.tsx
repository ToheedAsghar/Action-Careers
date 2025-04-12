import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import JobCategories from '../components/JobCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import HomeContact from '../components/HomeContact';
import CTA from '../components/CTA';
import Popup from '../components/Popup';

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Hero />
      <JobCategories />
      <WhyChooseUs />
      <Testimonials />
      <HomeContact />
      <CTA />
      
      <Popup 
        show={showPopup}
        message="Looking for a job? Contact us directly via WhatsApp at +44 7428 606908"
        type="info"
        onClose={() => setShowPopup(false)}
      />
    </Layout>
  );
};

export default Home; 