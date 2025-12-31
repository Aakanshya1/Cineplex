import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import RefreshHandler from './components/auth/RefreshHandler'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/auth/ProtectedRoute'
import MainLayout from './layouts/MainLayout'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  return (
    <>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<ProtectedRoute><MainLayout><Home/></MainLayout></ProtectedRoute>} />
        </Routes>
    </>
  )
}

export default App