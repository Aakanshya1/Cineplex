import React from 'react'

import Navbar from '../components/layout/Navbar'
function MainLayout({children}) {
  return (
   <>
   <div className='relative'>
    <Navbar />
   
   <div className=''>{children}</div>
   </div>
  
   </>
  )
}

export default MainLayout