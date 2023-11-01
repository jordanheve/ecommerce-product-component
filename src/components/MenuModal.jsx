import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon  } from "@heroicons/react/24/outline";
export default function MenuModal() {
  return (
    <Popover className='md:hidden '>
      <Popover.Button>
        
        <Bars3Icon className="h-6 mt-2"/>
    
      </Popover.Button>
      <Popover.Overlay className="z-30 fixed inset-0 bg-black opacity-30" />
      <Transition
       as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-x-1"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-1"
      >
        <Popover.Panel className='absolute top-0  left-0 z-30 w-2/3'>
            <div className="bg-white h-screen pl-6 pt-20 ">
            <Popover.Button>
            <XMarkIcon className="h-6 absolute top-6 left-5"/>
            </Popover.Button>
            <ul className="flex flex-col gap-6 h-20 font-bold text-slate-800">
          <li >
            <a href="#" className='' >
            Collections
            </a>
          </li>
          <li >
            <a href="#">
            Men
            </a>
          </li>
          <li >
            <a href="#">
            Women
            </a>
          </li>
          <li >
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
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
