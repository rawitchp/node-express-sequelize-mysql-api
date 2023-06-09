const productController = require('../controllers/productController.js');

const router = require('express').Router();

router.post('/addProduct', productController.addProduct);

router.get('/allProducts', productController.getAllProducts);

router.get('/published', productController.getPublisedProducts);

router.get('/product/:id', productController.getOneProduct);

router.put('/updateProduct/:id', productController.updateProduct);

router.delete('/product/:id', productController.deleteProduct);

router.get('/getProductReviews/:id', productController.getProductReviews);

module.exports = router;
