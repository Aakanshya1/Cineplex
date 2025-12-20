import React from 'react'
import home1 from '../assets/images/home1.jpg'
import Button from '../components/Button'
function Landing() {
  return (
    <>
    <section className=' w-full h-screen relative'>
        
        
                <img src={home1} alt="home1" className='absolute object-fit w-full h-screen ' />
                <div className="absolute inset-0 bg-linear-to-r from-black/90 to-black/20"></div>
            <span className='relative z-10 text-white text-3xl font-extrabold p-5 w-fit   flex text-center '> <span className='text-red-600 '>C</span>INEPLEX</span>

            <div className="landing-body relative z-10 text-center text-white justify-center items-center flex flex-col w-fit  mx-auto gap-2 p-20">
                
                <h1 className='text-4xl uppercase font-extrabold bebas'>Discover, Track & Watch Your Favourite
                    <br /> movies & Series</h1>
                <p>Find IMDb ratings, watch links and trending titles all in one place.</p>
                <Button text="Explore Now" isprimary/>
            </div>

    </section>
    </>
  )
}

export default Landing