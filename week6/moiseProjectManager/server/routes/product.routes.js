const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.post('/api/product', ProductController.createProduct);
    app.patch('/api/product', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct); //note: "id" here MUST match params in controller
}