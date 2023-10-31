import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import CartModal from './CartModal'
export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-slate-200 border-b-[1px] py-4">
        <div className="items-center flex gap-5 text-slate-500 text-sm ">
          <a href="#">
        <img src="/logo.svg" alt="snickers logo" className=""/>
          </a>
        <ul className="flex gap-4">
          <li>
            <a href="#">
            Collections
            </a>
          </li>
          <li>
            <a href="#">
            Men
            </a>
          </li>
          <li>
            <a href="#">
            Women
            </a>
          </li>
          <li>
            <a href="#">
            About
            </a>
          </li>
          <li>
            <a href="#">
            Contact
            </a>
          </li>
        </ul>
        </div>

        <div className="flex flex-end items-center gap-6 relative">
          <CartModal/>
          <div>
            <img className='rounded-full hover:border-orange-500 border-2 cursor-pointer h-10' src='/image-avatar.png'/>
          </div>
        </div>
    </header>
  )
}
