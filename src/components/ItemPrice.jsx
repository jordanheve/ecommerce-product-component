import useItems from '../context/useItems'
import product from '../data/data'
import { useState } from 'react'
import { currencyFormat } from '../helpers/currencyFormat'
import { ShoppingCartIcon, PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/outline'
export default function ItemPrice() {
    const {handleAddToCart} = useItems()
    const [itemCount, setItemCount] = useState(1);
    const {name, company, description, price, discount} = product.product
    const handleRestCount = () => {
        if(itemCount > 0) {
            setItemCount(itemCount-1)
        }
    }
    return (
    <div className='p-2 w-2/5 flex-col md:gap-8 flex max-md:w-5/6 max-md:h-3/5 pt-2 max-md:justify-around max-md:overflow-auto'>
        <p
        className='text-orange-400 font-bold uppercase'
        >
            {company}</p>
        <p 
        className='font-bold text-4xl md:text-5xl'
        >
            {name}
        </p>
        <p 
        className='text-slate-600'
        >
            {description}
        </p>

        <div className='max-md:flex justify-between'>
        <p className='flex items-center'>
        <span className='font-bold text-2xl mr-4'>
        {
            currencyFormat(price*discount)
            } 
        </span>
        <span
        className='text-orange-500 bg-orange-100 font-bold rounded-md p-[.1rem]'
        > 
        {discount*100}%</span>
        </p>

        <del
        className='font-semibold text-slate-400'
        >
        {
            currencyFormat(price)
            }
        </del>

        </div>
        <div className='flex max-md:gap-6 gap-4 max-md:flex-col '>

            <div
            className='bg-slate-100 p-2 rounded-md flex justify-between items-center h-12'
            >   
                <button
                    type='button'
                    className='rounded-l-lg '
                    onClick={handleRestCount}
                >
                    <MinusSmallIcon className='stroke-[2.5] h-6 text-orange-500 hover:text-orange-400'/>
                </button>
                <span className='font-bold px-8'>
                    {itemCount}
                </span>
                <button
                    type='button'
                    className=''
                    onClick={()=> setItemCount(itemCount+1)}
                >
                    <PlusSmallIcon className='stroke-[2.5] h-6 text-orange-500 hover:text-orange-400 '/>
                </button>
            </div>

            <button 
            onClick={() => handleAddToCart(product.product, itemCount)}
            className='h-12 w-3/5 flex max-md:w-full justify-center items-center gap-3 hover:opacity-50 bg-orange-500 text-white font-bold p-2 rounded-lg hover:shadow-[0_0_30px_-5px_rgb(249_115_22)]'>
                <ShoppingCartIcon className='h-4'/>
                Add to cart
            </button>
        
        </div>
    </div>
  )
}
