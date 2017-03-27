'use strict'

(function(module) {
  const aboutController = {};

  aboutController.render = function() {
    $('#search, #home').hide();
    $('#about').fadeIn();
  }
  
  module.aboutController = aboutController;
})(window);