'use strict';

(function(module) {
  const mapController = {};

  mapController.render = function() {
    $('#about', '#home').hide();
    $('#form').fadeIn();
    google.maps.event.trigger(map, 'resize');
  }

  module.mapController = mapController;
})(window);


