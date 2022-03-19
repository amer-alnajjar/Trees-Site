let home = document.getElementById("home");
let img = document.querySelector(".landing");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    home.style.position = "fixed";
    home.style.boxShadow = "0 0 30px 0 rgba(0, 0, 0, 0.37)";
    img.style.height = "110vh";
  } else {
    home.style.position = "none";
    home.style.boxShadow = "none";
  }
});

////// wow js
new WOW().init();

let nav = document.querySelector("nav");
let shownav = document.getElementById("show");
let nava = document.querySelectorAll("nav ul li a");

shownav.onclick = function () {
  nav.style.right = "0";
};
let haidnav = document.getElementById("hide");
haidnav.onclick = function () {
  nav.style.right = "-300px";
};
nava.forEach((e) => {
  e.onclick = function () {
    nav.style.right = "-300px";
  };
});
