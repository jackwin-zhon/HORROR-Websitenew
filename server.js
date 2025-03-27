const express = require('express');
const app = express();
const PORT = 3000;
const Product = require('./models/productModel');

app.use(express.json());

// Route to fetch all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send("Error fetching products");
    }
});

// Serve static files
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
