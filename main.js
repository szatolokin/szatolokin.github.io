"use strict";

$(document).ready(function () {
  slider();

  gallery();
});

function slider() {
  const
    mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
}

function gallery() {
  let
    isActive = false;

  $(".block").click(function () {
    if (!isActive) {
      $(".gallery").fancybox({});
      isActive = true;

      $(this).css("background-color", "lightgreen");
    } else {
      isActive = false;

      $(this).css("background-color", "");
    }
  });

  $(".gallery").click(function (event) {
    if (!isActive) {
      event.preventDefault();
    }
  });
}