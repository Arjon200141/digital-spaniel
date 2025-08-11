import React from 'react';

const Footer = () => {
    return (
        <footer id='contact' className="bg-[#EDEFF1] text-base-content">
            <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between py-20 px-10 md:px-44 gap-y-16">
                <aside className="flex flex-col max-w-xs">
                    <h2 className="text-4xl font-medium mb-6 leading-snug">
                        We're a brands
                        <br />
                        <span className="text-[#506473]">best friend</span>
                    </h2>
                    <a href="" className="mt-20 text-lg border-b-2 border-red-500 hover:border-primary transition w-24">
                        Let's talk
                    </a>

                </aside>

                <nav className="flex flex-wrap gap-x-20 gap-y-6 font-medium text-lg">
                    <section>
                        <h3 className="footer-title uppercase mb-6">Explore</h3>
                        <ul className="space-y-3">
                            {['Services', 'Work', 'About', 'Blog', 'Career'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="link link-hover hover:text-primary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h3 className="footer-title mb-6">Services</h3>
                        <ul className="space-y-3">
                            {['Brand', 'Development', 'Marketing'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="link link-hover hover:text-primary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h3 className="footer-title mb-6">Questions?</h3>
                        <ul className="space-y-3 text-base">
                            <li>
                                <a href="tel:+0121345678" className="link link-hover hover:text-primary transition">
                                    Call Us
                                </a>
                                <p className="mt-1 ml-1 text-[#506473]">0121 345 678</p>
                            </li>
                            <li>
                                <a href="mailto:info@digitalspaniel.co.uk" className="link link-hover hover:text-primary transition">
                                    Email Us
                                </a>
                                <p className="mt-1 ml-1 text-[#506473]">info@digitalspaniel.co.uk</p>
                            </li>
                        </ul>
                    </section>
                </nav>
            </div>

            <div className="bg-[#EDEFF1] text-[#506473] pb-6 px-10 md:px-44 flex flex-col md:flex-row items-center justify-between max-w-[1440px] mx-auto gap-4">
                <aside className="">
                    <p className="text-gray-700 text-sm select-none">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </aside>

                <nav className="flex gap-6">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="text-gray-700 hover:text-primary transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>

                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="text-gray-700 hover:text-primary transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                    </a>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-gray-700 hover:text-primary transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
