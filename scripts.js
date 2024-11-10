document.addEventListener('DOMContentLoaded', function() {
    // JavaScript for slideshow, form handling, etc.
    // Example: Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);

    document.getElementById('hamburger').addEventListener('click', function() {
        document.getElementById('nav-links').classList.toggle('active');
    });
});
