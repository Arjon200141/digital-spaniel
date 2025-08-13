import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id='contact' className="bg-[#EDEFF1] text-base-content">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row flex-wrap justify-between pt-16 lg:pt-[7.5%] pb-12 lg:pb-[6%] px-6 sm:px-8 md:px-12 lg:px-[11.77%] gap-y-16">
                <aside className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-4xl text-[#1F2B4D] mb-6 leading-snug font-medium banner2 text-center lg:text-left">
                        We're a brands
                        <br />
                        <span className="text-[#19293aa4]">best friend</span>
                    </h2>
                    <a
                        href=""
                        className="mt-8 lg:mt-[110px] text-lg font-semibold relative inline-block group"
                    >
                        Let's talk
                        <span
                            className="absolute left-0 bottom-0 w-20 h-[2px] bg-[#C0345E] origin-left 
               group-hover:animate-slide"
                        ></span>
                    </a>
                </aside>

                <nav className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-between gap-x-8 lg:gap-x-[80px] gap-y-8 font-semibold text-lg">
                    <section className="w-full sm:w-auto">
                        <h3 className="text-black font-bold text-xl uppercase mb-6 text-center sm:text-left">Explore</h3>
                        <ul className="space-y-4 text-[#506473] open-sans">
                            {['Services', 'Work', 'About', 'Blog', 'Career'].map((item) => (
                                <li key={item} className="text-center sm:text-left">
                                    <a href={`#${item.toLowerCase()}`} className="link link-hover hover:text-primary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="w-full sm:w-auto">
                        <h3 className="text-black font-bold text-xl uppercase mb-6 text-center sm:text-left">Services</h3>
                        <ul className="space-y-4 text-[#506473] open-sans">
                            {['Brand', 'Development', 'Marketing'].map((item) => (
                                <li key={item} className="text-center sm:text-left">
                                    <a href={`#${item.toLowerCase()}`} className="link link-hover hover:text-primary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="w-full sm:w-auto">
                        <h3 className="text-black font-bold text-xl uppercase mb-6 text-center sm:text-left">Questions?</h3>
                        <ul className="space-y-3 text-base open-sans">
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

            <div className="text-[#506473] py-6 px-6 sm:px-8 md:px-12 lg:px-[11.77%] flex flex-col md:flex-row items-center justify-between max-w-[1440px] mx-auto gap-4">
                <aside>
                    <p className="text-[#50647380] text-sm md:text-base lg:text-xl font-semibold open-sans select-none text-center md:text-left">
                        Copyright © Digital Spaniel 2019. All rights reserved.
                    </p>
                </aside>

                <nav className="flex gap-6">
                    <p className="text-2xl"><FaFacebookF /></p>
                    <p className="text-2xl"><CiTwitter /></p>
                    <p className="text-2xl"><FaInstagram /></p>
                    <p className="text-2xl"><FaLinkedinIn /></p>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;