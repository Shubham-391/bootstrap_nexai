const line1 = document.querySelector(".line1"),
  line2 = document.querySelector(".line2"),
  line3 = document.querySelector(".line3"),
  navPage = document.querySelector(".small-navpage");
function navbar1() {
    line1.classList.toggle("span1");
    line2.classList.toggle("span2");
    line3.classList.toggle("d-none");
    navPage.classList.toggle("start-0");
    document.querySelector("body").classList.toggle("overflow-hidden");
};
function navbar2() {
  line1.classList.toggle("span1");
  line2.classList.toggle("span2");
  line3.classList.toggle("d-none");
  navPage.classList.toggle("start-0");
  document.querySelector("body").classList.remove("overflow-hidden");
}
// slider1
$(".slider1").slick({
  infinite: true,
  speed: 5000,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "Linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        dots: true,
        autoplay: false,
        speed: 1000,
      },
    },
  ],
});
// slider2
$(".slider2").slick({
  infinite: true,
  speed: 5000,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  variableWidth: true,
  autoplaySpeed: 0,
  cssEase: "Linear",
});
// slider3
$(".slider3").slick({
  infinite: true,
  speed: 5000,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  variableWidth: true,
  autoplaySpeed: 0,
  cssEase: "Linear",
  rtl: true,
});

