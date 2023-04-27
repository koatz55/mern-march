const { request } = require('express');
const Product = require('../models/product.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Project Manager Index"
    });
}
          /* The method below is new */
module.exports.createProduct = (request, response) => {
    // Mongoose's "create" method is run using our Product model to add a new product to our db's product collection.
    // request.body will contain something like {title: "Bike", price: "$2000" description } from the client
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(product => {
            console.log(product); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(product);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(product));
}