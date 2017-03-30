'use strict';
// this is an event on the submit//
$('#searchText').on('submit', function(event) {
  event.preventDefault();
  tweets.getTweets($('#formInput').val());
  mapController.render();
  $('#formInput').hide();
});

//this is an event on a click//
$('#newSearch').on('click', function(event) {
  event.preventDefault();
  $('#formInput').val('');
  $('#formInput', '#form').fadeIn();
});