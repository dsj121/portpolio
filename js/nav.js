let pageNum = 0;
let total = $(".page").length;
var delta = 0;

// scroll to page
function scrollPage(num) {
  var sct = $(".page").eq(num).offset().top;
  $("html, body").stop().animate({ scrollTop: sct }, 1000);
}

$("html, body").on("mousewheel DOMNouseScroll", function (e) {
  // e.preventDefault();
  var wd = e.originalEvent.wheelDelta;
  if (e.originalEvent.detail) {
    wd = e.originalEvent.detail;
  }
  delta += wd;
  if (delta <= -240) {
    pageNum += 1;
    if (pageNum >= total) {
      pageNum = total - 1;
    }
    delta = 0;
  } else if (delta >= 240) {
    pageNum -= 1;
    if (pageNum <= 0) {
      pageNum = 0;
    }
    delta = 0;
  }
  scrollPage(pageNum);
  clickNav(pageNum);
});

// click to scroll
function clickNav(num) {
  $("#side_nav > ul > li").removeClass("active");
  $("#side_nav > ul > li").eq(num).addClass("active");
}
$("#side_nav > ul >li").on("click", function () {
  var index = $(this).index();
  clickNav(index);
  scrollPage(index);
  pageNum = index;
});

// onload
scrollPage(0);
