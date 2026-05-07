const rawFlights = [
    "London-Paris:150",
    "New York-Tokyo:invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95"
];

function cleanFlightData(flights) {
    let flightObjects = [];

    for (let i = 0; i < flights.length; i++) {
        let parts = flights[i].split(":");
        let route = parts[0];
        let rawPrice = parts[1];

        let cities = route.split("-");
        let from = cities[0];
        let to = cities[1];

        let price = Number(rawPrice);

        if (isNaN(price)) {
            price = 0;
        }

        flightObjects.push({
            from: from,
            to: to,
            price: price
        });
    }

    let finalFlights = flightObjects
        .filter(flight => flight.price >= 100 && flight.price <= 500)
        .sort((a, b) => a.price - b.price);

    return JSON.stringify(finalFlights);
}

console.log(cleanFlightData(rawFlights));