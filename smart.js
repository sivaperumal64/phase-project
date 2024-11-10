document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('policyForm');
    const result = document.getElementById('result');
    const summaryText = document.getElementById('summaryText');
    const premiumSpan = document.getElementById('premium');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const policyType = document.getElementById('policyType').value;
        const policyHolder = document.getElementById('policyHolder').value;
        const coverage = parseFloat(document.getElementById('coverage').value);
        const startDate = document.getElementById('startDate').value;
        const duration = parseInt(document.getElementById('duration').value);
        const naturalDisasters = document.getElementById('naturalDisasters').checked;
        const personalLiability = document.getElementById('personalLiability').checked;

        // Simple premium calculation (this should be much more complex in a real system)
        let premium = coverage * 0.05; // 5% of coverage amount as base premium

        if (naturalDisasters) premium *= 1.2; // 20% increase for natural disasters coverage
        if (personalLiability) premium *= 1.1; // 10% increase for personal liability coverage

        // Adjust premium based on policy type (simplified)
        switch(policyType) {
            case 'auto':
                premium *= 1.2;
                break;
            case 'home':
                premium *= 1.1;
                break;
            case 'life':
                premium *= 1.3;
                break;
        }

        // Generate summary
        const summary = `${policyHolder} has applied for a ${policyType} insurance policy with $${coverage.toLocaleString()} coverage, starting from ${startDate} for ${duration} months.`;

        // Display results
        summaryText.textContent = summary;
        premiumSpan.textContent = `$${premium.toFixed(2)}`;
        result.classList.remove('hidden');
    });
});
