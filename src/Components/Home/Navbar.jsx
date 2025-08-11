import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // Handle scroll for hide/show navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    // Close mobile menu when clicking a link
    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    const navItems = [
        { name: 'Services', path: '/services' },
        { name: 'Work', path: '/work' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed  w-full lg:px-32 px-5 transition-all duration-300 z-50 ${visible ? 'top-0' : '-top-24'}`}>
            <div className="container  px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <img
                            className="w-32 md:w-40"
                            src="https://i.ibb.co.com/4ZcrKF17/Digital-Spaniel-logo01-01.png"
                            alt="Digital Spaniel Logo"
                        />
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:block px-5">
                        <ul className="flex space-x-6 lg:space-x-12">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `text-lg font-medium transition-colors duration-200 
                        hover:border-b-2 hover:border-white pb-1
                        ${isActive ? 'text-white border-b-2 border-white' : 'text-gray-300 hover:text-white'}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile menu button */}
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

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4' : 'max-h-0'
                        }`}
                >
                    <ul className="flex flex-col space-y-4 px-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        `text-lg font-medium transition-colors duration-200 
                        hover:border-b-2 hover:border-white pb-1
                        ${isActive ? 'text-white border-b-2 border-white' : 'text-gray-300 hover:text-white'}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;