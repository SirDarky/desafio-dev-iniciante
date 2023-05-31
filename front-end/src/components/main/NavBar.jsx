import React, { useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'

const NavBar = () => {
  const {Deslogar, ChecarLogin, userId}= useAuthContext()
  useEffect(() => {
    ChecarLogin()
  }, [])
  
  return (
    <div className='flex items-center justify-between px-10 h-10 bg-gray-900 text-white absolute w-screen'>
        <button className='text-lg'><Link to={"/"}>Chat Real-Time</Link></button>
        <button onClick={()=>{console.log(userId)}}>oi</button>
        <button className='text-lg' onClick={Deslogar}>Deslogar</button>
    </div>
  )
}

export default NavBar