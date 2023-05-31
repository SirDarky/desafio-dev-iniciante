import React from 'react'
import { useAuthContext } from '../../../context/authContext'

const User = () => {
  const{usuario}= useAuthContext()
  return (
    <div className='flex items-center content-center bg-slate-500 h-16 cursor-pointer hover:bg-slate-400 duration-500 pl-3'>
      <button className='bg-black w-8 h-8 rounded'></button>
      <h2 className='pl-3'>{usuario}</h2>
    </div>
  )
}

export default User