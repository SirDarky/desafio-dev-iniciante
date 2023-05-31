const mongoose = require("mongoose");

// Cria um esquema para o usuário
const mensagemSchema = new mongoose.Schema({
    conteudo: {
        type: String
    },
    sender: {type: mongoose.Schema.Types.ObjectId , ref:'User'}
}, { timestamps: true });

const Mensagem = mongoose.model('Mensagem', mensagemSchema);

module.exports = {
    Mensagem,
    mensagemSchema
};