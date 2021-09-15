$(".features-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 0,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
$(".navbar .navbar-nav .nav-item .nav-link").on("click", function () {
  $(".navbar .navbar-nav .nav-item ")
    .find(".nav-link.active")
    .removeClass("active");

  $(this).addClass("active");
});

$.scrollIt({
  topOffset: -50,
});

$(".nav-link").on("click", () => {
  $(".navbar-collapse").collapse("hide");
});


