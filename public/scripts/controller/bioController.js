'use strict'

(function(module) {
  const bioController = {};

  bioController.render = function() {
    $('#map, #home').hide();
    $('#bio').fadeIn();
  }
  
  module.bioController = bioController;
})(window);