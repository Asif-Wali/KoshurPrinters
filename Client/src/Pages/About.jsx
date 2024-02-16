
import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ScreenPrinter from "../Images/ScreenPrinter.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


export const About = () => {
  
  return (<div>
    
    
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
              <div className="p-8 rounded shadow-xl sm:p-16">
                <div className="flex flex-col lg:flex-row">
                  <div className="mb-6 lg:mb-0 ">
                  <div className="flex flex-col text-center w-full mb-8">
                        <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4  text-Primary">Hear our
                        <span className="inline-block mx-2 text-cyan-800 ">
                         Story
                        </span>
                        </h1>
                        <p className=" leading-relaxed text-base text-base  text-justify text-gray-700">
                        Founded in <b>2018</b>, Koshur Printers emerged from a humble garage to become a renowned name  in the textile printing industry. Through dedication to quality and innovation, the company expanded its operations, diversifying its offerings to include custom apparel, promotional items, and commercial projects. Strategic marketing efforts solidified our brand presence, while partnerships with local events and industry expos facilitated market penetration. With a commitment to continuous improvement, We embraced new technologies and trends, while forging strong collaborations with complementary businesses, enabling comprehensive solutions and expansive growth opportunities. Today, Koshur Printers stands as a beacon of excellence, fueled by passion, perseverance, and a thriving network of partners.
                        </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Partner Section*/}
            <div className="rounded shadow-xl py-12 mx-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold mb-6 text-center text-Primary">Meet Our Partners</h2>
                <div className="overflow-x-auto whitespace-nowrap scrollbar1">
                  <div className="flex space-x-6">
                  
                    <img className="h-48" src={ScreenPrinter} alt="Partner 1" />
                    <img className="h-48" src={ScreenPrinter} alt="Partner 2" />
                    <img className="h-48" src={ScreenPrinter} alt="Partner 3" />
                    <img className="h-48" src={ScreenPrinter} alt="Partner 1" />
                    <img className="h-48" src={ScreenPrinter} alt="Partner 2" />
                    <img className="h-48" src={ScreenPrinter} alt="Partner 3" />
                    <img className="h-48" src={ScreenPrinter} alt="Partner 1" />
                    <img className="h-48" src={ScreenPrinter} alt="Partner 2" />
                    <img className="h-48" src={ScreenPrinter} alt="Partner 3" />
                  </div>
                </div>
              </div>
            </div>

   

      );

 {/*<Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="w-1/2 h-1/2"
    >
      <SwiperSlide className=' text-center text-base bg-Primary flex justify-center items-center'> 
        <img className=' block object-contain ' 
            src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" alt="Roronoa Zoro"/>  
      </SwiperSlide>
      <SwiperSlide className=' text-center text-base bg-Primary flex justify-center items-center'> 
        <img className=' block object-contain ' 
            src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" alt="Roronoa Zoro"/>  
      </SwiperSlide>
      <SwiperSlide className=' text-center text-base bg-Primary flex justify-center items-center'> 
        <img className=' block object-contain ' 
            src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" alt="Roronoa Zoro"/>  
      </SwiperSlide>
      <SwiperSlide className=' text-center text-base bg-Primary flex justify-center items-center'> 
        <img className=' block object-contain ' 
            src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" alt="Roronoa Zoro"/>  
      </SwiperSlide>
      <SwiperSlide className=' text-center text-base bg-Primary flex justify-center items-center'> 
        <img className=' block object-contain ' 
            src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" alt="Roronoa Zoro"/>  
      </SwiperSlide>
      <SwiperSlide className=' text-center text-base bg-Primary flex justify-center items-center'> 
        <img className=' block object-contain ' 
            src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" alt="Roronoa Zoro"/>  
      </SwiperSlide>
      <SwiperSlide className=' text-center text-base bg-Primary flex justify-center items-center'> 
        <img className=' block object-contain ' 
            src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" alt="Roronoa Zoro"/>  
      </SwiperSlide>
      <SwiperSlide className=' text-center text-base bg-Primary flex justify-center items-center'> 
        <img className=' block object-contain ' 
            src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" alt="Roronoa Zoro"/>  
      </SwiperSlide>
      <SwiperSlide className=' text-center text-base bg-Primary flex justify-center items-center'> 
        <img className=' block object-contain ' 
            src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" alt="Roronoa Zoro"/>  
      </SwiperSlide>
    </Swiper>
    */}
</div>
  )
};

















