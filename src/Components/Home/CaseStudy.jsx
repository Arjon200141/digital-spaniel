import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const CaseStudy = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Dashboard",
      description: "Short project description goes here. To explain what the project is all about.",
      image1x: "https://i.ibb.co/cmBq72Y/dashboard01.png",
      image2x: "https://i.ibb.co/s9b0xY0z/dashboard01-2x.png"
    },
    {
      id: 2,
      title: "Lab 02",
      description: "Short project description goes here. To explain what the project is all about.",
      image1x: "https://i.ibb.co/992W5bQ3/lab01-2x.png",
      image2x: "https://i.ibb.co/Tqpw1sxS/lab01-Copy.png"
    },
    {
      id: 3,
      title: "Socks",
      description: "Short project description goes here. To explain what the project is all about.",
      image1x: "https://i.ibb.co/f3zSK1s/socks.png",
      image2x: "https://i.ibb.co/RkM57P0y/socks-2x.png"
    },
    {
      id: 4,
      title: "Lab 01",
      description: "Short project description goes here. To explain what the project is all about.",
      image1x: "https://i.ibb.co/Tqpw1sxS/lab01-Copy.png",
      image2x: "https://i.ibb.co/S4zP15jq/lab01-2x-Copy.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current && swiperRef.current) {
      setNavReady(true);
    }
  }, [prevRef, nextRef, swiperRef]);

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-medium text-center mb-6">Case Studies</h2>
        <p className="max-w-2xl mx-auto text-center text-[#506473] mb-12 px-2 sm:px-6">
          Every project is different. We like to work collaboratively with our clients,
          tailoring each project to suit the needs of you and your business.
        </p>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            spaceBetween={20}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={navReady ? {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            } : false}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="!overflow-visible"
            style={{ 
              height: '400px',
              padding: '0 60px' // Add padding to ensure slides stay within view
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                coverflowEffect: {
                  depth: 50,
                  modifier: 1,
                },
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
                coverflowEffect: {
                  depth: 100,
                  modifier: 1,
                },
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                coverflowEffect: {
                  depth: 100,
                  modifier: 1,
                },
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
                coverflowEffect: {
                  depth: 150,
                  modifier: 1.5,
                },
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
                coverflowEffect: {
                  depth: 200,
                  modifier: 2,
                },
              },
            }}
            onSwiper={(swiper) => {
              // Initialize navigation after swiper is initialized
              setTimeout(() => {
                if (prevRef.current && nextRef.current) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }, 100);
            }}
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide 
                key={study.id} 
                className="!w-[300px] md:!w-[350px] lg:!w-[400px] !h-[350px] flex justify-center"
              >
                <div className="relative w-full h-full">
                  <img
                    src={index === activeIndex % caseStudies.length ? study.image2x : study.image1x}
                    alt={study.title}
                    loading="lazy"
                    className={`w-full h-full object-cover rounded-lg transition-all duration-300
                      ${index === activeIndex % caseStudies.length ? 'scale-105 z-10' : 'scale-90 opacity-80'}`}
                    style={{ boxShadow: 'none' }}
                  />
                  {index === activeIndex % caseStudies.length && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
                      <h3 className="text-xl font-semibold">{study.title}</h3>
                      <p className="text-sm">{study.description}</p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 pointer-events-none z-10">
            <button
              ref={prevRef}
              className="pointer-events-auto bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none transition-all duration-200 transform hover:scale-110 shadow-lg"
              aria-label="Previous Slide"
              type="button"
            >
              &#10094;
            </button>
            <button
              ref={nextRef}
              className="pointer-events-auto bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none transition-all duration-200 transform hover:scale-110 shadow-lg"
              aria-label="Next Slide"
              type="button"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;