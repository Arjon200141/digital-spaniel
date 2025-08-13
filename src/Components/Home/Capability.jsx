import { useState } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Capability = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemHover = (item) => {
        if (item === 'Brand Strategy') {
            setActiveItem(item);
        } else {
            setActiveItem(null);
        }
    };

    const handleItemLeave = () => {
        setActiveItem(null);
    };

    const baseHeadingColor = 'text-black';
    const baseSpanColor = 'text-[#506473]';
    const activeColor = 'text-primary';

    return (
        <div id='services' className="py-11 md:py-[52px] bg-[#EDEFF1] text-base-content">
            <div className="flex flex-col md:flex-row justify-between py-8 px-6 sm:px-8 md:px-12 lg:px-[15.625%] gap-y-8 md:gap-y-16">
                {/* Left Column - Heading and Description */}
                <aside className="flex flex-col max-w-full md:max-w-xs">
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 md:mb-12 leading-snug transition-colors duration-300 ${activeItem === 'Brand Strategy' ? activeColor : baseHeadingColor}`}
                    >
                        What are
                        <br />
                        <span
                            className={`leading-snug transition-colors duration-300 ${activeItem === 'Brand Strategy' ? activeColor : baseSpanColor}`}
                        >
                            we capable of
                        </span>
                    </h2>
                    
                    <p className="text-[#506473] font-medium">
                        By focusing on design as an enabler and putting a huge emphasis on
                        our clients as co-producers, we create innovative, sustainable
                        marketing that enhances brand experience and user engagement.
                    </p>
                    
                    <a
                        href="#process"
                        className="mt-8 md:mt-12 text-lg font-semibold relative inline-block group"
                    >
                        Our process
                        <span
                            className="absolute left-0 bottom-0 w-28 h-[2px] bg-[#C0345E] origin-left 
                            group-hover:animate-slide"
                        ></span>
                    </a>
                </aside>

                {/* Right Column - Navigation Links */}
                <nav className="flex flex-wrap justify-between gap-x-6 gap-y-8 sm:gap-x-12 font-medium text-base sm:text-lg">
                    {/* Brand & Development Section */}
                    <section className="min-w-[160px] flex-1 sm:flex-none">
                        <h3 className="uppercase text-black font-bold tracking-wide mb-4">
                            BRAND
                        </h3>
                        <ul className="space-y-3">
                            {["Brand Strategy", "Logo & Name", "Identity & Collateral"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="flex items-center text-[#506473] font-semibold hover:text-primary focus:text-primary active:text-primary transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary rounded"
                                        onMouseEnter={() => handleItemHover(item)}
                                        onMouseLeave={handleItemLeave}
                                        onFocus={() => handleItemHover(item)}
                                        onBlur={handleItemLeave}
                                    >
                                        {item}
                                        {item === "Brand Strategy" && (
                                            <IoIosArrowDroprightCircle className="ml-1.5 mt-1.5" />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h3 className="mt-8 sm:mt-12 uppercase text-black font-bold tracking-wide mb-4">
                            DEVELOPMENT
                        </h3>
                        <ul className="space-y-3">
                            {['eCommerce', 'Web Development', 'Mobile Apps'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-[#506473] font-semibold hover:text-primary focus:text-primary active:text-primary transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary rounded"
                                        onMouseEnter={() => handleItemHover(item)}
                                        onMouseLeave={handleItemLeave}
                                        onFocus={() => handleItemHover(item)}
                                        onBlur={handleItemLeave}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Marketing Section */}
                    <section className="min-w-[140px] flex-1 sm:flex-none">
                        <h3 className="uppercase text-black font-bold tracking-wide mb-4">
                            MARKETING
                        </h3>
                        <ul className="space-y-3">
                            {['Digital', 'Market Research'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-[#506473] font-semibold hover:text-primary focus:text-primary active:text-primary transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary rounded"
                                        onMouseEnter={() => handleItemHover(item)}
                                        onMouseLeave={handleItemLeave}
                                        onFocus={() => handleItemHover(item)}
                                        onBlur={handleItemLeave}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </nav>
            </div>
        </div>
    );
};

export default Capability;