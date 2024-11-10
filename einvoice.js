document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('invoiceForm');
    const addItemButton = document.getElementById('addItem');
    const itemsContainer = document.getElementById('itemsContainer');
    const invoicePreview = document.getElementById('invoicePreview');
    const previewContent = document.getElementById('previewContent');

    addItemButton.addEventListener('click', function() {
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.innerHTML = `
            <input type="text" class="itemDescription" placeholder="Description" required>
            <input type="number" class="itemQuantity" placeholder="Quantity" required>
            <input type="number" class="itemPrice" placeholder="Unit Price" required>
        `;
        itemsContainer.appendChild(newItem);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const invoiceNumber = document.getElementById('invoiceNumber').value;
        const issueDate = document.getElementById('issueDate').value;
        const dueDate = document.getElementById('dueDate').value;
        const sellerName = document.getElementById('sellerName').value;
        const buyerName = document.getElementById('buyerName').value;

        const items = [];
        const itemElements = document.querySelectorAll('.item');
        itemElements.forEach(item => {
            items.push({
                description: item.querySelector('.itemDescription').value,
                quantity: item.querySelector('.itemQuantity').value,
                price: item.querySelector('.itemPrice').value
            });
        });

        const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

        const invoiceHTML = `
            <h3>Invoice Number: ${invoiceNumber}</h3>
            <p>Issue Date: ${issueDate}</p>
            <p>Due Date: ${dueDate}</p>
            <p>Seller: ${sellerName}</p>
            <p>Buyer: ${buyerName}</p>
            <h4>Items:</h4>
            <ul>
                ${items.map(item => `
                    <li>${item.description} - Quantity: ${item.quantity}, Unit Price: $${item.price}</li>
                `).join('')}
            </ul>
            <h4>Total: $${total.toFixed(2)}</h4>
        `;

        previewContent.innerHTML = invoiceHTML;
        invoicePreview.classList.remove('hidden');
    });
});
