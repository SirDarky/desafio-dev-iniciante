require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const server = http.createServer(app);
const porta = process.env.PORT
const io = require('./src/socket/websocket')

app.use(cors());
app.use(express.json());

//Conexão com Database
const connect = require('./src/database/connection');
connect();

//WebSocket - Chat Real Time
io.attach(server);

//Rotas
const router = require('./src/routes');
app.use(router);

server.listen(porta, ()=>{
    console.log('Servidor iniciado em http://localhost:'+porta);
});