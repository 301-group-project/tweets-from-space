'use strict'

(function(module) {
  const mapController = {};

  mapController.render = function() {
    $('#bio', '#home').hide();
    $('#map').fadeIn();
  }

  module.mapController = mapController;
})(window);