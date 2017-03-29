'use strict';

$('#searchText').on('submit', function(event) {
  event.preventDefault();
  mapController.render();
});