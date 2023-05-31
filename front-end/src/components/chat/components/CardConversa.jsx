import React from 'react'
import { useChatContext } from '../../../context/conversaContext'

const CardConversa = ({user, idChat}) => {
  const {mudarAtualConversa} = useChatContext();
  const clickConversa = ()=>{
    mudarAtualConversa(idChat)
  }
  return (
    <div className='flex items-center bg-slate-600 hover:bg-slate-500 h-16 w-full pl-2 cursor-pointer' onClick={clickConversa}>
        <button className='bg-black w-10 h-10 rounded'></button>
        <div className='w-full h-full flex items-center border-b-slate-700 border-t-transparent border-l-transparent border-r-transparent mr-2 border-2'>
          <h1 className='px-2'>{user}</h1>
        </div>
    </div>
  )
}

export default CardConversa