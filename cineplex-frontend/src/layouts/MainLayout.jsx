import React from 'react'

import Navbar from '../components/layout/Navbar'
function MainLayout({children}) {
  return (
   <>
  <Navbar/>
   
   <div className='p-6'>{children}</div>
   </>
  )
}

export default MainLayout