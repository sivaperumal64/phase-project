document.addEventListener('DOMContentLoaded', function() {
    const addCardBtn = document.getElementById('addCardBtn');
    const addCardForm = document.getElementById('addCardForm');
    const newCardForm = document.getElementById('newCardForm');
    const cancelAddCard = document.getElementById('cancelAddCard');
    const cardsList = document.getElementById('cardsList');

    let cards = [];

    addCardBtn.addEventListener('click', function() {
        addCardForm.classList.remove('hidden');
    });

    cancelAddCard.addEventListener('click', function() {
        addCardForm.classList.add('hidden');
        newCardForm.reset();
    });

    newCardForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newCard = {
            id: Date.now(),
            cardholderName: document.getElementById('cardholderName').value,
            cardNumber: document.getElementById('cardNumber').value,
            expirationDate: document.getElementById('expirationDate').value,
            cvv: document.getElementById('cvv').value,
            cardLimit: document.getElementById('cardLimit').value
        };
        cards.push(newCard);
        renderCards();
        addCardForm.classList.add('hidden');
        newCardForm.reset();
    });

    function renderCards() {
        cardsList.innerHTML = '';
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <h3>${card.cardholderName}</h3>
                <p>Card Number: **** **** **** ${card.cardNumber.slice(-4)}</p>
                <p>Expiration: ${card.expirationDate}</p>
                <p>Card Limit: $${card.cardLimit}</p>
                <div class="card-actions">
                    <button onclick="editCard(${card.id})" class="btn-secondary">Edit</button>
                    <button onclick="deleteCard(${card.id})" class="btn-secondary">Delete</button>
                </div>
            `;
            cardsList.appendChild(cardElement);
        });
    }

    window.editCard = function(id) {
        // Implement edit functionality
        console.log('Edit card', id);
    };

    window.deleteCard = function(id) {
        cards = cards.filter(card => card.id !== id);
        renderCards();
    };
});
