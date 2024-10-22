let cart = [];
let totalCartValueInINR = 0;

const productPrices = {
    1: { price: 100, currency: '₹' },
    2: { price: 200, currency: '₹' },
    3: { price: 150, currency: '₹' },
    4: { price: 220, currency: '₹' },
    5: { price: 120, currency: '₹' },
    6: { price: 350, currency: '₹' },
    7: { price: 90, currency: '₹' },
    8: { price: 400, currency: '₹' },
    9: { price: 180, currency: '₹' },
    10: { price: 270, currency: '₹' },
    11: { price: 130, currency: '₹' },
    12: { price: 310, currency: '₹' },
};

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function addToCart(price, productId) {
    const productPrice = productPrices[productId].price;

    // Add product to cart and update total cart value
    cart.push(productId);
    totalCartValueInINR += productPrice;

    // Disable 'Add to Cart' button
    const button = document.getElementById(`btn-${productId}`);
    if (button) {
        button.textContent = 'Added';
        button.style.backgroundColor = '#6c757d';
        button.disabled = true;
    }

    updateCart();
    updatePricesBasedOnLocation();
}

function updatePricesBasedOnLocation() {
    const location = document.getElementById('location').value || 'INR'; // Default to INR if no location is selected

    let currencySymbol = '₹';
    let conversionRate = 1; // Default conversion rate (for INR)

    switch (location) {
        case 'UK':
            currencySymbol = '£';
            conversionRate = 0.01; // Example conversion rate for UK
            break;
        case 'US':
            currencySymbol = '$';
            conversionRate = 0.012; // Example conversion rate for US
            break;
        case 'AU':
            currencySymbol = 'A$';
            conversionRate = 0.018; // Example conversion rate for Australia
            break;
        case 'SG':
            currencySymbol = 'S$';
            conversionRate = 0.016; // Example conversion rate for Singapore
            break;
        case 'INR':
            currencySymbol = '₹';
            conversionRate = 1; // No conversion for INR
            break;
    }

    for (let i = 1; i <= 12; i++) {
        const priceElement = document.getElementById(`price-symbol-${i}`);
        const priceInrElement = document.getElementById(`price-inr-${i}`);

        const price = productPrices[i].price;
        const convertedPrice = (price * conversionRate).toFixed(2);

        if (priceElement) {
            priceElement.textContent = `Price: ${currencySymbol}${convertedPrice}`;
        }
        if (priceInrElement) {
            priceInrElement.textContent = `Price in INR: ₹${price}`;
        }
    }
}

function updateCart() {
    const cartContent = document.getElementById('cart-content');
    const cartTotal = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartContent.textContent = 'Your cart is currently empty.';
        cartTotal.textContent = '';
    } else {
        cartContent.textContent = `Items in Cart: ${cart.length}`;
        cartTotal.textContent = `Total: ₹${totalCartValueInINR}`;
    }
}

// Function to validate email and password on login
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert('Invalid email format.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 6 characters long and contain alphanumeric characters and special symbols.');
        return;
    }

    alert('Login successful!');
});

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate password format
function validatePassword(password) {
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/; // At least 6 characters, alphanumeric, special characters
    return passwordPattern.test(password);
}

// Initialize the page with default prices
window.onload = function () {
    document.getElementById('location').value = 'INR'; // Set default location to INR
    updatePricesBasedOnLocation();
};
