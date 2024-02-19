import React, {useEffect}from 'react'
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import ScreenPrinter from "../Images/ScreenPrinter.jpeg"
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../Styles/Swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';


export const Home = () => {


useEffect(()=>{
  // Scroll to the top of the screen
  window.scrollTo({
    top: 0,
  })},[]);


  return (<div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 animate-moveFromLeft">
          <div className="max-w-xl mb-8">
            <div>
              <p className="inline-block px-4 py-2 text-center mb-4 text-xl font-bold tracking-wider bg-gray-900 rounded-full text-white">
                Koshur Printers
              </p>
            </div>
            <h2 className="max-w-lg  font-sans text-3xl font-bold tracking-tight mb-1 text-gray-900 sm:text-4xl sm:leading-none">
              You Imagine,</h2>
             <h2 className=" text-Primary max-w-lg mb-4 font-sans mt-2, text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">We Print.{' '}</h2> 
            <p className="text-base text-gray-700 md:text-lg">
            Providing Complete Uniforms Solution and Branding solution to Businesses and Institutions.
            <br></br>
            Kashmir based 6 colour Screen Printing.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/products"
              className="inline-flex items-center  justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md-primary md:w-auto md:mr-4 md:mb-0 bg-Primary text-white  hover:bg-pink-400 focus:shadow-outline focus:outline-none">
              Start Shopping
              <ShoppingBagIcon className="h-9 w-auto items-center font-medium	justify-center rounded-md p-2"/>

              </Link>
            <Link to="/about"
              className="inline-flex items-center font-semibold text-cyan-800 transition-colors duration-200 hover:text-deep-purple-accent-700 inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md-primary md:w-auto md:mr-4 md:mb-0 bg-cyan-700 text-white hover:bg-cyan-500  focus:shadow-outline focus:outline-none"
            >
              Learn more &#8594;
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2  animate-moveFromRight">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={ScreenPrinter}
            alt="Screen Printer Working on a T-shirt"
          />
        </div>
      </div>
    </div>
 {/* What is Screen Printing*/}

    <div className="px-4 pt-6  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:px-2 lg:py-4">
          <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex items-center justify-center lg:pl-2 animate-moveFromLeft">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://www.brprinters.com/wp-content/uploads/2022/11/what-is-screen-printing-1920x1080-2-1536x864.jpg"
                  alt="Screen Printing Machine"
                />
                <img
                  className="object-cover w-24 h-24 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://cdn-gjkdp.nitrocdn.com/JtLCHzGIeDqwNcPkNDwtksvsgIwnNCEu/assets/images/optimized/rev-4c73667/www.brushyourideas.com/blog/wp-content/uploads/2021/04/common_screen_printing.png"
                  alt="Pushing Ink through Squeegee"
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png"
                  alt="Printed T-Shirt"
                  
                />
              </div>
          </div>
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg animate-moveFromRight">
            
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  What
                  <span className="inline-block mx-2 text-Primary">
                    Screen Printing
                  </span>
                  is ?
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                Screen printing is a printing technique that uses a stencil (or screen) to transfer ink to a substrate. The screen, usually made of silk or polyester, is prepared in such a way that some areas allow the ink to pass through, while others don’t. By pushing the ink through the screen using a blade or a squeegee, the desired image is transferred to the material beneath.
                </p>
              </div>
              
    </div>
            
    </div>
    </div>
    
 {/*Swiper Section*/}
           
 <div className="px-4 pb-10  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8 lg:py-16 ">
 <div className="p-16 rounded shadow-xl sm:p-12">
   <div className="flex flex-col lg:flex-row gap-6 ">
     <div className="lg:mb-0 lg:w-1/2 lg:pr-2 items-center  flex items-center justify-center flex-col">
       <h1 className="font-sans text-4xl text-center font-bold tracking-tight text-Primary sm:text-4xl sm:leading-none">
       Behold our exquisite collection 
         <br className="hidden  md:block" />
         <span className='text-gray-900 inline-block mt-2' >  of top-selling designs,{' '}</span>
         <span className="inline-block mt-2 text-cyan-800">
         curated to captivate and inspire.
         </span>
       </h1>
     </div>
     <div className="lg:w-1/2">
     <div className="flex justify-center items-center ">
     <Swiper 
         effect={'cards'}
         grabCursor={true}
         modules={[EffectCards]}
         className="mySwiper"
       >
         <SwiperSlide>
         <div className='h-full w-full '>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='h-full w-full '>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='h-full w-full'>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='h-full w-full'>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='h-full w-full'>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='h-full w-full'>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='h-full w-full'>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='h-full w-full'>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='h-full w-full'>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='h-full w-full'>
         <img className="h-full w-full object-cover" src="https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png" alt='Best-Selling-1'/>
         </div>
         </SwiperSlide>
   
     </Swiper>
   </div>
     </div>
   </div>
 </div>
</div>
<div className=' flex items-center justify-center'>
    <Link to="/products">
      <button className="text-white animate-pulse bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 self-center"> See More &#8594;
      </button>
    </Link> 
</div>

    </div>
      );
    };




