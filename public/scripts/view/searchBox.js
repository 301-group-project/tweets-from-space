'use strict';
// this is an event on the submit//
$('#searchText').on('submit', function(event) {
  event.preventDefault();
  tweets.getTweets($('#formInput').val());
  mapController.render();
  $('#formInput').hide();
});
// Commenting your code is good but you can usually trust yourself and other
// devs to know that .on('click') is referring to a click event.
//this is an event on a click//
$('#newSearch').on('click', function(event) {
  event.preventDefault();
  $('#formInput').val('');
  $('#formInput', '#form').fadeIn();
});