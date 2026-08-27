document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  
  const nav = document.getElementById('navbar');
  const isHome = document.body.classList.contains('home-page');

  if (nav && isHome) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('bg-primary-900/95', 'backdrop-blur-md', 'shadow-lg');
        nav.classList.remove('bg-transparent');
      } else {
        nav.classList.remove('bg-primary-900/95', 'backdrop-blur-md', 'shadow-lg');
        nav.classList.add('bg-transparent');
      }
    });
  }
});