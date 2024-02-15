
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


export const About = () => {
 
  return (<div>

    
    <Swiper
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
  
</div>
  )
};



// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }














