"use strict";

$(document).ready(function () {
  slider();

  gallery();

  menu();
});

function slider() {

}

function gallery() {

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
      $(button).addClass("active");
      $(drop).addClass("active");
      $(shadow).addClass("active");
    } else {
      $(button).removeClass("active");
      $(drop).removeClass("active");
      $(shadow).removeClass("active");
    }

    isActive = !isActive;
  });

  $(searchBtn).click(function (e) {
    e.preventDefault();
  });
}