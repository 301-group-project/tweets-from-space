'use strict';

(function(module) {
  const mapController = {};

  mapController.render = function() {
    $('#about', '#home').hide();
    $('#form').fadeIn();
    // callback=initMap
    console.log(tweets.filteredTweets)
    mapTweets.initMap();
    google.maps.event.trigger(map, 'resize');
  }

  module.mapController = mapController;
})(window);


