// Initialize ScrollReveal
ScrollReveal({
  reset: true, // Animations reset on re-scroll
  distance: '60px', // Distance to move
  duration: 1000, // Animation duration
  easing: 'ease-in-out', // Easing function
});

// Apply animations to specific elements
ScrollReveal().reveal('.logo, .text', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.product-card, .product-grid' , { origin: 'bottom', interval: 200});
ScrollReveal().reveal('.about-text', { origin: 'right', delay: 300 });
ScrollReveal().reveal('.about-image img', { origin: 'left', delay: 300 });
ScrollReveal().reveal('.blog-card', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.footer', { origin: 'top', delay: 400 });
ScrollReveal().reveal('.list', { origin: 'right', delay: 400 })



