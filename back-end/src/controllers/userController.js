const mongoose = require("mongoose");
const { User } = require("../model/userModel");
const { Mensagem } = require("../model/mensagemModel");
const { Chats } = require("../model/chatModel");
const router = require('express').Router();

//Read usuario
router.get('/', async(req, res)=>{
    const userId = req.userId;
    try {
        const usuario = await User.findById(userId).populate('chats').exec();
        res.status(200).json({user: usuario})
    } catch (error) {
        console.log(500);
        res.status(500).json({error: error})
    }
})

//Update de dados
router.put('/', async(req, res)=>{
    const userId = req.userId;
    try {
        const { username, senha } = req.body;
        await User.findByIdAndUpdate(userId, {username: username, senha:senha})
    } catch (error) {
        console.log(500);
        res.status(500).json({error: error})
    }
})

//Buscar todos os usuario que o usuario n tem relação
router.get('/users', async(req, res)=>{
    const userId = req.userId;
    try {
        const usuario = await User.findById(userId)
        const usuarios = await User.find({ _id: { $nin: [...usuario.amigos, userId] } });
        res.status(200).json({users: usuarios})
    } catch (error) {
        console.log(500);
        res.status(500).json({error: error})
    }
})

//Criar chats
router.post('/conversas', async(req, res)=>{
    const userId = req.userId;
    const {username}= req.body;
    try {
        const userAdd = await User.findOne({username: username});
        //console.log(userAdd)
        const novaConversa = new Chats({users: [userId, userAdd._id]})
        novaConversa.save().then(async (conversa)=>{
            await User.findByIdAndUpdate(userAdd._id, {$push: {chats: conversa.id, amigos: userId}});
            await User.findByIdAndUpdate(userId, {$push: {chats: conversa.id, amigos:userAdd._id}});
            res.status(200).json({msg: 'Deu certo'})
        })
    } catch (error) {
        console.log(500);
        res.status(500).json({error: error})
    }
})

//Buscar chats do usuario
router.get('/chats', async (req, res) => {
    const userId = req.userId;
    try {
        const chats = await Chats.find({ users: { $in: [userId] } }).populate('users', 'username').populate('mensagens.sender', 'username');
        res.json(chats);
    } catch (error) {
        console.log(500);
        res.status(500).json({error: error})
    }
});

//Envio de mensagem
router.post('/mensagem', async(req, res)=>{
    const userId = req.userId;
    const {conteudo, chatId} = req.body
    try {
        const novaMsg = new Mensagem({
            conteudo: conteudo,
            sender: userId
        });
      
        const mensagemDoc = novaMsg.toObject();
      
        const chat = await Chats.findByIdAndUpdate(
            chatId,
            { $push: { mensagens: mensagemDoc } },
            { new: true }
        ).populate('users', 'username').populate('mensagens.sender', 'username');
      
        res.status(200).json({
            chat: chat
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

module.exports = router