import Image from 'next/image';
import React from 'react';

import { FaArrowLeft , FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import testi from "../../public/testimonials/testimonial-2.jpg";
// import bg_ from "../..public/sm.jpg"
const Testimonial = () => {
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">

<div class="  py-36 relative z-10">
        <div className="-z-10  dark:border dark:border-red-700 dark:shadow-md w-8/12 absolute bottom-0 right-0 top-16 rounded-tl-3xl rounded-br-3xl"  ></div>
        <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto">
            <div className="mb-10 md:mb-20">
                <p className="text-3xl md:text-4xl font-bold  text-gray-600 dark:text-gray-100 w-full lg:w-5/12">What Our Customers Are Saying</p>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <div className="w-full md:w-10/12 h-72 relative mb-6">
                        <div className="dot-pattern opacity-30 h-48 w-32 absolute -top-24 -left-16 -z-10"></div>
                        <div className="dot-pattern opacity-30 h-48 w-32 absolute -bottom-24 -right-16 -z-10"></div>
                        <div className="absolute z-10 -top-6 -right-6">
                            <div className="bg-indigo-500 h-16 w-16 rounded-full flex items-center justify-center">
                                <span className=" text-white text-5xl">
                                    <FaQuoteLeft />
                                </span>
                            </div>
                        </div>
                        <Image width={350} height={350} src={testi} alt="" class="w-full h-full object-cover rounded-md shadow-md" />
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center justify-center h-10 w-10 bg-red-500 text-white shadow-md hover:shadow-xl rounded-full p-2">
                            <span className=" align-center text-2xl text-gray-60 hover:scale-75 transition-all duration-200">

                             <FaArrowLeft />
                            </span>
                        </button>
                        <button className="flex items-center justify-center h-10 w-10 bg-red-500 text-white shadow-md hover:shadow-xl rounded-full p-2">
                            <span className=" align-center text-2xl text-gray-60 hover:scale-75 transition-all duration-200"> <FaArrowRight /></span>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 text-gray-600 dark:text-gray-100">
                    <p className="text-xl font-bold capitalize mb-3">help us improve our productivity.</p>
                    <p className="mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div>
                        <p className="font-bold text-lg">Riya Sen</p>
                        <p>Lead Marketing Manager</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  );
}

export default Testimonial;
