import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { fetchTestimonials, setCurrentIndex } from '../../testimonialsSlice';

const TestimonialsCarousel = () => {
  const dispatch = useDispatch();
  const { testimonials, currentIndex } = useSelector((state) => state.testimonials);

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  const handleDotClick = (index) => {
    dispatch(setCurrentIndex(index));
  };

  const navigateTestimonial = (direction) => {
    const newIndex = direction === 'left'
      ? (currentIndex - 1 + testimonials.length) % testimonials.length
      : (currentIndex + 1) % testimonials.length;
    dispatch(setCurrentIndex(newIndex));
  };

  if (testimonials.length === 0) return <div>Loading...</div>;

  return (
    <div className="px-4 relative sm:px-8 md:px-16 lg:px-[6.60%] py-12 md:py-20 bg-gray-50">
      
      <div className="mt-6 flex flex-col md:flex-row justify-between pl-4 md:pl-[11.65%] items-start md:items-center mb-6 sm:mb-8 md:mb-12 lg:mb-[55px] gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-7 sm:leading-8 md:leading-10 lg:leading-[48px] font-medium pl-2 md:pl-0">
          Kind words <br />
          <span className="text-[#19293aa4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          from our clients
          </span>
        </h2>
      </div>

      <div className="relative flex items-center justify-center lg:my-12 w-full">
        {/* Mobile and tablet view (single card) */}
        <div className="lg:hidden w-full max-w-md mx-auto">
          <div
            className="rounded-lg shadow-md px-6 py-12 m-3 transition-all ease-in-out duration-500"
            style={{
              backgroundColor: '#19293A',
              color: 'white',
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full mb-6">
                <img 
                  className="absolute opacity-70 -top-2 left-2 w-7 h-7" 
                  src="https://i.ibb.co.com/dsmMnnjt/quotation-marks-svgrepo-com.png" 
                  alt="Opening quote"
                  style={{ filter: 'invert(1) brightness(2)' }}
                />
                <p className="italic relative z-20 text-base leading-relaxed px-6">
                  {testimonials[currentIndex].quote}
                </p>
                <img 
                  className="absolute opacity-70 -bottom-2 right-2 w-7 h-7" 
                  src="https://i.ibb.co.com/tPcK0fK2/quotation-marks-svgrepo-com2.png" 
                  alt="Closing quote"
                  style={{ filter: 'invert(1) brightness(2)' }}
                />
              </div>
              
              <img
                src={testimonials[currentIndex].profileImage}
                alt={testimonials[currentIndex].author}
                className="w-16 h-16 rounded-full object-cover mb-4"
                style={{ border: '2px solid white' }}
              />
              <div>
                <h4 className="font-medium text-sm">{testimonials[currentIndex].author}</h4>
                <p className="text-slate-300 text-xs">{testimonials[currentIndex].designation}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Large screen view (exactly as original) */}
        <div className="hidden lg:flex items-center justify-center w-full">
          <div className="flex w-full py-10 overflow-x-hidden lg:overflow-visible justify-center gap-2">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={testimonial.id}
                  onMouseMove={() => handleDotClick(index)}
                  className={`rounded-lg shadow-md lg:px-8 px-16 lg:py-12 py-20 m-3 transition-all ease-in-out duration-500
                    ${isActive
                      ? 'scale-[1.2] z-10 w-full mx-10 lg:w-1/4'
                      : 'opacity-70 hover:opacity-100 hidden lg:block lg:w-1/4'
                    }
                  `}
                  style={{
                    backgroundColor: isActive ? '#19293A' : '#E2E4E6',
                    color: isActive ? 'white' : '#506473',
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-full mb-6">
                      <img 
                        className="absolute opacity-70 -top-2 left-2 w-7 h-7" 
                        src="https://i.ibb.co.com/dsmMnnjt/quotation-marks-svgrepo-com.png" 
                        alt="Opening quote"
                        style={{
                          filter: isActive ? 'invert(1) brightness(2)' : 'invert(0.5)'
                        }}
                      />
                      <p className="italic relative z-20 text-sm sm:text-base leading-relaxed px-6">
                        {testimonial.quote}
                      </p>
                      <img 
                        className="absolute opacity-70 -bottom-2 right-2 w-7 h-7" 
                        src="https://i.ibb.co.com/tPcK0fK2/quotation-marks-svgrepo-com2.png" 
                        alt="Closing quote"
                        style={{
                          filter: isActive ? 'invert(1) brightness(2)' : 'invert(0.5)'
                        }}
                      />
                    </div>
                    
                    <img
                      src={testimonial.profileImage}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                      style={{
                        border: isActive ? '2px solid white' : 'none',
                      }}
                    />
                    <div>
                      <h4 className="font-medium text-sm">{testimonial.author}</h4>
                      <p className={`text-xs ${isActive ? "text-slate-300" : "text-slate-700"}`}>{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation arrows - mobile/tablet */}
      <div className="absolute z-[100] top-1/2 left-6 flex lg:hidden justify-between w-[90%] gap-4 mb-8">
        <button
          onClick={() => navigateTestimonial('left')}
          className="p-2 rounded-full text-white hover:bg-gray-200 transition"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={() => navigateTestimonial('right')}
          className="p-2 rounded-full text-white hover:bg-gray-200 transition"
          aria-label="Next testimonial"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* Navigation arrows - large screens (unchanged from original) */}
      <div className="hidden lg:flex absolute z-[100] top-1/2 left-6 right-6 justify-between w-[calc(100%-3rem)]">
        <button
          onClick={() => navigateTestimonial('left')}
          className="p-2 rounded-full text-white hover:bg-gray-200 transition"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={() => navigateTestimonial('right')}
          className="p-2 rounded-full text-white hover:bg-gray-200 transition"
          aria-label="Next testimonial"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition ${index === currentIndex ? 'bg-[#19293A] w-5 h-5' : 'w-3 h-3 bg-gray-300'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;