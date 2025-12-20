import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
    
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
    </>
  )
}

export default App
