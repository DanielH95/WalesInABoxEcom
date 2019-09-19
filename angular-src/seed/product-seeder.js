var Product = require('../../models/product.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db');

var products = [
    new Product({
        name: "Cardiff in a Box",
        description: "A box full of almost everything Cardiff. Whether you want to send this to someone as a gift or to have something to remember, this intuitive box of goods are a must have to remind you of Cardiff.",
        price: 75
    }),
    new Product({
        name: "Swansea in a Box",
        description: "A box full of almost everything Swansea. Whether you want to send this to someone as a gift or to have something to remember, this intuitive box of goods are a must have to remind you of Swansea.",
        price: 75
    }),
    new Product({
        name: "Barry in a Box",
        description: "A box full of almost everything Barry. Whether you want to send this to someone as a gift or to have something to remember, this intuitive box of goods are a must have to remind you of Barry.",
        price: 75
    })
];    

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err,result){
        done++;
        if (done === products.length) {

        }
    });
}

function exit() {
    mongoose.disconnect();
}