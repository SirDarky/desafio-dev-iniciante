const router = require('express').Router();
const { User } = require("../model/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const SENHA = process.env.PASSWORD;

//Criar usuario
router.post('/register', async (req, res)=>{
    const salt = await bcrypt.genSalt(12)
    const senha = await bcrypt.hash(req.body.senha, salt)
    const {username}= req.body;
    const novoUsuario = new User({
        username: username,
        senha: senha
    });
    try {
        await novoUsuario.save().then(usuario =>{
            const tokenUser = jwt.sign(usuario.id, SENHA);
            res.status(201).json({ user: usuario, token:tokenUser});
        }).catch((error) => {
            //console.log(error);
            if(error.code===11000){
                res.status(400).json({code:11000})
                return
            }else{
                console.log(error)
                res.status(500).json({ error: error });
            }
            
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error})
    }
})

//Realizar o login
router.post('/login', async(req, res)=>{
    const {username, senha}= req.body;
    try {
        await User.findOne({username: username}).exec()
        .then((usuario)=>{
            if(!usuario){
                res.status(401).json({msg: 'Usuario não encontrado'});
                return
            }
            bcrypt.compare(senha, usuario.senha, (err, result)=>{
                if(result){
                    usuario.senha = "";
                    const {id} =usuario;
                    const tokenUser = jwt.sign(id, SENHA);
                    res.status(200).json({token: tokenUser, usuario: usuario})
                } else {
                    res.status(401).json({msg: 'Senha incorreta'})
                }
            })
        }).catch((error)=>{
            res.status(500).json({ error: error });
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"erro"})
    }
})

module.exports = router