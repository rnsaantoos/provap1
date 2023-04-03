const ProductSchema = require("../model/model")

class ProductRepositoryMongo {
      constructor(){
        this.model = ProductSchema
    }
    adicionar(produto) {
        
        this.model.create(produto)
    }
    async excluir(_id) { 
        const exclui= await this.model.deleteOne({_id})
        return exclui     
          
    }
    async alterar(_id) {
        try {
            const alterar = {_id: _id._id}
            this.model.findOneAndUpdate(alterar,  _id).exec()
            }
        catch (erro)
        {
            return erro.message
        }
    }
    async buscarID(_id){
        try {
            const busca = await this.model.findOne({_id})
            return busca
        }
        catch (err) {
            return err.message
        }
    }
    buscaTodos(produto){
        const query = this.model.find({produto})
        const promise = query.lean().exec()
        return promise;
    }
}


module.exports = ProductRepositoryMongo;
