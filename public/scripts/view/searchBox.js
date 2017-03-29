'use strict';

$('#searchText').on('submit', function(event) {
  event.preventDefault();
  tweets.getTweets($('#namename').val());
  mapController.render();
});