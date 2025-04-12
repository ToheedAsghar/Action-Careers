import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaBuilding, FaHospital, FaHotel } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: 'Mary S.',
    role: 'Care Home Manager',
    company: 'Sunnydale Care Home',
    icon: <FaHospital className="text-green" size={24} />,
    quote: 'Action Careers has been our go-to recruitment partner for the past 3 years. They consistently provide us with qualified care staff who genuinely care about our residents. Their understanding of the care sector is unmatched, and they take the time to ensure candidates are a good fit for our culture.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Registered Nurse',
    company: 'Home Care Professional',
    icon: <FaHospital className="text-green" size={24} />,
    quote: 'After struggling to find a flexible position that worked with my family commitments, Action Careers connected me with a home care role that has transformed my work-life balance. They were professional throughout and really listened to what I needed. Been working in my new role for 8 months now and couldn\'t be happier.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert K.',
    role: 'Operations Director',
    company: 'Grand Hotel London',
    icon: <FaHotel className="text-green" size={24} />,
    quote: 'We\'ve worked with several recruitment agencies, but Action Careers stands out for their hospitality industry knowledge. They understand the specific demands of hotel staffing and have helped us fill positions from housekeeping to management with quality candidates who stay long-term.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Susan P.',
    role: 'Healthcare Assistant',
    company: 'Oakwood Care Services',
    icon: <FaHospital className="text-green" size={24} />,
    quote: 'I was looking to transition from retail to healthcare, but many agencies dismissed me due to lack of experience. Action Careers took the time to recognize my transferable skills and helped me secure a role in home care. They provided guidance with my CV and interview preparation. Six months in and I\'ve already been promoted!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Thomas W.',
    role: 'Front Office Manager',
    company: 'Riverside Hotel Group',
    icon: <FaHotel className="text-green" size={24} />,
    quote: 'Action Careers found me a position that perfectly matched my experience and career aspirations. What impressed me most was their honest feedback and the detailed information they provided about the hotel before my interview. This preparation was invaluable and helped me secure the role. Their aftercare service is also excellent.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Claire B.',
    role: 'Care Home Director',
    company: 'Evergreen Residential Homes',
    icon: <FaBuilding className="text-green" size={24} />,
    quote: 'Opening a new care home location meant we needed to hire 30+ staff quickly without compromising on quality. Action Careers delivered exceptionally, understanding our values and finding candidates who shared our commitment to person-centered care. Their sector expertise saved us time and ensured we found the right people.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="section bg-deep-navy text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-navy-light/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy-light/20 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-green font-medium mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our <span className="text-green">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from professionals and employers in home care, care homes, and hospitality who have found success with Action Careers
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative px-8"
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mr-3">
                      {testimonial.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-navy">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 text-yellow-400 flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="flex-grow">
                    <FaQuoteLeft className="text-green mb-2 opacity-50" size={20} />
                    <p className="text-gray-600 italic">{testimonial.quote}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => swiperRef.current?.slidePrev()} 
              className="btn bg-navy-light text-white hover:bg-navy-hover p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()} 
              className="btn bg-navy-light text-white hover:bg-navy-hover p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 