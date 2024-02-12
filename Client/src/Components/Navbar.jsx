import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import Logo from "../Images/logo512.png";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar=()=>{

  return<Disclosure as="nav" className="  bg-yellow-500 w-full border-2 border-solid border-pink-400">
  {({ open }) => (
    <>
      <div className="mx-auto w-11/12 px-2 sm:px-6 lg:px-8 justify-between">
        <div className="relative flex h-18 items-center justify-between">
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
            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-Secondary hover:bg-Primary hover:text-white  ring-2 ring-Secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
          <div className="flex  justify-evenly flex-1  sm:justify-between sm:items-center sm:ml-6 sm:block">
            <div className="hidden sm:flex space-x-8 justify-end " >
              <Link to="/about">
                <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md px-3 py-2 text-sm font-medium border hover:border-solid hover:border-Secondary'>About</button>
              </Link>
              <Link to="/contactUs">
                <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md px-3 py-2 text-sm font-medium border hover:border-solid hover:border-Secondary'>Contact Us</button>
              </Link>
              <Link to="/products">
                <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md px-3 py-2 text-sm font-medium border hover:border-solid hover:border-Secondary'>Products</button>
              </Link>
              <Link to="/cart">
                <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md text-sm font-medium border hover:border-solid hover:border-Secondary'><ShoppingCartIcon className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 px-4 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white "/></button>
              </Link>
            <div className="flex-shrink-0 ml-auto">
            <Link to="/profile">
            <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md text-sm font-medium border hover:border-solid hover:border-Secondary'>
            <UserIcon className="h-9 w-auto relative inline-flex items-center bg-Secondary text-white font-medium	justify-center rounded-md p-2 hover:bg-Primary hover:text-white hover:ring-black focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white "/>
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
        className='bg-gray-900 mb-2 w-full text-white text-gray-300 hover:bg-green-700 hover:text-white
          block rounded-md px-3 py-2 text-base font-medium'
      >About
      </Disclosure.Button>
      </Link>
      <Link to="/contactUs">
        <Disclosure.Button
        className='bg-gray-900 mb-2 w-full text-white text-gray-300 hover:bg-green-700 hover:text-white
          block rounded-md px-3 py-2 text-base font-medium'
      > Contact us
      </Disclosure.Button>
      </Link>
      <Link to="/products">
        <Disclosure.Button
        className='bg-gray-900 mb-2  w-full text-white text-gray-300 hover:bg-green-700 hover:text-white
          block rounded-md px-3 py-2 text-base font-medium'
      >Products
      </Disclosure.Button>
      </Link>
      <Link to="/cart">
      <Disclosure.Button
      className='bg-gray-900 mb-2 w-full text-white text-gray-300 hover:bg-green-700 hover:text-white
        block rounded-md px-3 py-2 text-base font-medium'
    >Cart
    </Disclosure.Button>
      </Link>
      <Link to="/profile">
        <Disclosure.Button
        className='bg-gray-900 mb-2 w-full text-white text-gray-300 hover:bg-green-700 hover:text-white
          block rounded-md px-3 py-2 text-base font-medium'>
      {/**Conditional Rendering**/}
      Profile
      </Disclosure.Button>
      </Link>
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
// return<Disclosure as="nav" className="bg-pink-400 w-full border-2 border-solid border-pink-400">
//   {({ open }) => (
//     <>
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-18 items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img
//               className="h-16 w-auto"
//               src={`${Logo}`}
//               alt="Koshur Printers Logo"
//             />
//           </div>
//           {/* Burger Menu */}
//           <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//             <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 ring-white text-slate-950 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               {open ? (
//                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </Disclosure.Button>
//           </div>
//         </div>
//       </div>
//       {/* Centered Buttons */}
//       <div className="mx-auto px-2 sm:px-6 lg:px-8 flex justify-center border-solid border-blue-400">
//         <div className="hidden sm:flex space-x-4 ml-8" >
//           <Link to="/">
//             <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md px-3 py-2 text-sm font-medium border hover:border-solid hover:border-Secondary'>Home</button>
//           </Link>
//           <Link to="/about">
//             <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md px-3 py-2 text-sm font-medium border hover:border-solid hover:border-Secondary'>About</button>
//           </Link>
//           <Link to="/products">
//             <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md px-3 py-2 text-sm font-medium border hover:border-solid hover:border-Secondary'>Products</button>
//           </Link>
//           <Link to="/login">
//             <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md px-3 py-2 text-sm font-medium border hover:border-solid hover:border-Secondary'>Login</button>
//           </Link>
//           <Link to="/register">
//             <button className='bg-Secondary text-slate-50 font-semibold hover:bg-Primary hover:text-white rounded-md px-3 py-2 text-sm font-medium border hover:border-solid hover:border-Secondary'>Register</button>
//           </Link>
//         </div>
//       </div>
//       {/* Mobile Menu */}
      
//     </>
//   )}
// </Disclosure>


  
}
export {Navbar};
// ** // {navigation.map((item) => (
  //   <a
  //     key={item.name}
  //     href={item.href}
  //     className={classNames(
  //       item.current ? 'bg-red-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
  //       'rounded-md px-3 py-2 text-sm font-medium'
  //     )}
  //     aria-current={item.current ? 'page' : undefined}
  //   >
  //     {item.name}
  //   </a>
  // ))}**//**