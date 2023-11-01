import CartModal from './CartModal'
import MenuModal from './MenuModal'
export default function Navbar() {
  const liClass = 'h-full flex items-center border-transparent border-y-4 hover:border-b-orange-400'
  return (
    <header className="flex items-center justify-between border-slate-200 border-b-[1px] h-20 px-2">

        <div className="items-center flex gap-5 text-slate-500 text-sm ">
          <MenuModal />
          <a href="#">
        <img src="logo.svg" alt="snickers logo" className=""/>
          </a>
        <ul className="flex gap-6 h-20 items-center max-md:hidden">
          <li className= {liClass}>
            <a href="#" className='' >
            Collections
            </a>
          </li>
          <li className={liClass}>
            <a href="#">
            Men
            </a>
          </li>
          <li className= {liClass}>
            <a href="#">
            Women
            </a>
          </li>
          <li className= {liClass}>
            <a href="#">
            About
            </a>
          </li>
          <li className= {liClass}>
            <a href="#">
            Contact
            </a>
          </li>
        </ul>
        </div>

        <div className="flex flex-end items-center gap-6 relative">
          <CartModal/>
          <div>
            <img className='rounded-full hover:border-orange-500 border-2 cursor-pointer h-10' src='image-avatar.png'/>
          </div>
        </div>
    </header>
  )
}
