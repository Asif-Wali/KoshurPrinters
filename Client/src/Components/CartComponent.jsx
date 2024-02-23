import React,{useState} from 'react';
import {TrashIcon, PlusIcon, MinusIcon  } from '@heroicons/react/24/outline'


export const CartComponent = () => {
    const [count, setCount]=useState(0);
    
    const HandleIncrement=()=>{
        setCount(count+1);
    }
    const HandleDecrement=()=>{
        setCount(count-1);
    }

  return (
    <div className='bg-white rounded-lg  w-full'>
                    <div className=' px-2 flex items-center justify-start'>
                        <div className='p-4'>
                          <img className='h-24 rounded' src='https://dcassetcdn.com/design_img/22773/30063/30063_498839_22773_image.png' alt='cartProduct'/>
                        </div>
                        <div className='p-5'>
                            <h4 className='font-bold'>Blue Shikara</h4>
                            <p className='text-md'>T-shirt</p>
                            <h3 className='text-md'>Price</h3>
                        </div>
                    </div>
                    <div className='w-full  flex items-center gap-2 p-2 justify-end pr-4'>
                      <TrashIcon className='h-5 rounded ring-gray-700 text-[red]'/>
                      <div className='flex items-center border px-3 rounded border-gray-500 justify-center gap-1'>
                        <PlusIcon className='h-4 ring-1 rounded ring-gray-500 text-[green]' onClick={()=>{
                            HandleIncrement()
                        }}/>
                        <p className='text-gray-500 mx-2'>{count}</p>
                        <MinusIcon className='h-4 ring-1 rounded ring-gray-500 text-yellow-700' onClick={()=>{
                            HandleDecrement()
                        }}/>
                      </div>
                    </div>
                  </div>
  )
}
