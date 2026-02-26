const apiKey = 'ffce7ebd6732ba3cc33e62eb';

document.getElementById("convertBtn").addEventListener("click", () => {
	const amount = document.getElementById("amount").value;
	const from = document.getElementById("fromCurrency").value;
	const to = document.getElementById("toCurrency").value;

	fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`)
		.then(res => res.json())
		.then(data => {
			const rate = data.conversion_rates[to];
			document.getElementById("result").textContent =
				amount + " " + from + " = " + (amount * rate).toFixed(2) + " " + to;
		})
		.catch(err => console.error(err));
});