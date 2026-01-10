import React from 'react'

import Navbar from '../components/layout/Navbar'
import Chatbot from '../components/ui/Chatbot'
function MainLayout({children}) {
  return (
   <>
   <div className='relative'>
    <Navbar />
   
   <div className=" pb-20 md:pb-20 h-screen">{children}
    <Chatbot/>
   </div>
   </div>
  
   </>
  )
}

export default MainLayout