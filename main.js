"use strict";

$(document).ready(function () {
  slider();

  menu();
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

function menu() {
  const
    button = ".menu-btn",
    drop = ".menu-drop",
    searchBtn = ".menu-drop-search-btn",
    shadow = ".shadow";

  let
    isActive = false;

  $(button).click(function () {
    if (isActive) {
      $(button).removeClass("active");
      $(drop).removeClass("active");
      $(shadow).removeClass("active");
      $(document.body).css({ overflow: "" });
    } else {
      $(button).addClass("active");
      $(drop).addClass("active");
      $(shadow).addClass("active");
      $(document.body).css({ overflow: "hidden" });
    }

    isActive = !isActive;
  });

  $(searchBtn).click(function (e) {
    e.preventDefault();
  });

  $(shadow).click(function () {
    if (isActive) {
      $(button).removeClass("active");
      $(drop).removeClass("active");
      $(shadow).removeClass("active");
      $(document.body).css({ overflow: "" });

      isActive = false;
    }
  });
}