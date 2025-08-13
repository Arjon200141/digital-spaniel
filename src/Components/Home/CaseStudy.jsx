import React, { useState, useEffect, useRef } from 'react';

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
      image1x: "https://i.ibb.co.com/C3chNd8k/image.png",
      image2x: "https://i.ibb.co.com/C3chNd8k/image.png"
    },
    {
      id: 3,
      title: "Dashboard1",
      description: "Short project description goes here. To explain what the project is all about.",
      image1x: "https://i.ibb.co.com/mCXnhDdv/image.png",
      image2x: "https://i.ibb.co.com/mCXnhDdv/image.png"
    },
    {
      id: 4,
      title: "Lab 02",
      description: "Short project description goes here. To explain what the project is all about.",
      image1x: "https://i.ibb.co.com/S7s40CvW/image.png",
      image2x: "https://i.ibb.co.com/S7s40CvW/image.png"
    },
    {
      id: 5,
      title: "Lab 01",
      description: "Short project description goes here. To explain what the project is all about.",
      image1x: "https://i.ibb.co.com/C3chNd8k/image.png",
      image2x: "https://i.ibb.co.com/C3chNd8k/image.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);

  // Handle autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      goNext();
    }, 4000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const goNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % caseStudies.length);
  };

  const goPrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  const calculatePosition = (index) => {
    const distance = index - activeIndex;
    const isActive = distance === 0;

    if (distance === 0) {
      return {
        zIndex: 10,
        scale: 1.05,
        opacity: 1,
        translateX: 0,
        rotateY: 0,
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
      };
    } else if (distance === 1 || distance === -caseStudies.length + 1) {
      return {
        zIndex: 9,
        scale: 0.9,
        opacity: 0.8,
        translateX: containerWidth * 0.25,
        rotateY: -15,
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      };
    } else if (distance === -1 || distance === caseStudies.length - 1) {
      return {
        zIndex: 9,
        scale: 0.9,
        opacity: 0.8,
        translateX: containerWidth * -0.25,
        rotateY: 15,
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      };
    } else if (distance === 2 || distance === -caseStudies.length + 2) {
      return {
        zIndex: 8,
        scale: 0.85,
        opacity: 0.6,
        translateX: containerWidth * 0.45,
        rotateY: -25,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      };
    } else if (distance === -2 || distance === caseStudies.length - 2) {
      return {
        zIndex: 8,
        scale: 0.85,
        opacity: 0.6,
        translateX: containerWidth * -0.45,
        rotateY: 25,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      };
    } else {
      return {
        zIndex: 0,
        scale: 0.7,
        opacity: 0,
        translateX: distance > 0 ? containerWidth * 0.6 : containerWidth * -0.6,
        rotateY: distance > 0 ? -35 : 35,
        boxShadow: 'none'
      };
    }
  };

  return (
    <div id='blog' className=" bg-white w-full overflow-hidden">
      <div className=" mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-5 banner2">Case Studies</h2>
        <p className="max-w-3xl text-xl mx-auto text-center open-sans text-[#506473]  sm:px-6">
          Every project is different. We like to work collaboratively with our clients,
          tailoring each project to suit the needs of you and your business.
        </p>

        <div className="relative w-full lg:h-screen h-[65vh] overflow-hidden" ref={containerRef}>
          <div className="absolute top-1/2 left-1/2 w-full  flex items-center justify-center"
            style={{ transform: 'translate(-50%, -50%)' }}>

            {caseStudies.map((study, index) => {
              const position = calculatePosition(index);
              const distance = index - activeIndex;
              const isActive = distance === 0;

              return (
                <>
                  <div
                    key={study.id}
                    className={`absolute lg:block hidden w-[280px] sm:w-[320px] md:w-[350px] lg:w-fit h-[350px] transition-all duration-500 ease-in-out rounded-lg`}
                    style={{
                      transform: `translateX(${position.translateX}px) 
                               scale(${position.scale})
                               rotateY(${position.rotateY}deg)`,
                      zIndex: position.zIndex,
                      opacity: 1,

                      filter: `blur(${isActive ? 0 : 0.5}px)`,
                      perspective: '1000px',
                      transformStyle: 'preserve-3d',
                      left: '',
                      marginLeft: `-${isActive ? '0px' : '0px'}`,
                    }}
                  >
                    <div className="relative flex justify-center items-center w-full h-full rounded-lg ">
                      <img
                        src={isActive ? study.image2x : study.image1x}
                        alt={study.title}
                        loading="lazy"
                        className="max-w-4xl h-[70vh] object-cover shadow-md  rounded-lg"
                      />
                      {isActive && (
                        <div className=" relative w-[350px] h-[250px] flex flex-col justify-center items-start  p-16 bg-black  text-white ">
                          <h3 className="text-lg font-semibold">{study.title}</h3>
                          <p className="text-sm">{study.description}</p>
                          <p className="text-sm px-1 mt-5 border-b-2 border-white">Read more</p>
                          <div className="absolute bottom-0 -right-2 flex justify-center  z-20">
                            <button
                              onClick={goPrev}
                              className="bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800  w-10 h-10 flex items-center justify-center focus:outline-none transition-all duration-200 transform hover:scale-110 shadow-lg ml-2"
                              aria-label="Previous Slide"
                              type="button"
                            >
                              &#10094;
                            </button>
                            <button
                              onClick={goNext}
                              className="bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800  w-10 h-10 flex items-center justify-center focus:outline-none transition-all duration-200 transform hover:scale-110 shadow-lg mr-2"
                              aria-label="Next Slide"
                              type="button"
                            >
                              &#10095;
                            </button>
                          </div>

                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    key={study.id}
                    className={`absolute lg:hidden w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[350px] transition-all duration-500 ease-in-out rounded-lg`}
                    style={{
                      transform: `translateX(${position.translateX}px) 
                               scale(${position.scale})
                               rotateY(${position.rotateY}deg)`,
                      zIndex: position.zIndex,
                      boxShadow: position.boxShadow,
                      filter: `blur(${isActive ? 0 : 1}px)`,
                      perspective: '1000px',
                      transformStyle: 'preserve-3d',

                      marginLeft: `-${isActive ? '0px' : '160px'}`,
                    }}
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <img
                        src={isActive ? study.image2x : study.image1x}
                        alt={study.title}
                        loading="lazy"
                        className="w-full h-full object-cover  rounded-lg"
                      />
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
                          <h3 className="text-base font-semibold">{study.title}</h3>
                          <p className="text-sm">{study.description}</p>
                          <p className="text-sm px-1 w-fit mt-5 border-b-2 border-white">Read more</p>

                        </div>
                      )}
                    </div>
                  </div>

                </>

              );
            })}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;