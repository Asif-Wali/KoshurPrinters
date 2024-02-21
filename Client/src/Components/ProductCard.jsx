import React,{useState} from 'react';
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Rating } from "@material-tailwind/react";
import "../Styles/ProductPage.css"
 


export const ProductCard = () => {
  const [ratings, setRatings]=useState(1)
  return (
    
    <div class="relative mx-auto  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl ">
  <div class="relative px-2 py-1 mt-3 flex h-55 overflow-hidden rounded-lg">
  <Link to="/productdetail">
    <img class="object-cover rounded-lg" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt="product" />
  </Link>
  </div>
  
  <div class="px-2 py-2">
    <div>
      <h3 class="text-sm text-left font-light text-black">Blue Shikara</h3>
    </div>
    <div class="flex items-center justify-between">
      <p>
        <span class="text-xs font-extralight text-gray-900">&#8377;800/-</span>
      </p>
      <div class="flex items-center ">
        <div className='starholder'><Rating  className="RatingsDiv" value={ratings} readonly onChange={(value)=>{setRatings(value)}}/></div>
      </div>
    </div>
  </div>
  <div className='w-full px-2 py-2 flex flex-col gap-2'>
  <Link to="/cart">
          <button   class=" w-full flex items-center justify-center rounded-md bg-Primary gap-2 py-2 text-center text-xs  text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
           Add to Cart
           <ShoppingCartIcon className="h-4 items-center font-medium	justify-center rounded-md "/>
          </button>
    </Link>
    <Link to="/checkout">
          <button   class=" w-full flex items-center justify-center rounded-md bg-cyan-700 gap-2 py-2 text-center text-xs  text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
           Buy Now
           <ShoppingBagIcon className="h-4 items-center font-medium	justify-center rounded-md "/>
          </button>
    </Link>
    
  </div>

</div>


  )
}
