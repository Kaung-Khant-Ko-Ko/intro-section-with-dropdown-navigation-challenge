$(".navigation__dropdown").animate({ height: 0, padding: 0, opacity: 0 });
$(".navigation__dropdown--sidebar").animate({
  height: 0,
  padding: 0,
  opacity: 0,
});

$("#list__button--features").click(function () {
  if ($("#features__list").height() === 0) {
    $("#features__list").animate({ height: 130, padding: 20, opacity: 100 });
    $("#features__button").attr("src", "./images/icon-arrow-up.svg");
  } else {
    $("#features__list").animate({ height: 0, padding: 0, opacity: 0 });
    $("#features__button").attr("src", "./images/icon-arrow-down.svg");
  }
});

$("#list__button--company").click(function () {
  if ($("#company__list").height() === 0) {
    $("#company__list").animate({ height: 100, padding: 20, opacity: 100 });
    $("#company__button").attr("src", "./images/icon-arrow-up.svg");
  } else {
    $("#company__list").animate({ height: 0, padding: 0, opacity: 0 });
    $("#company__button").attr("src", "./images/icon-arrow-down.svg");
  }
});

$("#open-btn").click(function () {
  $("#open-btn").css("width", "0px");
  $("#sidebar").addClass("open-sidebar");
  $("#close-btn").css("rotate", "0deg");

  $("body").addClass("disable-scroll");
});

$("#close-btn").click(function () {
  $("#close-btn").css("rotate", "180deg");
  $("#sidebar").removeClass("open-sidebar");
  $("#open-btn").css("width", "50px");

  $("body").removeClass("disable-scroll");
});

$(window).resize(function () {
  const windowWidth = $(window).width();

  if (windowWidth <= 750) {
    if ($("#open-btn").hasClass("collapse-menu") === false) {
      $("#nav-list").animate({ width: "toggle" }, 1000);
      $("#nav-btn-list").animate({ width: "toggle" }, 1000);
      $("#open-btn").addClass("collapse-menu");
      $("#open-btn").css("rotate", "0deg");
    }
  } else {
    if ($("#open-btn").hasClass("collapse-menu")) {
      $("#nav-list").animate({ width: "toggle" }, 1000);
      $("#nav-btn-list").animate({ width: "toggle" }, 1000);
      $("#open-btn").removeClass("collapse-menu");
      $("#open-btn").css("rotate", "90deg");
    }
  }
});

$("#sidebar__button--features").click(function () {
  if ($("#features__list--sidebar").height() === 0) {
    $("#features__list--sidebar").animate({
      height: 130,
      "padding-left": 20,
      "padding-right": 20,
      "margin-top": 20,
      opacity: 100,
    });
    $("#features__button--sidebar").attr("src", "./images/icon-arrow-up.svg");
  } else {
    $("#features__list--sidebar").animate({
      height: 0,
      padding: 0,
      "margin-top": 0,
      opacity: 0,
    });
    $("#features__button--sidebar").attr("src", "./images/icon-arrow-down.svg");
  }
});

$("#sidebar__button--company").click(function () {
  if ($("#company__list--sidebar").height() === 0) {
    $("#company__list--sidebar").animate({
      height: 100,
      "padding-left": 20,
      "padding-right": 20,
      "margin-top": 20,
      opacity: 100,
    });
    $("#company__button--sidebar").attr("src", "./images/icon-arrow-up.svg");
  } else {
    $("#company__list--sidebar").animate({
      height: 0,
      padding: 0,
      "margin-top": 0,
      opacity: 0,
    });
    $("#company__button--sidebar").attr("src", "./images/icon-arrow-down.svg");
  }
});
