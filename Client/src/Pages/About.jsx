
import React from 'react';
import ScreenPrinter from "../Images/ScreenPrinter.jpeg";

import 'swiper/css';
import 'swiper/css/effect-cards';
import '../Styles/Swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';





export const About = () => {
  
  return (<div>
    
    
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
              <div className="p-8 rounded shadow-xl sm:p-16">
                <div className="flex flex-col lg:flex-row">
                  <div className="mb-6 lg:mb-0 ">
                  <div className="flex flex-col text-center w-full mb-8">
                        <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-cyan-800  ">Hear our
                        <span className="inline-block mx-2 text-Primary">
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
            <div className="rounded shadow-xl py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-Primary">
                Meet Our 
                <span className="inline-block mx-2 text-cyan-800 ">
                 Partners
                </span></h2>
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
            {/*Swiper Section*/}
           
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="p-8 rounded shadow-xl sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:mb-0 lg:w-1/2 lg:pr-5 ">
                        <h1 className="font-sans py-16 text-center text-4xl font-bold tracking-tight text-Primary sm:text-4xl sm:leading-none">
                        Behold our exquisite collection 
                          <br className="hidden  md:block" />
                          <span className='text-gray-900 inline-block mt-2' >  of top-selling designs,{' '}</span>
                          <span className="inline-block m-2 text-cyan-800">
                          curated to captivate and inspire.
                          </span>
                        </h1>
                      </div>
                      <div className="lg:w-1/2 ">
                      <div className="flex justify-center items-center">
                      <Swiper 
                          effect={'cards'}
                          grabCursor={true}
                          modules={[EffectCards]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                          <img className="image" src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                          <SwiperSlide>
                          <img src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                          <SwiperSlide>
                          <img src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                          <SwiperSlide>
                          <img src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                          <SwiperSlide>
                          <img src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                          <SwiperSlide>
                          <img src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                          <SwiperSlide>
                          <img src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                          <SwiperSlide>
                          <img src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                          <SwiperSlide>
                          <img src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                          <SwiperSlide>
                          <img src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='Best-Selling-1'/>
                          </SwiperSlide>
                    
                      </Swiper>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
             
 
</div>)
};

















