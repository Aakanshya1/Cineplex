import React from 'react'
import home1 from '../assets/images/home1.jpg'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <>
    <section className='relative w-full h-screen'>
            <img src={home1} alt="" srcset="" className='w-full h-full absolute'/>
            <div className='absolute inset-0 bg-black/50'></div>

            <div className=' absolute inset-0 text-white  bg-black/70 flex flex-col justify-center w-[30%] h-fit mx-auto gap-5 p-10  my-auto '>
                <div>
                <span className='relative z-10 text-white text-3xl font-extrabold  '> <span className='text-red-600 '>C</span>INEPLEX</span>

                <p className='text-2xl font-bold'>Login</p>
                </div>

            <form action="" method="post" className='text-left gap-5 flex flex-col '>
           <input type="text" className='bg-[#333333] rounded-md p-2 text-xs ' placeholder='Email'/>
           <input type="password" className='bg-[#333333] rounded-md p-2 text-xs' placeholder='Password'/>
           <Button text="Login" isprimary/>
            </form>
            <p className='text-xs text-right'>Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>




    </section>
    </>
  )
}

export default Login