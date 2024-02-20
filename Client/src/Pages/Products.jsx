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
    

    
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="tex bg-gray-900t-white w-full py-4 px-12 m-0 text-white  text-center font-semibold bg-gray-900 gap-3 font-medium  text-sm px-5 py-2.5 text-center flex items-center justify-center" type="button" onClick={ToggleOptionsVisibility}>Filter by Category<svg className={`w-2.5 h-2.5 ms-3 rotate-${showOptions?"180":"0"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>

</button>


<div id="dropdown" className={`${showOptions?'' : 'hidden'} relative px-auto w-full divide-y divide-gray-100 shadow `}>
<div className='absolute z-10 bg-cyan-600 rounded-md  w-full '>
    <ul className="py-2 px-4 text-sm text-gray-700 lg:flex justify-evenly  w-full " aria-labelledby="dropdownDefaultButton">
      <li className='m-2'>
        <button className="block px-4 py-2 w-full  text-white text-gray-3 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium ">T-Shirts</button> 
      </li>
      <li className='m-2'>
      <button className="block px-4 py-2 w-full  text-white text-gray-300 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium ">Hoodies</button>
      </li>
      <li className='m-2'>
      <button className="block px-4 py-2 w-full  text-white text-gray-300 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium ">Mugs</button>
      </li>
      <li className='m-2'>
      <button className="block px-4 py-2 w-full  text-white text-gray-300 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium ">Bottles</button>
      </li>
      <li className='m-2'>
      <button className="block px-4 py-2 w-full  text-white text-gray-300 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium ">Mouse Pads</button>
      </li>
    </ul>
    </div>
</div>

    {/*Accordian*/}
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 class bg-gray-900Name="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Products</h1> 
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
            
            <div class="px-8 py-10 relative w-full border-4 border-gray-200 bg-white ">
          bg-gray-900     <h2 class="tracking-widest text-sm title-font font-medium text-indi bg-gray-900go-500 mb-1">T-Shirt</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Kashmir</h1>
              <p class="leading-relaxed">World class T-Shirt Design made out of premium cottom.</p>
            </div>
              
            
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
