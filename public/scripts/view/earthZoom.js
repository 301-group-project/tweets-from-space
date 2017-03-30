'use strict';

$(window).scroll(function () {
  document.querySelector('img').style.width = $(window).scrollTop() + 'px';
  document.querySelector('img').style.height = $(window).scrollTop() + 'px';
});