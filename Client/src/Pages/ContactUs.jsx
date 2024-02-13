import React,{useState} from 'react';
export const ContactUs = () => {
    const [formData, setFormData]=useState({
        name:"",
        email:"",
        message:"",
    });
    const HandleSubmit=()=>{
        console.log(formData);
    }
 return<section className="text-Secondary body-font relative border-b-Secondary border-2"  >
 <div className="container px-5 py-22 mx-auto flex sm:flex-nowrap flex-wrap">
   <div className="lg:w-2/3 md:w-1/2 bg-cyan-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
     <iframe width="100%" height="100%" title="map" className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10643.386152419222!2d74.86032714229823!3d34.16319572493846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1857a6004ef6b%3A0x3bdc13a2de447353!2sKoshur%20Printers!5e1!3m2!1sen!2sin!4v1707829911948!5m2!1sen!2sin"></iframe>
     <div className="bg-gray-600 relative  flex flex-wrap py-6 rounded shadow-md invisible md:visible lg:visible ">
       <div className="lg:w-1/2 px-6  ">
         <h2 className="title-font font-semibold text-white tracking-widest text-xs">Address</h2>
         <p className="mt-1 text-cyan-200" >Tailbal, Shalimar, Srinagar, J&K, India, 190006</p>
       </div>
       <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
         <h2 className="title-font font-semibold text-white tracking-widest text-xs">Email</h2>
         <a  href="mailto:koshurprinters7@gmail.com" className="text-cyan-200 leading-relaxed">Koshurprinters7@gmail.com</a>
         <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">Phone</h2>
         <a className="leading-relaxed text-cyan-200" href="tel:+917780845963">+91 7780845963</a>
       </div>
     </div>
   </div>
   <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 border-Primary border-2  rounded-lg px-6" >
   <form onSubmit={HandleSubmit}>
     <h1 className="text-lg mb-1 font-bold mt-4 text-Primary text-4xl title-font">Queries or Feedback</h1>
     <p className="leading-relaxed mb-5 text-Secondary">Feel free to contact us.</p>
     <div className="relative mb-4">
       <label htmlFor="name" className="leading-7 text-sm text-Secondary">Name</label>
       <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       value={formData.name}
         onChange={(e) => setFormData({...formData, [e.target.name]:e.target.value})}
         required={true} placeholder='Type your name here...'/>
     </div>
     <div className="relative mb-4">
       <label htmlFor="email" className="leading-7 text-sm text-Secondary">Email</label>
       <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       value={formData.email}
         onChange={(e) => setFormData({...formData, [e.target.name]:e.target.value})}
         required={true} placeholder='Type your email here...'/>
     </div>
     <div className="relative mb-4">
       <label htmlFor="message" className="leading-7 text-sm text-Secondary">Message</label>
       <textarea id="message" name="message" className="w-full bg-white rounded border border-Secondary focus:border-Primary focus:ring-2 focus:ring-Primary h-32 text-base outline-none text-Secondary py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
       value={formData.message}
         onChange={(e) => setFormData({...formData, [e.target.name]:e.target.value})}
         required={true} placeholder='Type your message here...'></textarea>
     </div>
     <button className="text-white bg-Secondary border-0 py-2 px-6 focus:outline-none hover:bg-Primary rounded text-lg w-full" type='submit'>Send Mail</button>
     </form>
     <p className="text-xs text-Primary text-center font-bold mt-4 mb-4">Your Feedback and Queries are valued here.</p>
   </div>
 </div>
</section>
}
