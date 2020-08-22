"use strict";

var $window = $(window),
    $document = $(document),
    $wrapper = $(".wrapper"),
    breakpoint = 600;
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
  // запоминаем скролл по вертикали для будущих сравнений, в замыкании для обработчиков
  var scrollTop = $document.scrollTop();
  $document.scroll(function () {
    var windowWidth = $window.width(); // обрабатываем открытие/скрытие меню, только если ширина экрана больше брейкпоинта

    if ($window.width() >= breakpoint) {
      var isActive = $wrapper.hasClass("active");
      var newScrollTop = $document.scrollTop(); // если меню активно и скролл вверх

      if (isActive && newScrollTop < scrollTop) {
        $wrapper.removeClass("active");
      } // если меню неактивно и скролл вниз


      if (!isActive && newScrollTop > scrollTop) {
        $wrapper.addClass("active");
      } // запоминаем текущий скролл для будущих сравнений


      scrollTop = newScrollTop;
    }
  });
}

function browserResize() {
  // переменная в замыкании, используется (разделена) всеми обработчиками события ресайза
  var wasActive;
  $window.resize(function (e) {
    // активно ли меню на момент ресайза
    var isActive = $wrapper.hasClass("active"); // текущая ширина экрана

    var windowWidth = $window.width();

    if (isActive) {
      // если меню активно и ширина меньше брейкпоинта
      if (windowWidth < breakpoint) {
        // то скрываем меню и запоминаем, что оно было активно
        $wrapper.removeClass("active");
        wasActive = true;
      }
    } else {
      // если меню скрыто, ширина больше брейкпоинта и до того как ширина стала меньше брейкпоинта меню было активно
      if (windowWidth >= breakpoint && wasActive) {
        // то делаем меню активно, и обнуляем "было ли оно активно", чтобы не влиять на него увеличении ширины
        $wrapper.addClass("active");
        wasActive = false;
      }
    }
  });
}