'use strict';

(function(module) {
  const mapController = {};

  mapController.render = function() {
    $('#about', '#home').hide();
    $('#form').fadeIn();
  }

  module.mapController = mapController;
})(window);