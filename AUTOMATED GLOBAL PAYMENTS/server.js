const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routes
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use('/cart', cartRoutes);
app.use('/auth', authRoutes);
app.use('/payment', paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
