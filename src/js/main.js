const $ = document;
const mainNav = $.querySelector("#mainNav");
const switchElement=$.querySelector(".switch");
const menuItems=$.querySelector("#menu");
const collapse=$.querySelector("#collapse")

// console.log(mainNav);

// function reportWindowSize(){
//   if (window.innerWidth < 655) {
//     collapse.appendChild(menuItems);
//   } else{
//     mainNav.appendChild(menuItems)
//   }
// }


switchElement.addEventListener("click", function() {
  // console.log("dark")
  document.body.classList.toggle("dark");
  if(document.body.className.includes("dark")){
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme" , "light");
  }

})


document.addEventListener("scroll", function () {
  // console.log(document.documentElement.scrollTop)
// console.log(window.s);
  if (window.scrollY > 0) {
    mainNav.classList.add("bg-black");
  } else {
    mainNav.classList.remove("bg-black");
  }
});

// save theme in localstorage
window.onload=function(){
  let localStorageTheme=localStorage.getItem("theme")
  // console.log(localStorageTheme)
  if(localStorageTheme==="dark"){
    document.body.classList.add("dark")
  }
}


//  window.addEventListener("resize", reportWindowSize);
