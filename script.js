// Mobile menu toggle
const toggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll animations (optional)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = 1 - window.scrollY / 600;
});

