let web_slide_index = 0;
const W_TOTAL = $(".web_box").length;

// function
function web_next(num) {
  $(".web_box").eq(num).css({ left: "100%" });
  $(".web_box.active")
    .stop()
    .animate({ left: "-100%" }, 1000, function () {
      $(this).removeClass("active");
    });
  $(".web_box").eq(num).addClass("active").stop().animate({ left: 0 }, 1000);
}
function web_prev(num) {
  $(".web_box").eq(num).css({ left: "-100%" });
  $(".web_box.active")
    .stop()
    .animate({ left: "100%" }, 1000, function () {
      $(this).removeClass("active");
    });
  $(".web_box").eq(num).addClass("active").stop().animate({ left: 0 }, 1000);
}
function web_indexAni(num) {
  $("#web .slide_index > ul > li.active").removeClass("active");
  $("#web .slide_index > ul > li").eq(num).addClass("active");
}

// arrow click
$(".web_arrow_left").on("click", function () {
  web_slide_index -= 1;
  if (web_slide_index < 0) {
    web_slide_index = W_TOTAL - 1;
  }
  web_prev(web_slide_index);
  web_indexAni(web_slide_index);
});
$(".web_arrow_right").on("click", function () {
  web_slide_index += 1;
  if (web_slide_index >= W_TOTAL) {
    web_slide_index = 0;
  }
  web_next(web_slide_index);
  web_indexAni(web_slide_index);
});

// index click
$("#web .slide_index > ul >li").on("click", function () {
  var index = $(this).index();
  if (index == web_slide_index) {
    return false;
  }
  web_indexAni(index);
  if (index > web_slide_index) {
    $(".web_arrow_right").trigger("click");
  } else {
    $(".web_arrow_left").trigger("click");
  }
});
