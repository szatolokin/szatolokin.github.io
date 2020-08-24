"use strict";

$(document).ready(function () {
  tabs();

  sticky();
});

function tabs() {
  let
    activeTabNum = 1;

  $(".main-tabs-panel-item").click(function (e) {
    const
      clickTabNum = $(this).attr("data-tab"),
      tabWidth = $(".main-tabs-blocks-wrapper-item").width() + 50;

    if (clickTabNum !== activeTabNum) {
      $(".main-tabs-panel-item.active").removeClass("active");
      activeTabNum = clickTabNum;
      $(`.main-tabs-panel-item[data-tab="${activeTabNum}"]`).addClass("active");
      console.log(tabWidth);
      let newTranslateX = -tabWidth * (activeTabNum - 1);
      $(".main-tabs-blocks-wrapper").css("transform", `translateX(${newTranslateX + "px"})`);
    }
  });
}

function sticky() {
  const sticky = new Sticky('.main-block2-sticky');
}