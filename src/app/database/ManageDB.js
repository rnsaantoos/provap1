const mongoose = require('mongoose')

class ManageDB {
    static async connect(){
        await mongoose.connect('mongodb+srv://renanmix09:080897@cluster0.bfkpwfv.mongodb.net/?retryWrites=true&w=majority',
        {useNewUrlParser: true, useUnifiedTopology: true}).catch((err)=>{
            console.log("Erro na conexao com MongoDB")
        });

            console.log('CONECTADO AO BANCO')
    }
    static async close() {
        await mongoose.connection.close().catch((err)=>{
            console.log("Erro ao fechar o Banco com MongoDB")
        });

        console.log('Banco fechado com sucesso')
    }

}

module.exports = ManageDB


