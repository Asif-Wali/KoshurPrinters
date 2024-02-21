import React from 'react'
import {useState, useEffect} from 'react';
import { ProductCard } from '../Components/ProductCard';


export const Products = () => {

  const[showOptions, setShowOptions]= useState(false);

    const ToggleOptionsVisibility=()=>{
      setShowOptions(!showOptions);
    }
    const arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


  useEffect(()=>{
            // Scroll to the top of the screen
            window.scrollTo({top: 0})
  },[]);


  

      return<div className="text-gray-600 body-font overflow-x-hidden w-full">
      {/*Accordian*/}
    

            <div className='w-full flex gap-2 justify-evenly px-2 py-2 items-center bg-gray-700'>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className={`w-full text-white ${showOptions? "bg-Primary" : "bg-gray-900"} text-center  font-normal border border-white  gap-4  text-sm  py-2  flex items-center justify-center rounded-lg`} type="button" onClick={ToggleOptionsVisibility}>Filter by Category<svg className={`w-2.5 h-2.5 ${showOptions?"rotate-180":"rotate-0"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>

            </button>
            <div className='w-full flex relative justify-center items-center '>
            <input className=' w-full bg-white rounded-full border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out '
            placeholder="Search here.."
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"    className="w-6 h-6 absolute z-2 right-2 text-Primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          
            </div>
            </div>


<div id="dropdown" className={`${showOptions?'' : 'hidden'} relative px-auto w-full divide-y divide-gray-100 shadow `}>
<div className='absolute z-10 bg-cyan-600 rounded-b-lg  w-full '>
    <ul className="py-2 px-4 text-sm text-gray-700 lg:flex justify-evenly  w-full " aria-labelledby="dropdownDefaultButton">
      <li className='m-2'>
        <button className="block px-4 py-2 w-full  text-white text-gray-3 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium " onClick={ToggleOptionsVisibility} >T-Shirts</button> 
      </li>
      <li className='m-2'>
      <button className="block px-4 py-2 w-full  text-white text-gray-300 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium" onClick={ToggleOptionsVisibility}>Hoodies</button>
      </li>
      <li className='m-2'>
      <button className="block px-4 py-2 w-full  text-white text-gray-300 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium" onClick={ToggleOptionsVisibility}>Mugs</button>
      </li>
      <li className='m-2'>
      <button className="block px-4 py-2 w-full  text-white text-gray-300 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium" onClick={ToggleOptionsVisibility}>Bottles</button>
      </li>
      <li className='m-2'>
      <button className="block px-4 py-2 w-full  text-white text-gray-300 bg-gray-900 hover:bg-Primary hover:text-white
        block rounded-md  text-base font-medium" onClick={ToggleOptionsVisibility}>Mouse Pads</button>
      </li>
    </ul>
    </div>
</div>

    {/*Accordian*/}
      <div className="px-6 py-16 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col text-center w-full p-4 mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Products</h1> 
        </div>
        <div className="grid gap-8 py-8 px-4 grid-cols-2 sm:grid-cols-3  lg:grid-cols-3  border-2 border-Primary">
          {arr.map((i)=>{
            return<ProductCard key={i}/>
          })}
        </div>
      </div>
    </div>
}
