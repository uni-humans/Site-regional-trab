const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

