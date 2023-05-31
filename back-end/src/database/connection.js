const mongoose = require('mongoose');
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD

async function connection() {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(`mongodb+srv://${user}:${password}@desafio.u0n6hlw.mongodb.net/`);
        console.log('Conectado com o banco de dados')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = connection;