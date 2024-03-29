// function to open navigation in mobile mode
let opennav = () => {
  let nav = document.querySelector(".nav");
  nav.classList.toggle("open");
};

// function to reveal skill animation on scroll
window.addEventListener("scroll", reveal);
function reveal() {
  let skill = document.querySelector(".skill");
  let html = document.querySelector(".html");
  let css = document.querySelector(".css");
  let js = document.querySelector(".js");
  let php = document.querySelector(".php");
  let mysql = document.querySelector(".mysql");
  let nodejs = document.querySelector(".nodejs");
  let react = document.querySelector(".react");
  let bootstrap = document.querySelector(".bootstrap");
  let jquery = document.querySelector(".jquery");
  let git = document.querySelector(".git");

  let windowHeight = window.innerHeight;
  let revealTop = skill.getBoundingClientRect().top;
  let revealPoint = 150;

  if (revealTop < windowHeight - revealPoint) {
    html.classList.add("active");
    css.classList.add("active");
    js.classList.add("active");
    php.classList.add("active");
    mysql.classList.add("active");
    nodejs.classList.add("active");
    react.classList.add("active");
    bootstrap.classList.add("active");
    jquery.classList.add("active");
    git.classList.add("active");
  }
}

window.addEventListener("scroll", revealAnimi);

function revealAnimi() {
  let preveal = document.querySelectorAll(".para");
  let ireveal = document.querySelectorAll(".image");

  for (let i = 0; i < preveal.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = preveal[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      preveal[i].classList.add("active");
      ireveal[i].classList.add("actives");
    } else {
    }
  }
}
