'use strict'

(function(module) {
  const homeController = {};

  homeController.render = function() {
    $('#about', '#search').hide();
    $('#home').fadeIn();
  }

  module.homeController = homeController;
})(window);