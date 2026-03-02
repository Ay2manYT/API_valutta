# Ayman sitt API prosjekt
## Dette er en brukerveiledning for skoleoppgave i Utvikling. 
## Dette er PY koden for API:

```js
import requests, json 
url = "https://v6.exchangerate-api.com/v6/ffce7ebd6732ba3cc33e62eb/latest/USD" 

response = requests.get(url) 

data = response.json() 
print (data)
```
