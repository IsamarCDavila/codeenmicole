$(document).on('ready', function() {
  $('.responsive').slick({
dots: true,
dotsClass: "slick-dots",
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false

    }
  }
]
});
$('.responsive1').slick({
dots: true,
dotsClass: "slick-dots",
infinite: true,
slidesToShow: 2,
slidesToScroll: 1,
responsive: [
{
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  }
},
{
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false

  }
}
]
});
  });
