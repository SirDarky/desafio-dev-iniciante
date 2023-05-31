import React, { useEffect, useState } from 'react'
import CardConversa from './CardConversa'
import { useChatContext } from '../../../context/conversaContext'

const Conversas = () => {
    const [minhasConversas, setMinhasConversas] = useState()
    const {buscarConversas, buscarMensagemChat, conversas} = useChatContext();
    useEffect(() => {
        setMinhasConversas(buscarConversas())
    }, [conversas])
    const oi = ()=>{
        console.log(buscarConversas())
    }
  return (
    <div>
        {minhasConversas && minhasConversas.length>0?
            minhasConversas.map((conv, index)=>(
                <CardConversa idChat={conv.idChat} user={conv.user} key={index}/>
            )) : "Não há chats disponiveis para você"
        }
    </div>
  )
}

export default Conversas