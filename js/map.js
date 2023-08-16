$(window).on("load", function(){
		//Open street  Map
        var coord = [52.615766, 38.608851]; // <--- координаты

		var map = L.map('map-canvas', { scrollWheelZoom:true}).setView(coord, 12);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 22,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		// пользовательская иконка
		var customIcon = L.icon({
		iconUrl: 'img/mapmarker.png',
		iconSize:     [64, 64], // размер иконки
		iconAnchor:   [32, 63] // точка иконки, которая будет соответствовать положению маркера
		});

		// объект маркера, передать пользовательскую иконку в качестве опции, добавить на карту
		var marker = L.marker(coord, {icon: customIcon}).addTo(map);
		});