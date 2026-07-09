// 18° N latitude and 77° W longitude
var coordinates = [18, 77];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker(coordinates, {"title": "Wagwan from Jamaica!"}).bindPopup("<p>Wagwan from Jamaica!</p>").addTo(map);
