$(function () {
  var t = document.querySelector(".wheel-img"),
    e = document.querySelector(".spin-result-wrapper");
  $(".cursor-text").click(function () {
    t.classList.contains("rotated")
      ? (e.style.display = "block")
      : (t.classList.add("super-rotation"),
        setTimeout(function () {
          e.style.display = "block";
        }, 8e3),
        setTimeout(function () {
          $(".spin-wrapper").slideUp(),
            (o = setInterval(l, 1e3)),
            $(".timer").addClass("timer--show"),
            $(".order_block").slideDown();
        }, 1e4),
        t.classList.add("rotated"));
  }),
    $(".close-popup, .pop-up-button").click(function (t) {
      t.preventDefault(), $(".spin-result-wrapper").fadeOut();
      var e = $(".toform").offset().top;
      $("body,html").animate({ scrollTop: e }, 800);
    });
  var o,
    r = 600;
  function l() {
    r -= 1;
    var t = Math.floor(r / 60),
      e = r - 60 * t;
    0 == t && 0 == e && clearInterval(o),
      (e = e >= 10 ? e : "0" + e),
      (t = t >= 10 ? t : "0" + t),
      $(".min").html(t),
      $(".sec").html(e);
  }
  $('[href^="#"]').on("click", function (t) {
    t.preventDefault(),
      $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top },
        800
      );
  });
});
