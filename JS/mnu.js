const check = document.getElementById('check');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    check.checked = false; // Desmarcar el checkbox para cerrar el menú
  });
});