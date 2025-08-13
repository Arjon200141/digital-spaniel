const About = () => {
  return (
    <div id="about">
      <div className="mt-12 sm:mt-16 md:mt-24 flex flex-col md:flex-row justify-between pl-4 md:pl-[15.625%] items-start md:items-center mb-6 sm:mb-8 md:mb-12 lg:mb-[55px] gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-7 sm:leading-8 md:leading-10 lg:leading-[48px] font-medium pl-2 md:pl-0">
          What are <br />
          <span className="text-[#19293aa4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            we all about?
          </span>
        </h2>
      </div>
      <div className="bg-[#F0F3F7] min-h-screen py-10 sm:py-14 md:py-16 lg:py-28 font-sans">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 sm:px-6 lg:px-[15.625%] gap-6 sm:gap-8 lg:gap-0">
          <div className="w-full sm:w-5/6 md:w-4/5 lg:w-1/2">
            <img
              className="w-full h-auto object-cover rounded"
              src="https://i.ibb.co.com/ksFJz0yD/office01.png"
              alt="Office 01"
            />
          </div>
          <div className="w-full sm:w-5/6 md:w-4/5 lg:w-1/2 grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-1">
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

        <div className="px-4 sm:px-6 lg:px-[16%] flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg font-medium text-[#1F2B4D] mt-6 sm:mt-8 md:mt-10 lg:mt-[-28px]">
          <a
            href="#"
            className="px-2 font-semibold relative inline-block group"
          >
            About
            <span
              className="absolute left-0 bottom-0 w-12 sm:w-16 h-[2px] bg-[#C0345E] origin-left 
               group-hover:animate-slide"
            ></span>
          </a>
          <a
            href="#"
            className="px-2 font-semibold relative inline-block group"
          >
            Careers
            <span
              className="absolute left-0 bottom-0 w-14 sm:w-20 h-[2px] bg-[#C0345E] origin-left 
               group-hover:animate-slide"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;