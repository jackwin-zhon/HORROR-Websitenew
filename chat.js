const mongoose = require('./db/mongoConnection');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
