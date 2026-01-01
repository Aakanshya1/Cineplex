import React from 'react'
import { navLinks } from '../../constants/constants'
import {NavLink,useNavigate} from 'react-router-dom'
import Button from '../ui/Button'
import { CiLogout } from "react-icons/ci";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('jwtToken'));

  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('jwtToken');
    setIsAuthenticated(false);
    navigate('/login');
  }
  return (
   <>
   <div className=' text-white fixed  w-full  montserrat z-20 flex items-center justify-center bg-black/30'>
    <div className='w-[90%] flex flex-row justify-between md:gap-40 p-4 items-center'>
       <div className='text-4xl font-bold  ' onClick={()=>navigate("/home")}><span className='text-red-700'>C</span>ineplex</div>
    <div className='md:w-full  items-center text-center '>
      <input type="search" className='border rounded-md p-1 text-white w-full   text-center italic'  placeholder='Search movies....'/>
    </div>


    <div className='flex flex-row justify-between gap-10  text-[18px] p-2 items-center'>
      {navLinks.map((link)=>(
        <NavLink key={link.path}
        to={link.path}
        className={({isActive})=> isActive ? 'text-red-600 flex items-center gap-2 font-bold' : 'flex items-center gap-2'}
        >
          <link.icon />
          {link.name}

        </NavLink>
      ))}
      <Button title="Logout" isprimary onClick={handleLogout} text={<CiLogout className="text-black font-bold" />}  />
    </div>
    </div>
   
   </div>
   </>
  )
}

export default Navbar