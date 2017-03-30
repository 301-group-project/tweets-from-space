'use strict';

(function(module) {
  const mapController = {};

  mapController.render = function() {
    $('#about', '#home').hide();
    $('#form', '#map').fadeIn();
    google.maps.event.trigger(map, 'resize');
  }

  module.mapController = mapController;
})(window);


