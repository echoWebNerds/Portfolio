const $ = document;
const mainNav = $.querySelector("#mainNav");

document.addEventListener("scroll", function (e) {
  // console.log(document.documentElement.scrollTop)
console.log(window.s);
  if (window.scrollY > 0) {
    mainNav.classList.add("bg-black");
  } else {
    mainNav.classList.remove("bg-black");
  }
});
