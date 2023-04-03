const express = require('express');
const ProductController = require('../controllers/ProductController');

class UsuarioRoutes{
    constructor(){
        this.productController = new ProductController()
        this.router = express.Router();
        this.loadRoutes();
    }

    loadRoutes() {
        this.router.get("/produtos", this.productController.buscarTodos.bind(this.productController))
        this.router.get("/busca/:id", this.productController.buscarId.bind(this.productController))
        this.router.post("/inserir", this.productController.adicionar.bind(this.productController))
        this.router.put("/atualiza/", this.productController.alterar.bind(this.productController))
        this.router.delete("/exclui/:id", this.productController.excluir.bind(this.productController))
    }
}

module.exports = UsuarioRoutes