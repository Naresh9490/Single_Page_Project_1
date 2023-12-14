$(document).ready(function () {
    // Initialize Slick slider
    $(".my-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // Functionality for scrolling left
    $(".scroll-left").on("click", function () {
      $(".my-slider").slick("slickPrev");
    });

    // Functionality for scrolling right
    $(".scroll-right").on("click", function () {
      $(".my-slider").slick("slickNext");
    });
  });