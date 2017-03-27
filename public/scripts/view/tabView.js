'use strict';
var articleView = {}

articleView.handleMainNav = function() {
  console.log('tabview');
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};


articleView.handleMainNav();
