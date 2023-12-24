const express = require('express')
const productManagerFileSystem = require('../managers/productManagerFileSystem')

const router = express.Router()
const productService = new productManagerFileSystem()

// GET /productos  TODOS Pero Evaluando el Query - Limit
router.get('/', async (req, res) => {
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);

    const limit = parseInt(req.query.limit);
    
    console.log(limit)
   
    const products = await  productService.getProducts();  
    if (!limit) { 
        res.status(200).json(products)
    }else {
        res.send(products.slice(0,limit));
    }
})

// GET /productos/:id  PRODUCTOS POR ID
router.get('/:id', async (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    console.log(id);
    
    
    const products = await  productService.getProductsById(id);  
    res.status(200).json(products)
    
    
})


module.exports = router