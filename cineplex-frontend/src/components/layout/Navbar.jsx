import React from 'react'
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
function Navbar() {
  return (
   <>
   <div className=' text-white flex flex-row justify-between md:gap-40 p-4 items-center'>
    <div className='text-4xl font-bold text-red-700 '>C</div>
    <div className='md:w-full  items-center text-center '>
      <input type="search" className='border rounded-md p-1 text-white w-full  md:w-[40%] text-center italic'  placeholder='Search movies....'/>
    </div>
    <div className='flex flex-row justify-between gap-10  '>
            <div className='flex items-center'>Home</div>
            <div>Watchlist</div>
            <div className='text-xl '><CiLogout /></div>
            <div><FaUser/></div>
    </div>
   </div>
   </>
  )
}

export default Navbar