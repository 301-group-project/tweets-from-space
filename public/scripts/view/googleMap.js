'use strict';
(function(module) {
  
  const mapTweets = {};

  var map;

  mapTweets.initMap = function () {
    // console.log(tweets.filteredTweets[0].location);
    
   
    var myOptions = { 
      center: {lat: 23.1136, lng: -82.3666},
      zoom: 3,
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

   
    tweets.filteredTweets.forEach(function(element) {
      console.log(element);
      makeMarker(element);
    });
    function makeMarker (tweet) {
      console.log(tweets.filteredTweets[0].location[0]);
      var lng = tweet.location[0];
      var lat = tweet.location[1];
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng({lat: lat, lng: lng}),
        title: 'Code Fellows PDX!'
      });
      marker.setMap(map);
      var contentString = 
        '<div id="content">' +
          `<h1 id="firstHeading" class="firstHeading"> ${tweet.userName}</h1>` +
          '<div id="bodyContent">' +
            `<p>${tweet.userName}</p>` +
            `<p>${tweet.content}</p>` +
            `<p>Location: ${tweet.location}, <img src="${tweet.photo}">` +
            `<p>${tweet.time}, ${tweet.hashtags}</p>` +
          '</div>' +
        '</div>';
         var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }
  }

  module.mapTweets = mapTweets; 
})(window);


