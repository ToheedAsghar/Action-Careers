import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBell } from 'react-icons/fa';

type PopupProps = {
  message: string;
  duration?: number;
  show: boolean;
  onClose: () => void;
  type?: 'success' | 'info' | 'warning' | 'error';
};

const Popup: React.FC<PopupProps> = ({
  message,
  duration = 5000,
  show,
  onClose,
  type = 'info',
}) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    
    if (show && duration !== null) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green';
      case 'warning':
        return 'bg-orange';
      case 'error':
        return 'bg-orange-dark';
      case 'info':
      default:
        return 'bg-orange';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
      case 'warning':
      case 'error':
      case 'info':
      default:
        return <FaBell />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-4 right-4 z-50 max-w-md shadow-xl rounded-lg ${getBackgroundColor()} text-white`}
        >
          <div className="flex items-start p-4">
            <div className="flex-shrink-0 mr-3">
              {getIcon()}
            </div>
            <div className="flex-1 mr-2">
              <p>{message}</p>
            </div>
            <button
              onClick={() => {
                setIsVisible(false);
                onClose();
              }}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup; 