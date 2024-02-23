import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { CartComponent } from '../Components/CartComponent';

export const Cart = () => {
  
  const arr = [1,2,3,4,5] 

  return (<div className="relative  mb-16">
            <div  className='cart-heading p-4'>
            {/*heading*/}
              <div className='p-4 bg-cyan-800 rounded-lg text-center'>
              <h1 className=' text-xl text-white flex items-center gap-2 justify-center'><ShoppingCartIcon className='h-6 w-6 mt-1 text-white'/> Cart ({arr.length}) </h1>
              </div>
              {/*body*/}
              <div className='cart-container shadow-xl  w-full p-2  lg:flex lg:gap-8'>
                <div className='cart-detail rounded flex flex-col gap-2 w-full'>
                  {arr.map((el)=>{
                    return<CartComponent/>
                  })}

                </div>

               <div className='cart-total rounded-xl shadow-xl lg:w-2/5 py-8 px-4 border border-Secondary h-auto my-2'>
                    <div className='heading1 p-3 flex align-center justify-between'>
                    <h1 className='font-semibold'>Total</h1>
                    <h2>600/-</h2>
                    </div>
                    <div className='heading1 p-3 flex align-center justify-between'>
                    <h1 className='font-semibold'>Shipping</h1>
                    <h2>50/-</h2>
                    </div>
                    <hr className='h-0 border-b border-solid border-Primary grow'/>

                    <div className='heading1 p-3 flex align-center justify-between mt-2'>
                    <h1 className=' font-bold'>Grand Total</h1>
                    <h2>650/-</h2>
                    </div>

                    <button className='w-full p-4 rounded-md bg-Primary mt-4 text-white font-semibold'>Checkout</button>

              </div>

              
              </div>
            </div>
  
          </div>
  )
}
