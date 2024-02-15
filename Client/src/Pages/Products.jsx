import React from 'react'
import { useEffect } from 'react';

export const Products = () => {

  useEffect(()=>{
    // Scroll to the top of the screen
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scrolling smooth
    });
    
      },[]);
    return (<div className="relative h-screen mb-16">
  <img src="https://1.bp.blogspot.com/-1zIi9LZENIo/WYbdzs6AFEI/AAAAAAAALFY/Fwvv2TE2cwIqiWMLLaxgKlVJGwqoar4hgCLcBGAs/s1600/bye-bye-builder.jpg" alt="Builder" className=" w-full h-screen mb-16 object-cover overflow-x-hidden" />
  <div className="absolute inset-0 flex items-start mt-6 justify-center">
    <h1 className=" text-white text-center font-bold text-4xl">This Page is Under Construction !</h1>
  </div>
</div>
  )
}
