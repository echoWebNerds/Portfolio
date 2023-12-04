const $ = document;
const mainNav = $.querySelector("#mainNav");
const switchElement=$.querySelector(".switch");
const menuItems=$.querySelector("#menu");
const collapse=$.querySelector("#collapse")
const icon=$.querySelector("#toggleMenu")

const menuIcon=$.querySelector(".icon")


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

function iconHandler() {
  collapse.append(menuItems)

  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
    mainNav.classList.add("new-nav")
    menuItems.classList.add("new-list")

  } else {
    menuItems.style.display = "none";
    mainNav.classList.remove("new-nav")
    menuItems.classList.remove("new-list")

  }
}

icon.addEventListener('click', iconHandler)