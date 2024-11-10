let invoices = [];

document.getElementById('invoiceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let invoice = {
        number: document.getElementById('invoiceNumber').value,
        date: document.getElementById('invoiceDate').value,
        customer: document.getElementById('customerName').value,
        amount: parseFloat(document.getElementById('invoiceAmount').value)
    };
    
    invoices.push(invoice);
    updateInvoiceList();
    this.reset();
});

function updateInvoiceList() {
    let list = document.getElementById('invoiceList');
    list.innerHTML = '<h2>Invoices</h2>';
    invoices.forEach(invoice => {
        list.innerHTML += `
            <p>Invoice ${invoice.number} - ${invoice.customer} - $${invoice.amount.toFixed(2)} - ${invoice.date}</p>
        `;
    });
}

document.getElementById('generateReport').addEventListener('click', function() {
    let totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
    let customerTotals = {};
    
    invoices.forEach(invoice => {
        if (!(invoice.customer in customerTotals)) {
            customerTotals[invoice.customer] = 0;
        }
        customerTotals[invoice.customer] += invoice.amount;
    });
    
    let report = document.getElementById('report');
    report.innerHTML = `
        <h2>Invoice Report</h2>
        <p>Total Invoice Amount: $${totalAmount.toFixed(2)}</p>
        <h3>Customer Totals:</h3>
    `;
    
    for (let customer in customerTotals) {
        report.innerHTML += `<p>${customer}: $${customerTotals[customer].toFixed(2)}</p>`;
    }
});
