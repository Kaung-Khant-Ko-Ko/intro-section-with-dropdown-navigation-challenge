$(".navigation__dropdown").animate({ height: 0, padding: 0, opacity: 0 });

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
