import React,{useState}from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";
import "../Styles/PhoneNumberInput.css";


import { Link } from 'react-router-dom'

export const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  
  const [isFocused, setIsFocused] = useState(false); // to changet color of the border

  const [LoginDetails, setLoginDetails]= useState({
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:""
  });
  const [PasswordVisible, setPasswordVisible]=useState(false);
  const [ConfirmPasswordVisible, setConfirmPasswordVisible]=useState(false);

  const HandleFocus = () => {
    setIsFocused(true);
  };
  const HandleBlur = () => {
    setIsFocused(false);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const HandleLogin=(e)=>{
    e.preventDefault();
    let userdetails={...LoginDetails, isChecked};
    console.log(userdetails);
    
  }

  return (<div className="bg-white py-10">
          <div className="container flex flex-col mx-auto bg-white rounded-lg py-2">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5">
              <div className="flex items-center justify-center w-full lg:p-12">
                <div className="flex items-center p-4 xl:p-10">
                  <form className="flex flex-col w-full h-full pb-6 text-center p-8 my-4 bg-white shadow-lg rounded-3xl border-2 border-Primary" onSubmit={(e)=>HandleLogin(e)}>
                    <h3 className="mb-8 text-4xl font-extrabold text-cyan-700">Sign Up</h3>
                    <Link className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-white bg-gray-900 hover:bg-cyan-800  focus:ring-4 focus:ring-gray-300">
                      <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="Google Icon"/>
                      Sign up with Google
                      </Link>
                    <div className="flex items-center mb-3">
                      <hr className="h-0 border-b border-solid border-Primary grow"/>
                      <p className="mx-4 text-Primary">or</p>
                      <hr className="h-0 border-b border-solid border-Primary grow"/>
                    </div>
                    <label htmlFor="name" className="mb-2 text-sm text-start leading-7 text-Secondary" >Name*</label>
                    <input id="name" type="text" placeholder="Enter your name here..." className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={LoginDetails.name}
                    name="name"
                    onChange={(e) => setLoginDetails({...LoginDetails, [e.target.name]:e.target.value})}
                    required={true} />
                    <label htmlFor="email" className="mb-2 text-sm text-start leading-7 text-Secondary" >Email*</label>
                    <input id="email" type="email" placeholder="Enter your email here..." className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={LoginDetails.email}
                    name="email"
                    onChange={(e) => setLoginDetails({...LoginDetails, [e.target.name]:e.target.value})}
                    required={true} />



                    <label htmlFor="phoneNumber" className="mb-2 text-sm text-start leading-7 text-Secondary" >Mobile Number*</label>
                    <PhoneInput
                      defaultCountry={'IN'}
                      placeholder="Enter you phone number here..."
                      value={LoginDetails.phoneNumber}
                      required={true}
                      onChange={(value) => {
                        setLoginDetails({...LoginDetails, phoneNumber:value})
                      }}
                      className={isFocused ? 'focused' : ''}
                      onFocus={HandleFocus}
                      onBlur={HandleBlur}
                    />


                    {/* Address INput start*/}
                    <label htmlFor="LandMark" className="mb-2 text-sm text-start leading-7 text-Secondary" >Land Mark*</label>
                        <input
                        name="LandMark"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Landmark here..."
                      />
                  <label htmlFor="TownOrVillage" className="mb-2 text-sm text-start leading-7 text-Secondary" >Town/Village*</label>
                        <input
                        name="TownOrVillage"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your town or village..."
                        />
                        <label htmlFor="city" className="mb-2 text-sm text-start leading-7 text-Secondary" >City*</label>
                        <input
                        name="city"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your city here..."
                        />  
                        <label htmlFor="state/province" className="mb-2 text-sm text-start leading-7 text-Secondary" >State/Province*</label>
                        <input
                        name="state/province"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your state/province here..."
                        /> 
                        <label htmlFor="country" className="mb-2 text-sm text-start leading-7 text-Secondary" >Country*</label>
                        <input
                        name="country"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your country code here..."
                        />
                        <label htmlFor="zip/postalcode" className="mb-2 text-sm text-start leading-7 text-Secondary" >Zip/Postal code*</label>
                        <input
                        name="zip/postalcode"
                        type="tel"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your zip/postal code here..."
                        />
                        
                    {/* Address INput end*/}
                    <div className="relative">
                          <label htmlFor="password" className="mb-2 text-sm text-start flex self-start leading-7 text-Secondary">Password*</label>
                          <div className="flex items-center border border-gray-700 rounded bg-white focus-within:border-Primary focus-within:ring-2 focus-within:ring-Primary mb-5">
                            <input 
                              id="password" 
                              name="password"
                              type={PasswordVisible?"text":"password"} 
                              placeholder="Enter your password here..." 
                              className="w-full py-2 px-3 text-base outline-none text-Secondary rounded focus:outline-none"
                              value={LoginDetails.password}
                              onChange={(e) => setLoginDetails({...LoginDetails, [e.target.name]: e.target.value})} 
                              required={true} 
                            />
                            <span className="absolute right-1">
                              {PasswordVisible?<EyeIcon className='w-12 z-10 text-Secondary  
                                block  px-3 py-2 text-base font-medium'
                                onClick={()=>{setPasswordVisible(!PasswordVisible)}}/>:<EyeSlashIcon className=' w-12 z-10 text-Secondary 
                              block  px-3 py-2 text-base font-medium'
                              onClick={()=>{setPasswordVisible(!PasswordVisible)}}/>}
                            </span>
                          </div>
                    </div>
                    <div className="relative">
                          <label htmlFor="confirmPassword" className="mb-2 text-sm text-start flex self-start leading-7 text-Secondary">Confirm Password*</label>
                          <div className="flex items-center border border-gray-700 rounded bg-white focus-within:border-Primary focus-within:ring-2 focus-within:ring-Primary mb-5">
                            <input 
                              id="confirmPassword" 
                              name="confirmPassword"
                              type={ConfirmPasswordVisible?"text":"password"} 
                              placeholder="Confirm password here..." 
                              className="w-full py-2 px-3 text-base outline-none text-Secondary rounded focus:outline-none"
                              value={LoginDetails.confirmPassword}
                              onChange={(e) => setLoginDetails({...LoginDetails, [e.target.name]: e.target.value})} 
                              required={true} 
                            />
                            <span className="absolute right-1">
                              {ConfirmPasswordVisible?<EyeIcon className='w-12 z-10 text-Secondary  
                                block  px-3 py-2 text-base font-medium'
                                onClick={()=>{setConfirmPasswordVisible(!ConfirmPasswordVisible)}}/>:<EyeSlashIcon className=' w-12 z-10 text-Secondary 
                              block  px-3 py-2 text-base font-medium'
                              onClick={()=>{setConfirmPasswordVisible(!ConfirmPasswordVisible)}}/>}
                            </span>
                          </div>
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label className="relative inline-flex items-center mr-3 cursor-pointer">
                        <input type="checkbox" checked={isChecked}
                        onChange={handleCheckboxChange} className="sr-only peer"/>
                        
                        <div
                          className={`w-5 h-5 border-2 rounded-md border-gray-700 ${isChecked ? 'bg-blue-500 border-0' : 'bg-white'}`}>
                          {isChecked ? <img className="" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png" alt="tick"/>:""}
                        </div>
                        <span className="ml-3 text-sm font-normal text-Secondary">I agree to receive updates in future</span>
                      </label>
                    </div>
                    <button className="w-full px-6 py-4 my-6 mb-8  font-bold leading-none text-white transition duration-300  md:w-96 bg-Primary border-0 focus:outline-none hover:bg-Secondary rounded text-lg" type='submit'>Sign Up</button>
                    <p className="text-sm leading-relaxed text-gray-900">Already have an Account? <Link to="/login" className="font-bold text-Primary">Sign In</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


  )
}
