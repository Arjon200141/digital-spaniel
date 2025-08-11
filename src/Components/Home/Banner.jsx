import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative lg:px-64 p-10 flex lg:justify-start justify-center items-center'>
            <div className='lg:w-1/2 w-full absolute right-0 top-0 -z-10'>
                <img src="https://i.ibb.co.com/6R9xzVpZ/Spaniel01-gradient.png" alt="" />
            </div>

            <div className=' lg:min-h-screen lg:px-0 px-10   lg:relative absolute z-50 top-[54vh] lg:top-0 lg:w-1/2 lg:pt-24 flex justify-center items-center text-center lg:text-start'>
                <div className='bg-white/50 rounded lg:shadow-none shadow-md py-10 lg:block flex flex-col justify-center items-center'>
                    <p className='w-fit banner1 font-semibold'>
                        BRAND, DEV, ECOM, MARKETING
                    </p>
                    <h2 className='w-fit lg:text-[44px] text-[32px] lg:leading-[48px] font-medium banner2'>
                        We unleash <br />
                        <span className='text-[#19293aa4] lg:text-[48px] text-[32px]'>business potential</span>
                    </h2>
                    <p className='text-sm my-5 leading-6 text-[#506473] text-wrap w-[50%]'>
                        We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.
                    </p>
                    <NavLink><p className=' text-xl my-10 w-fit border-b-2  border-[#C0345E]'>Let’s talk</p></NavLink>
                </div>
            </div>

        </div>
    );
};

export default Banner;