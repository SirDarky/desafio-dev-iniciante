import React, { createContext, useEffect } from 'react';
import io from 'socket.io-client';
import { linkLocal } from '../services/constantes';
import { useChatContext } from './conversaContext';
import { useAuthContext } from './authContext';

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const socket = io(linkLocal); // Substitua 'https://exemplo.com' pelo seu URL do servidor Socket.IO
  const{atualizarConversa}= useChatContext();
  const {authentication, userId} = useAuthContext();

  useEffect(() => {
    socket.on('connect', () => {
        socket.emit('join-room', userId)//ID DO USUARIO
    });
    socket.on('mensagem-recebida', (mensagem) => {
      atualizarConversa(mensagem)
    });
  }, [authentication]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
