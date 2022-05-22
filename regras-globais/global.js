//transição da barra de navegação
 var prevScrollpos = window.pageYOffset;

 window.onscroll = function() {
 var currentScrollPos = window.pageYOffset;
 
   if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-animation").style.top = "0";
  } else {
    document.getElementById("header-animation").style.top = "-70px";
   }
   prevScrollpos = currentScrollPos;
 }

 //mudar thema

function moon() {
  var dark = document.body
  dark.classList.toggle("dark")
}

//menu para o mobile

const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}