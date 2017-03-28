'use strict';

page('/about', bioController.render);
page('/', homeController.render);
page('/map', mapController.render);

page();