class CurrencyExchange {
    constructor() {
        this.apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
        this.apiUrl = 'https://v6.exchangerate-api.com/v6/';
        this.currencies = [];
        this.exchangeRates = {};

        this.fromCurrency = document.getElementById('fromCurrency');
        this.toCurrency = document.getElementById('toCurrency');
        this.fromAmount = document.getElementById('fromAmount');
        this.toAmount = document.getElementById('toAmount');
        this.swapButton = document.getElementById('swapButton');
        this.exchangeButton = document.getElementById('exchangeButton');
        this.exchangeRateInfo = document.getElementById('exchangeRate');
        this.lastUpdatedInfo = document.getElementById('lastUpdated');

        this.init();
    }

    async init() {
        try {
            await this.fetchCurrencies();
            this.populateCurrencyDropdowns();
            this.addEventListeners();
            await this.updateExchangeRate();
        } catch (error) {
            this.showError('Failed to initialize the exchange. Please try again later.');
        }
    }

    async fetchCurrencies() {
        const response = await fetch(`${this.apiUrl}${this.apiKey}/codes`);
        const data = await response.json();
        if (data.result === 'success') {
            this.currencies = data.supported_codes;
        } else {
            throw new Error('Failed to fetch currencies');
        }
    }

    populateCurrencyDropdowns() {
        this.currencies.forEach(([code, name]) => {
            this.fromCurrency.add(new Option(`${code} - ${name}`, code));
            this.toCurrency.add(new Option(`${code} - ${name}`, code));
        });
        this.fromCurrency.value = 'USD';
        this.toCurrency.value = 'EUR';
    }

    addEventListeners() {
        this.fromCurrency.addEventListener('change', () => this.updateExchangeRate());
        this.toCurrency.addEventListener('change', () => this.updateExchangeRate());
        this.fromAmount.addEventListener('input', () => this.updateToAmount());
        this.swapButton.addEventListener('click', () => this.swapCurrencies());
        this.exchangeButton.addEventListener('click', () => this.performExchange());
    }

    async updateExchangeRate() {
        const fromCurrency = this.fromCurrency.value;
        const toCurrency = this.toCurrency.value;

        try {
            const response = await fetch(`${this.apiUrl}${this.apiKey}/latest/${fromCurrency}`);
            const data = await response.json();
            if (data.result === 'success') {
                this.exchangeRates = data.conversion_rates;
                const rate = this.exchangeRates[toCurrency];
                this.exchangeRateInfo.textContent = `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
                this.lastUpdatedInfo.textContent = new Date().toLocaleString();
                this.updateToAmount();
            } else {
                throw new Error('Failed to fetch exchange rates');
            }
        } catch (error) {
            this.showError('Failed to update exchange rate. Please try again.');
        }
    }

    updateToAmount() {
        const fromAmount = parseFloat(this.fromAmount.value);
        const toRate = this.exchangeRates[this.toCurrency.value];
        this.toAmount.value = (fromAmount * toRate).toFixed(2);
    }

    swapCurrencies() {
        [this.fromCurrency.value, this.toCurrency.value] = [this.toCurrency.value, this.fromCurrency.value];
        this.updateExchangeRate();
    }

    performExchange() {
        const fromAmount = parseFloat(this.fromAmount.value);
        const fromCurrency = this.fromCurrency.value;
        const toAmount = parseFloat(this.toAmount.value);
        const toCurrency = this.toCurrency.value;

        alert(`Exchanged ${fromAmount} ${fromCurrency} to ${toAmount} ${toCurrency}`);
        // In a real application, you would send this data to your server to process the exchange
    }

    showError(message) {
        alert(message); // In a real application, you might want to use a more sophisticated error display method
    }
}

document.addEventListener('DOMContentLoaded', () => new CurrencyExchange());
