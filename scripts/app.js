const list = document.querySelector(".app-logo__list");
const mobile = document.querySelector(".mobile__menu");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");
const slide3 = document.querySelector(".slide-3");
const arrow = document.querySelector(".arrow");
const slider = document.querySelector(".testimonials-main__slides");
const slides = document.querySelectorAll(".testimoials-main-slide");

let listopen = false;
list.addEventListener("click", function () {
  if (listopen) {
    list.classList.remove("app-logo__list--open");
    mobile.classList.remove("mobile__menu--open");

    listopen = false;
  } else {
    list.classList.add("app-logo__list--open");
    mobile.classList.add("mobile__menu--open");
    listopen = true;
  }
});
dot1.addEventListener("click", function () {
  dot1.style.backgroundColor="rgb(255, 73, 0)"
  dot2.style.backgroundColor="#8c8ca5"
  dot3.style.backgroundColor="#8c8ca5"
  slide1.style.display = "block";
  slide1.classList.add("fade");
  slide2.style.display = "none";
  slide3.style.display = "none";
});
dot2.addEventListener("click", function () {
  dot1.style.backgroundColor="#8c8ca5"
  dot2.style.backgroundColor="rgb(255, 73, 0)"
  dot3.style.backgroundColor="#8c8ca5"
  slide1.style.display = "none";
  slide2.style.display = "block";
  slide2.classList.add("fade");
  slide3.style.display = "none";

});
dot3.addEventListener("click", function () {
  dot1.style.backgroundColor="#8c8ca5"
  dot2.style.backgroundColor="#8c8ca5"
  dot3.style.backgroundColor="rgb(255, 73, 0)"
  slide1.style.display = "none";
  slide2.style.display = "none";
  slide3.style.display = "block";
  slide3.classList.add("fade");
});
