"use strict";

$(document).ready(function () {
  tabs();
  sticky();
});

function tabs() {
  var activeTabNum = 1;
  $(".main-tabs-panel-item").click(function (e) {
    var clickTabNum = $(this).attr("data-tab"),
        tabWidth = $(".main-tabs-blocks-wrapper-item").width() + 50;

    if (clickTabNum !== activeTabNum) {
      $(".main-tabs-panel-item.active").removeClass("active");
      activeTabNum = clickTabNum;
      $(".main-tabs-panel-item[data-tab=\"".concat(activeTabNum, "\"]")).addClass("active");
      console.log(tabWidth);
      var newTranslateX = -tabWidth * (activeTabNum - 1);
      $(".main-tabs-blocks-wrapper").css("transform", "translateX(".concat(newTranslateX + "px", ")"));
    }
  });
}

function sticky() {
  var sticky = new Sticky('.main-block2-sticky');
}