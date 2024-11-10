document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('businessAccountForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // If the form is valid, you would typically send this data to your server
            console.log('Form is valid. Submitting...');
            const formData = new FormData(form);
            const formObject = Object.fromEntries(formData.entries());
            console.log(formObject);

            // Here you would typically make an AJAX call to your server
            // For demonstration, we're just logging the data
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input, select');

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (!isValid) {
            alert('Please fill in all fields.');
        }

        return isValid;
    }
});
