// Script mobile menu

$(document).ready(function(){
  $(".mobile-menu").click(function(){
    $(".nav-box:nth-child(2)").toggleClass("show");
    $(".nav-box:nth-child(3)").toggleClass("show");

    $(window).scrollTop("body");

    if ($(".nav-box:nth-child(2)").width() > "1"){
      $('html, body').css({
        overflow: 'auto',
        height: 'auto'
      });
    }
    else {
      $('html, body').css({
        overflow: 'hidden',
        height: '100%'
      });
    }
  });
});

// Script animations scrolldown

function reveal() {
  var trans = document.querySelectorAll(".trans-fx");
  var opacity = document.querySelectorAll(".opaci-fx")
  var windowHeight = window.innerHeight;

    for (var i = 0; i < trans.length; i++) {
      var elementTop = trans[i].getBoundingClientRect().top;
      var elementVisible = 10;

      if (elementTop < windowHeight - elementVisible) {
        trans[i].classList.add("active");
      } else {
        trans[i].classList.remove("active");
      }
    }

    for (var o = 0; o < opacity.length; o++) {
      var elementTop_o = opacity[o].getBoundingClientRect().top;
      var elementVisible_o = 300;

      if (elementTop_o < windowHeight - elementVisible_o) {
        opacity[o].classList.add("active");
      } else {
        opacity[o].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);

// Carousel animations

$(document).ready(function(){
  var postIndex = 0;
  var interval;
  var carousel = document.querySelectorAll(".carousel-post")

  autoheader();

  function autoheader() {
    for (var h = 0; h < carousel.length; h++) {
      $(".carousel-post").eq(h).css({
        "display": "none"
      });

      $(".dot").eq(h).css({
        "background-color": "#808080"
      });
    }

    if (postIndex >= carousel.length) {postIndex = 0}

    postIndex++;

      $(".carousel-post").eq(postIndex-1).css({
        "display": "block"
      });

      $(".dot").eq(postIndex-1).css({
        "background-color": "#fff"
      });

    interval = setTimeout(autoheader, 4500);
  }

  $(".dot").click(function(){
    clearTimeout(interval);
    postIndex = $(this).index();
    autoheader();
  })
})

// Blog post animation

$(document).ready(function(){
  var blogindex = 0;
  var post = document.querySelectorAll(".blog-post")
  showpost(blogindex);

  $(".next-post").click(function(){
    blogindex++;
    if (blogindex >= post.length) {blogindex = 0}
    showpost(blogindex);
  })

  $(".prev-post").click(function(){
    blogindex--;

    if (blogindex < 0) {blogindex = post.length - 1}
    showpost(blogindex);
  })

  function showpost(p) {
    for (var b = 0; b < post.length; b++) {
      $(".blog-post").eq(b).css({
        "display": "none"
      });
    }

    $(".blog-post").eq(p).css({
      "display": "contents"
    });
  }
})
