// Animations Handler - Scroll animations with Intersection Observer

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const elementsToAnimate = document.querySelectorAll(
        '.project-card, .skill-category, .timeline-item, .stat-box, .contact-card'
    );

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}
