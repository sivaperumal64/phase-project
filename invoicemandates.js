document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('invoiceForm');
    const result = document.getElementById('result');
    const complianceList = document.getElementById('complianceList');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        checkCompliance();
    });

    function checkCompliance() {
        const invoiceNumber = document.getElementById('invoiceNumber').value;
        const invoiceDate = new Date(document.getElementById('invoiceDate').value);
        const buyerGstin = document.getElementById('buyerGstin').value;
        const sellerGstin = document.getElementById('sellerGstin').value;
        const totalAmount = parseFloat(document.getElementById('totalAmount').value);
        const taxAmount = parseFloat(document.getElementById('taxAmount').value);

        const complianceChecks = [
            {
                check: invoiceNumber.length >= 8,
                message: 'Invoice number should be at least 8 characters long'
            },
            {
                check: invoiceDate <= new Date(),
                message: 'Invoice date should not be in the future'
            },
            {
                check: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(buyerGstin),
                message: 'Buyer GSTIN should be in the correct format'
            },
            {
                check: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(sellerGstin),
                message: 'Seller GSTIN should be in the correct format'
            },
            {
                check: totalAmount > 0,
                message: 'Total amount should be greater than zero'
            },
            {
                check: taxAmount >= 0 && taxAmount < totalAmount,
                message: 'Tax amount should be non-negative and less than the total amount'
            }
        ];

        complianceList.innerHTML = '';
        let allCompliant = true;

        complianceChecks.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.message;
            li.classList.add(item.check ? 'compliant' : 'non-compliant');
            complianceList.appendChild(li);

            if (!item.check) {
                allCompliant = false;
            }
        });

        result.classList.remove('hidden');
        result.style.backgroundColor = allCompliant ? '#e6ffe6' : '#ffe6e6';
    }
});
