const rates = {
    USD: 1,
    NOK: 10.5,
    EUR: 0.92
};

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");
const button = document.getElementById("convertBtn");

button.addEventListener("click", () => {
    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {
        result.textContent = "Skriv inn et gyldig beløp.";
        return;
    }

    const fromRate = rates[fromCurrency.value];
    const toRate = rates[toCurrency.value];

    const converted = (amount / fromRate) * toRate;

    result.textContent = `${amount} ${fromCurrency.value} = ${converted.toFixed(2)} ${toCurrency.value}`;
});