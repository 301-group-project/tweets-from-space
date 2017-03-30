'use strict';
// this is an event on the submit//
$('#searchText').on('submit', function(event) {
  event.preventDefault();
  tweets.getTweets($('#namename').val());
  mapController.render();
  $('#namename').hide();
});

//this is an event on a click//
$('#newSearch').on('click', function(event) {
  event.preventDefault();
  $('#namename').fadeIn();
});