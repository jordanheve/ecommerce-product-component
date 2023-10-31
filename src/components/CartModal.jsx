import { Popover } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import useItems from '../context/useItems'
export default function CartModal() {
    
    const {order} = useItems()
    console.log(order)
    console.log(order[0])
  return (
    <>
        <Popover >
            <Popover.Button>
        <ShoppingCartIcon className='h-6 cursor-pointer'/>
            </Popover.Button>
            <Popover.Panel className='h-60 right-0 mt-4  absolute z-10'>
                    <div className='shadow-2xl w-80 rounded-md bg-white'>
                
                    <div className='p-4 border-b-[1px] border-slate-300'>
                    <span className='text-slate-700'> Cart</span>

                    </div>

                {order.length <= 0 ? (
                    <div className='h-52 grid items-center'>
                <p className='p-4 text-center text-slate-500 font-semibold'>Your cart is empty</p>
                    </div>
                ) 
                : 
                    <div className='p-4'>
                        {
                            order.map(item => (
                            <div className='flex' key={item.id}>
                                <img src={item.imageUrl} className='h-16 rounded-lg'/>
                                <div>
                                <p>{item.name}</p>
                                <p>${item.price * item.discount}</p>
                                </div>
                            </div>))
                        }

                <button className='bg-orange-500 rounded p-2 w-full text-white font-semibold'>
                    Checkout
                </button>
                    </div>
                }
                
                    

                </div>
            </Popover.Panel>
        </Popover>
    </>
  )
}
