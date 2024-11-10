let cart = [];
let totalCartValueInINR = 0;

const productPrices = {
    1: { price: 100, currency: '₹', name: 'Product 1', image: './product 1.jpeg' },
    2: { price: 200, currency: '₹', name: 'Product 2', image: './product 2.jpeg' },
    3: { price: 150, currency: '₹', name: 'Product 3', image: './product 3.jpeg' },
    4: { price: 220, currency: '₹', name: 'Product 4', image: './product 4.jpeg' },
    5: { price: 120, currency: '₹', name: 'Product 5', image: './product 5.jpeg' },
    6: { price: 350, currency: '₹', name: 'Product 6', image: './product 6.jpeg' },
    7: { price: 90, currency: '₹', name: 'Product 7', image: './product 7.jpeg' },
    8: { price: 400, currency: '₹', name: 'Product 8', image: './product 8.jpeg' },
    9: { price: 180, currency: '₹', name: 'Product 9', image: './product 9.jpeg' },
    10: { price: 270, currency: '₹', name: 'Product 10', image: './product 10.jpeg' },
    11: { price: 130, currency: '₹', name: 'Product 11', image: './product 11.jpeg' },
    12: { price: 310, currency: '₹', name: 'Product 12', image: './product 12.jpeg' },
};

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function addToCart(price, productId) {
    const product = productPrices[productId];
    const productPrice = product.price;

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

    // Clear previous cart content
    cartContent.innerHTML = '';

    if (cart.length === 0) {
        cartContent.textContent = 'Your cart is currently empty.';
        cartTotal.textContent = '';
    } else {
        cartContent.textContent = `Items in Cart: ${cart.length}`;
        cartTotal.textContent = `Total: ₹${totalCartValueInINR}`;
        
        // Display each product in the cart
        cart.forEach(productId => {
            const product = productPrices[productId];
            const productDiv = document.createElement('div');
            productDiv.className = 'cart-product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart-product-image">
                <span class="cart-product-name">${product.name}</span>
                <span class="cart-product-price">${product.currency}${product.price}</span>
            `;
            cartContent.appendChild(productDiv);
        });
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

// Payment form submission
document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const cvv = document.getElementById('cvv').value;
    const upiApp = document.getElementById('upi-app').value;
    const email = document.getElementById('upi-email').value;

    if (!cvv || !upiApp || !email) {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Payment successful! \nCVV: ${cvv}\nUPI App: ${upiApp}\nEmail: ${email}`);
});

// Initialize the page with default prices
window.onload = function () {
    document.getElementById('location').value = 'INR'; // Set default location to INR
    updatePricesBasedOnLocation();
};

function submitPayment(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const upi = document.getElementById('upi').value;
    const cardNumber = document.getElementById('card-number').value;
    const cvv = document.getElementById('cvv').value;

    // Payment submission logic here
    alert(`Payment Submitted!\nEmail: ${email}\nName: ${name}\nPhone: ${phone}\nUPI: ${upi}`);
}

function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Login logic here
    alert(`Logged in as ${email}`);
}
