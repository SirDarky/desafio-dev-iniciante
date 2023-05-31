const mongoose = require("mongoose");

// Cria um esquema para o usuário
const usuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    senha: {type: String,  require: true},
    chats: [{type: mongoose.Schema.Types.ObjectId , ref:'Chats'}],
    amigos: [{type: mongoose.Schema.Types.ObjectId , ref:'User'}]
}, { timestamps: true });

const User = mongoose.model('User', usuarioSchema);

module.exports = {
    User,
    usuarioSchema
};