import React, { useContext, useState } from 'react'
import {RiSendPlaneFill} from "react-icons/ri";
import { useChatContext } from '../../../context/conversaContext';
import { SocketContext } from '../../../context/socketContext';

const ChatFooter = () => {
  const socket = useContext(SocketContext);
  const [mensagem, setMensagem] = useState("")
  const {adicionarNovaMensagem} = useChatContext()
  const enviarMsg = ()=>{
    adicionarNovaMensagem(mensagem, socket)
    setMensagem("")
  }
  return (
    <footer className='h-16 bg-slate-500 flex items-center content-center'>
        <input type="text" placeholder='Digite sua mensagem' className='grow pl-4 mx-4 py-2 rounded-md focus:outline-none' onChange={(e)=>{setMensagem(e.target.value)}}/>
        <button className='text-3xl mr-4' onClick={enviarMsg}> <RiSendPlaneFill /></button>
    </footer>
  )
}

export default ChatFooter