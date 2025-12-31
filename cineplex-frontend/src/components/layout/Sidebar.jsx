import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
function Sidebar() {
  return (
    <div className='  w-fit text-white flex flex-col justify-between gap-20 text-3xl p-4 mt-5'>
        <div><FaHome /></div>
        <div><FaCompass/></div>
        <div><MdLibraryAdd /></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Sidebar