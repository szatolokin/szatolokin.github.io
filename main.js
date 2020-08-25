"use strict";

window.onload = function () {
  sticker(".sticker", ".cards", ".tabs");

  tabs(".tabs-panel-item", ".tabs-content");

  form(".form-block-input input");
};

function sticker(stickerSelector, startSelector, endSelector) {
  const
    sticker = $(stickerSelector),
    pos = sticker.position().top,
    height = sticker.height(),
    start = $(startSelector),
    end = $(endSelector);

  let
    stickyNow = false;

  $(window).scroll(function () {
    const
      startY = start.offset().top,
      endY = end.offset().top - (pos * 2) - height,
      scrollY = $(window).scrollTop();

    if (scrollY > startY && scrollY < endY) {
      sticker.offset({ top: scrollY + pos });

      sticker.removeClass("non-active");

      stickyNow = true;
    } else if (stickyNow) {
      if (scrollY <= startY) {
        sticker.offset({ top: startY + pos });
      } else {
        sticker.offset({ top: endY + pos });

        sticker.addClass("non-active");
      }

      stickyNow = false;
    }
  });
}

function tabs(tabsSelector, contentSelector) {
  const
    slider = new Swiper(contentSelector, { allowTouchMove: false });

  $(tabsSelector).click(function () {
    if (!$(this).hasClass("active")) {
      $(tabsSelector + ".active").removeClass("active");
      $(this).addClass("active");

      slider.slideTo($(this).data().index - 1);
    }
  });
}

function form(inputSelector) {
  const
    input = $(inputSelector);

  input.inputmask({"mask": "+7 (999) 999-9999"});
}