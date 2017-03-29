'use strict';
(function(module) {

  const mapTweets = {};

  // var myLatLng = [{lat: 45.523846, lng: -122.680855},
  //     {lat: 45.523846, lng: -122.680855},
  //     {lat: 46.523846, lng: -127.680855},
  //     {lat: 44.523846, lng: -142.680855},
  //     {lat: 46.523846, lng: -162.680855},
  //     {lat: 42.523846, lng: -182.680855},
  //     {lat: 49.523846, lng: -192.680855},
  //     {lat: 48.523846, lng: -142.680855},
  //     {lat: 46.523846, lng: -162.680855},
  //     {lat: 45.523846, lng: -162.680855},
  //     {lat: 43.523846, lng: -182.680855},
  //     {lat: 45.523846, lng: -182.680855},
  //     {lat: 43.523846, lng: -182.680855},
  //     {lat: 43.523846, lng: -162.680855},
  //     {lat: 44.523846, lng: -132.680855},
  //     {lat: 48.523846, lng: -172.680855},
  //     {lat: 47.523846, lng: -152.680855},
  //     {lat: 45.523846, lng: -172.680855},
  //     {lat: 44.523846, lng: -152.680855},
  //     {lat: 42.523846, lng: -162.680855},
  // ];
  var map;

  mapTweets.initMap = function () {
    console.log(tweets.filteredTweets);
    
    var LatLng = new google.maps.LatLng(45.523846, -122.680855); 
    var myOptions = { 
      center: LatLng,
      zoom: 13,
      //this is how we do night view
      styles: [ 
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    };

    map = new google.maps.Map(document.getElementById('map'), myOptions);
    
    var contentString = '<div id="content">' +

        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the ' +
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
        'south west of the nearest large town, Alice Springs; 450&#160;km ' +
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        'Aboriginal people of the area. It has many springs, waterholes, ' +
        'rock caves and ancient paintings. Uluru is listed as a World ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        '(last visited June 22, 2009).</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    myLatLng.forEach(function(element) {
      makeMarker(element);
    });
    function makeMarker (obj) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(obj.lat, obj.lng),
        title: 'Code Fellows PDX!'
      });
      marker.setMap(map);
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }
  }

  module.mapTweets = mapTweets; 
})(window);


