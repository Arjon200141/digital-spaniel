import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id='contact' className="bg-[#EDEFF1] text-base-content">
            {/* Main Content - Stacked on mobile, original on desktop */}
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between pt-12 px-6 lg:pt-[7.5%] lg:pb-[6%] lg:px-[11.77%]">
                
                {/* Brand Section - Centered on mobile */}
                <div className="lg:w-auto w-full text-center lg:text-left mb-10 lg:mb-0">
                    <h2 className="text-3xl lg:text-4xl text-[#1F2B4D] mb-6 leading-snug font-medium">
                        We're a brands<br />
                        <span className="text-[#19293aa4]">best friend</span>
                    </h2>
                    <a href="#" className="mt-6 lg:mt-[110px] text-lg font-semibold relative inline-block group">
                        Let's talk
                        <span className="absolute left-0 bottom-0 w-20 h-[2px] bg-[#C0345E] origin-left group-hover:animate-slide"></span>
                    </a>
                </div>

                {/* Navigation - Grid on mobile, flex on desktop */}
                <div className="w-full lg:w-auto grid grid-cols-2 gap-8 lg:flex lg:gap-x-[80px]">
                    
                    {/* Explore Column */}
                    <div className="col-span-1">
                        <h3 className="text-black font-bold text-xl uppercase mb-6">Explore</h3>
                        <ul className="space-y-4 text-[#506473]">
                            {['Services', 'Work', 'About', 'Blog', 'Career'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="col-span-1">
                        <h3 className="text-black font-bold text-xl uppercase mb-6">Services</h3>
                        <ul className="space-y-4 text-[#506473]">
                            {['Brand', 'Development', 'Marketing'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Questions Column - Full width on mobile */}
                    <div className="col-span-2 lg:col-span-1 mt-4 lg:mt-0">
                        <h3 className="text-black font-bold text-xl uppercase mb-6">Questions?</h3>
                        <div className="space-y-3">
                            <div>
                                <a href="tel:+0121345678" className="font-semibold hover:text-primary transition">
                                    Call Us
                                </a>
                                <p className="text-[#506473]">0121 345 678</p>
                            </div>
                            <div>
                                <a href="mailto:info@digitalspaniel.co.uk" className="font-semibold hover:text-primary transition">
                                    Email Us
                                </a>
                                <p className="text-[#506473]">info@digitalspaniel.co.uk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Stacked on mobile */}
            <div className="max-w-[1440px] mx-auto py-6 px-6 lg:px-[11.77%] flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="text-[#50647380] text-sm lg:text-xl font-semibold order-2 lg:order-1">
                    Copyright © Digital Spaniel 2019. All rights reserved.
                </p>
                
                <div className="flex gap-6 order-1 lg:order-2">
                    <a href="#" className="text-2xl hover:text-[#C0345E] transition"><FaFacebookF /></a>
                    <a href="#" className="text-2xl hover:text-[#C0345E] transition"><FaTwitter /></a>
                    <a href="#" className="text-2xl hover:text-[#C0345E] transition"><FaInstagram /></a>
                    <a href="#" className="text-2xl hover:text-[#C0345E] transition"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;