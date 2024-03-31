import React from 'react'
import { Disclosure,} from '@headlessui/react'
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon,  MoonIcon, SunIcon, UserIcon, InformationCircleIcon, PhoneIcon, BuildingStorefrontIcon} from '@heroicons/react/24/outline'
import Logo from "../Images/logo512.png";
import { useDispatch, useSelector } from 'react-redux';
import { ToggleTheme } from '../Redux/AppReducer/Action';


const Navbar=()=>{
  const auth=useSelector((store)=>store.isAuth)
  const theme=useSelector((store)=>store.theme)
  const user=useSelector((store)=>store.user) 
  const Dispatch= useDispatch();
  const ChangeTheme=()=>{
    if(theme==="light"){
      const newStorage=JSON.parse(localStorage.getItem("User"));
      const newState={...newStorage, theme:"dark"};
      localStorage.setItem("User", JSON.stringify(newState));
      Dispatch(ToggleTheme("dark"));
    }
    else{
      const newStorage=JSON.parse(localStorage.getItem("User"));
      const newState={...newStorage, theme:"light"};
      localStorage.setItem("User", JSON.stringify(newState));
      Dispatch(ToggleTheme("light"));
    }
  }

  const getInitials = () => {
   if(auth){
    
    return user.name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
  }
  }
  const profilename=getInitials()
     
  





  return <Disclosure as="nav" className="  bg-cyan-600 w-full">
  {({ open }) => (
    <>
      <div className="mx-auto w-11/12 px-2 sm:px-6 lg:px-8 justify-between">
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="h-16 w-auto"
              src={`${Logo}`}
              alt="Koshur Printers Logo"
            />
            </Link>
          </div>
          {/* Burger Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-Primary hover:bg-Secondary hover:text-white  ring-2 ring-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          {/* Centered Buttons */}
          <div className="flex  justify-evenly flex-1  sm:justify-between sm:items-center  sm:ml-6 sm:block">
            <div className="hidden sm:flex space-x-8 justify-end " >
            <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md text-sm font-medium border hover:border-solid hover:border-Secondary' onClick={()=>{ ChangeTheme()}}>
            {(theme==="light")?
              <SunIcon className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white" />:
           
              <MoonIcon className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white" />
            }
          
            </button>
              <Link to="/about">
              <button className='bg-Secondary text-white font-semibold hover:bg-Primary hover:text-white rounded-md text-sm font-medium border hover:border-solid hover:border-Secondary'><InformationCircleIcon className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white "/></button>
               
              </Link>
              <Link to="/contactUs">
              <button className='bg-Secondary text-white font-semibold hover:bg-Primary hover:text-white rounded-md text-sm font-medium border hover:border-solid hover:border-Secondary'><PhoneIcon className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white "/></button>
              </Link>
              <Link to="/products">
              <button className='bg-Secondary text-white font-semibold hover:bg-Primary hover:text-white rounded-md text-sm font-medium border hover:border-solid hover:border-Secondary'><BuildingStorefrontIcon className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white "/></button>
              </Link>
              <Link to="/cart">
                <button className='bg-Secondary text-white font-semibold hover:bg-Primary hover:text-white rounded-md text-sm font-medium border hover:border-solid hover:border-Secondary'><ShoppingCartIcon className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white "/></button>
              </Link>
              <div className="flex-shrink-0 ml-auto">
                <Link to={auth?"/profile":"/login"}>
              <button className='bg-Secondary text-white font-semibold hover:bg-Primary hover:text-white rounded-md text-sm font-medium border hover:border-solid hover:border-Secondary'>
              {auth?<h1 className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white">{`${profilename}`}</h1>:<UserIcon className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white "/>}
             
              </button>
                </Link>
              </div>
           

            </div>
            
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <Link to="/about">
          <Disclosure.Button
        className='bg-gray-900 mb-2 w-full text-white text-gray-300 hover:bg-Primary hover:text-white
          block rounded-md px-3 py-2 text-base font-medium'
      >About
          </Disclosure.Button>
          
      </Link>
      <Link to="/contactUs">
        <Disclosure.Button
        className='bg-gray-900 mb-2 w-full text-white text-gray-300 hover:bg-Primary hover:text-white
          block rounded-md px-3 py-2 text-base font-medium'
      > Contact us
      </Disclosure.Button>
      </Link>
      <Link to="/products">
        <Disclosure.Button
        className='bg-gray-900 mb-2  w-full text-white text-gray-300 hover:bg-Primary hover:text-white
          block rounded-md px-3 py-2 text-base font-medium'
      >Products
      </Disclosure.Button>
      </Link>
      <Link to="/cart">
      <Disclosure.Button
      className='bg-gray-900 mb-2 w-full text-white text-gray-300 hover:bg-Primary hover:text-white
        block rounded-md px-3 py-2 text-base font-medium'
    >Cart
    </Disclosure.Button>
      </Link>
      <Link to={auth?"/profile":"/login"}>
        <Disclosure.Button
        className='bg-gray-900 mb-2 w-full text-white text-gray-300 hover:bg-Primary hover:text-white
          block rounded-md px-3 py-2 text-base font-medium'>
      {/**Conditional Rendering**/}
     {auth?"Profile":"Login"}
      </Disclosure.Button>
      </Link>
            {/*theme*/}
      <Disclosure.Button 
      className='bg-gray-900 mb-2 w-full text-white text-gray-300 hover:bg-Primary hover:text-white
        block rounded-md px-3 py-2 text-base font-medium' onClick={()=>{ ChangeTheme()}}>
        {/**Conditional Rendering**/}
        {theme==="light"?"Light":"Dark"}
      </Disclosure.Button>
      </div>
      </Disclosure.Panel>
    </>
  )}
         </Disclosure>


  
}
export {Navbar};
