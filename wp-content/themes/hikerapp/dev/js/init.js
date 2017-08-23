
// (function($){
// 	$(function(){

// 		$('.button-collapse').sideNav();

// 	}); // end of document ready

// 	var homeOptions = [
// 		{
// 			selector: '.about-home', 
// 			offset: 100, 
// 			callback: function(el) {
// 				$(".about-home .animated").addClass("fadeInDown");
// 			}
// 		},
// 		{
// 			// eastlake background
// 			selector: '.about-home',
// 			offset: 500,
// 			callback: function(el) {
// 				$(".eastlake-background .animated").addClass("fadeInDown");
// 			} 
// 		},
// 		{
// 			// a place to gather
// 			selector: '.about-home',
// 			offset: 900,
// 			callback: function(el) {
// 				$(".place-to-gather .animated").addClass("fadeInDown");
// 			} 
// 		},
// 		{
// 			// CTA
// 			selector: '.about-home',
// 			offset: 1400,
// 			callback: function(el) {
// 				$(".cta-home .animated").addClass("fadeInDown");
// 			} 
// 		}
// 	];

// 	var aboutOptions = [
// 		{
// 			selector: '.about-building', 
// 			offset: 100, 
// 			callback: function(el) {
// 				$(".about-building .animated").addClass("fadeInDown");
// 			}
// 		},
// 		{
// 			// eastlake background
// 			selector: '.about-building',
// 			offset: 500,
// 			callback: function(el) {
// 				$(".eastlake-background .animated").addClass("fadeInDown");
// 			} 
// 		},
// 		{
// 			// a place to gather
// 			selector: '.about-building',
// 			offset: 900,
// 			callback: function(el) {
// 				$(".place-to-gather .animated").addClass("fadeInDown");
// 			} 
// 		},
// 		// {
// 		// 	// CTA
// 		// 	selector: '.about-building',
// 		// 	offset: 1400,
// 		// 	callback: function(el) {
// 		// 		$(".cta-building .animated").addClass("fadeInDown");
// 		// 	} 
// 		// }
// 	];

// 	Materialize.scrollFire(homeOptions);

// 	Materialize.scrollFire(aboutOptions);

	
	

	

// })(jQuery); // end of jQuery name space

// function initMap() {
// 	var eastlake = {lat: 47.6403725, lng: -122.32494930000001};
// 	var map = new google.maps.Map(document.getElementById('map'), {
// 		zoom: 14,
// 		center: eastlake,
// 		scrollwheel: false,
// 		mapTypeControl: false,
// 		streetViewControl: false,
// 		fullscreenControl: false,

// 		styles: [
// 			{
// 			"elementType": "geometry",
// 			"stylers": [
// 				{
// 				"color": "#f5f5f5"
// 				}
// 			]
// 			},
// 			{
// 			"elementType": "labels.icon",
// 			"stylers": [
// 				{
// 				"visibility": "off"
// 				}
// 			]
// 			},
// 			{
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 				{
// 				"color": "#616161"
// 				}
// 			]
// 			},
// 			{
// 			"elementType": "labels.text.stroke",
// 			"stylers": [
// 				{
// 				"color": "#f5f5f5"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "administrative.land_parcel",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 				{
// 				"color": "#bdbdbd"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "poi",
// 			"elementType": "geometry",
// 			"stylers": [
// 				{
// 				"color": "#eeeeee"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "poi",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 				{
// 				"color": "#757575"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "poi.park",
// 			"elementType": "geometry",
// 			"stylers": [
// 				{
// 				"color": "#e5e5e5"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "poi.park",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 				{
// 				"color": "#9e9e9e"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "road",
// 			"elementType": "geometry",
// 			"stylers": [
// 				{
// 				"color": "#ffffff"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "road.arterial",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 				{
// 				"color": "#757575"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "road.highway",
// 			"elementType": "geometry",
// 			"stylers": [
// 				{
// 				"color": "#dadada"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "road.highway",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 				{
// 				"color": "#616161"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "road.local",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 				{
// 				"color": "#9e9e9e"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "transit.line",
// 			"elementType": "geometry",
// 			"stylers": [
// 				{
// 				"color": "#e5e5e5"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "transit.station",
// 			"elementType": "geometry",
// 			"stylers": [
// 				{
// 				"color": "#eeeeee"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "water",
// 			"elementType": "geometry",
// 			"stylers": [
// 				{
// 				"color": "#c9c9c9"
// 				}
// 			]
// 			},
// 			{
// 			"featureType": "water",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 				{
// 				"color": "#9e9e9e"
// 				}
// 			]
// 			}
// 		]
// 	});
// }