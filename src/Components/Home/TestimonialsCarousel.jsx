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
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 py-12 md:py-20 bg-gray-50">
      <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-16 sm:mb-12 leading-tight">
        Kind words <br /> <span className="text-[#19293aa4]">from our clients</span>
      </h2>

      <div className=" relative flex flex-col lg:flex-row items-center justify-center gap-6 mb-12 w-full max-w-full">
        <button 
          onClick={() => navigateTestimonial('left')}
          className="hidden lg:flex p-2 rounded-full hover:bg-gray-200 transition absolute left-0 top-1/2 transform -translate-y-1/2 z-20"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={24} />
        </button>

        {testimonials.map((testimonial, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={testimonial.id}
              className={`rounded-lg shadow-md p-6 m-2 transition-all ease-in-out duration-500
                ${
                  isActive
                    ? 'scale-[1.2] z-10 w-full max-w-md mx-auto lg:w-1/4 '
                    : 'opacity-70 hover:opacity-100 hidden lg:block lg:w-1/4'
                }
              `}
              style={{
                backgroundColor: isActive ? '#19293A' : '#E2E4E6',
                color: isActive ? 'white' : '#506473',
              }}
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={testimonial.profileImage} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                  style={{
                    border: isActive ? '2px solid white' : 'none',
                  }}
                />
                <p className="italic mb-6 text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-medium text-base sm:text-lg">{testimonial.author}</h4>
                  <p className="text-xs sm:text-sm">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          );
        })}

        <button 
          onClick={() => navigateTestimonial('right')}
          className="hidden lg:flex p-2 rounded-full hover:bg-gray-200 transition absolute right-0 top-1/2 transform -translate-y-1/2 z-20"
          aria-label="Next testimonial"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      <div className="flex lg:hidden justify-center gap-4 mb-8">
        <button 
          onClick={() => navigateTestimonial('left')}
          className="p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={20} />
        </button>
        <button 
          onClick={() => navigateTestimonial('right')}
          className="p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="Next testimonial"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? 'bg-[#C0345E]' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
