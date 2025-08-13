import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id='contact' className="bg-[#EDEFF1] text-base-content">
            {/* Main Footer Content */}
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row flex-wrap justify-between pt-12 sm:pt-14 md:pt-16 lg:pt-[7.5%] pb-10 sm:pb-12 lg:pb-[6%] px-6 sm:px-8 md:px-12 lg:px-[11.77%] gap-y-12 sm:gap-y-14 md:gap-y-16">
                {/* Left Column - Brand Section */}
                <aside className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-[#1F2B4D] mb-4 sm:mb-5 md:mb-6 leading-snug font-medium text-center lg:text-left">
                        We're a brands
                        <br />
                        <span className="text-[#19293aa4]">best friend</span>
                    </h2>
                    <a
                        href="#"
                        className="mt-6 sm:mt-8 lg:mt-[110px] text-base sm:text-lg font-semibold relative inline-block group"
                    >
                        Let's talk
                        <span
                            className="absolute left-0 bottom-0 w-16 sm:w-20 h-[2px] bg-[#C0345E] origin-left 
               group-hover:animate-slide"
                        ></span>
                    </a>
                </aside>

                {/* Right Columns - Navigation Links */}
                <nav className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-between gap-x-6 sm:gap-x-8 lg:gap-x-[80px] gap-y-8 sm:gap-y-10 font-semibold text-base sm:text-lg">
                    {/* Explore Column */}
                    <section className="w-full sm:w-auto">
                        <h3 className="text-black font-bold text-lg sm:text-xl uppercase mb-4 sm:mb-6 text-center sm:text-left">Explore</h3>
                        <ul className="space-y-3 sm:space-y-4 text-[#506473]">
                            {['Services', 'Work', 'About', 'Blog', 'Career'].map((item) => (
                                <li key={item} className="text-center sm:text-left">
                                    <a href={`#${item.toLowerCase()}`} className="link link-hover hover:text-primary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Services Column */}
                    <section className="w-full sm:w-auto">
                        <h3 className="text-black font-bold text-lg sm:text-xl uppercase mb-4 sm:mb-6 text-center sm:text-left">Services</h3>
                        <ul className="space-y-3 sm:space-y-4 text-[#506473]">
                            {['Brand', 'Development', 'Marketing'].map((item) => (
                                <li key={item} className="text-center sm:text-left">
                                    <a href={`#${item.toLowerCase()}`} className="link link-hover hover:text-primary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Questions Column */}
                    <section className="w-full sm:w-auto">
                        <h3 className="text-black font-bold text-lg sm:text-xl uppercase mb-4 sm:mb-6 text-center sm:text-left">Questions?</h3>
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                            <li className="text-center sm:text-left">
                                <a href="tel:+0121345678" className="link text-[#506473] link-hover font-semibold hover:text-primary transition">
                                    Call Us
                                </a>
                                <p className="mt-1 text-[#506473] font-normal">0121 345 678</p>
                            </li>
                            <li className="text-center sm:text-left">
                                <a href="mailto:info@digitalspaniel.co.uk" className="link text-[#506473] font-semibold link-hover hover:text-primary transition">
                                    Email Us
                                </a>
                                <p className="mt-1 text-[#506473] font-normal">info@digitalspaniel.co.uk</p>
                            </li>
                        </ul>
                    </section>
                </nav>
            </div>

            {/* Bottom Copyright and Socials */}
            <div className="text-[#506473] py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 lg:px-[11.77%] flex flex-col md:flex-row items-center justify-between max-w-[1440px] mx-auto gap-3 sm:gap-4">
                <aside>
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-[#50647380] text-center md:text-left">
                        Copyright © Digital Spaniel 2019. All rights reserved.
                    </p>
                </aside>

                <nav className="flex gap-4 sm:gap-5 md:gap-6">
                    <a href="#" className="text-xl sm:text-2xl hover:text-[#C0345E] transition"><FaFacebookF /></a>
                    <a href="#" className="text-xl sm:text-2xl hover:text-[#C0345E] transition"><FaTwitter /></a>
                    <a href="#" className="text-xl sm:text-2xl hover:text-[#C0345E] transition"><FaInstagram /></a>
                    <a href="#" className="text-xl sm:text-2xl hover:text-[#C0345E] transition"><FaLinkedinIn /></a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;