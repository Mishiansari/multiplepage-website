import Image from 'next/image'
import { IoMdMenu } from 'react-icons/io'

export  default function Navbar () {
  return (
    <div className='container pt-6'>
        <div className='flex justify-between items-center'>
            <Image 
            src="/Image/logo y.png"
            width={80}
            height={80}
            alt="lgo"/>
            <ul className='md:flex hidden gap-8 items-center font-bold text-[14px]'>
                <li className='hover:bg-red-500'>Home</li>
                <li className='hover:bg-red-500'>About</li>
                <li className='hover:bg-red-500'>Food</li>
                <li className='hover:bg-red-500'>Dish</li>
                <li className='hover:bg-red-500'>Contact</li>
                <button  className='bg-red-500 text-white px-6 rounded-3xl'>Signup</button>
            </ul>
            <IoMdMenu 
        className='md:hidden text-red-600' size={30}/>
        </div>
    </div>
  )
}
