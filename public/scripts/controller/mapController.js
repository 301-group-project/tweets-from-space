'use strict'

(function(module) {
  const mapController = {};

  mapController.render = function() {
    $('#about', '#home').hide();
    $('#search').fadeIn();
  }

  module.mapController = mapController;
})(window);