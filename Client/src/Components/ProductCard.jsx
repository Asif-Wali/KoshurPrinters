import React from 'react';
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const ProductCard = () => {
  return (<Link to="/productdetail">
    <div class="relative mx-auto  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl ">
  <div class="relative px-2 py-1 mt-3 flex h-35 overflow-hidden rounded-lg">
    <img class="object-cover rounded-lg" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt="product" />
  </div>
  <div class="px-2 py-2">
    <div>
      <h3 class="text-sm text-left font-light text-Primary">Blue Shikara</h3>
    </div>
    <div class="flex items-center justify-between">
      <p>
        <span class="text-xs font-extralight text-gray-900">&#8377;800/-</span>
      </p>
      <div class="flex items-center">
       
      </div>
    </div>
    <Link to="/checkout">
          <button   class=" w-full flex items-center justify-center rounded-md bg-cyan-700 gap-1 py-1 text-center text-xs  text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
           Buy Now
           <ShoppingBagIcon className="h-4 items-center font-medium	justify-center rounded-md "/>
          </button>
    </Link>
  </div>
</div>
</Link>

  )
}
