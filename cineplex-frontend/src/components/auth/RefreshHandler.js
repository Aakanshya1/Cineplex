import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function RefreshHandler({setIsAuthenticated}) {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("jwtToken")){
setIsAuthenticated(true);
if(location.pathname ==='/' ||
    location.pathname ==='/login' ||
    location.pathname ==='/signup')
    {
    navigate('/home');
}
        }else{
            setIsAuthenticated(false);
        }
    }, [location,navigate])
  return (
   null
  )
}

export default RefreshHandler