import React from 'react'
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
function Navbar() {
  return (
   <>
   <div className=' text-white  w-full absolute montserrat z-20 flex items-center justify-center '>
    <div className='w-[90%] flex flex-row justify-between md:gap-40 p-4 items-center'>
       <div className='text-4xl font-bold  '><span className='text-red-700'>C</span>ineplex</div>
    <div className='md:w-full  items-center text-center '>
      <input type="search" className='border rounded-md p-1 text-white w-full  md:w-[40%] text-center italic'  placeholder='Search movies....'/>
    </div>
    <div className='flex flex-row justify-between gap-10  text-[18px] p-2 items-center'>
            <div className='flex items-center'><FaHome/> Home</div>
            <div className='flex items-center'><FaCompass/> Explore</div>
            <div className='flex items-center'><MdLibraryAdd/> Library</div>
            <div className='text-xl '><CiLogout /></div>
            <div><FaUser/></div>
    </div>
    </div>
   
   </div>
   </>
  )
}

export default Navbar