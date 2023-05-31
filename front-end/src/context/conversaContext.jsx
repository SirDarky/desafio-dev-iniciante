import { createContext, useContext, useState } from "react";
import { transformarHoras } from "../utils/horas";
import api from "../services/api";
import { useAuthContext } from "./authContext";

export const ChatContext = createContext();
ChatContext.displayName = 'ChatContext'

export default function ChatProvider({children}){
  const [conversas, setConversas] = useState([])
  const [conversaAtual, setConversaAtual] = useState(0)
  const [chats, setChats] = useState([])

  return(
    <ChatContext.Provider value={{conversas, setConversas, conversaAtual, setConversaAtual}}>
      {children}
    </ChatContext.Provider>
  )
}
//Hooks personalizado
export function useChatContext(){
  const {conversas, setConversas, conversaAtual, setConversaAtual} = useContext(ChatContext);
  const {usuario, userId} = useAuthContext()

  function mudarAtualConversa(idChat) {
    setConversaAtual(idChat)
  }

  function adicionarConversas(chats) {
    setConversas(chats)
  }

  function buscarConversas() {
    const nome = usuario
    let novasConversas=[];
    conversas.map(chat=>{
        let chatCompleto = {
            idChat: chat._id
        }
        chat.users.map(user=>{
            if(user.username!= nome){
                chatCompleto.user = user.username
            }
        })
        novasConversas.push(chatCompleto)
    })
    return novasConversas
  }

  function adicionarNovaMensagem(mensagem, socket) {
    const msg = {
        conteudo: mensagem,
        chatId: conversaAtual,
    }
    api.post('/user/mensagem', msg).then(res=>{
        const novaConversa = {
            chatId: res.data.chat._id,
            mensagens: res.data.chat.mensagens,
            userId: userId
        }
        socket.emit('enviar-mensagem', novaConversa)
        atualizarConversa(novaConversa)
    })
  }

  function atualizarConversa(novaConversa) {
    api.get('/user/chats').then((res)=>{
      adicionarConversas(res.data)
    })
  }

  function buscarMensagemChat() {
    const nome = usuario;
    const conversa = conversas.filter(chat => chat._id === conversaAtual)
    const nomeUsuario = conversa[0].users.map(user =>{
        if(user.username!=nome){
            return user.username
        }
    }).filter(Boolean);  
    const mensagens = conversa[0].mensagens.map(msg=>{
        const horaMinutos = transformarHoras(msg.createdAt);
        const addMsg = {
            conteudo: msg.conteudo,
            autor: msg.sender.username,
            horario: horaMinutos,
            myUser: (msg.sender.username === nome)
        };
        return addMsg;
    })
    return{
        user:nomeUsuario,
        mensagens: mensagens
    }
  }
  
  return {buscarConversas, buscarMensagemChat, mudarAtualConversa, conversaAtual, adicionarNovaMensagem, conversas, adicionarConversas, atualizarConversa}
}