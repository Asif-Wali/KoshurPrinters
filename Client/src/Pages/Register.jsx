import React,{useState ,useEffect}from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";
import "../Styles/PhoneNumberInput.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerRoute } from '../Utilities/APIRoutes';
import { Link, useNavigate } from 'react-router-dom'

const initialState={
  name:"",
  email:"",
  phoneNumber:"",
  // address: {
  //             landmark:"",
  //             townOrVillage:"",
  //             city:"",
  //             stateOrProvince:"",
  //             country:"",
  //             postalCode:"",
  //           },
  password:"",
  confirmPassword:""
};

export const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // to change color of the border of phone input
  const [signUpDetails, setsignUpDetails]= useState(initialState);
  const [PasswordVisible, setPasswordVisible]=useState(false);
  const [ConfirmPasswordVisible, setConfirmPasswordVisible]=useState(false);
  const Navigate= useNavigate();
  useEffect(()=>{
    // Scroll to the top of the screen
    window.scrollTo({
      top: 0,
    });
    
      },[]);
  const ToastStyling ={
        position:"bottom-center",
                autoClose: 2500,
                pauseOnHover: true,
                draggable: true,
                theme:"dark"
    
    };
    const HandleValidation=(values)=>{
      const {name, password, confirmPassword}=values;
      if(password!==confirmPassword){
          toast.error("Password and Confirm Password should be same.",ToastStyling);
        return false;
      }
      else if(name.length <= 3){
          toast.error("Username should be greater than 3 Characters.", ToastStyling);
          return false;
      }
      else if(password.length < 6){
          toast.error("Password length should be greater than or Equal to 6.",ToastStyling)
          return false;
      }
      return true;
  }
    
  const HandleFocus = () => {
    setIsFocused(true);
  };
  const HandleBlur = () => {
    setIsFocused(false);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const HandleLogin= async(e)=>{
    e.preventDefault();

    
    let userdetails={...signUpDetails, isChecked};
    
    if(HandleValidation(userdetails)){
      try {
        const{data}= await axios.post(registerRoute, userdetails);
        console.log(data);
        if(data.status===false){
          toast.error(data.msg, ToastStyling);
        }
        else if(data.status===true){
          toast.success(data.msg, ToastStyling);
          Navigate("/");

        }
      } catch (error) {
        console.log(error);
        toast.error("Couldn't connect with the Backend", ToastStyling)
      }
      console.log(userdetails);
      setsignUpDetails(initialState);
    }  
  }

  return (<div className="bg-white py-10">
          <div className="container flex flex-col mx-auto bg-white rounded-lg py-2">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5">
              <div className="flex items-center justify-center w-full lg:p-8">
                <div className="flex items-center p-4 xl:p-10">
                  <form className="flex flex-col w-full h-full pb-6 text-center py-8 px-8 my-4 bg-white shadow-lg rounded-3xl border-2 border-Primary" onSubmit={(e)=>HandleLogin(e)}>
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
                    <input id="name" type="text" placeholder="Your name here..." className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={signUpDetails.name}
                    name="name"
                    onChange={(e) => setsignUpDetails({...signUpDetails, [e.target.name]:e.target.value})}
                    required={true} />
                    <label htmlFor="email" className="mb-2 text-sm text-start leading-7 text-Secondary" >Email*</label>
                    <input id="email" type="email" placeholder="Your email here..." className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={signUpDetails.email}
                    name="email"
                    onChange={(e) => setsignUpDetails({...signUpDetails, [e.target.name]:e.target.value})}
                    required={true} />



                    <label htmlFor="phoneNumber" className="mb-2 text-sm text-start leading-7 text-Secondary" >Mobile Number*</label>
                    <PhoneInput
                      defaultCountry={'IN'}
                      placeholder="Your number here..."
                      value={signUpDetails.phoneNumber}
                      required={true}
                      onChange={(value) => {
                        setsignUpDetails({...signUpDetails, phoneNumber:value})
                      }}
                      className={isFocused ? 'focused' : ''}
                      onFocus={HandleFocus}
                      onBlur={HandleBlur}
                    />


                    {/* Address INput start*/}
                   {/* <label htmlFor="landmark" className="mb-2 text-sm text-start leading-7 text-Secondary" >Land Mark*</label>
                        <input
                        name="landmark"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your landmark here..."
                        value={signUpDetails.address.landmark}
                        onChange={(e) =>{ setsignUpDetails({...signUpDetails, address:{...signUpDetails.address,[e.target.name]:e.target.value}})
                      }}
                         required={true}
                      />
                  <label htmlFor="townOrVillage" className="mb-2 text-sm text-start leading-7 text-Secondary" >Town/Village*</label>
                        <input
                        name="townOrVillage"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your town or village here..."
                        value={signUpDetails.address.townOrVillage}
                        onChange={(e) =>{ setsignUpDetails({...signUpDetails, address:{...signUpDetails.address,[e.target.name]:e.target.value}})
                      }}
                         required={true}
                        />
                        <label htmlFor="city" className="mb-2 text-sm text-start leading-7 text-Secondary" >City*</label>
                        <input
                        name="city"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your city here..."
                        value={signUpDetails.address.city}
                        onChange={(e) =>{ setsignUpDetails({...signUpDetails, address:{...signUpDetails.address,[e.target.name]:e.target.value}})
                      }}
                         required={true}
                        />  
                        <label htmlFor="stateOrProvince" className="mb-2 text-sm text-start leading-7 text-Secondary" >State/Province*</label>
                        <input
                        name="stateOrProvince"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your state/province here..."
                        value={signUpDetails.address.stateOrProvince}
                        onChange={(e) =>{ setsignUpDetails({...signUpDetails, address:{...signUpDetails.address,[e.target.name]:e.target.value}})
                      }}
                         required={true}
                        /> 
                        <label htmlFor="country" className="mb-2 text-sm text-start leading-7 text-Secondary" >Country*</label>
                        <input
                        name="country"
                        type="text"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your country here..."
                        value={signUpDetails.address.country}
                        onChange={(e) =>{ setsignUpDetails({...signUpDetails, address:{...signUpDetails.address,[e.target.name]:e.target.value}})
                      }}
                         required={true}
                        />
                        <label htmlFor="postalCode" className="mb-2 text-sm text-start leading-7 text-Secondary" >Zip/Postal code*</label>
                        <input
                        name="postalCode"
                        type="tel"
                        className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Your zip/postal code here..."
                        value={signUpDetails.address.postalCode}
                        onChange={(e) =>{ setsignUpDetails({...signUpDetails, address:{...signUpDetails.address,[e.target.name]:e.target.value}})
                      }}
                         required={true}
                        />
                        
                    {/* Address INput end*/}
                    <div className="relative">
                          <label htmlFor="password" className="mb-2 text-sm text-start flex self-start leading-7 text-Secondary">Password*</label>
                          <div className="flex items-center border border-gray-700 rounded bg-white focus-within:border-Primary focus-within:ring-2 focus-within:ring-Primary mb-5">
                            <input 
                              id="password" 
                              name="password"
                              type={PasswordVisible?"text":"password"} 
                              placeholder="Your password here..." 
                              className="w-full py-2 px-3 text-base outline-none text-Secondary rounded focus:outline-none"
                              value={signUpDetails.password}
                              onChange={(e) => setsignUpDetails({...signUpDetails, [e.target.name]: e.target.value})} 
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
                              placeholder="Confirm your password here..." 
                              className="w-full py-2 px-3 text-base outline-none text-Secondary rounded focus:outline-none"
                              value={signUpDetails.confirmPassword}
                              onChange={(e) => setsignUpDetails({...signUpDetails, [e.target.name]: e.target.value})} 
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
          <ToastContainer/>
        </div>


  )
}
