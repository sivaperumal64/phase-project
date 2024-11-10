document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const alphabetFilter = document.querySelector('.alphabet-filter');
    const termsContainer = document.getElementById('terms-container');

    // Sample dictionary data (you would typically load this from a server)
    const dictionary = [
        { term: 'Accounts Payable', definition: 'Money owed by a business to its suppliers shown as a liability on a company\'s balance sheet.' },
        { term: 'Balance Sheet', definition: 'A financial statement that reports a company\'s assets, liabilities, and shareholders\' equity at a specific point in time.' },
        { term: 'Cash Flow', definition: 'The net amount of cash and cash-equivalents being transferred into and out of a business.' },
        // Add more terms and definitions here
    ];

    // Populate alphabet filter
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('letter-btn');
        button.dataset.letter = letter;
        alphabetFilter.appendChild(button);
    });

    // Display all terms initially
    displayTerms(dictionary);

    // Search functionality
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Alphabet filter functionality
    alphabetFilter.addEventListener('click', function(e) {
        if (e.target.classList.contains('letter-btn')) {
            const letter = e.target.dataset.letter;
            const filteredTerms = letter === 'all' 
                ? dictionary 
                : dictionary.filter(item => item.term.charAt(0).toUpperCase() === letter);
            displayTerms(filteredTerms);

            // Update active button
            document.querySelectorAll('.letter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredTerms = dictionary.filter(item => 
            item.term.toLowerCase().includes(searchTerm) || 
            item.definition.toLowerCase().includes(searchTerm)
        );
        displayTerms(filteredTerms);
    }

    function displayTerms(terms) {
        termsContainer.innerHTML = '';
        terms.forEach(item => {
            const termElement = document.createElement('div');
            termElement.classList.add('term');
            termElement.innerHTML = `
                <h2>${item.term}</h2>
                <p>${item.definition}</p>
            `;
            termsContainer.appendChild(termElement);
        });
    }
});
