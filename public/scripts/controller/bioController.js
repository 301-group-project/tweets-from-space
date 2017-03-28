'use strict';

(function(module) {
  const bioController = {};

  bioController.render = function() {
    $('#form', '#home').hide();
    $('#about').fadeIn();
  }
  
  module.bioController = bioController;
})(window);