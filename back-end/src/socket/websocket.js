const { Chats } = require('../model/chatModel');
const { User } = require('../model/userModel');
//websocket
const io = require("socket.io")({
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
});

io.on('connection', (socket) => {
    socket.on('join-room',async (userId)=>{
        socket.join(userId);
    })
    // ouve eventos do cliente
    socket.on('enviar-mensagem', async (conteudo) => {
        try {
            const chat = await Chats.findById(conteudo.chatId)
            const otherUser = chat.users.filter(user => user.toString() != conteudo.userId)
            socket.to(otherUser[0].toString()).emit('mensagem-recebida', {mensagens: conteudo.mensagens, chatId:conteudo.chatId})
        } catch (error) {
            socket.emit('error-mensagem', error)
        }
    });
});

// informações necessárias->
/*
    texto -> mensagem
    autor -> id do autor
    data->
    hora ->
    protocolo -> identificação
*/

module.exports = io;