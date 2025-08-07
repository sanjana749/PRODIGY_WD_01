// Scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 16px rgba(0,0,0,0.08)' : 'none';
});

// Toggle mobile nav
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});
