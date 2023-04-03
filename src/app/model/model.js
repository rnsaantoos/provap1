const mongoose = require('mongoose');
const Product = require('../domain/domain');
const ProductSchema = mongoose.Schema(
     {
        nome: String,
        preco: String,
        categoria: String,
    });
ProductSchema.loadClass(Product)
module.exports = mongoose.model('Product', ProductSchema);

