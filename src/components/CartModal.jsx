import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon, } from '@heroicons/react/24/outline'
import {TrashIcon} from '@heroicons/react/24/solid'
import useItems from '../context/useItems'
import { currencyFormat } from '../helpers/currencyFormat'
export default function CartModal() {
    
    const {order, removeFromCart} = useItems()
   
    const total = order.reduce((accumulator, order) => {
        return accumulator + order.quantity;
      }, 0);
  return (
    <>
        <Popover >
            <Popover.Button>
            <div className='relative'>
        <ShoppingCartIcon className='h-6 cursor-pointer mt-2'/>
        <span className='absolute bg-orange-500 rounded-full w-5 text-[.6rem] top-[-6px] left-3 flex items-center justify-center text-white font-bold'>
            {order.length > 0 ? total : null}
        </span>    
            </div>
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >

            <Popover.Panel className='h-60 right-2 mt-4  absolute z-10'>
                    <div className='shadow-2xl w-80 rounded-md bg-white'>
                
                    <div className='p-4 border-b-[1px] border-slate-300'>
                    <span className='text-slate-800 font-semibold'> Cart</span>

                    </div>

                {order.length <= 0 ? (
                    <div className='h-52 grid items-center'>
                <p className='p-4 text-center text-slate-500 font-semibold'>Your cart is empty</p>
                    </div>
                ) 
                : 
                    <div className='p-4 flex-col  flex gap-4'>
                        {
                            order.map(item => (
                            <div className='flex justify-between gap-2 items-center' key={item.id}>
                                <img src={item.imageUrl} className='h-12 rounded-lg'/>
                                <div className='text-slate-600'>
                                <p>{item.name}</p>
                                <div className='flex items-center h-8  gap-2'>
                                <p>
                                <span>${item.price * item.discount}</span>
                                <span> x {item.quantity}</span>
                                <span className='font-semibold text-slate-800'> ${item.quantity*item.price*item.discount}</span>
                                </p>
                                
                                </div>
                                </div>
                                <button
                                    className='h-4 mt-1'
                                    onClick={() => removeFromCart(item.id)}
                                >
                                <TrashIcon
                                    className=' h-full cursor-pointer text-slate-400' />
                                </button>
                            </div>))
                        }

                <button className='hover:bg-orange-400 hover:shadow-[0_0_15px_-5px_rgb(249_115_22)] mb-2 bg-orange-500 rounded-lg p-2 w-full text-white font-semibold'>
                    Checkout
                </button>
                    </div>
                }
                
                    

                </div>
            </Popover.Panel>
            </Transition>
        </Popover>
    </>
  )
}
