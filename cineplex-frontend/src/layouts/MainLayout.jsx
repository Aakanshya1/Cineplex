import React from 'react'

import Navbar from '../components/layout/Navbar'
function MainLayout({children}) {
  return (
   <>
   <div className='relative'>
    <Navbar />
   
   <div className=" pb-12 md:pb-0">{children}</div>
   </div>
  
   </>
  )
}

export default MainLayout