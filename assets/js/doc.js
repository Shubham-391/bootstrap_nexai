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

