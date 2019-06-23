var map = L.map('map').fitWorld();
var OpenStreetMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18,
    layers: [OpenStreetMap]
});
OpenStreetMap.addTo(map);
var objetos 
//tener instalado plugin de chrome cors 
$.getJSON( "http://192.168.100.22:8000/contacts", function( data ) {
    objetos= data
    for(a in objetos){
        L.marker([objetos[a].latitud,objetos[a].longitud]).bindPopup(objetos[a].nombre).addTo(map);
    }
});

