(function() {
	Qva.LoadScript("https://unpkg.com/leaflet@1.0.3/dist/leaflet.js", function() {
		Qva.AddExtension("LeafletJS", function() {
			Qva.LoadCSS("https://unpkg.com/leaflet@1.0.3/dist/leaflet.css");

			var _this = this;
			_this.Element.innerHTML = "";

			_this.Element.innerHTML += "<div id='mapMap' style='width: " + _this.GetWidth() + "px; height: " + _this.GetHeight() + "px;'></div>";
			
			var mymap = L.map('mapMap').setView([20, 10], 2);
			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
				maxZoom: 30,
				id: 'mapbox.streets'
			}).addTo(mymap);
			
			for (var i=0; i < this.Data.Rows.length; i++) {
				var name = _this.Data.Rows[i][0].text;
				var lng = parseFloat(_this.Data.Rows[i][1].text);
				var lat = parseFloat(_this.Data.Rows[i][2].text);
				var popn = _this.Data.Rows[i][3].text;
				
				L.marker([lng, lat], {title: name + "\r\nPopulation: " + popn}).addTo(mymap);
			}
			
		});
	});
}());