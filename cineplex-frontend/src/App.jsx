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
import Explore from './pages/Explore'
import Watchlist from './pages/Watchlist'
import Profile from './pages/Profile'
import MovieDetails from './pages/MovieDetails'
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
           <Route path='/explore' element={<ProtectedRoute><MainLayout><Explore/></MainLayout></ProtectedRoute>} />
          <Route path='/watchlist' element={<ProtectedRoute><MainLayout><Watchlist/></MainLayout></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><MainLayout><Profile/></MainLayout></ProtectedRoute>} />
          <Route path='/movie/:id' element={<ProtectedRoute><MovieDetails/></ProtectedRoute>} />

        </Routes>
    </>
  )
}



export default App