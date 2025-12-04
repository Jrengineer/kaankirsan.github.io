// Main JavaScript - Initialize and coordinate all functionality

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initSmoothScroll();
    setActiveNavLink();
    console.log('Portfolio initialized successfully');
});

// Track scroll for active navigation
window.addEventListener('scroll', setActiveNavLink);

// Reinitialize on window resize
window.addEventListener('resize', function() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    }
});
