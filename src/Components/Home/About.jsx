const About = () => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2B4D] mb-4 sm:mb-6 leading-snug lg:pl-36">
        What are <br />
        <span className="font-normal">we all about?</span>
      </h2>
      <div className="bg-[#F0F3F7] min-h-screen px-4 sm:px-8 lg:px-20 py-12 font-sans">

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-8">
          <img
            className="w-full max-w-[450px] h-auto object-cover rounded"
            src="https://i.ibb.co.com/ksFJz0yD/office01.png"
            alt="Office 01"
          />
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6">
              <img
                className="w-full sm:w-[180px] h-[130px] object-cover rounded"
                src="https://i.ibb.co.com/fY6G8dtH/office04.png"
                alt="Office 02"
              />
              <img
                className="w-full sm:w-[180px] h-[130px] object-cover rounded"
                src="https://i.ibb.co.com/s9S51c8G/office03.png"
                alt="Office 03"
              />
            </div>

            <img
              className="w-full sm:w-[366px] h-[130px] object-cover rounded"
              src="https://i.ibb.co.com/G4q8MYSx/office02.png"
              alt="Office 04"
            />
          </div>
        </div>
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center lg:justify-start lg:pl-40 gap-6 text-base sm:text-lg font-medium text-[#1F2B4D]">
          <button className="border-b-2 border-[#DA3743] pb-1 hover:text-[#DA3743] transition-colors">
            About
          </button>
          <button className="border-b-2 border-[#DA3743] pb-1 hover:text-[#DA3743] transition-colors">
            Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
