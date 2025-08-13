const About = () => {
  return (
    <div id="about">
      <h2 className="text-2xl sm:text-3xl lg:text-start text-center px-5 lg:px-[15.625%] lg:text-4xl text-[#1F2B4D] mb-4 sm:mb-6 leading-snug w-full md:w-fit text-[28px] sm:text-[36px] lg:text-[48px] sm:leading-[44px] lg:leading-[48px] font-medium banner2">
        What are <br />
        <span className="text-[#19293aa4] text-[28px] sm:text-[36px] lg:text-[48px]">we all about?</span>
      </h2>
      <div className="bg-[#F0F3F7] min-h-screen pb-12 lg:pt-28 pt-10 font-sans">

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 px-4 sm:px-6 lg:px-[15.625%] lg:gap-8">
          <div className="w-full md:w-4/5 lg:w-1/2">
            <img
              className="w-full h-auto object-cover rounded"
              src="https://i.ibb.co.com/ksFJz0yD/office01.png"
              alt="Office 01"
            />
          </div>
          <div className="w-full md:w-4/5 lg:w-1/2 grid grid-cols-5 gap-2 sm:gap-4">
            <div className="row-span-2 col-span-3">
              <img
                className="w-full h-full object-cover"
                src="https://i.ibb.co.com/s9S51c8G/office03.png"
                alt="Office 03"
              />
            </div>

            <div className="row-span-3 col-span-2">
              <img
                className="w-full h-full object-cover"
                src="https://i.ibb.co.com/G4q8MYSx/office02.png"
                alt="Office 04"
              />
            </div>
            <div className="col-span-3 row-span-2 flex justify-end">
              <img
                className="w-[70%] h-full object-cover"
                src="https://i.ibb.co.com/fY6G8dtH/office04.png"
                alt="Office 02"
              />
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-[16%] flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-base sm:text-lg font-medium text-[#1F2B4D] mt-6 sm:mt-8">
          <a
            href=""
            className="mt-0 text-lg px-2 font-semibold relative inline-block group"
          >
           About
            <span
              className="absolute left-0 bottom-0 w-16 h-[2px] bg-[#C0345E] origin-left 
               group-hover:animate-slide"
            ></span>
          </a>
          <a
            href=""
            className="mt-0 px-2 text-lg font-semibold relative inline-block group"
          >
           Careers
            <span
              className="absolute left-0 bottom-0 w-20 h-[2px] bg-[#C0345E] origin-left 
               group-hover:animate-slide"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;