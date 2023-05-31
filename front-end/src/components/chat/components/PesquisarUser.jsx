import React from 'react'
import { FaSearch } from "react-icons/fa";

const PesquisarUser = ({setState, state}) => {
  const trocar= ()=>{
    setState(!state)
  }
  if(!state){
    return (
      <div className='px-3 py-5 flex items-center bg-slate-300'>
        <h1>Deseja pesquisar novos usuarios?</h1>
        <button className='hover:bg-slate-200 px-3 py-3 rounded-full ml-3' onClick={trocar}>
          Sim
        </button>
      </div>
    )
  } else {
    return (
      <div className='px-3 py-5 flex items-center bg-slate-300'>
        <h1>Deseja parar de pesquisar novos usuarios?</h1>
        <button className='hover:bg-slate-200 px-3 py-3 rounded-full ml-3' onClick={trocar}>
          Sim
        </button>
      </div>
    )
  }
}

export default PesquisarUser