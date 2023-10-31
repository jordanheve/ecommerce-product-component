import useItems from '../context/useItems'
import product from '../data/data'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
export default function ItemPrice() {
    const {handleAddToCart} = useItems()
    const {name, company, description, price, discount, imageUrl} = product.product
    return (
    <div>
        <p>{company}</p>
        <p>{name}</p>
        <p>{description}</p>
        <p>${price*discount} <span>{discount*100}%</span></p>
        <del>${price}</del>

        <div className=''>
            <button 
            onClick={() => handleAddToCart(product.product)}
            className='flex items-center gap-4 bg-orange-500 text-white font-bold p-2 rounded-lg'>
                <ShoppingCartIcon className='h-4'/>
                Add to cart
            </button>
        </div>
    </div>
  )
}
