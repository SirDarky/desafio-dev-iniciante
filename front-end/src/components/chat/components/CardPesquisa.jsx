import React from 'react'
import api from '../../../services/api'

const CardPesquisa = ({user, setState}) => {
    function iniciarConversa() {
        api.post('/user/conversas', user).then(()=>{
            setState(false)
        })
    }
  return (
    <div className='flex items-center bg-slate-600 hover:bg-slate-500 h-16 w-full pl-2'>
        <button className='bg-black w-10 h-10 rounded'></button>
        <div className='w-full h-full flex items-center border-b-slate-700 border-t-transparent border-l-transparent border-r-transparent mr-2 border-2 justify-between'>
          <h1 className='px-2'>{user.username}</h1>
          <button onClick={iniciarConversa} className='bg-slate-50 p-2 rounded-lg'>Iniciar Conversa</button>
        </div>
    </div>
  )
}

export default CardPesquisa