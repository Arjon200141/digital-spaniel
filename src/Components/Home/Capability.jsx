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
        <div id='services' className="mb-20 bg-[#EDEFF1] text-base-content">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row flex-wrap justify-between py-16 px-6 sm:px-10 md:px-20 lg:px-44 gap-y-12 md:gap-y-16">
                <aside className="flex flex-col max-w-xs">
                    <h2
                        className={`text-4xl font-medium mb-6 leading-snug transition-colors duration-300 ${activeItem === 'Brand Strategy' ? activeColor : baseHeadingColor
                            }`}
                    >
                        What are
                        <br />
                        <span
                            className={`leading-snug transition-colors duration-300 ${activeItem === 'Brand Strategy' ? activeColor : baseSpanColor
                                }`}
                        >
                            we capable of
                        </span>
                    </h2>
                    <p className="text-[#506473]  sm:block">
                        By focusing on design as an enabler and putting a huge emphasis on
                        our clients as co-producers, we create innovative, sustainable
                        marketing that enhances brand experience and user engagement.
                    </p>
                    <a
                        href="#"
                        className="mt-6 text-lg border-b-2 border-red-500 hover:border-primary transition w-max font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        Our process
                    </a>
                </aside>

                <nav className="flex flex-wrap gap-x-12 gap-y-8 font-medium text-lg">
                    <section className="min-w-[160px]">
                        <h3 className="uppercase text-black font-semibold tracking-wide mb-4">
                            BRAND
                        </h3>
                        <ul className="space-y-3">
                            {['Brand Strategy', 'Logo & Name', 'Identity & Collateral'].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-black hover:text-primary focus:text-primary active:text-primary  transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary rounded"
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

                        <h3 className="mt-12 uppercase text-black font-semibold tracking-wide mb-4">
                            DEVELOPMENT
                        </h3>
                        <ul className="space-y-3">
                            {['eCommerce', 'Web Development', 'Mobile Apps'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-black hover:text-primary focus:text-primary active:text-primary  transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary rounded"
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
                        <h3 className="uppercase text-black font-semibold tracking-wide mb-4">
                            MARKETING
                        </h3>
                        <ul className="space-y-3">
                            {['Digital', 'Market Research'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-black hover:text-primary focus:text-primary active:text-primary  transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary rounded"
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