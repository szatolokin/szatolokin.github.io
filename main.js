window.onload = function () {
  sticker(".cards-sticker", ".cards-inner-content", ".tabs", 35);

  tabs(".tabs-inner-panel-item", ".tabs-inner-content");

  form(".form-block-input input", ".form-block-submit");

  tooltips([".help"]);

  $(document.body).css("background-color", "black");
};

function sticker(stickerSelector, startSelector, endSelector, offset) {
  const
    sticker = $(stickerSelector),
    height = sticker.height(),
    start = $(startSelector),
    end = $(endSelector);

  let
    stickyNow = false;

  $(window).scroll(function () {
    const
      startY = start.offset().top - (height / 2 + 5.5) - offset,
      endY = end.offset().top - (offset * 2) - height,
      scrollY = $(window).scrollTop();

    if (stickyNow) {
      if (scrollY <= startY) {
        sticker.removeClass("fixed");
        stickyNow = false;
      } else if (scrollY >= endY) {
        sticker.addClass("non-active");
        stickyNow = false;
      }
    } else {
      if (scrollY > startY && scrollY < endY) {
        sticker.removeClass("non-active");
        sticker.addClass("fixed");
        stickyNow = true;
      }
    }
  });
}

function tabs(tabsSelector, contentSelector) {
  const
    slider = new Swiper(contentSelector, { allowTouchMove: false, autoHeight: true, updateOnWindowResize: true });

  $(tabsSelector).click(function () {
    if (!$(this).hasClass("active")) {
      $(tabsSelector + ".active").removeClass("active");
      $(this).addClass("active");

      slider.slideTo($(this).data().index - 1, 400);
    }
  });
}

function form(inputSelector, submitSelector) {
  const
    input = $(inputSelector),
    submit = $(submitSelector);

  input.inputmask({ "mask": "+7 (999) 999-9999" });

  submit.click(function (e) {
    if (!validate(input)) {
      input.removeClass("valid");
      input.addClass("not-valid");
      e.preventDefault();
      input.get(0).focus();
    }
  });

  input.focusout(function () {
    input.removeClass("valid");
    input.removeClass("not-valid");
  });

  input.focusin(function () {
    if (validate(input)) {
      input.addClass("valid");
      input.removeClass("not-valid");
    } else {
      input.removeClass("valid");
      input.addClass("not-valid");
    }
  });

  input.get(0).oninput = function () {
    if (validate(input)) {
      input.addClass("valid");
      input.removeClass("not-valid");
    } else {
      input.removeClass("valid");
      input.addClass("not-valid");
    }
  };

  function validate(input) {
    const
      value = input.val();
    return value && value.indexOf("_") === -1;
  }
}

function tooltips(tooltips) {
  for (let i = 0; i < tooltips.length; i++) {
    $(tooltips[i]).tooltipster({
      theme: ""
    });
  }
}