import React from 'react'
import { useEffect } from 'react';

export const Products = () => {

  useEffect(()=>{
    // Scroll to the top of the screen
    window.scrollTo({
      top: 0,
    });
    
      },[]);
    return (<div className="relative h-screen mb-16">
  <img src="https://1.bp.blogspot.com/-1zIi9LZENIo/WYbdzs6AFEI/AAAAAAAALFY/Fwvv2TE2cwIqiWMLLaxgKlVJGwqoar4hgCLcBGAs/s1600/bye-bye-builder.jpg" alt="Builder" className=" w-full h-screen mb-16 object-cover overflow-x-hidden" />
  <div className="absolute inset-0 flex items-start mt-6 justify-center">

    <h1 className=" text-white text-center font-bold text-4xl">This Page is Under Construction !</h1>

  <h2 className="font-sans text-3xl text-center font-bold mx-auto tracking-tight text-cyan-900 sm:text-4xl sm:leading-none">
  Hii
  </h2>
</div>


</div>
  )
}
