import Image from 'next/image';
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
    <header className='flex justify-between items-center bg-gray-300 py-2 md:px-[170px] px-4'>
        <div>
        <IoSearch size={30}  className='cursor-pointer'/>
        </div>

        <div>
            <Image src={'/book.png'} width={50} height={50} alt='api' />
        </div>

        <div className='flex items-center space-x-7 '>
        <IoIosContact size={30}  className='cursor-pointer '/>
        <BiCart size={30} className='cursor-pointer '/>

        </div>
    </header>
    </>
  )
}

export default Navbar