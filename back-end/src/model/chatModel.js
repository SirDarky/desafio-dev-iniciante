const mongoose = require("mongoose");
const {mensagemSchema} = require("./mensagemModel")

// Cria um esquema para o usuário
const chatSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    mensagens: [mensagemSchema]
}, { timestamps: true });

const Chats = mongoose.model('Chats', chatSchema);

module.exports = {
    Chats,
    chatSchema
};