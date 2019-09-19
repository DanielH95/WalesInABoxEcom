const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config/database');

// User Schema
// Other data such as features isn't included as that might make the schema too complex.
// It is instead hardcoded into the HTML for each page
var schema = new Schema({
    name: {type: String},
    description: {type: String},
    price: {type: Number},
});

module.exports = mongoose.model('Product', schema);

// Code below is probably useless
// module.exports.addProduct = function (newProduct, callback) {
//     newProduct.save(callback);
       
// }

// module.exports.editProduct = function (oldProductID,newProduct, callback) {
//     const query = { _id: oldProductID }
//     Product.findByIdAndUpdate(query,newProduct, callback);

// }

// module.exports.removeProduct = function (productID, callback) {
//     const query = { _id: productID };
//     Product.remove(query, callback);

// }
