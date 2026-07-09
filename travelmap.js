// 18° N latitude and 77° W longitude
var coordinates = [18.109581, -77.297508];
var popupcode = `<center>
<h3>Wagwan from Jamaica!</h3>
<iframe width="350" height="100" src="https://www.youtube.com/embed/ZRLLhoNmfMk?si=VzHjuwv6ZDsqv_xX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>`;
var marker1 = [18.41676, -77.13992];
var markercode = `<center>
<h3>The World Famous Dunn's River Falls</h3>
<a href="travel.png">
<img src="travel.png" title="The World Famous Dunn's River Falls" height="100" width="200"
</center>`
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.circle(coordinates, {"title": "Wagwan from Jamaica!",
                      color: "black",
                      fillColor: "#8cd9fa",
                      radius: 90}).bindPopup(popupcode).addTo(map);
L.marker(marker1).bindPopup(markercode).addTo(map);
