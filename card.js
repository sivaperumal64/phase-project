document.addEventListener('DOMContentLoaded', function() {  
    const paymentForm = document.getElementById('paymentForm');  
    const cardSelect = document.getElementById('cardSelect');  
    const transactionsTable = document.getElementById('transactionsTable').getElementsByTagName('tbody')[0];  

    // Mock data for cards (in a real application, this would come from a server)  
    const cards = [  
        { id: 1, name: "John Doe", last4: "1234" },  
        { id: 2, name: "Jane Smith", last4: "5678" },  
        { id: 3, name: "Bob Johnson", last4: "9012" }  
    ];  

    // Mock data for transactions (in a real application, this would come from a server)  
    let transactions = [  
        { date: "2023-05-01", cardId: 1, amount: 100.00, description: "Office Supplies" },  
        { date: "2023-05-03", cardId: 2, amount: 75.50, description: "Client Lunch" },  
        { date: "2023-05-05", cardId: 3, amount: 200.00, description: "Software License" }  
    ];  

    // Populate card select options  
    cards.forEach(card => {  
        const option = document.createElement('option');  
        option.value = card.id;  
        option.textContent = `${card.name} (**** ${card.last4})`;  
        cardSelect.appendChild(option);  
    });  

    // Handle form submission  
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
        const cardId = parseInt(cardSelect.value);
        const amount = parseFloat(document.getElementById('paymentAmount').value);
        const description = document.getElementById('paymentDescription').value;
    
        // Create new transaction
        const newTransaction = {
            date: new Date().toISOString().split('T')[0], // Corrected split method to get the date part
            cardId: cardId,
            amount: amount,
            description: description
        };
    
        console.log(newTransaction);
    
        // Optionally, you can add code here to process the transaction
        // For example, send newTransaction to a server
    });
});
