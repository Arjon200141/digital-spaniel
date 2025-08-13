import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
        closeMobileMenu();
    };

    const navItems = [
        { name: 'Services', id: 'services' },
        { name: 'Work', id: 'work' },
        { name: 'About', id: 'about' },
        { name: 'Blog', id: 'blog' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full lg:pl-[8.95%] lg:pr-[10.94%] transition-all duration-300 z-50 ${
                visible ? 'top-0' : '-top-24'
            }`}
        >
            <div className="container py-3">
                <div className="flex justify-between items-center">
                    <div>
                        <img
                            className="w-32 md:w-40"
                            src="https://i.ibb.co.com/4ZcrKF17/Digital-Spaniel-logo01-01.png"
                            alt="Digital Spaniel Logo"
                        />
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-6 lg:space-x-12">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-lg font-medium transition-colors duration-200 
                                        hover:border-b-2 hover:border-white pb-1 text-gray-300 hover:text-white"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 py-4' : 'max-h-0'
                    }`}
                >
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-lg font-medium transition-colors duration-200 
                                    hover:border-b-2 hover:border-white pb-1 text-gray-300 hover:text-white w-full text-left"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;