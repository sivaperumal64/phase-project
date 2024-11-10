document.addEventListener('DOMContentLoaded', function() {
    const cardForm = document.getElementById('cardForm');
    const paymentForm = document.getElementById('paymentForm');
    const virtualCardList = document.getElementById('virtualCardList');
    const cardSelect = document.getElementById('cardSelect');

    let virtualCards = [];

    cardForm.addEventListener('submit', function(e) {
        e.preventDefault();
        createVirtualCard();
    });

    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        processPayment();
    });

    function createVirtualCard() {
        const cardName = document.getElementById('cardName').value;
        const cardLimit = parseFloat(document.getElementById('cardLimit').value);
        const expiryDate = document.getElementById('expiryDate').value;

        const cardNumber = generateCardNumber();

        const newCard = {
            name: cardName,
            number: cardNumber,
            limit: cardLimit,
            balance: cardLimit,
            expiry: expiryDate
        };

        virtualCards.push(newCard);
        updateCardList();
        updateCardSelect();
        cardForm.reset();
    }

    function generateCardNumber() {
        return Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
    }

    function updateCardList() {
        virtualCardList.innerHTML = '';
        virtualCards.forEach(card => {
            const li = document.createElement('li');
            li.textContent = `${card.name} - ${card.number} - Balance: $${card.balance.toFixed(2)} - Expires: ${card.expiry}`;
            virtualCardList.appendChild(li);
        });
    }

    function updateCardSelect() {
        cardSelect.innerHTML = '';
        virtualCards.forEach((card, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${card.name} - ${card.number}`;
            cardSelect.appendChild(option);
        });
    }

    function processPayment() {
        const selectedCardIndex = cardSelect.value;
        const paymentAmount = parseFloat(document.getElementById('paymentAmount').value);

        if (selectedCardIndex === '') {
            alert('Please select a card');
            return;
        }

        const selectedCard = virtualCards[selectedCardIndex];

        if (paymentAmount > selectedCard.balance) {
            alert('Insufficient funds');
            return;
        }

        selectedCard.balance -= paymentAmount;
        updateCardList();
        paymentForm.reset();
        alert(`Payment of $${paymentAmount.toFixed(2)} processed successfully`);
    }
});
