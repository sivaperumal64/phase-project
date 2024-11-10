document.addEventListener('DOMContentLoaded', function() {
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');
    const cardHolder = document.getElementById('cardHolder');
    const submitBtn = document.getElementById('submitBtn');

    // Format card number input
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        e.target.value = formattedValue;
    });

    // Format expiry date input
    expiryDate.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        e.target.value = value;
    });

    // Allow only numbers for CVV
    cvv.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Submit button click event
    submitBtn.addEventListener('click', function() {
        console.log('Card Number:', cardNumber.value);
        console.log('Expiry Date:', expiryDate.value);
        console.log('CVV:', cvv.value);
        console.log('Card Holder:', cardHolder.value);
        alert('Payment submitted!');
    });
});

