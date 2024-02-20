import React from 'react'
import {useState, useEffect} from 'react';



export const Products = () => {

  const[showOptions, setShowOptions]= useState(false);

    const ToggleOptionsVisibility=()=>{
      setShowOptions(!showOptions);
    }


  useEffect(()=>{
            // Scroll to the top of the screen
            window.scrollTo({top: 0})
  },[]);


  

      return<section className="text-gray-600 body-font overflow-x-hidden">
      {/*Accordian*/}
      <h2 id="accordion-collapse-heading-1" onClick={ToggleOptionsVisibility}>
      <button type="button" className="flex items-center justify-between w-full py-4 px-12 m-0 rtl:text-right text-white  text-l font-semibold bg-gray-900 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
        <span>Categories</span>
        <svg data-accordion-icon className={`w-3 h-3 rotate-${showOptions? '0' : '180'} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" onClick={ToggleOptionsVisibility}>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-1" className={` ${showOptions?'' : 'hidden'} relative`} aria-labelledby="accordion-collapse-heading-1">
        <div className='absolute z-10 w-full'>
          <div className="px-8 py-4 flex  lg:flex-col items-center justify-center  gap-2 bg-cyan-700">
           <button className="bg-gray-900  w-full text-white text-gray-300 hover:bg-Primary hover:text-white
           block rounded-md px-3 py-2 text-base font-medium">T-Shirt</button>
           <button className="bg-gray-900  w-full text-white text-gray-300 hover:bg-Primary hover:text-white
           block rounded-md px-3 py-2 text-base font-medium" >Hoodies</button>
           <button className="bg-gray-900  w-full text-white text-gray-300 hover:bg-Primary hover:text-white
           block rounded-md px-3 py-2 text-base font-medium">Mugs</button>
           <button className="bg-gray-900  w-full text-white text-gray-300 hover:bg-Primary hover:text-white
           block rounded-md px-3 py-2 text-base font-medium">Bottles</button>
           <button className="bg-gray-900  w-full text-white text-gray-300 hover:bg-Primary hover:text-white
           block rounded-md px-3 py-2 text-base font-medium">Mouse Pads</button>

          </div>
        </div>
    </div>
    {/*Accordian*/}
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Products</h1> 
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
            
              
            
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              
              
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
             
              
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              
              </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
            
              
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
}
