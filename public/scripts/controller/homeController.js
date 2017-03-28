'use strict';

(function(module) {
  const homeController = {};

  homeController.render = function() {
    $('#about', '#form').hide();
    $('#home').fadeIn();
  }

  module.homeController = homeController;
})(window);