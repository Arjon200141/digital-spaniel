import { useState } from 'react';

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
        <div id='services' className="open-sans py-[40px] bg-[#EDEFF1] text-base-content">
            <div className="flex flex-col md:flex-row justify-between py-16 px-12 lg:px-[15.625%] gap-y-12 md:gap-y-16">
                <aside className="flex flex-col max-w-xs">
                    <h2
                        className={`text-4xl md:text-5xl font-semibold mb-6 leading-snug transition-colors duration-300 ${activeItem === 'Brand Strategy' ? activeColor : baseHeadingColor}`}
                    >
                        What are
                        <br />
                        <span
                            className={`leading-snug transition-colors duration-300 ${activeItem === 'Brand Strategy' ? activeColor : baseSpanColor}`}
                        >
                            we capable of
                        </span>
                    </h2>
                    <p className="text-[#506473] font-medium sm:block">
                        By focusing on design as an enabler and putting a huge emphasis on
                        our clients as co-producers, we create innovative, sustainable
                        marketing that enhances brand experience and user engagement.
                    </p>
                    <a
                        href=""
                        className="mt-20 text-lg font-semibold relative inline-block group"
                    >
                        Our process
                        <span
                            className="absolute left-0 bottom-0 w-28 h-[2px] bg-[#C0345E] origin-left 
               group-hover:animate-slide"
                        ></span>
                    </a>
                </aside>

                <nav className="flex flex-wrap gap-x-12 gap-y-8 font-medium text-lg">
                    <section className="min-w-[160px]">
                        <h3 className="uppercase text-black font-bold tracking-wide mb-4">
                            BRAND
                        </h3>
                        <ul className="space-y-3 ">
                            {['Brand Strategy', 'Logo & Name', 'Identity & Collateral'].map(
                                (item) => (
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
                                )
                            )}
                        </ul>

                        <h3 className="mt-12 uppercase text-black font-bold tracking-wide mb-4">
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

                    <section className="min-w-[140px]">
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
