import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      
      {/* Fixed WhatsApp Button */}
      <a 
        href="https://wa.me/447428606908" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 overflow-hidden bg-gradient-to-r from-green to-green-600 text-white rounded-full p-4 shadow-lg group transition-transform duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-green-700 opacity-0 group-hover:opacity-100 rounded-full"></div>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-green font-medium">
          Chat with us
        </div>
        <div className="relative">
          <FaWhatsapp size={28} />
        </div>
      </a>
    </div>
  );
};

export default Layout; 