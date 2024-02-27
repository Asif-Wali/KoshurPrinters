import React,{useState, useEffect}from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
// import { loginRoute } from '../Utilities/APIRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { AssignToken,SetUser,ToggleAuth } from '../Redux/AppReducer/Action';
import { loginRoute } from '../Utilities/APIRoutes';



const initialState={
    email:"",
    password:"",
};
export const Login = () => {
  const [LoginDetails, setLoginDetails]= useState(initialState);
  const [PasswordVisible, setPasswordVisible]=useState(false);
  const Navigate= useNavigate();
  const Dispatch= useDispatch();
  const auth=useSelector((store)=>store.isAuth)
  const theme=useSelector((store)=>store.theme)
  
  
  const ToastStyling ={
            position:"bottom-center",
            autoClose: 2500,
            pauseOnHover: true,
            draggable: true,
            theme:"dark"

};

useEffect(()=>{
  // if(auth){
  //   Navigate("/profile")
  // }
},[auth, Navigate])








const HandleValidation=(values)=>{
const {password}=values;
if(password.length<6){
  toast.error("Password Length should be greater than or equal to  6 characters", ToastStyling);
  return false;
}
return true;

}

  const HandleLogin= async (e)=>{
    e.preventDefault();
    let userdetails={...LoginDetails};
    if(HandleValidation(userdetails)){
      try {
        // const {data}= await axios.post(loginRoute,userdetails);
        const {data: {status, user, token, msg}} = await axios.post(loginRoute,userdetails)
        
        if(status===false){
          toast.error(msg, ToastStyling);
        }
        else if(status===true){
         
          const person={user, token, isAuth:true, theme:theme}
          const User=JSON.stringify(person);
          console.log(User)
          localStorage.setItem("User",User);
          toast.success(msg, ToastStyling);
          Dispatch(AssignToken(token));
          Dispatch(SetUser(user));
          Dispatch(ToggleAuth(!auth));
          setTimeout(()=>{
            Navigate("/profile");
          },3000)
          
          setLoginDetails(initialState);
        }
      } catch (error) {
        toast.error("Error from the Server",ToastStyling);
        console.log(error);
      }
    }
   
    
   
    
  }

  return (<div className="bg-white py-10">
          <div className="container flex flex-col mx-auto bg-white rounded-lg py-2">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5">
              <div className="flex items-center justify-center w-full lg:p-12">
                <div className="flex items-center xl:p-10">
                  <form className="flex flex-col w-full h-full pb-6 text-center p-10 my-4 bg-white shadow-lg rounded-3xl border-2 border-Primary" onSubmit={(e)=>HandleLogin(e)}>
                    <h3 className="mb-8 text-4xl font-extrabold text-cyan-700">Sign In</h3>
                    <Link className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-white bg-gray-900 hover:bg-cyan-800  focus:ring-4 focus:ring-gray-300">
                      <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="Google Icon"/>
                      Sign in with Google
                      </Link>
                    <div className="flex items-center mb-3">
                      <hr className="h-0 border-b border-solid border-Primary grow"/>
                      <p className="mx-4 text-Primary">or</p>
                      <hr className="h-0 border-b border-solid border-Primary grow"/>
                    </div>
                    <label htmlFor="email" className="mb-2 text-sm text-start leading-7 text-Secondary" >Email*</label>
                    <input id="email" type="email" placeholder="Enter your email here..." className="w-full bg-white rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary text-base outline-none text-Secondary mb-3 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={LoginDetails.email}
                    name="email"
                    onChange={(e) => setLoginDetails({...LoginDetails, [e.target.name]:e.target.value})}
                    required={true} />
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
                              onChange={(e) => setLoginDetails({...LoginDetails, password: e.target.value})} 
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
                    <div className="flex flex-row justify-between mb-2">
                      
                      <Link to="/userforgotpassword" className=" text-sm font-medium font-bold text-cyan-800">Forgot password?</Link>
                    </div>
                    <button className="w-full px-6 py-4 my-5  font-bold leading-none text-white transition duration-300  md:w-96 bg-Primary border-0 focus:outline-none hover:bg-Secondary rounded text-lg" type='submit'>Sign In</button>
                    <p className="text-sm leading-relaxed text-gray-900">Dont have an account? <Link to="/register" className="font-bold text-Primary">Create an Account</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer/>
        </div>


  )
}
