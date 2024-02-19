
import React from 'react';
import ScreenPrinter from "../Images/ScreenPrinter.jpeg";
import HandBag from "../Images/WhatsApp Image 2024-02-15 at 16.57.25.jpeg"
import Hoodies from "../Images/Hoodies.jpeg"






export const About = () => {
  
  return (<div className='overflow-x-hidden'>
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
            {/* Gallery*/}
  <section className="text-gray-600 body-font">
  <div className="container px-4 py-16 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-cyan-800">What we do?</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">At our company, we specialize in bringing your designs to life on various surfaces, including textiles, mugs, bottles, bags, and more. From design consultation to precise ink mixing and meticulous printing, we handle every step with care and expertise. With our dedication to quality and attention to detail, we ensure that your custom printed products are not only visually stunning but also durable and long-lasting. Here, down below, is the sample of our work:-</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4 animate-moveFromBottom2">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={HandBag}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 animate-moveFromBottom2">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={Hoodies}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 animate-moveFromBottom2">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={HandBag}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 animate-moveFromBottom">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={Hoodies}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 animate-moveFromBottom">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={HandBag}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 animate-moveFromBottom">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={Hoodies}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
</section>
</div>)
};

















