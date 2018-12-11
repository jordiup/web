function initMap() {
                        var myLatLng = {lat: -32.0121014, lng: 115.9645378};

                        var map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 8,
                            center: myLatLng,
                            gestureHandling: "cooperative",
                            streetViewControl: false,
                            mapTypeControl: false,
                        });

                        var myLatLng0 = {lat: -32.0121014, lng: 115.9645378};
                        var icon0 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 2.323,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker0 = new google.maps.Marker({
                                icon: icon0,
                                position: myLatLng0,
                                map: map,
                                title: "6107, Australia"
                            });
                        var string0 = '<div id="google-popup">'+
                            '<p><b>6.5%</b> <br/> 6107, Australia </p>'+
                            '</div>';
                        var infowindow0 = new google.maps.InfoWindow({
                            content: string0
                            });
                        marker0.addListener('click', function() {
                                infowindow0.open(map, marker0);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow0.close();
                            });
                        var myLatLng1 = {lat: -31.9525739, lng: 115.8610488};
                        var icon1 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 2.2182,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker1 = new google.maps.Marker({
                                icon: icon1,
                                position: myLatLng1,
                                map: map,
                                title: "6000, Australia"
                            });
                        var string1 = '<div id="google-popup">'+
                            '<p><b>6.1%</b> <br/> 6000, Australia </p>'+
                            '</div>';
                        var infowindow1 = new google.maps.InfoWindow({
                            content: string1
                            });
                        marker1.addListener('click', function() {
                                infowindow1.open(map, marker1);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow1.close();
                            });
                        var myLatLng2 = {lat: -32.1670352, lng: 116.005922};
                        var icon2 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 1.7204000000000002,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker2 = new google.maps.Marker({
                                icon: icon2,
                                position: myLatLng2,
                                map: map,
                                title: "6112, Australia"
                            });
                        var string2 = '<div id="google-popup">'+
                            '<p><b>4.2%</b> <br/> 6112, Australia </p>'+
                            '</div>';
                        var infowindow2 = new google.maps.InfoWindow({
                            content: string2
                            });
                        marker2.addListener('click', function() {
                                infowindow2.open(map, marker2);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow2.close();
                            });
                        var myLatLng3 = {lat: -31.938255, lng: 115.9024493};
                        var icon3 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 1.7204000000000002,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker3 = new google.maps.Marker({
                                icon: icon3,
                                position: myLatLng3,
                                map: map,
                                title: "6051, Australia"
                            });
                        var string3 = '<div id="google-popup">'+
                            '<p><b>4.2%</b> <br/> 6051, Australia </p>'+
                            '</div>';
                        var infowindow3 = new google.maps.InfoWindow({
                            content: string3
                            });
                        marker3.addListener('click', function() {
                                infowindow3.open(map, marker3);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow3.close();
                            });
                        var myLatLng4 = {lat: -31.9660425, lng: 115.8965353};
                        var icon4 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 1.7204000000000002,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker4 = new google.maps.Marker({
                                icon: icon4,
                                position: myLatLng4,
                                map: map,
                                title: "6100, Australia"
                            });
                        var string4 = '<div id="google-popup">'+
                            '<p><b>4.2%</b> <br/> 6100, Australia </p>'+
                            '</div>';
                        var infowindow4 = new google.maps.InfoWindow({
                            content: string4
                            });
                        marker4.addListener('click', function() {
                                infowindow4.open(map, marker4);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow4.close();
                            });
                        var myLatLng5 = {lat: -31.9540106, lng: 115.8787926};
                        var icon5 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 1.5108000000000001,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker5 = new google.maps.Marker({
                                icon: icon5,
                                position: myLatLng5,
                                map: map,
                                title: "6004, Australia"
                            });
                        var string5 = '<div id="google-popup">'+
                            '<p><b>3.4%</b> <br/> 6004, Australia </p>'+
                            '</div>';
                        var infowindow5 = new google.maps.InfoWindow({
                            content: string5
                            });
                        marker5.addListener('click', function() {
                                infowindow5.open(map, marker5);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow5.close();
                            });
                        var myLatLng6 = {lat: -31.9577214, lng: 115.8373885};
                        var icon6 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 1.3274,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker6 = new google.maps.Marker({
                                icon: icon6,
                                position: myLatLng6,
                                map: map,
                                title: "6005, Australia"
                            });
                        var string6 = '<div id="google-popup">'+
                            '<p><b>2.7%</b> <br/> 6005, Australia </p>'+
                            '</div>';
                        var infowindow6 = new google.maps.InfoWindow({
                            content: string6
                            });
                        marker6.addListener('click', function() {
                                infowindow6.open(map, marker6);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow6.close();
                            });
                        var myLatLng7 = {lat: -32.0819784, lng: 115.91132};
                        var icon7 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 1.3274,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker7 = new google.maps.Marker({
                                icon: icon7,
                                position: myLatLng7,
                                map: map,
                                title: "6155, Australia"
                            });
                        var string7 = '<div id="google-popup">'+
                            '<p><b>2.7%</b> <br/> 6155, Australia </p>'+
                            '</div>';
                        var infowindow7 = new google.maps.InfoWindow({
                            content: string7
                            });
                        marker7.addListener('click', function() {
                                infowindow7.open(map, marker7);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow7.close();
                            });
                        var myLatLng8 = {lat: -31.763241, lng: 115.816684};
                        var icon8 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 1.3274,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker8 = new google.maps.Marker({
                                icon: icon8,
                                position: myLatLng8,
                                map: map,
                                title: "6065, Australia"
                            });
                        var string8 = '<div id="google-popup">'+
                            '<p><b>2.7%</b> <br/> 6065, Australia </p>'+
                            '</div>';
                        var infowindow8 = new google.maps.InfoWindow({
                            content: string8
                            });
                        marker8.addListener('click', function() {
                                infowindow8.open(map, marker8);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow8.close();
                            });
                        var myLatLng9 = {lat: -31.8682916, lng: 115.8462613};
                        var icon9 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 1.2226,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker9 = new google.maps.Marker({
                                icon: icon9,
                                position: myLatLng9,
                                map: map,
                                title: "6061, Australia"
                            });
                        var string9 = '<div id="google-popup">'+
                            '<p><b>2.3%</b> <br/> 6061, Australia </p>'+
                            '</div>';
                        var infowindow9 = new google.maps.InfoWindow({
                            content: string9
                            });
                        marker9.addListener('click', function() {
                                infowindow9.open(map, marker9);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow9.close();
                            });
                        var myLatLng10 = {lat: -31.9001174, lng: 115.8462613};
                        var icon10 = {
							path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
							scale: 1.2226,
							anchor: new google.maps.Point(11, 22),
							fillOpacity: 0.8,
							fillColor: '#f14900',
							strokeOpacity: 0
                        };
                        
                            var marker10 = new google.maps.Marker({
                                icon: icon10,
                                position: myLatLng10,
                                map: map,
                                title: "6060, Australia"
                            });
                        var string10 = '<div id="google-popup">'+
                            '<p><b>2.3%</b> <br/> 6060, Australia </p>'+
                            '</div>';
                        var infowindow10 = new google.maps.InfoWindow({
                            content: string10
                            });
                        marker10.addListener('click', function() {
                                infowindow10.open(map, marker10);
                            });
                        google.maps.event.addListener(map, "click", function(event) {
                                     infowindow10.close();
                            });
                        }