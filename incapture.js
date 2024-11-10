document.addEventListener('DOMContentLoaded', function() {
    const invoiceUpload = document.getElementById('invoiceUpload');
    const captureBtn = document.getElementById('captureBtn');
    const invoicePreview = document.getElementById('invoicePreview');
    const invoiceNumber = document.getElementById('invoiceNumber');
    const invoiceDate = document.getElementById('invoiceDate');
    const invoiceAmount = document.getElementById('invoiceAmount');

    invoiceUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                invoicePreview.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    captureBtn.addEventListener('click', function() {
        // Simulate invoice data extraction
        // In a real system, this would involve OCR and data parsing
        simulateDataExtraction();
    });

    function simulateDataExtraction() {
        // Generate random invoice data
        const randomInvoiceNumber = 'INV-' + Math.floor(1000 + Math.random() * 9000);
        const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0];
        const randomAmount = '$' + (Math.random() * 1000).toFixed(2);

        // Update the DOM with extracted data
        invoiceNumber.textContent = randomInvoiceNumber;
        invoiceDate.textContent = randomDate;
        invoiceAmount.textContent = randomAmount;
    }
});
