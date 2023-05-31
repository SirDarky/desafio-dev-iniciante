import React,{ useEffect, useRef } from 'react'
import Mensagem from './Mensagem'

const MensagensList = ({mensagens}) => {
  const mensagensRef = useRef(null);

  useEffect(() => {
    if (mensagensRef.current) {
      mensagensRef.current.scrollTop = mensagensRef.current.scrollHeight;
    }
  }, [mensagens]);
  return (
    <div className='overflow-y-scroll h-full px-5' ref={mensagensRef}>
      {
        mensagens && mensagens.length>0? mensagens.map((msg, index)=>(
          <Mensagem msg={msg.conteudo} myUser={msg.myUser} horario={msg.horario} key={index}/>
        )) : "Mande alguma mensagem"
      }
    </div>
  )
}

export default MensagensList