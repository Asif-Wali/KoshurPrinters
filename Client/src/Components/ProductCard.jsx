import React from 'react';
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const ProductCard = () => {
  return (<Link to="/productdetail">
    <div class="relative mx-auto  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl ">
  <div class="relative mx-3 mt-3 flex h-50 overflow-hidden rounded-xl">
    <img class="object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt="product" />
    
  </div>
  <div class="mt-2 px-5 pb-5">
    <div>
      <h3 class="text-3xl  font-extrabold text-Primary">Blue Shikara</h3>
    </div>
    <div class="mt-2 mb-2 flex items-center justify-between">
      <p>
        <span class="text-2xl font-bold text-gray-900"> &#8377; 800 /-</span>
      </p>
      <div class="flex items-center">
       <ShoppingCartIcon className='h-10 w-16 items-center  text-white font-medium bg-gray-900	justify-center rounded-md p-1  hover:bg-Primary
       '/>
      </div>
    </div>

    <Link to="/checkout">
          <button   class=" w-full flex items-center justify-center rounded-md bg-cyan-700 px-5 py-2.5 text-center text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
           Buy Now
           <ShoppingBagIcon className="h-10 w-auto items-center font-medium	justify-center rounded-md p-2 ml-2 mb-1"/>
          </button>
    </Link>
  </div>
</div>
</Link>

  )
}
