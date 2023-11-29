const $ = document;
const mainNav = $.querySelector("#mainNav");

document.addEventListener("scroll", function () {
  // console.log(document.documentElement.scrollTop)
console.log(window.onscroll);
  if (window.scrollTop > 0) {
    mainNav.classList.add("bg-black");
  } else {
    mainNav.classList.remove("bg-black");
  }
});
