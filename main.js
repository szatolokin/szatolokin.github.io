"use strict";

$(document).ready(function () {
  let
    isActive = false;

  $(".block").css("user-select", "none");
  $(".block").text("");

  $(".block").click(function () {
    if (isActive) {
      $(this).css("background-color", "");
      $("[type=\"checkbox\"]").removeAttr("checked");
    } else {
      $(this).css("background-color", "lightgreen");
      $("[type=\"checkbox\"]").attr("checked", "checked");
    }

    isActive = !isActive;
  });

  $(".block").on("transitionend", function (event) {
    console.log(event.originalEvent.propertyName);
  });
});