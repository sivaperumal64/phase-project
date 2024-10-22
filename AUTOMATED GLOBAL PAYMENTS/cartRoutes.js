const express = require('express');
const router = express.Router();

// In-memory cart storage for simplicity (use DB for production)
let cart = [];

// Add product to cart
router.post('/addToCart', (req, res) => {
    const { productId, quantity } = req.body;

    const product = {
        productId,
        quantity,
    };

    cart.push(product);
    return res.status(200).json({ message: 'Product added to cart', cart });
});

// Get all products in the cart
router.get('/getCart', (req, res) => {
    return res.status(200).json({ cart });
});

// Clear the cart
router.post('/clearCart', (req, res) => {
    cart = [];
    return res.status(200).json({ message: 'Cart cleared' });
});

module.exports = router;
