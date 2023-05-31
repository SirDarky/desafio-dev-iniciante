import React, { useEffect, createContext } from 'react'
import ChatList from '../components/chat/ChatList'
import ChatRender from '../components/chat/ChatRender'
import ChatProvider, { useChatContext } from '../context/conversaContext'
import { SocketProvider } from '../context/socketContext'
import { useAuthContext } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'

const Home = () => {
  //Navigate
  const navigate = useNavigate()
  const { authentication } = useAuthContext()
  useEffect(() => {
    if(!authentication){
      navigate('/login');
    }

  }, [authentication])
  

  return (
    <ChatProvider>
      <SocketProvider >
          <div className='flex h-screen pt-10'>
            <ChatList />
            <ChatRender />
          </div>
      </SocketProvider>
    </ChatProvider>
  )
}

export default Home