import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import { ToggleAuth } from '../Redux/AppReducer/Action';
export const Profile = () => {
    const Navigate= useNavigate();
    const Dispatch= useDispatch();
    const user=useSelector((store)=>store.user);
    const isAuth=useSelector((store)=>store.isAuth);
    const theme=useSelector((store)=>store.theme)
    console.log(isAuth);
    console.log(user);
    useEffect(()=>{
        if(isAuth===false){
            Navigate("/login");
        }
    },[isAuth,Navigate])

    const getInitials = (name) => {
        return name
          .split(' ')
          .map((part) => part.charAt(0))
          .slice(0, 2)
          .join('');
      };
   
    const profilename=getInitials(user.name);



  const HandleLogout=()=>{
        Dispatch(ToggleAuth(!isAuth));
        localStorage.removeItem('User');
        const newState={ theme:theme,};
        localStorage.setItem("User", JSON.stringify(newState));
        console.log(isAuth);
        setTimeout(()=>{
            Navigate("/")
        },1000)
      
      
  }  

  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap  items-center">

    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col gap-4 md:mr-auto w-full mt-10 md:mt-0">
   

    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <div class="flex flex-col items-center pb-10 pt-8">
            <h2 class="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center text-Primary text-2xl">{profilename}</h2>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
            <h5 class="text-sm text-gray-500 dark:text-gray-400">{user.email}</h5>
            <h5 class="text-sm text-gray-500 dark:text-gray-400">{user.phoneNumber}</h5>
        </div>
    </div>
    <button className="text-white bg-Primary border-0 py-2 px-8 focus:outline-none hover:bg-Secondary rounded text-lg" onClick={HandleLogout}>Logout</button>
    
    
    </div>

   {user.role==="user"?<div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex  flex-col items-center justify-center gap-4">
      <h1 class="title-font font-medium text-3xl text-Primary text-center ">{user.name}</h1>
      <p class="leading-relaxed text-center font-bold text-cyan-900">You are Welcome.</p>
   </div> 
   :
  <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex  flex-col items-center justify-center gap-4">
    <h1 class="title-font font-medium text-3xl text-Primary text-center ">{user.name}</h1>
    <p class="leading-relaxed text-center font-bold text-cyan-900">Admin, You are Welcome.</p> 

    {user.role==="admin"?<button className="text-white self-center bg-cyan-800 border-0 py-2 px-8 focus:outline-none hover:bg-Secondary rounded text-lg" >Admin Panel</button>:""}
  </div>}
   
  </div>
</section>
  )
}
