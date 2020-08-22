"use strict";

var $window = $(window),
    $document = $(document),
    $wrapper = $(".wrapper");
$document.ready(function () {
  init();
  docMouseClick();
  topMenu();
  browserResize();
});

function init() {
  console.log("start");
  $(".pets").css("background-color", "lightblue");
}

function docMouseClick() {
  var clickCount = 0;
  $(".pets").click(function (e) {
    console.clear();
    console.log(".pets");
    console.log("page:", e.pageX, e.pageY);
    console.log("screen:", e.screenX, e.screenY);
    console.log("offset:", e.offsetX, e.offsetY);
    console.log("client:", e.clientX, e.clientY);

    if (clickCount++ % 3 === 0) {
      var message = "";
      message += "pets\n";
      message += "page: ".concat(e.pageX, " ").concat(e.pageY, "\n");
      message += "screen: ".concat(e.screenX, " ").concat(e.screenY, "\n");
      message += "offset: ".concat(e.offsetX, " ").concat(e.offsetY, "\n");
      message += "client: ".concat(e.clientX, " ").concat(e.clientY, "\n");
      alert(message);
    }

    e.stopPropagation();
  });
  $document.click(function (e) {
    console.clear();
    console.log("#document");
    console.log("page:", e.pageX, e.pageY);
    console.log("screen:", e.screenX, e.screenY);
    console.log("offset:", e.offsetX, e.offsetY);
    console.log("client:", e.clientX, e.clientY);

    if (clickCount++ % 3 === 0) {
      var message = "";
      message += "#document\n";
      message += "page: ".concat(e.pageX, " ").concat(e.pageY, "\n");
      message += "screen: ".concat(e.screenX, " ").concat(e.screenY, "\n");
      message += "offset: ".concat(e.offsetX, " ").concat(e.offsetY, "\n");
      message += "client: ".concat(e.clientX, " ").concat(e.clientY, "\n");
      alert(message);
    }
  });
}

function topMenu() {
  var scrollTop = $document.scrollTop();
  $document.scroll(function () {
    console.clear();
    var newScrollTop = $document.scrollTop();

    if (newScrollTop >= scrollTop) {
      if (!$wrapper.hasClass("active")) {
        $wrapper.addClass("active");
      }
    } else {
      $wrapper.removeClass("active");
    }

    scrollTop = newScrollTop;
  });
}

function browserResize() {
  var breakpoint = +prompt("breakpoint", "700");
  $window.resize(function (e) {
    console.clear();
    var curWindowWidth = $window.width();
    console.log(curWindowWidth);
    alert(curWindowWidth);
  });
}