# Ayman sitt API prosjekt
## Dette er en brukerveiledning for skoleoppgave i Utvikling. 
 # Dokumentasjon - Valutta Kalkulator
 ## Hva jeg har laget
### Jeg har laget en valuta-kalkulator på nett som lar brukeren konvertere mellom USD, NOK og EUR. Brukeren skriver inn et beløp, velger valutaen de vil konvertere fra og til, og klikker på knappen for å se resultatet. Kalkulatoren henter oppdaterte valutakurser fra ExchangeRate API.
## Hvordan det fungerer
### Brukeren skriver inn et beløp og velger valutaer.
### JavaScript (script.js) sender en forespørsel til API-et og henter siste valutakurser.
### Resultatet regnes ut (beløp × kurs) og vises på skjermen med to desimaler.
### Feil håndteres med en enkel melding i konsollen.
## Designvalg og farger
### Bakgrunn: lilla (#7367f0) – gir et moderne og tydelig kontrastfullt utseende.
## Kalkulator-boks: hvit med rundede hjørner og skygge – gjør designet rent og oversiktlig.
### Knapp: lilla med hover-effekt – tydelig handling for brukeren.
### Input-felter og dropdowns: enkle, med fokus-effekt for bedre brukervennlighet.
## Dette er PY koden min

```js 
import requests, json 


url = "https://v6.exchangerate-api.com/v6/ffce7ebd6732ba3cc33e62eb/latest/USD" 


response = requests.get(url) 

data = response.json() 

print (data)
```

## Her er min JavaScript 

```js
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

```
## Her er min Style.css
```js
* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    margin: 0;
    height: 100vh;
    background: #7367f0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: white;
    width: 380px;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
    margin-bottom: 25px;
}

label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 600;
}

input,
select {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
}

input:focus,
select:focus {
    border-color: #7367f0;
}

button {
    width: 100%;
    margin-top: 25px;
    padding: 14px;
    font-size: 16px;
    background: #7367f0;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #5e50ee;
}

#result {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
}
```
## Her er min Index.html
```js
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valuta Kalkulator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>Valuta kalkulator</h1>

    <div class="field">
        <label for="amount">Skriv inn beløp</label>
        <input type="number" id="amount" value="1" min="0">
    </div>

    <div class="currency-row">
        <div class="field">
            <label for="fromCurrency">Fra</label>
            <select id="fromCurrency">
                <option value="USD">US Dollar (USD)</option>
                <option value="NOK">Norske kroner (NOK)</option>
                <option value="EUR">Euro (EUR)</option>
            </select>
        </div>

        <div class="swap">↔</div>

        <div class="field">
            <label for="toCurrency">Til</label>
            <select id="toCurrency">
                <option value="NOK">Norske kroner (NOK)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
            </select>
        </div>
    </div>

    <p id="result">Resultatet vises her</p>

    <button id="convertBtn">Hent valutakurs</button>
</div>

<script src="script.js"></script>
</body>
</html>
```


