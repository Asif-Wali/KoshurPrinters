import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { CartComponent } from '../Components/CartComponent';

export const Cart = () => {
  
  const arr = [1,2,3,4,5] 

  return (<div className="relative  mb-16">
            <div  className='cart-heading p-4 bg-[#d9e7e2]'>
            {/*heading*/}
              <div className='p-4 bg-cyan-800 rounded-lg text-center'>
              <h1 className=' text-xl text-white flex items-center gap-2 justify-center'><ShoppingCartIcon className='h-6 w-6 mt-1 text-white'/> Cart ({arr.length}) </h1>
              </div>
              {/*body*/}
              <div className='cart-container w-full p-2  lg:flex'>
                <div className='cart-detail shadow-lg flex flex-col gap-2 w-full'>
                  {arr.map((el)=>{
                    return<CartComponent/>
                  })}

                </div>

               <div className='cart-total border-2 border-Gframe '>
                </div>
              
              </div>
            </div>
  
          </div>
  )
}
