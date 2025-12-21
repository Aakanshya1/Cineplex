import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  
  return (
    <>
    
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </>
  )
}

export default App