import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import ScreenPrinter from "../Images/ScreenPrinter.jpeg"

export const Home = () => {

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 animate-moveFromLeft">
          <div className="max-w-xl mb-8">
            <div>
              <p className="inline-block px-4 py-2 text-center mb-4 text-xl font-bold tracking-wider bg-gray-900 rounded-full text-white">
                Koshur Printers
              </p>
            </div>
            <h2 className="max-w-lg  font-sans text-3xl font-bold tracking-tight mb-1 text-gray-900 sm:text-4xl sm:leading-none">
              You Imagine,</h2>
             <h2 className=" text-Primary max-w-lg mb-4 font-sans mt-2, text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">We Print.{' '}</h2> 
            <p className="text-base text-gray-700 md:text-lg">
            Providing Complete Uniforms Solution and Branding solution to Businesses and Institutions.
            <br></br>
            Kashmir based 6 colour Screen Printing.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/products"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md-primary md:w-auto md:mr-4 md:mb-0 bg-Primary text-white  hover:bg-pink-400 focus:shadow-outline focus:outline-none">
              Start Shopping
              <ShoppingBagIcon className="h-9 w-auto items-center font-medium	justify-center rounded-md p-2"/>

              </Link>
            <Link to="/about"
              className="inline-flex items-center font-semibold text-cyan-800 transition-colors duration-200 hover:text-deep-purple-accent-700 inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md-primary md:w-auto md:mr-4 md:mb-0 bg-cyan-700 text-white hover:bg-cyan-500  focus:shadow-outline focus:outline-none"
            >
              Learn more &#8594;
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2  animate-moveFromRight">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={ScreenPrinter}
            alt="Screen Printer Working on a T-shirt"
          />
        </div>
      </div>
    </div>
  );
};



