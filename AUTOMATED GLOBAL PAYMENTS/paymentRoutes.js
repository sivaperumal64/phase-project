const express = require('express');
const router = express.Router();

// Mock payment processing
router.post('/process', (req, res) => {
    const { email, upiId, phone } = req.body;

    if (!email || !upiId || !phone) {
        return res.status(400).json({ message: 'Payment details are incomplete' });
    }

    // Simulate payment processing (replace with actual payment gateway)
    return res.status(200).json({ message: 'Payment processed successfully' });
});

module.exports = router;
