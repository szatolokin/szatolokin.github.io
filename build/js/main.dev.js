"use strict";

$(document).ready(function () {
  slider();
});

function slider() {
  var mySwiper = new Swiper(".swiper-container", {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  });
  $(".swiper-container").hover(function () {});
}