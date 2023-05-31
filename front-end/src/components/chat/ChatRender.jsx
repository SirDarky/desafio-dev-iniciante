import React, { useContext, useEffect, useState } from 'react';
import MensagensList from './chatRenderComponents/MensagensList';
import ChatFooter from './chatRenderComponents/ChatFooter';
import ChatHeader from './chatRenderComponents/ChatHeader';
import { useChatContext } from '../../context/conversaContext';
import { SocketContext } from '../../context/socketContext';

const ChatRender = () => {
  const {buscarMensagemChat, conversaAtual, conversas} = useChatContext();
  const [conversa, setConversa] = useState(conversaAtual)
  useEffect(() => {
    if(conversaAtual!=0){
      setConversa(buscarMensagemChat())
    }
  }, [conversaAtual])
  
  useEffect(() => {
    if(conversaAtual!=0){
      setConversa(buscarMensagemChat())
    }
  }, [conversas])
  
  
  if(conversaAtual===0){
    return(
      <div>
        ola
      </div>
    )
  } else{
    return (
      <div className='w-3/4 h-full bg-slate-400 flex flex-col'>
        <ChatHeader user={conversa.user}/>
        <div className='grow h-1.5'>
          <MensagensList mensagens={conversa.mensagens}/>
        </div>
        <ChatFooter />
      </div>
    )
  }
}

export default ChatRender