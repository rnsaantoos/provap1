const Usuario = require("../domain/domain")
const ProductService = require("../service/product-service");


class ProductController{
  constructor(){
      this.productService = new ProductService()
  }
  adicionar (req, res)  { 
            let usuario = new Usuario(req.body.nome ,req.body.preco, req.body.categoria);
            this.productService.adicionar(usuario);
            console.log(usuario)
            res.json(usuario)
      }
  
  async excluir (req, res)  { 
        const {id} = req.params
        this.productService.excluir(id) }

  async alterar (req, res)  { 
        await this.productService.alterar(req.body);
      }   

  async buscarId(req, res) { 
          const {id} = req.params
          const produto = await this.productService.buscar(id);
          if (!produto){
              res.status(404)
          }
          else {
              res.json(produto)
          }
  }
  async buscarTodos(req, res) {
          const produtos = await this.productService.buscarTodos();
          res.json(produtos)
  }
}

module.exports = ProductController;
