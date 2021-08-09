let media_slide_index = 0;
const M_TOTAL = $(".media_box").length;

// function
function media_next(num) {
  $(".media_box").eq(num).css({ left: "100%" });
  $(".media_box.active")
    .stop()
    .animate({ left: "-100%" }, 1000, function () {
      $(this).removeClass("active");
    });
  $(".media_box").eq(num).addClass("active").stop().animate({ left: 0 }, 1000);
}

function media_prev(num) {
  $(".media_box").eq(num).css({ left: "-100%" });
  $(".media_box.active")
    .stop()
    .animate({ left: "100%" }, 1000, function () {
      $(this).removeClass("active");
    });
  $(".media_box").eq(num).addClass("active").stop().animate({ left: 0 }, 1000);
}
function media_indexAni(num) {
  $("#media .slide_index > ul > li.active").removeClass("active");
  $("#media .slide_index > ul > li").eq(num).addClass("active");
}

// arrow click
$(".media_arrow_left").on("click", function () {
  media_slide_index -= 1;
  if (media_slide_index < 0) {
    media_slide_index = M_TOTAL - 1;
  }
  media_prev(media_slide_index);
  media_indexAni(media_slide_index);
});
$(".media_arrow_right").on("click", function () {
  media_slide_index += 1;
  if (media_slide_index >= M_TOTAL) {
    media_slide_index = 0;
  }
  media_next(media_slide_index);
  media_indexAni(media_slide_index);
});

// index click
$("#media .slide_index > ul >li").on("click", function () {
  var index = $(this).index();
  if (index == media_slide_index) {
    return false;
  }
  media_indexAni(index);
  if (index > media_slide_index) {
    $(".media_arrow_right").trigger("click");
  } else {
    $(".media_arrow_left").trigger("click");
  }
});

// thumbnail click
$(".pic_sub > ul >li").on("click", function () {
  var src = $(this).children("img").attr("src");
  $(".media_box").eq(media_slide_index).find(".pic_main > img").attr("src", src);
});
