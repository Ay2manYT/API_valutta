import requests

while True:
    search = input("Skriv inn filmnavn (eller 'q' for å avslutte): ")

    if search.lower() == "q":
        print("Program avsluttes.")
        break

    url = f"http://www.omdbapi.com/?s={search}&apikey=478aee06"

    response = requests.get(url)
    print("Statuskode:", response.status_code)

    if response.status_code != 200:
        print("Klarte ikke å hente data\n")
        continue

    data = response.json()
    filmer = data.get("Search", [])

    if not filmer:
        print("Fant ingen filmer.\n")
        continue

    print("\nFilmer:\n")
    for film in filmer:
        print("-", film["Title"])
    print()