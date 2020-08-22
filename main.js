"use strict";

const
  $window = $(window),
  $document = $(document),
  $wrapper = $(".wrapper");

let
  breakpoint;

$document.ready(function () {
  init();

  breakpoint = +prompt("breakpoint", "700");

  docMouseClick();

  topMenu();

  browserResize();
});

function init() {
  console.log("start");

  $(".pets").css("background-color", "lightblue");
}

function docMouseClick() {
  let clickCount = 0;

  $(".pets").click(e => {
    console.clear();

    console.log(".pets");
    console.log("page:", e.pageX, e.pageY);
    console.log("screen:", e.screenX, e.screenY);
    console.log("offset:", e.offsetX, e.offsetY);
    console.log("client:", e.clientX, e.clientY);

    if ((clickCount++ % 3) === 0) {
      let message = "";
      message += "pets\n";
      message += `page: ${e.pageX} ${e.pageY}\n`;
      message += `screen: ${e.screenX} ${e.screenY}\n`;
      message += `offset: ${e.offsetX} ${e.offsetY}\n`;
      message += `client: ${e.clientX} ${e.clientY}\n`;

      alert(message);
    }

    e.stopPropagation();
  });

  $document.click(e => {
    console.clear();

    console.log("#document");
    console.log("page:", e.pageX, e.pageY);
    console.log("screen:", e.screenX, e.screenY);
    console.log("offset:", e.offsetX, e.offsetY);
    console.log("client:", e.clientX, e.clientY);

    if ((clickCount++ % 3) === 0) {
      let message = "";
      message += "#document\n";
      message += `page: ${e.pageX} ${e.pageY}\n`;
      message += `screen: ${e.screenX} ${e.screenY}\n`;
      message += `offset: ${e.offsetX} ${e.offsetY}\n`;
      message += `client: ${e.clientX} ${e.clientY}\n`;

      alert(message);
    }
  });
}

function topMenu() {
  let scrollTop = $document.scrollTop();

  $document.scroll(() => {
    if ($window.width() >= breakpoint) {
      console.clear();

      let newScrollTop = $document.scrollTop();
      if (newScrollTop >= scrollTop) {
        if (!$wrapper.hasClass("active")) {
          $wrapper.addClass("active");
        }
      } else {
        $wrapper.removeClass("active");
      }

      scrollTop = newScrollTop;
    }
  });
}

function browserResize() {
  let
    wasActive;

  $window.resize(e => {
    console.clear();

    const curWindowWidth = $window.width();
    console.log(curWindowWidth, breakpoint);

    const isActive = $wrapper.hasClass("active");

    if (isActive) {
      if ($window.width() < breakpoint) {
        $wrapper.removeClass("active");
        wasActive = true;
      }
    } else {
      if ($window.width() >= breakpoint && wasActive) {
        $wrapper.addClass("active");
        wasActive = false;
      }
    }
  });
}