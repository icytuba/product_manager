const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:_id', ProductController.getOneProduct);
    app.put('/api/products/:_id', ProductController.updateProduct);
    app.delete('/api/products/:_id', ProductController.deleteProduct);
}