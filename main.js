"use strict";

window.onload = function () {
  sticker(".sticker", ".cards", ".tabs");
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