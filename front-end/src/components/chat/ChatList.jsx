import React, { useEffect, useState } from 'react'
import User from './components/User'
import CardConversa from './components/CardConversa'
import PesquisarUser from './components/PesquisarUser'
import Conversas from './components/Conversas'
import { useAuthContext } from '../../context/authContext'
import { useChatContext } from '../../context/conversaContext'
import api from '../../services/api'
import Pesquisar from './components/Pesquisar'

const ChatList = () => {
  const [pesquisar, setPesquisar] = useState(false)
  const {authentication} = useAuthContext()
  const{adicionarConversas, buscarConversas,buscarMensagemChat, conversas} = useChatContext()
  useEffect(() => {
    api.get('/user/chats').then((res)=>{
    adicionarConversas(res.data)
    })
  }, [authentication, pesquisar])
  
  return (
    <div className='w-1/4 bg-slate-700'>
        <User/>
        <PesquisarUser setState={setPesquisar} state={pesquisar}/>
        {!pesquisar? <Conversas />: <Pesquisar setState={setPesquisar} state={pesquisar}/>}
    </div>
  )
}

export default ChatList