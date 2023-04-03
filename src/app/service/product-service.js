
const Repository = require("../repositories/ProductsRepository");

class ProductService {
    constructor()
    {
        this.Repository = new Repository()
    }
    adicionar(produto) {
        
        this.Repository.adicionar(produto);
    }
    excluir(produto){
        this.Repository.excluir(produto);
    }
    alterar(produto){
        this.Repository.alterar(produto);
    }
    buscar(produto){
        return this.Repository.buscarID(produto);
    }
    buscarTodos(){
        return this.Repository.buscaTodos()
    }
}

module.exports = ProductService;