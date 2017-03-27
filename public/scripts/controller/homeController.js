'use strict'

(function(module) {
  const mapController = {};

  mapController.render = function() {
    $('#bio', '#map').hide();
    $('#home').fadeIn();
  }

  module.mapController = mapController;
})(window);